'use client'

import Profile from "./profile/profile";
import { authOptions } from "@/lib/auth";
import { SessionProvider, getSession } from "next-auth/react";


const MyAccount = async () => {
  const session = await getSession(); // Await the getSession() function
  return (
    <>
      <SessionProvider session={session}>
        <Profile />
      </SessionProvider>
    </>
  );
};

export default MyAccount;
