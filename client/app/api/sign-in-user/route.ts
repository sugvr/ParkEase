import { _db } from "@/lib/db";
import { NextResponse } from "next/server";
import { compare } from "bcrypt";
import * as z from "zod";
import { sign } from "jsonwebtoken";

const secretKey = 'mI8sZu$yEwBq4tH&dRgUkXn2p5s8v/A?D(G+KbPeShVmYq3t6w9z$C&F)J@NcRf';

const loginSchema = z.object({
  email: z.string().min(1, "Email is required").email("Invalid email"),
  password: z.string().min(1, "Password is required"),
});

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { email, password } = loginSchema.parse(body);

    const user = await _db.user.findUnique({
      where: { Email: email },
    });

    if (!user) {
      return NextResponse.json({
        user: null,
        message: "User not found",
        status: 404,
      });
    }

    const passwordMatch = await compare(password, user.Password);

    if (!passwordMatch) {
      return NextResponse.json({
        user: null,
        message: "Incorrect password",
        status: 401,
      });
    }
    
    // Create a JWT token for the authenticated user
    const token = sign({ userId: user.UserId }, secretKey, {
      expiresIn: "1h", // Token expires in 1 hour
    });

    return NextResponse.json({
      user: { userId: user.UserId, email: user.Email }, // You can customize the user object as needed
      token,
      message: "Login successful",
      status: 200,
    });
  } catch (error: any) {
    return NextResponse.json({
      message: error.message,
      status: 500,
    });
  }
}
