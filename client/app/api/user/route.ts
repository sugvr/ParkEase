import { _db } from "@/lib/db";
import { NextResponse } from "next/server";
import { hash } from "bcrypt";
import * as z from "zod";

const userSchema = z.object({
  name: z.string().min(1, "Name is required").max(75),
  email: z.string().min(1, "Email is required").email("Invalid email"),
  password: z
    .string()
    .min(1, "Password is required")
    .min(8, "Password must have more than 8 characters"),
});

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { email, password, name } = userSchema.parse(body);

    const userEmailExists = await _db.user.findUnique({
      where: { Email: email },
    });
    if (userEmailExists)
      return NextResponse.json({
        user: null,
        message: "User with Email already exists",
        status: 409,
      });

    const encryptedPassword = await hash(password, 10);
    const newUser = await _db.user.create({
      data: {
        Email: email,
        Password: encryptedPassword,
        Name: name,
        Role: "user", // Add the 'Role' property with a default value
        CreatedAt: new Date(), // Add the 'CreatedAt' property with the current date
      },
    });
    const { Password: newUserPassword, ...rest } = newUser;
    return NextResponse.json({
      user: rest,
      message: "User created successfully",
      status: 201,
    });
  } catch (error: any) {
    return NextResponse.json({
      message: error.message,
      status: 500,
    });
  }
}
