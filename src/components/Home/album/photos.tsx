import Image from "next/image";
import My1 from "@/assets/photo/1.jpg";
import My2 from "@/assets/photo/2.jpg";
import My3 from "@/assets/photo/3.jpg";
import My4 from "@/assets/photo/4.jpg";
import My5 from "@/assets/photo/5.jpg";
import My6 from "@/assets/photo/6.jpg";


export default function Photos(){
    return(
    <div className="spacer layer5">
        <div className="flex-center pt-[var(--margin-high)] pb-6 w-[97%] sm:w-[80vw] lg:w-[70vw] xl:w-[60vw] mx-auto px-[14px] sm:px-[30px]  ">
            <h3 className="text-2xl font-bold text-blue-500 ">Photos</h3>
            <p className="mb-7 ">my personal photo</p>
            <div className=" columns-1 sm:columns-2 lg:columns-3 gap-2">
                <div className="block mb-2 ">
                    <Image src={My1} alt="my photo" />
                </div>
                <div className="block mb-2 ">
                    <Image src={My2} alt="my photo" />
                </div>
                <div className="block mb-2 ">
                    <Image src={My3} alt="my photo" />
                </div>
                <div className="block mb-2 ">
                    <Image src={My4} alt="my photo" />
                </div>
                <div className="block mb-2 ">
                    <Image src={My5} alt="my photo" />
                </div>
                <div className="block mb-2 ">
                    <Image src={My6} alt="my photo" />
                </div>
            </div>
        </div>
    </div>
    )
}