import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Rocket, Calendar, User, Code2, ExternalLink, Recycle, Sliders, Layers, Atom, Music, Smartphone, Clock, Gauge, Apple, } from 'lucide-react';

const BugBusters = ({ lang }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const content = {
    en: {
      back: "Back to Projects",
      tagline: "An arcade shooter that turns debugging into an epic battle",
      viewDemo: "View on App Store",

      // Quick Facts
      quickFactsLabel: {
        origin: "Origin",
        role: "Role",
        team: "Team",
        timeline: "Timeline",
      },
      quickFactsValue: {
        origin: "Apple Developer Academy @ UniNa · Year 1",
        role: "iOS Developer (Solo)",
        team: "4 people",
        timeline: "4 weeks · 2025",
      },

      // The Challenge
      challengeTitle: "The Challenge",
      challengeText: (
        <>
          Build a complete iOS game in <span className="text-primary font-semibold">4 weeks</span> during the <span className="text-primary font-semibold">Apple Developer Academy @ UniNa Year 1</span>. The brief came from a deceptively simple question: <span className="italic text-foreground">"What if debugging was actually fun?"</span> The team had to deliver an end-to-end arcade product, from gameplay design to App Store release.
        </>
      ),

      // My Role
      roleTitle: "My Role",
      roleText: (
        <>
          While the rest of the team focused on art direction, marketing, and pitch, I owned the entire development side. <span className="text-primary font-semibold">Every line of code came from me</span>, from the SpriteKit physics engine to the AVFoundation audio mixing, from object pooling for performance to dynamic difficulty algorithms. The 4-week constraint forced sharp decisions on what to optimize and what to ship.
        </>
      ),

      // Tech Stack
      techTitle: "Tech Stack",
      techIntro: "Built natively for the Apple ecosystem with modern Swift frameworks.",
      tools: [
        { name: "SwiftUI", desc: "UI Architecture & State Management", img: "SwiftUI.png" },
        { name: "SpriteKit", desc: "2D Game Engine & Physics", img: "SpriteKit.png" },
        { name: "AVFoundation", desc: "Audio Engine & Effects", img: "AVFoundation.png" },
      ],

      // Technical Highlights
      highlightsTitle: "Technical Highlights",
      highlightsSubtitle: "A combination of technical challenges solved and features implemented",
      highlights: [
        {
          icon: Recycle,
          title: "Object Pooling System",
          description: "Reusable sprite architecture that recycles enemies and projectiles, keeping memory bounded across long sessions. Verified with Instruments Allocations."
        },
        {
          icon: Sliders,
          title: "Dynamic Difficulty",
          description: "Adaptive algorithms that adjust spawn rates based on real-time player performance."
        },
        {
          icon: Layers,
          title: "Cross-Device Optimization",
          description: "Targets a stable 60 FPS on all iOS 18+ iPhones, profiled with Instruments Time Profiler to identify and remove physics bottlenecks."
        },
        {
          icon: Code2,
          title: "Native iOS Architecture",
          description: "Built with SwiftUI and SpriteKit for seamless integration and optimal performance."
        },
        {
          icon: Atom,
          title: "Physics-Based Gameplay",
          description: "Real-time collision detection with particle effects for responsive mechanics."
        },
        {
          icon: Music,
          title: "Adaptive Audio System",
          description: "Dynamic sound mixing using AVFoundation that responds to gameplay intensity."
        }
      ],

      // Technical Metrics
      impactTitle: "Technical Metrics",
      impactStats: [
        { icon: Clock, label: "Development Time", value: "4 weeks", highlight: true },
        { icon: Gauge, label: "Frame Rate", value: "60 FPS", highlight: true },
        { icon: Smartphone, label: "Supported", value: "iOS 18+", highlight: false },
        { icon: Apple, label: "Platform", value: "iOS Native", highlight: false }
      ],

      // Gallery
      galleryTitle: "Gallery",
      gallerySubtitle: "In-game screenshots from the shipped build",
      gallery: [
        { src: "/Portfolio/Projects/Bug_busters.png", caption: "Main gameplay loop" },
        { src: "/Portfolio/Projects/BugBusters1.png", caption: "Difficulty progression" },
      ],
    },
    it: {
      back: "Torna ai Progetti",
      tagline: "Uno sparatutto arcade che trasforma il debugging in una battaglia epica",
      viewDemo: "Vedi su App Store",

      quickFactsLabel: {
        origin: "Origine",
        role: "Ruolo",
        team: "Team",
        timeline: "Timeline",
      },
      quickFactsValue: {
        origin: "Apple Developer Academy @ UniNa · Anno 1",
        role: "Sviluppatore iOS (Solo)",
        team: "4 persone",
        timeline: "4 settimane · 2025",
      },

      challengeTitle: "La Sfida",
      challengeText: (
        <>
          Costruire un gioco iOS completo in <span className="text-primary font-semibold">4 settimane</span> durante l'<span className="text-primary font-semibold">Apple Developer Academy @ UniNa Anno 1</span>. Il brief è nato da una domanda solo all'apparenza semplice: <span className="italic text-foreground">"E se il debugging fosse divertente?"</span> Il team doveva consegnare un prodotto arcade end-to-end, dal gameplay al rilascio su App Store.
        </>
      ),

      roleTitle: "Il Mio Ruolo",
      roleText: (
        <>
          Mentre il resto del team si concentrava su direzione artistica, marketing e pitch, io mi sono preso in carico l'intera parte di sviluppo. <span className="text-primary font-semibold">Ogni riga di codice è venuta da me</span>, dal motore fisico SpriteKit al mixing audio in AVFoundation, dall'object pooling per le performance agli algoritmi di difficoltà dinamica. Il vincolo delle 4 settimane mi ha costretto a decisioni nette su cosa ottimizzare e cosa rilasciare.
        </>
      ),

      techTitle: "Tech Stack",
      techIntro: "Costruito nativamente per l'ecosistema Apple con framework Swift moderni.",
      tools: [
        { name: "SwiftUI", desc: "Architettura UI & Gestione Stato", img: "SwiftUI.png" },
        { name: "SpriteKit", desc: "Motore di Gioco 2D & Fisica", img: "SpriteKit.png" },
        { name: "AVFoundation", desc: "Motore Audio & Effetti", img: "AVFoundation.png" },
      ],

      highlightsTitle: "Highlights Tecnici",
      highlightsSubtitle: "Sfide tecniche risolte e funzionalità implementate",
      highlights: [
        {
          icon: Recycle,
          title: "Sistema Object Pooling",
          description: "Architettura sprite riutilizzabile che ricicla nemici e proiettili, mantenendo la memoria stabile nelle sessioni lunghe. Verificato con Instruments Allocations."
        },
        {
          icon: Sliders,
          title: "Difficoltà Dinamica",
          description: "Algoritmi adattivi che regolano gli spawn rate in base alle performance del giocatore in tempo reale."
        },
        {
          icon: Layers,
          title: "Ottimizzazione Cross-Device",
          description: "Punta a 60 FPS stabili su tutti gli iPhone con iOS 18+, profilato con Instruments Time Profiler per identificare e rimuovere colli di bottiglia fisici."
        },
        {
          icon: Code2,
          title: "Architettura iOS Nativa",
          description: "Costruito con SwiftUI e SpriteKit per integrazione perfetta e performance ottimali."
        },
        {
          icon: Atom,
          title: "Gameplay Basato sulla Fisica",
          description: "Rilevamento collisioni in tempo reale con effetti particellari per meccaniche reattive."
        },
        {
          icon: Music,
          title: "Sistema Audio Adattivo",
          description: "Mixing audio dinamico usando AVFoundation che risponde all'intensità del gameplay."
        }
      ],

      impactTitle: "Metriche Tecniche",
      impactStats: [
        { icon: Clock, label: "Tempo di Sviluppo", value: "4 settimane", highlight: true },
        { icon: Gauge, label: "Frame Rate", value: "60 FPS", highlight: true },
        { icon: Smartphone, label: "Supportato", value: "iOS 18+", highlight: false },
        { icon: Apple, label: "Piattaforma", value: "iOS Nativo", highlight: false }
      ],

      galleryTitle: "Gallery",
      gallerySubtitle: "Screenshot in-game dalla build pubblicata",
      gallery: [
        { src: "/Portfolio/Projects/Bug_busters.png", caption: "Gameplay principale" },
        { src: "/Portfolio/Projects/BugBusters1.png", caption: "Progressione di difficoltà" },
      ],
    }
  };

  const t = content[lang] || content.en;

  // Quick Facts data structure
  const quickFacts = [
    { icon: User, label: t.quickFactsLabel.origin, value: t.quickFactsValue.origin },
    { icon: Rocket, label: t.quickFactsLabel.role, value: t.quickFactsValue.role },
    { icon: Code2, label: t.quickFactsLabel.team, value: t.quickFactsValue.team },
    { icon: Calendar, label: t.quickFactsLabel.timeline, value: t.quickFactsValue.timeline },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground font-sans selection:bg-primary/30 pt-24 md:pt-32 pb-16 md:pb-20">

      {/* Navigation Back */}
      <div className="container mx-auto px-4 md:px-6 mb-6 md:mb-8">
        <Link to="/" className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors duration-300 group">
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
          <span className="text-xs md:text-sm uppercase tracking-widest font-medium">{t.back}</span>
        </Link>
      </div>

      {/* HERO SECTION */}
      <header className="container mx-auto px-4 md:px-6 mb-12 md:mb-20">
        <div className="flex flex-col-reverse lg:flex-row items-center lg:items-end justify-between gap-8 md:gap-12">

          {/* Text Content */}
          <div className="w-full lg:w-2/3 space-y-5 md:space-y-6 text-center lg:text-left">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-black tracking-tight leading-[0.95] text-white animate-fade-in">
              Bug Busters
            </h1>
            <p className="text-base md:text-xl lg:text-2xl text-muted-foreground font-medium max-w-2xl mx-auto lg:mx-0 animate-fade-in animation-delay-100">
              {t.tagline}
            </p>

            {/* CTA */}
            <div className="flex flex-wrap gap-4 justify-center lg:justify-start pt-2 animate-fade-in animation-delay-200">
              <a
                href="https://apps.apple.com/it/app/bug-busters/id6747584160"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-3 px-5 md:px-6 py-3 bg-primary text-primary-foreground rounded-full font-semibold hover:bg-primary/90 transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-primary/50 text-sm md:text-base"
              >
                <ExternalLink className="w-4 h-4 md:w-5 md:h-5 group-hover:rotate-12 transition-transform" />
                {t.viewDemo}
              </a>
            </div>
          </div>

          {/* App Icon */}
          <div className="w-full lg:w-1/3 flex justify-center lg:justify-end animate-float">
            <div className="relative w-36 h-36 md:w-56 md:h-56 lg:w-64 lg:h-64 group">
              <div className="absolute inset-0 bg-primary/20 blur-3xl rounded-full group-hover:bg-primary/30 transition-all duration-700"></div>
              <div className="relative w-full h-full rounded-[1.75rem] md:rounded-[2rem] overflow-hidden border border-white/10 shadow-2xl bg-surface/50 glass">
                <img
                  src="/Portfolio/Projects/BB_App_icon.png"
                  alt="BugBusters App Icon"
                  className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-110"
                />
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* QUICK FACTS — glass tile cards (replaces plain metadata strip) */}
      <section className="container mx-auto px-4 md:px-6 mb-12 md:mb-20 animate-fade-in animation-delay-300">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4">
            {quickFacts.map((fact, idx) => {
              const Icon = fact.icon;
              return (
                <div
                  key={idx}
                  className="glass rounded-2xl p-4 md:p-5 hover:border-primary/30 transition-all duration-300"
                >
                  <div className="flex items-center gap-2 text-[10px] md:text-xs uppercase tracking-widest text-muted-foreground mb-2">
                    <Icon className="w-3 h-3 md:w-3.5 md:h-3.5 text-primary flex-shrink-0" />
                    <span>{fact.label}</span>
                  </div>
                  <span className="block text-sm md:text-base font-semibold text-foreground leading-snug">
                    {fact.value}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* THE CHALLENGE */}
      <section className="container mx-auto px-4 md:px-6 mb-12 md:mb-20 animate-fade-in animation-delay-400">
        <div className="max-w-6xl mx-auto">
          <div className="glass p-6 md:p-10 rounded-[1.5rem] md:rounded-[2rem] border-primary/10 relative overflow-hidden">
            <div className="absolute -top-20 -right-20 w-64 h-64 bg-primary/5 rounded-full blur-3xl pointer-events-none"></div>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4 md:mb-6 text-white relative">
              {t.challengeTitle}
            </h2>
            <div className="text-sm md:text-base lg:text-lg text-muted-foreground leading-relaxed relative">
              {t.challengeText}
            </div>
          </div>
        </div>
      </section>

      {/* MY ROLE + TECH STACK */}
      <section className="container mx-auto px-4 md:px-6 mb-12 md:mb-20 animate-fade-in animation-delay-500">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-12 gap-6 md:gap-8">

            {/* Left: My Role */}
            <div className="lg:col-span-7">
              <div className="glass p-6 md:p-10 rounded-[1.5rem] md:rounded-[2rem] border-primary/10 relative overflow-hidden h-full">
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4 md:mb-6 text-white">
                  {t.roleTitle}
                </h2>
                <div className="text-sm md:text-base lg:text-lg text-muted-foreground leading-relaxed">
                  {t.roleText}
                </div>
              </div>
            </div>

            {/* Right: Tech Stack */}
            <div className="lg:col-span-5">
              <div className="glass p-6 md:p-10 rounded-[1.5rem] md:rounded-[2rem] h-full flex flex-col justify-center">
                <h3 className="text-xl md:text-2xl lg:text-3xl font-black mb-3 tracking-wide text-white">
                  {t.techTitle}
                </h3>
                <p className="text-muted-foreground text-xs md:text-sm mb-6 md:mb-8">
                  {t.techIntro}
                </p>

                <div className="space-y-5 md:space-y-6">
                  {t.tools.map((tool, index) => (
                    <div
                      key={index}
                      className="flex items-center justify-between group border-b border-border/30 pb-5 md:pb-6 last:border-b-0 last:pb-0"
                    >
                      <div className="flex flex-col items-start pr-4 flex-1 min-w-0">
                        <span className="text-lg md:text-xl lg:text-2xl font-bold text-foreground tracking-tight group-hover:text-primary transition-colors duration-300">
                          {tool.name}
                        </span>
                        <span className="text-[11px] md:text-sm text-muted-foreground font-medium mt-1 leading-snug">
                          {tool.desc}
                        </span>
                      </div>

                      <div className="relative w-12 h-12 md:w-14 md:h-14 lg:w-16 lg:h-16 flex-shrink-0">
                        <div className="absolute inset-0 bg-primary/20 blur-xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                        <img
                          src={`/Portfolio/Projects/iconTech/${tool.img}`}
                          alt={tool.name}
                          className="relative w-full h-full object-contain drop-shadow-2xl group-hover:scale-110 transition-transform duration-300"
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

      {/* TECHNICAL HIGHLIGHTS — with icons */}
      <section className="container mx-auto px-4 md:px-6 mb-12 md:mb-20 animate-fade-in animation-delay-600">
        <div className="max-w-6xl mx-auto">
          <div className="text-left md:text-center mb-8 md:mb-12">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-3 md:mb-4 text-white">
              {t.highlightsTitle}
            </h2>
            <p className="text-muted-foreground text-sm md:text-base lg:text-lg">
              {t.highlightsSubtitle}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            {t.highlights.map((highlight, index) => {
              const Icon = highlight.icon;
              return (
                <div
                  key={index}
                  className="glass p-5 md:p-6 rounded-2xl hover:border-primary/30 transition-all duration-300 group"
                >
                  <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                    <Icon className="w-5 h-5 text-primary" />
                  </div>
                  <h3 className="text-base md:text-lg font-bold mb-2 group-hover:text-primary transition-colors leading-tight">
                    {highlight.title}
                  </h3>
                  <p className="text-xs md:text-sm text-muted-foreground leading-relaxed">
                    {highlight.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* TECHNICAL METRICS — with icons above values */}
      <section className="container mx-auto px-4 md:px-6 mb-12 md:mb-20 animate-fade-in animation-delay-700">
        <div className="max-w-6xl mx-auto">
          <div className="text-left md:text-center mb-8 md:mb-12">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-3 md:mb-4 text-white">
              {t.impactTitle}
            </h2>
          </div>

          <div className="glass p-6 md:p-8 rounded-2xl">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
              {t.impactStats.map((stat, index) => {
                const Icon = stat.icon;
                return (
                  <div key={index} className="text-center">
                    <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center mb-3 mx-auto">
                      <Icon className="w-5 h-5 text-primary" />
                    </div>
                    <div className={`text-2xl md:text-3xl lg:text-4xl font-black mb-2 ${stat.highlight ? 'text-primary' : 'text-foreground'} leading-none`}>
                      {stat.value}
                    </div>
                    <div className="text-[10px] md:text-xs text-muted-foreground uppercase tracking-wider leading-tight">
                      {stat.label}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* GALLERY — with captions */}
      <section className="container mx-auto px-4 md:px-6 animate-fade-in animation-delay-800">
        <div className="max-w-6xl mx-auto">
          <div className="text-left md:text-center mb-8 md:mb-12">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-3 md:mb-4 text-white">
              {t.galleryTitle}
            </h2>
            <p className="text-muted-foreground text-sm md:text-base lg:text-lg">
              {t.gallerySubtitle}
            </p>
          </div>

          {/* Mobile: horizontal scroll snap, Desktop: 2-col grid */}
          <div className="flex md:grid md:grid-cols-2 gap-4 md:gap-6 overflow-x-auto md:overflow-x-visible snap-x snap-mandatory md:snap-none pb-4 md:pb-0 no-scrollbar -mx-4 md:mx-0 px-4 md:px-0">
            {t.gallery.map((item, idx) => (
              <figure
                key={idx}
                className="glass rounded-2xl overflow-hidden group hover:border-primary/30 transition-all duration-300 min-w-[85vw] md:min-w-0 snap-center flex flex-col"
              >
                <div className="overflow-hidden">
                  <img
                    src={item.src}
                    alt={item.caption}
                    className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <figcaption className="px-4 md:px-5 py-3 md:py-4 text-xs md:text-sm text-muted-foreground border-t border-border/30">
                  {item.caption}
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default BugBusters;
