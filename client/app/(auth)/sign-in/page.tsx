'use client'

import Getcolor from "@/Constants/GetColors";
import SignInForm from "@/Components/Forms/SignInForm";
import GoogleSignInButton from "@/Components/GoogleSignInButton";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

const Login = () => {
  return (
    <>
      <section>
        <div className={`m-10 max-w-6xl mx-auto h-38 antialiased items-center justify-center`}>
          <div className="border-4 border-black" />
          <h1 className="text-3xl md:text-7xl py-2 font-bold text-left md:text-left">
            <span className={`text-${Getcolor(1)}`}>Sign</span>In
          </h1>
          <div className="border-4 border-black" />
          <div className={`relative z-20 shadow-md bg-transparent border-${Getcolor(1)} p-4 md:p-10 lg:p-20 max-w-6xl mx-auto mb-20 mt-4`}>
            <div className="mb-6">
              <SignInForm />
            </div>
            <span className="flex items-center justify-center font-black text-lg">Or</span>
            <div className="flex items-center justify-center mt-6">
              <GoogleSignInButton />
            </div>

          </div>
        </div>
      </section>
    </>

  )
}

export default Login

