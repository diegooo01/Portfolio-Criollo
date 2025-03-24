import { Toolbar, Footer } from "./components/layout";
import AnimatedBackground from "./components/layout/AnimatedBackground.jsx";
import HeroSection from "./sections/hero/Hero.jsx";
import AboutMeSection from "./sections/about-me/AboutMe.jsx";
import ProjectsSection from "./sections/projects/Projects.jsx";
import CertificationSection from "./sections/certifications/Certifications.jsx";
import ContactMe from "./sections/contact-me/ContactMe.jsx";

function App() {
  return (
    <>
      <AnimatedBackground />
        <div className="relative z-10">
            <Toolbar/>
            <HeroSection />
            <AboutMeSection />
            <ProjectsSection />
            <CertificationSection />
            <ContactMe />
            <Footer />
        </div>
    </>
  )
}

export default App
