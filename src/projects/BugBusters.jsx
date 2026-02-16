import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Rocket, Calendar, User, Code2, ExternalLink, Github } from 'lucide-react';

const BugBusters = ({ lang }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const content = {
    en: {
      back: "Back to Projects",
      tagline: "An arcade shooter that turns debugging into an epic battle",
      viewDemo: "View on App Store",
      viewGithub: "View Source",
      
      // Metadata
      originLabel: "Origin",
      contextValue: "Apple Developer Academy",
      roleLabel: "Role",
      roleValue: "iOS Developer",
      techLabel: "Tech Stack",
      yearLabel: "Timeline",
      
      // Origin Section
      originTitle: "Project Origin & Background",
      originText: (
        <>
          BugBusters was born during my time at the <span className="text-primary font-semibold">Apple Developer Academy</span>, where I focused on transforming an idea into a fully functional mobile game. The challenge: build a <span className="text-primary font-semibold">complete iOS game</span> in just <span className="text-primary font-semibold">4 weeks</span>.
          <br /><br />
          The concept emerged from a simple question: <span className="italic text-foreground">"What if debugging was actually fun?"</span> This led to creating an arcade shooter where literal bugs become enemies. As the <span className="text-primary font-semibold">sole developer</span>, I handled all technical implementation while collaborating with team members on design, marketing, and strategy.
          <br /><br />
          The project challenged me to master <span className="text-primary font-semibold">iOS game development</span>, from implementing physics engines to optimizing performance across devices.
        </>
      ),
      
      // Merged Technical Highlights
      highlightsTitle: "Technical Implementation & Key Features",
      highlights: [
        {
          title: "Object Pooling System",
          description: "Reusable sprite architecture reducing memory overhead by 60% for smooth gameplay."
        },
        {
          title: "Dynamic Difficulty",
          description: "Adaptive algorithms that adjust spawn rates based on real-time player performance."
        },
        {
          title: "Cross-Device Optimization",
          description: "Maintains consistent 60 FPS across all iPhone models through optimized physics calculations."
        },
        {
          title: "Native iOS Architecture",
          description: "Built with SwiftUI and SpriteKit for seamless integration and optimal performance."
        },
        {
          title: "Physics-Based Gameplay",
          description: "Real-time collision detection with particle effects for responsive mechanics."
        },
        {
          title: "Adaptive Audio System",
          description: "Dynamic sound mixing using AVFoundation that responds to gameplay intensity."
        }
      ],
      
      // Impact/Results
      impactTitle: "Impact & Results",
      impactStats: [
        { label: "Development Time", value: "4 weeks", highlight: true },
        { label: "Lines of Code", value: "5,000+", highlight: false },
        { label: "Performance", value: "60 FPS", highlight: true },
        { label: "Platform", value: "iOS Native", highlight: false }
      ],
      
      // Tech Stack
      techTitle: "Technology Stack",
      techIntro: "Built natively for the Apple ecosystem with modern Swift frameworks.",
      tools: [
        { 
          name: "SwiftUI", 
          desc: "UI Architecture & State Management", 
          img: "SwiftUI.png"
        },
        { 
          name: "SpriteKit", 
          desc: "2D Game Engine & Physics", 
          img: "SpriteKit.png"
        },
        { 
          name: "AVFoundation", 
          desc: "Audio Engine & Effects", 
          img: "AVFoundation.png"
        }
      ],
      
      // Gallery
      galleryTitle: "System Preview & Screenshots",
      gallerySubtitle: "Visual proof of the finished product"
    },
    it: {
      back: "Torna ai Progetti",
      tagline: "Uno sparatutto arcade che trasforma il debugging in una battaglia epica",
      viewDemo: "Vedi su App Store",
      viewGithub: "Vedi Codice",
      
      originLabel: "Origine",
      contextValue: "Apple Developer Academy",
      roleLabel: "Ruolo",
      roleValue: "Sviluppatore iOS",
      techLabel: "Tech Stack",
      yearLabel: "Timeline",
      
      originTitle: "Origine e Background del Progetto",
      originText: (
        <>
          BugBusters è nato durante la mia esperienza all'<span className="text-primary font-semibold">Apple Developer Academy</span>, dove mi sono concentrato sulla trasformazione di un'idea in un gioco mobile completamente funzionale. La sfida: costruire un <span className="text-primary font-semibold">gioco iOS completo</span> in sole <span className="text-primary font-semibold">4 settimane</span>.
          <br /><br />
          Il concept è emerso da una domanda semplice: <span className="italic text-foreground">"E se il debugging fosse divertente?"</span> Questo ha portato alla creazione di uno sparatutto arcade dove i bug letterali diventano nemici. Come <span className="text-primary font-semibold">unico sviluppatore</span>, mi sono occupato di tutta l'implementazione tecnica collaborando con i membri del team su design, marketing e strategia.
          <br /><br />
          Il progetto mi ha spinto a padroneggiare lo <span className="text-primary font-semibold">sviluppo di giochi iOS</span>, dall'implementazione dei motori fisici all'ottimizzazione delle performance su diversi dispositivi.
        </>
      ),
      
      highlightsTitle: "Implementazione Tecnica & Funzionalità Chiave",
      highlights: [
        {
          title: "Sistema Object Pooling",
          description: "Architettura sprite riutilizzabile che riduce l'overhead di memoria del 60% per un gameplay fluido."
        },
        {
          title: "Difficoltà Dinamica",
          description: "Algoritmi adattivi che regolano gli spawn rate in base alle performance del giocatore in tempo reale."
        },
        {
          title: "Ottimizzazione Cross-Device",
          description: "Mantiene costanti 60 FPS su tutti i modelli iPhone tramite calcoli fisici ottimizzati."
        },
        {
          title: "Architettura iOS Nativa",
          description: "Costruito con SwiftUI e SpriteKit per integrazione perfetta e performance ottimali."
        },
        {
          title: "Gameplay Basato sulla Fisica",
          description: "Rilevamento collisioni in tempo reale con effetti particellari per meccaniche reattive."
        },
        {
          title: "Sistema Audio Adattivo",
          description: "Mixing audio dinamico usando AVFoundation che risponde all'intensità del gameplay."
        }
      ],
      
      impactTitle: "Impatto & Risultati",
      impactStats: [
        { label: "Tempo di Sviluppo", value: "4 settimane", highlight: true },
        { label: "Righe di Codice", value: "5.000+", highlight: false },
        { label: "Performance", value: "60 FPS", highlight: true },
        { label: "Piattaforma", value: "iOS Nativo", highlight: false }
      ],
      
      techTitle: "Stack Tecnologico",
      techIntro: "Costruito nativamente per l'ecosistema Apple con framework Swift moderni.",
      tools: [
        { 
          name: "SwiftUI", 
          desc: "Architettura UI & Gestione Stato", 
          img: "SwiftUI.png"
        },
        { 
          name: "SpriteKit", 
          desc: "Motore di Gioco 2D & Fisica", 
          img: "SpriteKit.png"
        },
        { 
          name: "AVFoundation", 
          desc: "Motore Audio & Effetti", 
          img: "AVFoundation.png"
        }
      ],
      
      galleryTitle: "Anteprima Sistema & Screenshot",
      gallerySubtitle: "Prova visiva del prodotto finito"
    }
  };

  const t = content[lang] || content.en;

  return (
    <div className="min-h-screen bg-background text-foreground font-sans selection:bg-primary/30 pt-24 md:pt-32 pb-20">
      
      {/* Navigation Back */}
      <div className="container mx-auto px-6 mb-8">
        <Link to="/" className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors duration-300 group">
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
          <span className="text-sm uppercase tracking-widest font-medium">{t.back}</span>
        </Link>
      </div>

      {/* HERO SECTION */}
      <header className="container mx-auto px-6 mb-20">
        <div className="flex flex-col-reverse lg:flex-row items-center lg:items-end justify-between gap-12">
          
          {/* Text Content */}
          <div className="w-full lg:w-2/3 space-y-6 text-center lg:text-left">
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tight leading-[0.9] text-white animate-fade-in">
              Bug Busters
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground font-medium max-w-2xl mx-auto lg:mx-0 animate-fade-in animation-delay-100">
              {t.tagline}
            </p>
            
            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4 justify-center lg:justify-start pt-4 animate-fade-in animation-delay-200">
              <a 
                href="https://apps.apple.com/it/app/bug-busters/id6747584160"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-3 px-6 py-3 bg-primary text-primary-foreground rounded-full font-semibold hover:bg-primary/90 transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-primary/50"
              >
                <ExternalLink className="w-5 h-5 group-hover:rotate-12 transition-transform" />
                {t.viewDemo}
              </a>
              
              <a 
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-3 px-6 py-3 glass rounded-full font-semibold hover:border-primary/50 transition-all duration-300 hover:scale-105"
              >
                <Github className="w-5 h-5 group-hover:rotate-12 transition-transform" />
                {t.viewGithub}
              </a>
            </div>
            
            {/* Metadata Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8 pt-8 border-t border-border/50 animate-fade-in animation-delay-300">
              
              {/* Origin */}
              <div className="flex flex-col gap-1">
                <div className="flex items-center gap-2 text-[10px] md:text-xs uppercase tracking-widest text-muted-foreground">
                  <User size={12} className="text-primary" />
                  <span>{t.originLabel}</span>
                </div>
                <span className="text-sm md:text-base font-semibold text-foreground">
                  {t.contextValue}
                </span>
              </div>

              {/* Role */}
              <div className="flex flex-col gap-1">
                <div className="flex items-center gap-2 text-[10px] md:text-xs uppercase tracking-widest text-muted-foreground">
                  <Rocket size={12} className="text-primary" />
                  <span>{t.roleLabel}</span>
                </div>
                <span className="text-sm md:text-base font-semibold text-primary">
                  {t.roleValue}
                </span>
              </div>

              {/* Tech Stack */}
              <div className="flex flex-col gap-1">
                <div className="flex items-center gap-2 text-[10px] md:text-xs uppercase tracking-widest text-muted-foreground">
                  <Code2 size={12} className="text-primary" />
                  <span>{t.techLabel}</span>
                </div>
                <span className="text-sm md:text-base font-semibold text-primary">
                  Swift
                </span>
              </div>

              {/* Timeline */}
              <div className="flex flex-col gap-1">
                <div className="flex items-center gap-2 text-[10px] md:text-xs uppercase tracking-widest text-muted-foreground">
                  <Calendar size={12} className="text-primary" />
                  <span>{t.yearLabel}</span>
                </div>
                <span className="text-sm md:text-base font-semibold text-foreground">
                  2025
                </span>
              </div>

            </div>
          </div>

          {/* App Icon */}
          <div className="w-full lg:w-1/3 flex justify-center lg:justify-end animate-float">
            <div className="relative w-48 h-48 md:w-64 md:h-64 group">
              <div className="absolute inset-0 bg-primary/20 blur-3xl rounded-full group-hover:bg-primary/30 transition-all duration-700"></div>
              <div className="relative w-full h-full rounded-[2rem] overflow-hidden border border-white/10 shadow-2xl bg-surface/50 glass">
                <img 
                  src="/Portfolio/Projects/BB_App_icon.png"
                  alt="BugBusters App Icon" 
                  className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-110"
                  onError={(e) => console.error('Failed to load app icon:', e.target.src)}
                />
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* PROJECT ORIGIN & TECH STACK */}
      <section className="container mx-auto px-6 mb-20 animate-fade-in animation-delay-400">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-12 gap-8">
            
            {/* Left: Project Origin */}
            <div className="lg:col-span-7">
              <div className="glass p-8 md:p-10 rounded-[2rem] border-primary/10 relative overflow-hidden h-full">
                <div className="absolute -top-20 -right-20 w-64 h-64 bg-primary/5 rounded-full blur-3xl pointer-events-none"></div>
                
                <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
                  {t.originTitle}
                </h2>
                
                <div className="text-base md:text-lg text-muted-foreground leading-relaxed space-y-4">
                  {t.originText}
                </div>
              </div>
            </div>

            {/* Right: Technology Stack */}
            <div className="lg:col-span-5">
              <div className="glass p-8 md:p-10 rounded-[2rem] h-full flex flex-col justify-center">
                <h3 className="text-2xl md:text-3xl font-black mb-6 tracking-wide text-white">
                  {t.techTitle}
                </h3>
                <p className="text-muted-foreground text-sm md:text-base mb-8">
                  {t.techIntro}
                </p>

                <div className="space-y-6">
                  {t.tools.map((tool, index) => (
                    <div 
                      key={index} 
                      className="flex items-center justify-between group border-b border-border/30 pb-6 last:border-b-0 last:pb-0"
                    >
                      <div className="flex flex-col items-start pr-4 flex-1">
                        <span className="text-xl md:text-2xl font-bold text-foreground tracking-tight group-hover:text-primary transition-colors duration-300">
                          {tool.name}
                        </span>
                        <span className="text-xs md:text-sm text-muted-foreground font-medium mt-1">
                          {tool.desc}
                        </span>
                      </div>
                      
                      <div className="relative w-14 h-14 md:w-16 md:h-16 flex-shrink-0">
                        <div className="absolute inset-0 bg-primary/20 blur-xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                        <img 
                          src={`/Portfolio/Projects/iconTech/${tool.img}`}
                          alt={tool.name}
                          className="relative w-full h-full object-contain drop-shadow-2xl group-hover:scale-110 transition-transform duration-300"
                          onError={(e) => console.error('Failed to load:', e.target.src)}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TECHNICAL IMPLEMENTATION & KEY FEATURES */}
      <section className="container mx-auto px-6 mb-20 animate-fade-in animation-delay-500">
        <div className="max-w-5xl mx-auto">
          <div className="text-left md:text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
              {t.highlightsTitle}
            </h2>
            <p className="text-muted-foreground text-lg">
              {lang === "en" 
                ? "A combination of technical challenges solved and features implemented" 
                : "Una combinazione di sfide tecniche risolte e funzionalità implementate"}
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {t.highlights.map((highlight, index) => (
              <div 
                key={index} 
                className="glass p-6 rounded-2xl hover:border-primary/30 transition-all duration-300 group"
              >
                <h3 className="text-lg font-bold mb-3 group-hover:text-primary transition-colors">
                  {highlight.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {highlight.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* IMPACT & RESULTS */}
      <section className="container mx-auto px-6 mb-20 animate-fade-in animation-delay-600">
        <div className="max-w-5xl mx-auto">
          <div className="text-left md:text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
              {t.impactTitle}
            </h2>
          </div>
          
          <div className="glass p-8 rounded-2xl">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {t.impactStats.map((stat, index) => (
                <div key={index} className="text-left md:text-center">
                  <div className={`text-3xl md:text-4xl font-black mb-2 ${stat.highlight ? 'text-primary' : 'text-foreground'}`}>
                    {stat.value}
                  </div>
                  <div className="text-sm text-muted-foreground uppercase tracking-wider">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* GALLERY / SCREENSHOTS */}
      <section className="container mx-auto px-6 animate-fade-in animation-delay-700">
        <div className="max-w-6xl mx-auto">
          <div className="text-left md:text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
              {t.galleryTitle}
            </h2>
            <p className="text-muted-foreground text-lg">
              {t.gallerySubtitle}
            </p>
          </div>
          
          {/* Horizontal scrollable on mobile, grid on desktop */}
          <div className="flex md:grid md:grid-cols-2 gap-6 overflow-x-auto md:overflow-x-visible snap-x snap-mandatory md:snap-none pb-4 md:pb-0 no-scrollbar">
            <div className="glass rounded-2xl overflow-hidden group hover:border-primary/30 transition-all duration-300 min-w-[85vw] md:min-w-0 snap-center">
              <img 
                src="/Portfolio/Projects/Bug_busters.png" 
                alt="BugBusters Gameplay Screenshot 1" 
                className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-105" 
              />
            </div>
            <div className="glass rounded-2xl overflow-hidden group hover:border-primary/30 transition-all duration-300 min-w-[85vw] md:min-w-0 snap-center">
              <img 
                src="/Portfolio/Projects/BugBusters1.png" 
                alt="BugBusters Gameplay Screenshot 2" 
                className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-105" 
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BugBusters;