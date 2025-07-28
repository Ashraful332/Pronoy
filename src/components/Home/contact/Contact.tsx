import Image from "next/image"
import Email from "@/assets/icons8-email-100.png"
import Call from "@/assets/call.svg"
import Location from "@/assets/icons8-location-96.png"
import Facebook from "@/assets/icons8-facebook.svg"
import YouTub from "@/assets/youtube-icon.svg"
import instagram from "@/assets/icons8-instagram-logo-188.png"
import "./con.css"

export default function Contact(){
    return(
        <div className="flex-center mt-[var(--margin-high)] mb-high ">
            <div className="flex items-start justify-between">
                <div>
                    {/* <!-- From Uiverse.io by Javierrocadev --> */}
                    <div
                        className="cursor-pointer group overflow-hidden p-5 duration-1000 hover:duration-1000 relative w-[450px] h-[500px] bg-neutral-800 rounded-xl"
                    >
                        {/* Floating Decorative Boxes */}
                        <div className="group-hover:-rotate-45 bg-transparent group-hover:scale-150 -top-12 -left-12 absolute shadow-yellow-800 shadow-inner rounded-xl transition-all ease-in-out group-hover:duration-1000 duration-1000 w-24 h-24"></div>
                        <div className="group-hover:rotate-45 bg-transparent group-hover:scale-150 top-44 left-14 absolute shadow-red-800 shadow-inner rounded-xl transition-all ease-in-out group-hover:duration-1000 duration-1000 w-24 h-24"></div>
                        <div className="group-hover:-rotate-45 bg-transparent group-hover:scale-150 top-24 left-56 absolute shadow-sky-800 shadow-inner rounded-xl transition-all ease-in-out group-hover:duration-1000 duration-1000 w-60 h-72"></div>
                        <div className="group-hover:-rotate-45 bg-transparent group-hover:scale-150 top-12 left-12 absolute shadow-red-800 shadow-inner rounded-xl transition-all ease-in-out group-hover:duration-1000 duration-1000 w-64 h-64"></div>
                        <div className="group-hover:rotate-45 bg-transparent group-hover:scale-150 top-44 left-14 absolute shadow-red-800 shadow-inner rounded-xl transition-all ease-in-out group-hover:duration-1000 duration-1000 w-36 h-36"></div>
                        <div className="group-hover:rotate-45 bg-transparent group-hover:scale-150 top-12 left-12 absolute shadow-green-800 shadow-inner rounded-xl transition-all ease-in-out group-hover:duration-1000 duration-1000 w-44 h-44"></div>
                        <div className="group-hover:rotate-45 bg-transparent group-hover:scale-150 -top-24 -left-12 absolute shadow-sky-800 shadow-inner rounded-xl transition-all ease-in-out group-hover:duration-1000 duration-1000 w-64 h-64"></div>
                        <div className="group-hover:rotate-45 bg-transparent group-hover:scale-150 top-64 left-44 absolute shadow-red-800 shadow-inner rounded-xl transition-all ease-in-out group-hover:duration-1000 duration-1000 w-36 h-36"></div>
                        <div className="group-hover:-rotate-45 bg-transparent group-hover:scale-150 top-24 left-12 absolute shadow-sky-500 shadow-inner rounded-xl transition-all ease-in-out group-hover:duration-1000 duration-1000 w-4 h-4"></div>

                        {/* Main Card Content */}
                        <div className="w-full h-full shadow-xl shadow-neutral-900 p-3 bg-neutral-600 opacity-50 rounded-xl flex-col gap-4 flex justify-center text-white">
                        <span className="font-bold text-2xl italic">Let's Get In Touch</span>

                        <div className="flex items-center gap-3">
                            <Image src={Email} alt="icon" className="w-[40px]" />
                            <div className="flex flex-col">
                            <h3 className="font-bold text-lg text-white">E-mail</h3>
                            <p className="text-white">hello@domain.com</p>
                            </div>
                        </div>

                        <div className="flex items-center gap-3">
                            <Image src={Call} alt="icon" className="w-[40px]" />
                            <div className="flex flex-col">
                            <h3 className="font-bold text-lg text-white">Phone</h3>
                            <p className="text-white">+123 445 566</p>
                            </div>
                        </div>

                        <div className="flex items-center gap-3">
                            <Image src={Location} alt="icon" className="w-[40px]" />
                            <div className="flex flex-col">
                            <h3 className="font-bold text-lg text-white">Location</h3>
                            <p className="text-white">123 Main Street New York, 10001</p>
                            </div>
                        </div>
                        </div>
                    </div>
                </div>


                {/* <!-- From Uiverse.io by themrsami -->  */}
                <div className="container px-4 mx-auto">
                <div className="mx-auto">
                    <div className="w-[450px] h-[500px] mx-auto px-8 py-6 bg-[#2b2b30] rounded-lg shadow-lg">
                    <h2 className="text-2xl font-semibold text-white mb-4">Contact With me</h2>
                    <form>
                        <div className="mb-4">
                        <label className="block text-white mb-1" for="name">Your Name</label>
                        <input
                            className="w-full px-4 py-2 bg-[#1a1a1d] rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-300 transition duration-300"
                            placeholder="Enter your name"
                            type="text"
                        />
                        </div>
                        <div className="mb-4">
                        <label className="block text-white mb-1" for="email">Your Email</label>
                        <input
                            className="w-full px-4 py-2 bg-[#1a1a1d] rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-300 transition duration-300"
                            placeholder="Enter your email"
                            name="email"
                            id="email"
                            type="email"
                        />
                        </div>
                        <div className="mb-4">
                        <label className="block text-white mb-1" for="message"
                            >Your Message
                            </label>
                        <textarea
                            className="w-full px-4 py-2 bg-[#1a1a1d] rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-300 transition duration-300"
                            rows="4"
                            placeholder="Enter your message"
                            name="message"
                            id="message"
                        ></textarea>
                        </div>
                        <button
                        className="w-full bg-yellow-300 text-gray-800 py-2 px-4 rounded-lg hover:bg-yellow-400 transition duration-300"
                        type="submit"
                        >
                        Send Message
                        </button>
                    </form>
                    </div>
                </div>
                </div>
            </div>
        </div>
    )
}