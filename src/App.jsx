import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; // MODIFICA: Import del router
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

// ... altri import

function App() {
  const [lang, setLang] = useState("en");

  return (
    // MODIFICA: Aggiungi basename per allineare il Router alla configurazione di Vite
    <Router basename="/Portfolio">
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
          </Routes>
        </main>
        <Footer lang={lang} />
      </div>
    </Router>
  );
}

export default App;