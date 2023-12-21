import React from "react";
import SignUpPage from "../../../Components/Forms/SignUpPage"
import Getcolor from "@/Constants/GetColors";

const SignUp = () => {
  return (
    <section>
      <div className={`m-10 max-w-6xl mx-auto h-38 antialiased`}>
        <div className="border-4 border-black" />
        <h1 className="text-3xl md:text-7xl py-2 font-bold text-left md:text-left">
          <span className={`text-${Getcolor(1)}`}>Sign</span>Up
        </h1>
        <div className="border-4 border-black" />
      </div>
      <div className={`relative z-20 shadow-md bg-transparent p-4 md:p-10 lg:p-20 max-w-6xl mx-auto mb-20 -mt-4`}>
        <SignUpPage />
      </div>
    </section>
  )
}


export default SignUp
