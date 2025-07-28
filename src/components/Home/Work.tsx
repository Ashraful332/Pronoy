import Image from "next/image";
import Computer from "@/assets/icons8-monitor-100.png";
import Teacher from "@/assets/icons8-teacher-96.png";
import Gov from "@/assets/okgov.png";


export default function Work(){
    return(
        <div className="flex-center">
            <h2 className="text-center font-bold text-2xl mt-[var(--margin-high)] ">Experience</h2>
            <p className="mb-5">My work of experience</p>
            <div className="flex items-center gap-8">
                <div className="w-[400px] h-[300px] border border-white py-8 px-10 ">
                    <Image src={Computer} alt="logo" style={{filter: "brightness(0) invert(1)"}} className="w-10" />
                    <h4 className="font-bold text-lg text-white mt-6 mb-2">computer export</h4>
                    <p>computer export.</p>
                </div>
                <div className="w-[400px] h-[300px] border border-white py-8 px-10 ">
                    <Image src={Teacher} alt="logo" className="w-10" />
                    <h4 className="font-bold text-lg text-white mt-6 mb-2">Teacher</h4>
                    <p>work on kuripara high school.</p>
                </div>
                <div className="w-[400px] h-[300px] border border-white py-8 px-10 ">
                    <Image src={Gov} alt="logo" className="w-10" />
                    <h4 className="font-bold text-lg text-white mt-6 mb-2">Goverment jov</h4>
                    <p>Work on kuripara high school.</p>
                </div>
            </div>
        </div>
    )
}