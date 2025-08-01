'use client';
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import Image from "next/image";
import Photo from "@/assets/photo/2.jpg"


export default function AboutMe(){
    const heroRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        // ✅ Register ScrollTrigger once
        gsap.registerPlugin(ScrollTrigger);

        if (heroRef.current) {
        gsap.fromTo(
            heroRef.current.children,
            { y: 50, opacity: 0 },
            {
            y: 0,
            opacity: 1,
            duration: 1,
            ease: "power3.out",
            stagger: 0.2,
            scrollTrigger: {
                trigger: heroRef.current,
                start: "top 80%", // When 80% of viewport reaches this element
                toggleActions: "play none none none", // Play only once
            },
            }
        );
        }
    }, []);
    return(
        <div className="flex flex-col lg:flex-row-reverse items-center lg:items-start justify-center gap-10 lg:gap-[8%] mx-auto pt-[70px] px-[14px] sm:px-[30px] pb-7 spacer layer2 ">
            <div ref={heroRef} className=" w-[97%] sm:w-[600px] ">
                <h2 className="text-2xl font-bold text-blue-500 mb-2">About Me</h2>
                <p className="mb-5 ">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit. Non totam laborum velit necessitatibus quidem fugit nesciunt corporis praesentium vero similique.
                </p>
                <p>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Esse illo debitis quod illum repellat iste. Veniam soluta iusto voluptatum rem explicabo fuga laudantium id, voluptates ex? Asperiores explicabo esse soluta perspiciatis, qui necessitatibus beatae temporibus sapiente officiis, eum voluptates dolorum vero consequuntur voluptas? Vitae iusto eum quisquam illum ipsum voluptate?
                </p>
            </div>
            <div className="w-[97%] sm:w-[350px] h-auto sm:h-[350px] overflow-hidden rounded-lg ">
                <Image src={Photo} alt="my photo" className="object-cover rounded-lg" />
            </div>
        </div>
    )
}