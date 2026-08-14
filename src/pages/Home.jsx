import Hero from "../components/Hero";
import About from "../components/About";
import Services from "../components/Services";
import Packages from "../components/Packages";
import Gallery from "../components/Gallery";
import Contact from "../components/Contact";

function Home() {
  return (
    <>
      <Hero />
      <About />
      <Services />
      <Packages />
      <Gallery />
      <Contact />
    </>
  );
}

export default Home;