import Image from "next/image";
import Logo from "../../assets/icon.png";
import Menu from "../../assets/menu.svg";
import "./nav.css"
import Link from "next/link";

export default function NaveBar() {
      return (
      <nav className="max-w-[1170px] flex items-center justify-between m-auto font-normal mt-[30px] mb-5 ">
            <div className="hidden-nav-show gap-[27px] ">
                  <Link href='/'>Home</Link>
                  <Link href='/'>About me</Link>
                  <Link href='/'>Blog</Link>
                  <Link href='/'>Photos</Link>
                  <Link href='/'>Contact</Link>
            </div>
            <div>
                  <Image src={Menu} alt="menu" className="w-6 h-6 text-white lg:hidden menu-svg-icon " />
            </div>
            <div>
                  <Image src={Logo} alt="logo" className="w-[53px] h-[55px] " />
            </div>
            <div className="flex-row-center gap-5">
                  <p className="hidden sm:flex">
                        Snowfall
                  </p>
                  <Link href='/' className="Table-Reservation text-sm sm:text-[16px] ">
                        My Resume
                  </Link>
            </div>
      </nav>
      )
}