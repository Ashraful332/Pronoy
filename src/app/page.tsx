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
    <div className=" max-w-screen overflow-x-hidden  ">
      <NaveBar/>
      <section id="hero"><Hero /></section>
      <section id="about"><AboutMe /></section>
      <section id="education"><Education /></section>
      <section id="work"><Work /></section>
      <section id="photos"><Photos /></section>
      <section id="contact"><Contact /></section>
      {/* <Animation/> */}
      <Footer/>
    </div>
  );
}
