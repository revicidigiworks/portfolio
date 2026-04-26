import { useState, useEffect } from "react";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import DesignWorks from "./components/DesignProjects";
import Experience from "./components/Experience";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import WelcomeScreen from "./components/WelcomeScreen";

function App() {
  const [showIntro, setShowIntro] = useState(true);

  useEffect(() => {
    // 🔥 RESET kalau mau testing ulang
    // localStorage.removeItem("intro");

    const seen = localStorage.getItem("intro");

    if (seen === "true") {
      setShowIntro(false);
      return;
    }

    const timer = setTimeout(() => {
      setShowIntro(false);
      localStorage.setItem("intro", "true");
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="bg-neutral-950 text-white font-sans">

      {/* 🔥 INTRO FULLSCREEN */}
      <WelcomeScreen show={showIntro} />

      {/* 🔥 SEMUA CONTENT DI-HIDE SELAMA INTRO */}
      {!showIntro && (
        <>
          <Navbar />

          <main className="transition-opacity duration-700 opacity-100">
            <Hero />
            <About />
            <Services />
            <Skills />
            <Projects />
            <DesignWorks />
            <Experience />
            <Contact />
          </main>

          <Footer />
        </>
      )}
    </div>
  );
}

export default App;