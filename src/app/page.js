import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";

export default function Home() {
  return (
    <>
      <Navbar />
      <div>
        <Hero />
        <About />
        <Skills />
      </div>
      <Footer />
    </>
  );
}
