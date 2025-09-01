import Logo from "@/assets/my_logo.svg"
import Apple from "@/assets/apple.svg"
import Play from "@/assets/play.svg"
import Image from "next/image";

export default function Footer(){
      return(
      <div className="spacer layer7">
            <footer className="max-w-[1170px] flex flex-col xl:flex-row items-center xl:items-start gap-12 xl:gap-o justify-between m-auto pt-[var(--margin-primary)] px-[14px] sm:px-[30px]  ">
                  <div className="flex-center gap-[var(--margin-primary)] ">
                        <div className="flex-row-center gap-2">
                              <Image src={Logo} alt="logo" width={50} />
                              <h2 className="text-2xl font-extrabold">Ashraful Pathan</h2>
                        </div>
                        <div>
                              <p >Download The App Now</p>
                              <p> My App.</p>
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
                              <h3 className="footer-header">About Us</h3>
                              <a href="https://www.ashraful.top/" target="_blank">Home</a>
                              <a href="https://www.ashraful.top/" target="_blank">About Us</a>
                              <a href="https://www.ashraful.top/" target="_blank">Services</a>
                              <a href="https://www.ashraful.top/" target="_blank">Order</a>
                        </div>
                        <div className="flex-center sm:flex-center-start gap-6">
                              <h3 className="footer-header">Contact Info</h3>
                              <a href="https://www.ashraful.top/" target="_blank" className="w-[197px] text-center sm:text-start ">
                              Bander,narayanganj-bangladesh 
                              </a>
                              <a href="https://www.ashraful.top/" target="_blank" className="text-sm">ashrafulPathan3927@gmail.com</a>
                              <a href="https://www.ashraful.top/" target="_blank">+800-100-00-000</a>
                        </div>
                        <div className="flex-center sm:flex-center-start gap-6">
                              <h3 className="footer-header">Follow Us</h3>
                              <a href="https://www.facebook.com/profile.php?id=100090953234693" target="_blank">Facebook</a>
                              <a href="https://github.com/AshrafulPatHan" target="_blank">GitHub</a>
                              <a href="https://www.linkedin.com/in/ashraful-pathan" target="_blank">Linkedin</a>
                              <a href="https://x.com/AshrafulPa25233" target="_blank">Twitter</a>
                        </div>
                        <div className="flex-center sm:flex-center-start gap-6">
                              <h3 className="footer-header">Legal</h3>
                              <a href="https://www.ashraful.top/" target="_blank">Website by ahraful.top</a>
                              <a href="https://www.ashraful.top/" target="_blank">©2025. All Rights Reserved</a>
                        </div>
                  </div>
            </footer>
      </div>
      )
}