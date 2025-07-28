'use client';
import { useEffect, useRef } from "react";
import gsap from "gsap";

import Image from "next/image";
import Photo from "@/assets/photo.jpg";
import Facebook from "@/assets/icons8-facebook.svg";
import YouTub from "@/assets/youtube-icon.svg";
import instagram from "@/assets/icons8-instagram-logo-188.png";
import RESUME from "./ui/Resume";


export default function Hero(){
      const heroRef = useRef<HTMLDivElement | null>(null);

      useEffect(() => {
            if (heroRef.current) {
                  gsap.fromTo(
                  heroRef.current.children, // Animate each child of hero
                  { y: 50, opacity: 0 },
                  {
                  y: 0,
                  opacity: 1,
                  duration: 1,
                  ease: "power3.out",
                  stagger: 0.2,
                  }
                  );
            }
      }, []);
      

      return(
            <div className="flex flex-col lg:flex-row items-center lg:items-start justify-center gap-10 lg:gap-[8%] text-center lg:text-start mx-auto pt-[70px] pb-5
             px-[14px] sm:px-[30px] spacer layer1 ">
                  <div ref={heroRef} className=" w-[97%] sm:w-[600px] flex flex-col items-center lg:items-start ">
                        <h2 className="text-2xl font-bold text-blue-500 mb-2">Toimur Hasan Pronoy</h2>
                        <p className="mb-5 font-bold ">
                              Lorem ipsum dolor sit amet consectetur adipisicing elit. Non totam laborum velit necessitatibus quidem fugit nesciunt corporis praesentium vero similique.
                        </p>
                        <p className="font-medium">
                              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odit ullam perferendis eum commodi nesciunt expedita vel facilis aliquam voluptatum porro.
                        </p>
                        <div className="flex flex-row items-center gap-3 mt-[17px] ">
                              <a href="https://www.facebook.com/toimur.hasan.54" target="_blank">
                                    <Image src={Facebook} alt="my photo" className="w-7 h-7 " />
                              </a>
                              <a href="https://youtube.com/@PronoyThp" target="_blank">
                                    <Image src={YouTub} alt="my photo" className="w-7 h-7 " />
                              </a>
                              <a href="https://www.instagram.com/toimurpronoy" target="_blank">
                                    <Image src={instagram} alt="my photo" className="w-7 h-7 " />
                              </a>
                        </div>
                        <RESUME/>
                  </div>
                  <div className=" w-[97%] sm:w-[350px] h-auto sm:h-[350px] rounded-lg ">
                        <Image src={Photo} alt="my photo" className="object-cover rounded-lg" />
                  </div>
            </div>
      )
}
