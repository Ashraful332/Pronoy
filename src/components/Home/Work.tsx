'use client';
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import Image from "next/image";
import Computer from "@/assets/icons8-monitor-100.png";
import Teacher from "@/assets/icons8-teacher-96.png";
import Gov from "@/assets/okgov.png";


export default function Work(){
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
    return(
        <div className="flex-center px-[14px] sm:px-[30px] pb-6 spacer layer4">
            <h2 className="text-center font-bold text-2xl mt-[var(--margin-high)] ">Experience</h2>
            <p className="mb-5">My work of experience</p>
            <div ref={heroRef} className="flex flex-col xl:flex-row items-center gap-8 ">
                <div className="flex flex-col lg:flex-row gap-8 ">
                    <div className="w-[97vw] sm:w-[400px] h-[300px] border border-white py-8 px-10 rounded-xl ">
                        <Image src={Computer} alt="logo" style={{filter: "brightness(0) invert(1)"}} className="w-10" />
                        <h4 className="font-bold text-lg text-white mt-6 mb-2">computer export</h4>
                        <p>computer export.</p>
                    </div>
                    <div className="w-[97vw] sm:w-[400px] h-[300px] border border-white py-8 px-10 rounded-xl ">
                        <Image src={Teacher} alt="logo" className="w-10" />
                        <h4 className="font-bold text-lg text-white mt-6 mb-2">Teacher</h4>
                        <p>work on kuripara high school.</p>
                    </div>
                </div>
                
                <div className="w-[97vw] sm:w-[400px] h-[300px] border border-white py-8 px-10 rounded-xl ">
                    <Image src={Gov} alt="logo" className="w-10" />
                    <h4 className="font-bold text-lg text-white mt-6 mb-2">Goverment jov</h4>
                    <p>Work on kuripara high school.</p>
                </div>
            </div>
        </div>
    )
}