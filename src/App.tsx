import Hero from "@/components/Hero";
import AboutMe from "@/components/AboutMe";
import Portfolio from "@/components/Portfolio";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import AnimatedSection from "@/components/AnimatedSection";
import TemaWedding from "@/components/TemaWedding";
import Fitur from "@/components/Fitur";

function App() {
  return (
    <>
      <main className="flex flex-col relative z-10">
        <AnimatedSection>
          <Hero />
        </AnimatedSection>
        <AnimatedSection delay={0.1}>
          <AboutMe />
        </AnimatedSection>
        <AnimatedSection delay={0.2}>
          <TemaWedding />
        </AnimatedSection>
        <AnimatedSection delay={0.3}>
          <Portfolio />
        </AnimatedSection>
        <AnimatedSection delay={0.4}>
          <Fitur />
        </AnimatedSection>
        <AnimatedSection delay={0.5}>
          <Contact />
        </AnimatedSection>
        <Footer />
      </main>
    </>
  );
}

export default App;
