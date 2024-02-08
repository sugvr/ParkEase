import { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import { _db } from "./db";
import { compare } from "bcrypt";

export const authOptions: NextAuthOptions = {
  adapter: PrismaAdapter(_db),
  pages: {
    signIn: "/sign-in",
  },
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: {
          label: "Email",
          type: "text",
          placeholder: "john.smith@gmail.com",
        },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        // You need to provide your own logic here that takes the credentials
        // submitted and returns either a object representing a user or value
        // that is false/null if the credentials are invalid.
        // e.g. return { id: 1, name: 'J Smith', email: 'jsmith@example.com' }
        // You can also use the `req` object to obtain additional parameters
        // (i.e., the request IP address)

        if (!credentials || !credentials?.email || !credentials?.password) {
          return null;
        }

        const userExist = await _db.user.findUnique({
          where: { Email: credentials?.email },
        });

        if (!userExist) {
          return null;
        }

        const passwordMatch = await compare(
          credentials?.password,
          userExist.Password
        );

        if (!passwordMatch) {
          return null;
        }

        return {
          id: `${userExist.UserId}`,
          email: userExist.Email,
          name: userExist.Name,
        };
      },
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
    }),
  ],
};
