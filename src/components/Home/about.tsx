import Image from "next/image";
import Photo from "@/assets/photo.jpg"


export default function AboutMe(){
    return(
        <div className="flex flex-col lg:flex-row-reverse items-center lg:items-start justify-center gap-[8%] mx-auto mt-[70px] ">
            <div className="w-[600px] ">
                <h2 className="text-2xl font-bold text-blue-500 mb-2">About Me</h2>
                <p className="mb-5 ">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit. Non totam laborum velit necessitatibus quidem fugit nesciunt corporis praesentium vero similique.
                </p>
                <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit. Non totam laborum velit necessitatibus quidem fugit nesciunt corporis praesentium vero similique.
                       Lorem ipsum dolor sit amet consectetur adipisicing elit. Non totam laborum velit necessitatibus quidem fugit nesciunt corporis praesentium vero similique.
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Non totam laborum velit necessitatibus quidem fugit nesciunt corporis praesentium vero similique.
                         Lorem ipsum dolor sit amet consectetur adipisicing elit. Non totam laborum velit necessitatibus quidem fugit nesciunt corporis praesentium vero similique.
                </p>
            </div>
            <div className="w-[350px] h-[350px] rounded-lg ">
                <Image src={Photo} alt="my photo" className="object-cover rounded-lg" />
            </div>
        </div>
    )
}