import Image from "next/image";
import EducationLogo from "@/assets/education.svg"
import "../home.css"


export default function EducationBigScreen(){
    return(
    <div>
        <div className="mb-10 flex items-center mt-primary ">
            <div className="w-[26vw] ml-[18.5vw] h-[1.5px] bg-white "></div>
            <h3 className=" text-xl md:text-2xl font-bold">My Education</h3>
        </div>
        <div className="flex-center relative mx-auto">
            <div>
                <div className="flex flex-row items-start gap-2 md:gap-8 mb-4 ">
                    <div className=" flex flex-col  ">
                        <Image src={EducationLogo} alt="logo" className="education-svg" />
                        
                        
                    </div>
                    <div className="w-4 h-1 bg-white "></div>
                    <div className="w-[68%] md:w-[370px] flex flex-col items-start ">
                        <h2 className="text-md md:text-lg font-bold mb-2 text-white">Former Jr. IET Accounts Officer & Management</h2>
                        <p className="mb-3 font-bold text-sm md:text-base">institution: "Robi Axiata Ltd & Airtel"</p>
                        <p className="text-xs md:text-base">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Non totam laborum velit necessitatibus quidem fugit nesciunt corporis praesentium vero similique.
                        </p>
                    </div>
                </div>
                <div className="flex flex-row items-start gap-2 md:gap-8 mb-4 ">
                    <div className=" flex flex-col  ">
                        <Image src={EducationLogo} alt="logo" className="education-svg" />
                        
                        
                    </div>
                    <div className="w-4 h-1 bg-white "></div>
                    <div className="w-[68%] md:w-[370px] flex flex-col   ">
                        <h2 className="text-md md:text-lg font-bold mb-2 text-white">Former Online Promoter, Assistant Director & Co-Artist</h2>
                        <p className="mb-3 font-bold text-sm md:text-base">institution: "BFDC (Bangladesh Film Development Corporation)"</p>
                        <p className="text-xs md:text-base">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Non totam laborum velit necessitatibus quidem fugit nesciunt corporis praesentium vero similique.
                        </p>
                    </div>
                </div>
                <div className="flex flex-row items-start gap-2 md:gap-8 mb-4 ">
                    <div className=" flex flex-col  ">
                        <Image src={EducationLogo} alt="logo" className="education-svg" />
                        
                        
                    </div>
                    <div className="w-4 h-1 bg-white "></div>
                    <div className="w-[68%] md:w-[370px] flex flex-col items-start ">
                        <h2 className="text-md md:text-lg font-bold mb-2 text-white">BSc in Computer Science & Engineering (CSE)</h2>
                        <p className="mb-3 font-bold text-sm md:text-base">institution: "Sonargaon University"</p>
                        <p className="text-xs md:text-base">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Non totam laborum velit necessitatibus quidem fugit nesciunt corporis praesentium vero similique.
                        </p>
                    </div>
                </div>
                <div className="flex flex-row items-start gap-2 md:gap-8 mb-4 ">
                    <div className="flex flex-col items-start ">
                        <Image src={EducationLogo} alt="logo" className="education-svg" />
                    </div>
                    <div className="w-4 h-1 bg-white "></div>
                    <div className="w-[68%] md:w-[370px] flex flex-col ">
                        <h2 className="text-md md:text-lg font-bold mb-2 text-white">BA/BSS Programme</h2>
                        <p className="mb-3 font-bold text-sm md:text-base"> institution: "Govt. Tolaram College & University, Narayanganj"</p>
                        <p className="text-xs md:text-base">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Non totam laborum velit necessitatibus quidem fugit nesciunt corporis praesentium vero similique.
                        </p>
                    </div>
                </div>
                <div className="flex flex-row items-start gap-2 md:gap-8 mb-4 ">
                    <div className="flex flex-col items-start ">
                        <Image src={EducationLogo} alt="logo" className="education-svg" />
                    </div>
                    <div className="w-4 h-1 bg-white "></div>
                    <div className=" w-[68%] md:w-[370px] flex flex-col items-start ">
                        <h2 className="text-md md:text-lg font-bold mb-2 text-white">Studied at</h2>
                        <p className="mb-3 font-bold text-sm md:text-base">institution: "Sonargaon Govt. College"</p>
                        <p className="text-xs md:text-base">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Non totam laborum velit necessitatibus quidem fugit nesciunt corporis praesentium vero similique.
                        </p>
                    </div>
                </div>
            </div>
            <div className="absolute w-[1.5px] h-[950px] hidden bg-white "></div>
        </div>
    </div>
    )
}