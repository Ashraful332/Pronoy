import Image from "next/image";


export default function Work(){
    return(
        <div className="flex-center">
            <h2 className="text-center font-bold text-2xl mt-[var(--margin-high)] ">Experience</h2>
            <p className="mb-5">My work of experience</p>
            <div className="flex items-center gap-8">
                <div className="w-[400px] h-[300px] border border-white py-8 px-10 ">
                    <Image src="" alt="logo" />
                    <h4 className="font-bold text-lg text-white mt-6 mb-2">lorem</h4>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem, maxime.</p>
                </div>
                <div className="w-[400px] h-[300px] border border-white py-8 px-10 ">
                    <Image src="" alt="logo" />
                    <h4 className="font-bold text-lg text-white mt-6 mb-2">lorem</h4>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem, maxime.</p>
                </div>
                <div className="w-[400px] h-[300px] border border-white py-8 px-10 ">
                    <Image src="" alt="logo" />
                    <h4 className="font-bold text-lg text-white mt-6 mb-2">lorem</h4>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem, maxime.</p>
                </div>
            </div>
        </div>
    )
}