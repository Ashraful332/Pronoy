import Image from "next/image";
import Photo from "@/assets/photo.jpg"


export default function AboutMe(){
    return(
        <div className="flex flex-col lg:flex-row-reverse items-center lg:items-start justify-center gap-[8%] mx-auto mt-[70px] ">
            <div>
                <h2 className="text-2xl font-bold text-blue-500">Toimur Hasan Pronoy</h2>
                <p>Studies Studied BSc in Computer Science & Engineering - CSE at Sonargaon University</p>
                <p>Studied BA /BSS Programme at Govt. Tolaram College & University, Narayanganj</p>
            </div>
            <div className="w-[350px] h-[350px] rounded-lg ">
                <Image src={Photo} alt="my photo" className="object-cover rounded-lg" />
            </div>
        </div>
    )
}