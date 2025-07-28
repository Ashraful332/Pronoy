// app/components/education.tsx
'use client'

import Image from "next/image";
import EducationLogo from "@/assets/education.svg";

const educationData = [
    {
        title: "Former Jr. IET Accounts Officer & Management",
        institution: "Robi Axiata Ltd & Airtel",
        duration: "",
    },
    {
        title: "Former Online Promoter, Assistant Director & Co-Artist",
        institution: "BFDC (Bangladesh Film Development Corporation)",
        duration: "",
    },
    {
        title: "BSc in Computer Science & Engineering (CSE)",
        institution: "Sonargaon University",
        duration: "",
    },
    {
        title: "BA/BSS Programme",
        institution: "Govt. Tolaram College & University, Narayanganj",
        duration: "",
    },
    {
        title: "Studied at",
        institution: "Sonargaon Govt. College",
        duration: "",
    },
];

export default function EducationSmallScreen() {
    return (
        <div>
        <div className="mb-10 flex items-center mt-16">
            <div className="w-[26vw] ml-[18.5vw] h-[1.5px] bg-white"></div>
            <h3 className="text-2xl font-bold text-white ml-4">My Education</h3>
        </div>

        <div className="flex justify-center px-4">
            <div className="relative">
            {/* Vertical timeline line */}
            <div className="absolute left-6 top-0 h-full w-[2px] bg-white z-0"></div>

            {/* Timeline entries */}
            {educationData.map((edu, index) => (
                <div key={index} className="flex items-start mb-12 relative z-10">
                <div className="flex flex-col items-center mr-6">
                    <Image src={EducationLogo} alt="Education Icon" width={40} height={40} className="education-svg " />
                    <div className="w-[2px] flex-1 bg-white mt-2"></div>
                </div>
                <div>
                    <h4 className="text-white text-lg font-semibold">{edu.title}</h4>
                    <p className="text-white text-sm">{edu.institution}</p>
                    {edu.duration && <p className="text-white text-xs italic">{edu.duration}</p>}
                </div>
                </div>
            ))}
            </div>
        </div>
        </div>
    );
}
