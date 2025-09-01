'use client';
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import Image from "next/image";
import Computer from "@/assets/icons8-monitor-100.png";
import Teacher from "@/assets/icons8-teacher-96.png";
import Gov from "@/assets/okgov.png";


export default function Work() {
    const heroRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        // ✅ Register ScrollTrigger once
        gsap.registerPlugin(ScrollTrigger);

        if (heroRef.current) {
            gsap.fromTo(
                heroRef.current.children,
                { y: 100, opacity: 0 },
                {
                    y: 0,
                    opacity: 1,
                    duration: 3.6,
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
        <div className="flex-center px-[14px] sm:px-[30px] pb-6 spacer layer4">
            <h2 className="text-center text-blue-500 font-bold text-2xl mt-[var(--margin-primary)] ">Experience</h2>
            <p className="mb-6 mt-3 text-white/70 text-sm">My work of experience</p>
            <div ref={heroRef} className="flex flex-col xl:flex-row items-center gap-8 ">
                <div className="flex flex-col lg:flex-row gap-8 ">
                    <div className="w-[97vw] sm:w-[400px] h-[300px] border border-white py-8 px-10 rounded-xl ">
                        <Image src={Computer} alt="logo" style={{ filter: "brightness(0) invert(1)" }} className="w-10" />
                        <h4 className="font-bold text-lg text-white mt-6 mb-2">computer export</h4>
                        <p className="text-white/75 italic ">
                            As a computer expert, I have gained strong knowledge in IT, problem-solving, and digital tools, helping students and people adopt modern technology effectively.
                        </p>
                    </div>
                    <div className="w-[97vw] sm:w-[400px] h-[300px] border border-white py-8 px-10 rounded-xl ">
                        <Image src={Teacher} alt="logo" className="w-10" />
                        <h4 className="font-bold text-lg text-white mt-6 mb-2">Teacher</h4>
                        <p className="text-white/75 italic ">
                            As a teacher at Kuripara High School, I guide students in both academic and technical skills, making learning inspiring and preparing them for a bright future.
                        </p>
                    </div>
                </div>

                <div className="w-[97vw] sm:w-[400px] h-[300px] border border-white py-8 px-10 rounded-xl ">
                    <Image src={Gov} alt="logo" className="w-10" />
                    <h4 className="font-bold text-lg text-white mt-6 mb-2">Goverment jov</h4>
                    <p className="text-white/75 italic ">
                        With my role in a government job, I aim to serve the community with honesty, dedication, and responsibility, contributing to education and technology growth.    
                    </p>
                </div>
            </div>
        </div>
    )
}