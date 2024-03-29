'use client'

import Image from "next/image"
import Link from "next/link"
import Button from "../Button"
import { NAV_LINKS } from "@/Constants/NavData"
import menu from "../../public/menu-svgrepo-com.svg"
import Getcolor from "@/Constants/GetColors"
import { useState } from "react"
import Sidebar from "./Sidebar"

const Navbar = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  return (
    <nav className="sticky top-0 bg-white flexBetween max-container padding-container z-30 py-5">
      <Link href="#main">
        <div className="border-4 border-black" />
        <h1 className="text-2xl py-2 font-bold">
          <span className={`text-${Getcolor(1)}`}>Park</span>Ease
        </h1>
        <div className="border-4 border-black" />
      </Link>

      <ul className="hidden h-full gap-12 lg:flex">
        {NAV_LINKS.map((link) => (
          <Link href={link.href} key={link.key} className="regular-16 text-gray-50 flexCenter cursor-pointer pb-1.5 transition-all hover:font-bold">
            {link.label}
          </Link>
        ))}
      </ul>

      <div className="lg:flexCenter hidden">
        <Link href="/sign-in">
          <Button
            type="button"
            icon='/login.svg'
            title="Sign In"
            bgColor={`${Getcolor(1)}`}
          />
        </Link>
      </div>


      <button onClick={toggleSidebar} className={`lg:hidden p-2 rounded focus:outline-none focus:shadow-outline ${isSidebarOpen ? "hidden" :
        ""}`}>
        <Image
          src="/menu.svg"
          alt='menu'
          height={32}
          width={32}
          className='inline-block lg:hidden cursor-pointer'
        />
      </button>

      <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
    </nav>
  )
}

export default Navbar