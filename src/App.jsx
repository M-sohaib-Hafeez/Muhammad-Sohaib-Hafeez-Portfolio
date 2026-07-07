import StarField from './components/StarField';
import FlightPathNav from './components/FlightPathNav';
import Hero from './components/Hero';
import About from './components/About';
import SkillsOrbit from './components/SkillsOrbit';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="app-shell">
      <StarField />
      <div className="noise-overlay" />
      <FlightPathNav />
      <main className="app-main relative z-[1]">
        <Hero />
        <About />
        <SkillsOrbit />
        <Projects />
        <Experience />
        <Contact />
        <Footer />
      </main>
    </div>
  );
}
