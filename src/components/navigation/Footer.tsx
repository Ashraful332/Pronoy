import Link from "next/link";
import Logo from "@/assets/icon.png"
import Apple from "@/assets/apple.svg"
import Play from "@/assets/play.svg"
import Image from "next/image";

export default function Footer(){
      return(
      <footer className="max-w-[1170px] flex flex-col xl:flex-row items-center xl:items-start gap-12 xl:gap-o justify-between m-auto pt-[var(--margin-primary)] ">
            <div className="flex-center gap-[var(--margin-primary)] ">
                  <div className="flex-row-center gap-2">
                        <Image src={Logo} alt="logo" />
                        <h2 className="text-2xl font-extrabold">pronoy</h2>
                  </div>
                  <div>
                        <p >Download the royal restaurant</p>
                        <p> app today.</p>
                        <div className="flex-row-center gap-3 mt-3">
                              <div>
                              <a href="#">
                                    <Image src={Apple} alt="apple stor" />
                              </a>
                              </div>
                              <div>
                              <a href="#">
                                    <Image src={Play} alt="play stor" />
                              </a>
                              </div>
                        </div>
                  </div>
                  </div>
                  <div className="flex flex-col items-center sm:items-start sm:flex-row justify-between w-[100%] xl:w-[60%] gap-12 sm:gap-0 text-sm xl:text-base ">
                  <div className="flex-center sm:flex-center-start gap-6">
                        <h3 className="footer-header">Usefull Link</h3>
                        <Link href='/'>Home</Link>
                        <Link href='/'>About Us</Link>
                        <Link href='/'>Services</Link>
                        <Link href='/'>Booking</Link>
                        <Link href='/'>Menu</Link>
                  </div>
                  <div className="flex-center sm:flex-center-start gap-6">
                        <h3 className="footer-header">Contact Info</h3>
                        <Link href='/' className="w-[197px] text-center sm:text-start ">Silk St, Barbican, 
                        London EC2Y 8DS, UK</Link>
                        <Link href='/'>info@example.com</Link>
                        <Link href='/'>800-123-45-678</Link>
                  </div>
                  <div className="flex-center sm:flex-center-start gap-6">
                        <h3 className="footer-header">Follow Us</h3>
                        <Link href='/'>Facebook</Link>
                        <Link href='/'>Instagram</Link>
                        <Link href='/'>Linkedin</Link>
                        <Link href='/'>Twitter</Link>
                  </div>
                  <div className="flex-center sm:flex-center-start gap-6">
                        <h3 className="footer-header">Legal</h3>
                        <Link href='/'>Website by uihut.com</Link>
                        <Link href='/'>©2022. All Rights Reserved</Link>
                  </div>
            </div>
            </footer>
      )
}