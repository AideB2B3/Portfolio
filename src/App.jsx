import { useState } from "react";
import { Navbar } from "@/layout/Navbar";
import { Hero } from "@/sections/Hero";
import { About } from "@/sections/About";
import { Projects } from "@/sections/Projects";
import { Experience } from "@/sections/Experience";
import { Education } from "@/sections/Education";
import { Contact } from "@/sections/Contact";
import { Footer } from "./layout/Footer";

function App() {

  const [lang, setLang] = useState("en");

  return (
    <div className="min-h-screen overflow-x-hidden">
      
      <Navbar lang={lang} setLang={setLang} />
      <main> 
        <Hero lang={lang} /> 
        <About lang={lang} />
        <Projects lang={lang} /> 
        <Experience lang={lang} />
        <Education lang={lang} /> 
        <Contact lang={lang} />
      </main>
      <Footer lang={lang} /> 
      
    </div>
  );
}

export default App;