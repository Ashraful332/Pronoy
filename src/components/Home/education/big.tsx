import Image from "next/image";
import EducationLogo from "@/assets/education.svg"
import "../home.css"


export default function EducationBigScreen(){
    return(
    <div>
        <div className="mb-10 flex items-center mt-primary ">
            <div className="w-[26vw] ml-[18.5vw] h-[1.5px] bg-white "></div>
            <h3 className="text-2xl font-bold">My Education</h3>
        </div>
        <div className="flex-center relative">
            <div>
                <div className="flex flex-row items-start gap-8 mb-4 ">
                    <div className="w-[370px] flex flex-col items-end ">
                        <Image src={EducationLogo} alt="logo" className="education-svg" />
                        <h3 className="text-xl text-[#ffffffda] font-bold ">loren</h3>
                        <p className="text-sm text-[#f7f3f3b9] ">Jan 2023 - May 2024</p>
                    </div>
                    <div className="w-4 h-1 bg-white "></div>
                    <div className="w-[370px] flex flex-col items-start ">
                        <h2 className="text-lg font-bold mb-2 text-white">Former Jr. IET Accounts Officer & Management</h2>
                        <p className="mb-3 font-bold">institution: "Robi Axiata Ltd & Airtel"</p>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Non totam laborum velit necessitatibus quidem fugit nesciunt corporis praesentium vero similique.
                        </p>
                    </div>
                </div>
                <div className="flex flex-row-reverse items-start gap-8 mb-4 ">
                    <div className="w-[370px] flex flex-col  ">
                        <Image src={EducationLogo} alt="logo" className="education-svg" />
                        <h3 className="text-xl text-[#ffffffda] font-bold ">loren</h3>
                        <p className="text-sm text-[#f7f3f3b9] ">Jan 2023 - May 2024</p>
                    </div>
                    <div className="w-4 h-1 bg-white "></div>
                    <div className="w-[370px] flex flex-col items-end text-end ">
                        <h2 className="text-lg font-bold mb-2 text-white">Former Online Promoter, Assistant Director & Co-Artist</h2>
                        <p className="mb-3 font-bold">institution: "BFDC (Bangladesh Film Development Corporation)"</p>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Non totam laborum velit necessitatibus quidem fugit nesciunt corporis praesentium vero similique.
                        </p>
                    </div>
                </div>
                <div className="flex flex-row items-start gap-8 mb-4 ">
                    <div className="w-[370px] flex flex-col items-end ">
                        <Image src={EducationLogo} alt="logo" className="education-svg" />
                        <h3 className="text-xl text-[#ffffffda] font-bold ">loren</h3>
                        <p className="text-sm text-[#f7f3f3b9] ">Jan 2023 - May 2024</p>
                    </div>
                    <div className="w-4 h-1 bg-white "></div>
                    <div className="w-[370px] flex flex-col items-start ">
                        <h2 className="text-lg font-bold mb-2 text-white">BSc in Computer Science & Engineering (CSE)</h2>
                        <p className="mb-3 font-bold">institution: "Sonargaon University"</p>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Non totam laborum velit necessitatibus quidem fugit nesciunt corporis praesentium vero similique.
                        </p>
                    </div>
                </div>
                <div className="flex flex-row-reverse items-start gap-8 mb-4 ">
                    <div className="w-[370px] flex flex-col items-start ">
                        <Image src={EducationLogo} alt="logo" className="education-svg" />
                        <h3 className="text-xl text-[#ffffffda] font-bold ">loren</h3>
                        <p className="text-sm text-[#f7f3f3b9] ">Jan 2023 - May 2024</p>
                    </div>
                    <div className="w-4 h-1 bg-white "></div>
                    <div className="w-[370px] flex flex-col text-end">
                        <h2 className="text-lg font-bold mb-2 text-white">BA/BSS Programme</h2>
                        <p className="mb-3 font-bold"> institution: "Govt. Tolaram College & University, Narayanganj"</p>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Non totam laborum velit necessitatibus quidem fugit nesciunt corporis praesentium vero similique.
                        </p>
                    </div>
                </div>
                <div className="flex flex-row items-start gap-8 mb-4 ">
                    <div className="w-[370px] flex flex-col items-end ">
                        <Image src={EducationLogo} alt="logo" className="education-svg" />
                        <h3 className="text-xl text-[#ffffffda] font-bold ">loren</h3>
                        <p className="text-sm text-[#f7f3f3b9] ">Jan 2023 - May 2024</p>
                    </div>
                    <div className="w-4 h-1 bg-white "></div>
                    <div className="w-[370px] flex flex-col items-start ">
                        <h2 className="text-lg font-bold mb-2 text-white">Studied at</h2>
                        <p className="mb-3 font-bold">institution: "Sonargaon Govt. College"</p>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Non totam laborum velit necessitatibus quidem fugit nesciunt corporis praesentium vero similique.
                        </p>
                    </div>
                </div>
            </div>
            <div className="absolute w-[1.5px] h-[950px] bg-white "></div>
        </div>
    </div>
    )
}