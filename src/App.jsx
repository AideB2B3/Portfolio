import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom"; // MODIFICA: Import del router

function ScrollHandler() {
  const location = useLocation();
  useEffect(() => {
    if (location.state?.scrollTo) {
      setTimeout(() => {
        const el = document.getElementById(location.state.scrollTo);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    }
  }, [location]);
  return null;
}
import { Navbar } from "@/layout/NavBar";
import { Hero } from "@/sections/Hero";
import { About } from "@/sections/About";
import { Projects } from "@/sections/Projects";
import { Experience } from "@/sections/Experience";
import { Education } from "@/sections/Education";
import { Contact } from "@/sections/Contact";
import { AllProjects } from "@/layout/AllProjects";
import { Footer } from "./layout/Footer";
import BugBusters from "./projects/BugBusters";
import CowPowRadio from "./projects/CowPowRadio";
import AlzheimerClassification from "./projects/AlzheimerClassification";
import AiEmailAgent from "./projects/AiEmailAgent";
import DailyWeatherReport from "./projects/DailyWeatherReport";
import WebsiteMonitor from "./projects/WebsiteMonitor";
import EtlPipeline from "./projects/EtlPipeline";
import LISionario from "./projects/LISionario";

// ... altri import

function App() {
  const [lang, setLang] = useState("en");

  return (
    // MODIFICA: Aggiungi basename per allineare il Router alla configurazione di Vite
    <Router basename="/Portfolio">
      <ScrollHandler />
      <div className="min-h-screen overflow-x-hidden">
        <Navbar lang={lang} setLang={setLang} />
        <main>
          <Routes>
            <Route path="/" element={
              <>
                <Hero lang={lang} />
                <About lang={lang} />
                <Projects lang={lang} />
                <Experience lang={lang} />
                <Education lang={lang} />
                <Contact lang={lang} />
              </>
            } />
            <Route path="/projects" element={<AllProjects lang={lang} />} />
            <Route path="/bug-busters" element={<BugBusters lang={lang} />} />
            <Route path="/cowpow-radio" element={<CowPowRadio lang={lang} />} />
            <Route path="/alzheimer-classification" element={<AlzheimerClassification lang={lang} />} />
            {/* Una view dedicata per ogni progetto n8n */}
            <Route path="/n8n/ai-email-agent" element={<AiEmailAgent lang={lang} />} />
            <Route path="/n8n/daily-weather-report" element={<DailyWeatherReport lang={lang} />} />
            <Route path="/n8n/website-monitor" element={<WebsiteMonitor lang={lang} />} />
            <Route path="/n8n/etl-pipeline" element={<EtlPipeline lang={lang} />} />
            <Route path="/lisionario" element={<LISionario lang={lang} />} />
          </Routes>
        </main>
        <Footer lang={lang} />
      </div>
    </Router>
  );
}

export default App;