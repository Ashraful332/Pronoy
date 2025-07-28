'use client';
import Image from "next/image";
import Logo from "../../assets/icon.png";
import Menu from "../../assets/menu.svg";
import "./nav.css"
import Link from "next/link";
import { useState } from "react";

export default function NaveBar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
  <div className="spacer layer1 h-10 ">
    <nav className="max-w-[1170px] flex items-center justify-between m-auto font-normal pt-[10px] pb-2 relative z-50 px-[14px] sm:px-[30px]  ">
      {/* Desktop Menu */}
      <div className="hidden lg:flex gap-[27px]">
        <Link href='/'>Home</Link>
        <Link href='/'>About me</Link>
        <Link href='/'>Blog</Link>
        <Link href='/'>Photos</Link>
        <Link href='/'>Contact</Link>
      </div>

      {/* Mobile Menu Button */}
      <div className="lg:hidden" onClick={() => setIsOpen(true)}>
        <Image src={Menu} alt="menu" className="w-6 h-6 text-white menu-svg-icon" />
      </div>

      {/* Logo */}
      <div>
        <Image src={Logo} alt="logo" className="w-[53px] h-[55px] " />
      </div>

      {/* Right side */}
      <div className="flex-row-center gap-5">
        <p className="hidden sm:flex">Snowfall</p>
        <Link href='/' className="Table-Reservation text-sm sm:text-[16px]">
          My Resume
        </Link>
      </div>

      {/* Mobile Slide Menu */}
      {isOpen && (
        <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-70 z-50">
          <div className="w-[250px] h-full bg-[#111114] p-5 flex flex-col justify-between">
            <div>
              {/* Close Button */}
              <button onClick={() => setIsOpen(false)} className="text-white mb-5 text-right w-full">
                ✕ Close
              </button>

              {/* Menu Links */}
              <nav className="flex flex-col gap-4 text-white">
                <Link href='/' onClick={() => setIsOpen(false)}>Home</Link>
                <Link href='/' onClick={() => setIsOpen(false)}>About me</Link>
                <Link href='/' onClick={() => setIsOpen(false)}>Blog</Link>
                <Link href='/' onClick={() => setIsOpen(false)}>Photos</Link>
                <Link href='/' onClick={() => setIsOpen(false)}>Contact</Link>
              </nav>
            </div>

            {/* Footer Section */}
            <div className="text-white text-sm border-t border-gray-600 pt-4">
              <p>&copy; 2025 Ashraful. All rights reserved.</p>
              <p className="mt-2">Follow me on:</p>
              <div className="flex gap-3 mt-1">
                <Link href="#">FB</Link>
                <Link href="#">TW</Link>
                <Link href="#">IG</Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </nav>
  </div>
  )
}
