import Hero from "@/components/Hero";
import Navigation from "@/components/Navigation";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import MotionProvider from "@/components/MotionProvider";
export default function Home() {
  return (
    <MotionProvider>
      <div className="min-h-screen">
        <Navigation />
        <Hero />        <About />
        <Skills />
        <Projects />
        <Contact />
        <Footer />
      </div>
    </MotionProvider>
  );
}
