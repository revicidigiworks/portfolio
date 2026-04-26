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

function App() {
  return (
    <div className="bg-neutral-950 text-white font-sans">
      {/* Navbar */}
      <Navbar />

      {/* Main */}
      <main>

        {/* ✅ HERO TANPA WRAPPER */}
        <Hero />

        {/* SECTION LAIN PAKAI WRAPPER */}
        
          <About />
          <Services />
<Skills />
          <Projects />
<DesignWorks/>


          <Experience />

          <Contact />

      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}

/**
 * Reusable Section Wrapper
 */
function Section({ id, children }) {
  return (
    <section
      id={id}
      className="max-w-6xl mx-auto px-4 py-24 scroll-mt-24"
    >
      {children}
    </section>
  );
}

export default App;