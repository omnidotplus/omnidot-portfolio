import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import Projects from "@/components/Projects";
import Team from "@/components/Team";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import LineWrap from "@/components/LineWrap";
import Intro from "@/components/Intro";
import MotionLayer from "@/components/MotionLayer";

export default function Page() {
  return (
    <>
      <Intro />
      <div className="page-wrapper">
        <div className="od-bloom" aria-hidden="true">
          <span className="od-blob od-blob-a" />
          <span className="od-blob od-blob-b" />
          <span className="od-blob od-blob-c" />
          <span className="od-blob od-blob-d" />
        </div>
        <Header />
        <Hero />
        <About />
        <Services />
        <Projects />
        <Team />
        <Testimonials />
        <Contact />
        <Footer />
        <LineWrap />
      </div>
      <MotionLayer />
    </>
  );
}
