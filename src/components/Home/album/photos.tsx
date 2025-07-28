import Image from "next/image";
import My1 from "@/assets/photo/1.jpg";
import My2 from "@/assets/photo/2.jpg";
import My3 from "@/assets/photo/3.jpg";
import My4 from "@/assets/photo/4.jpg";
import My5 from "@/assets/photo/5.jpg";
import My6 from "@/assets/photo/6.jpg";


export default function Photos(){
    return(
        <div className="flex-center mt-[var(--margin-high)] w-[60vw] mx-auto ">
            <h3 className="text-2xl font-bold ">Photos</h3>
            <p className="mb-7 mt-2">my personal photo</p>
            <div className="columns-3 gap-2">
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
    )
}