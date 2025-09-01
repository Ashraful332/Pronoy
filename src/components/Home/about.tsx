'use client';
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import Image from "next/image";
import Photo from "@/assets/photo/2.jpg"


export default function AboutMe() {
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
    return (
        <div className="flex flex-col lg:flex-row-reverse items-center lg:items-start justify-center gap-10 lg:gap-[8%] mx-auto pt-[70px] px-[14px] sm:px-[30px] pb-7 spacer layer2 ">
            <div ref={heroRef} className=" w-[97%] sm:w-[600px] ">
                <h2 className="text-2xl font-bold text-blue-500 mb-2">About Me</h2>
                <p className="mb-5 italic ">
                    An experienced IT expert and dedicated teacher at Kuripara High School, Narayanganj, Bangladesh, passionate about technology and education.
                </p>
                <p>
                    Hello! I am a teacher and computer IT expert at Kuripara High School, Narayanganj, Bangladesh. Teaching and technology have always been my passion. I love guiding students, helping them explore the digital world, and preparing them for the future. My goal is to inspire young minds with knowledge, creativity, and practical IT skills. With dedication and honesty, I continue to contribute to education and technology in my community.                </p>
            </div>
            <div className="w-[97%] sm:w-[350px] h-auto sm:h-[350px] overflow-hidden rounded-lg ">
                <Image src={Photo} alt="my photo" className="object-cover rounded-lg" />
            </div>
        </div>
    )
}