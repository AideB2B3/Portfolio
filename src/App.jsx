import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; // MODIFICA: Import del router
import { Navbar } from "@/layout/Navbar";
import { Hero } from "@/sections/Hero";
import { About } from "@/sections/About";
import { Projects } from "@/sections/Projects";
import { Experience } from "@/sections/Experience";
import { Education } from "@/sections/Education";
import { Contact } from "@/sections/Contact";
import { Footer } from "./layout/Footer";
import BugBusters from "./projects/BugBusters"; // MODIFICA: Import della pagina B dalla tua cartella projects

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
            // In App.jsx
            <Route path="/bug-busters" element={<BugBusters lang={lang} />} />
          </Routes>
        </main>
        <Footer lang={lang} />
      </div>
    </Router>
  );
}

export default App;