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
        <div className="flex-center max-w-screen overflow-x-hidden ">
            <div className="flex ">
                <div className="w-[376px] ">
                    {/* section 1 */}
                    <div className="flex flex-col items-end mb-4">
                        <div className="flex">
                            <Image src={EducationLogo} alt="" className="education-svg " />
                            <div className="w-5 h-1 bg-white"></div>
                        </div>
                        <div className="flex flex-col items-end mr-4">
                            <h3 className="mt-5 text-white">Lorem</h3>
                            <p className="text-[#ffffffb6] ">Jan 2023 - May 2024</p>
                        </div>
                    </div>
                    {/* section 2 */}
                    <div className="flex flex-col items-start mb-4">
                        <div className="flex flex-row-reverse">
                            <div className="w-5 h-1 bg-white"></div>
                        </div>
                        <div className="flex flex-col items-start ml-4">
                            <h3 className="mt-5 text-lg text-white">Former Jr. IET Accounts Officer & Management</h3>
                            <p className="text-[#ffffffb6] ">institution: Robi Axiata Ltd & Airtel</p>
                            <p className="">
                                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Adipisci consectetur possimus voluptates nostrum eveniet repellat perferendis rem odit commodi aliquam?
                            </p>
                        </div>
                    </div>
                </div>

                <div className="w-[1.5px] h-[700px] bg-white "></div>

                <div className="w-[376px] ">
                    {/* section 1 */}
                    <div className="flex flex-col items-start mb-4">
                        <div className="flex flex-row-reverse">
                            <div className="w-5 h-1 bg-white"></div>
                        </div>
                        <div className="flex flex-col items-start ml-4">
                            <h3 className="mt-5 text-lg text-white">Former Jr. IET Accounts Officer & Management</h3>
                            <p className="text-[#ffffffb6] ">institution: Robi Axiata Ltd & Airtel</p>
                            <p className="">
                                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Adipisci consectetur possimus voluptates nostrum eveniet repellat perferendis rem odit commodi aliquam?
                            </p>
                        </div>
                    </div>
                    {/* section 2 */}
                    <div className="flex flex-col items-end mb-4">
                        <div className="flex">
                            <Image src={EducationLogo} alt="" className="education-svg " />
                            <div className="w-5 h-1 bg-white"></div>
                        </div>
                        <div className="flex flex-col items-end mr-4">
                            <h3 className="mt-5 text-white">Lorem</h3>
                            <p className="text-[#ffffffb6] ">Jan 2023 - May 2024</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    )
}