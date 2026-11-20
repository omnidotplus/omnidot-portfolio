import Header from "../components/Header";
import Hero from "../components/Hero";
import About from "../components/About";
import Services from "../components/Services";
import Projects from "../components/Projects";
import Team from "../components/Team";
import Testimonials from "../components/Testimonials";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import LineWrap from "../components/LineWrap";

export default function Page() {
  return (
    <>
      <div className="page-wrapper">
        <div className="od-bloom" aria-hidden="true">
          <span className="od-blob od-blob-a" />
          <span className="od-blob od-blob-b" />
          <span className="od-blob od-blob-c" />
          <span className="od-blob od-blob-d" />
        </div>
        {/* Header and hero share one viewport-tall block so the hero always
            owns the first screen and the next section starts below the fold.
            The hero takes whatever height the header leaves, which keeps this
            correct at any header size — no hardcoded offset to drift. */}
        <div className="od-fold">
          <Header />
          <Hero />
        </div>
        <About />
        <Services />
        <Projects />
        <Team />
        <Testimonials />
        <Contact />
        <Footer />
        <LineWrap />
      </div>
    </>
  );
}
