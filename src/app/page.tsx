import Education from "@/components/Home/Education";
import AboutMe from "../components/Home/about";
import Photos from "../components/Home/album/photos";
import Animation from "../components/Home/animetion/animation";
import Contact from "../components/Home/contact/Contact";
import Hero from "../components/Home/Hero";
import Work from "../components/Home/Work";
import Footer from "../components/navigation/Footer";
import NaveBar from "../components/navigation/navbar";

export default function Home() {
  return (
    <div className=" max-w-screen overflow-x-hidden px-[14px] sm:px-[30px]  ">
      <NaveBar/>
      <Hero/>
      <AboutMe/>
      <Education/>
      <Work/>
      <Photos/>
      <Contact/>
      {/* <Animation/> */}
      <Footer/>
    </div>
  );
}
