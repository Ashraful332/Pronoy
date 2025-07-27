import Animation from "../components/Home/animetion/animation";
import Hero from "../components/Home/Hero";
import Footer from "../components/navigation/Footer";
import NaveBar from "../components/navigation/navbar";

export default function Home() {
  return (
    <div>
      <NaveBar/>
      <Hero/>
      <Animation/>
      <Footer/>
    </div>
  );
}
