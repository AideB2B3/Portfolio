import { useEffect, useState } from "react";
import { ArrowUpRight, ArrowLeft } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";

export const AllProjects = ({ lang }) => {
  const navigate = useNavigate();
  const isIt = lang === "it";
  const [filter, setFilter] = useState("all");

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const content = {
    en: {
      titleStart: "The complete ",
      titleItalic: "collection of things I've built.",
      description: "Every project, from native iOS apps and machine-learning pipelines to AI automations built entirely with n8n.",
      back: "Back to home",
      seeProject: "See project",
      openProject: "Open project page",
      all: "All",
    },
    it: {
      titleStart: "La collezione ",
      titleItalic: "completa delle cose che ho costruito.",
      description: "Tutti i progetti, dalle app iOS native e pipeline di machine learning alle automazioni AI realizzate interamente con n8n.",
      back: "Torna alla home",
      seeProject: "Vedi progetto",
      openProject: "Apri pagina progetto",
      all: "Tutti",
    },
  };

  const t = content[lang] || content.en;

  // Ogni progetto ha un linguaggio/tecnologia principale (`primary`) usato per i filtri.
  const projects = [
    {
      title: "AI Email Agent with Human Approval",
      path: "/n8n/ai-email-agent",
      primary: "n8n",
      description: isIt
        ? "Automazione email che classifica i messaggi con Claude, li smista con un nodo Switch e mantiene l'uomo nel loop su Discord prima di inviare ogni risposta urgente."
        : "Email automation that classifies messages with Claude, routes them via a Switch node, and keeps a human in the loop on Discord before any urgent reply is sent.",
      image: "/Portfolio/Projects/n8n/ai_email_workflow.png",
      tags: ["n8n", "Claude AI", "Gmail", "Discord"],
      link: "https://github.com/AideB2B3/AI-Powered-Email-Agent-with-Human-Approval",
      demoLabel: "GitHub",
    },
    {
      title: "Alzheimer Classification",
      path: "/alzheimer-classification",
      primary: "Python",
      description: isIt
        ? "Una pipeline Python completamente object-oriented che classifica lo stato di demenza dell'Alzheimer da dati clinici longitudinali."
        : "A fully object-oriented Python pipeline that classifies Alzheimer's dementia status from longitudinal clinical data.",
      image: "/Portfolio/Projects/Progetto_ai.png",
      tags: ["Python", "Scikit-learn", "Machine Learning"],
      link: "https://github.com/AideB2B3/AI-Project-for-University-Exams",
      demoLabel: "GitHub",
    },
    {
      title: "Bug Busters",
      path: "/bug-busters",
      primary: "Swift",
      description: isIt
        ? "Un arcade shooter in stile cartoon sviluppato in nativo iOS, dove il giocatore affronta ondate di bug."
        : "A cartoon-style arcade shooter built natively on iOS, where players face relentless waves of bugs.",
      image: "/Portfolio/Projects/Bug_busters.png",
      tags: ["SwiftUI", "SpriteKit", "AVFoundation"],
      link: "https://apps.apple.com/it/app/bug-busters/id6747584160",
      demoLabel: "App Store",
    },
    {
      title: "CowPow! Radio Stories",
      path: "/cowpow-radio",
      primary: "C#",
      description: isIt
        ? "Un'app Unity sviluppata per CHOC che aiuta i bambini a capire la radioterapia tramite simulazione medica onesta e storie."
        : "A Unity app built for CHOC that helps children understand radiotherapy through honest medical simulation and stories.",
      image: "/Portfolio/Projects/CowPow_cover.png",
      tags: ["Unity", "C#", "iOS"],
      link: null,
    },
    {
      title: "Daily Weather Report",
      path: "/n8n/daily-weather-report",
      primary: "n8n",
      description: isIt
        ? "Automazione schedulata che chiama l'API Open-Meteo, traduce il weather code in testo leggibile e recapita ogni giorno le previsioni direttamente su Telegram."
        : "A scheduled automation that calls the Open-Meteo API, decodes the weather code into readable text, and delivers a clean daily forecast straight to Telegram.",
      image: "/Portfolio/Projects/n8n/weather_workflow.png",
      tags: ["n8n", "Open-Meteo", "Telegram"],
      link: "https://github.com/AideB2B3/Daily_Weather_Report_with_n8n",
      demoLabel: "GitHub",
    },
    {
      title: "ETL Pipeline → Database",
      path: "/n8n/etl-pipeline",
      primary: "n8n",
      description: isIt
        ? "Workflow schedulato ogni 30 minuti che recupera i prezzi di Bitcoin ed Ethereum dall'API CoinGecko, li trasforma in JavaScript e li salva in un database PostgreSQL su Supabase. Pattern ETL completo: Extract, Transform, Load."
        : "A workflow scheduled every 30 minutes that fetches Bitcoin and Ethereum prices from the CoinGecko API, transforms them in JavaScript, and saves them to a PostgreSQL database on Supabase. A complete ETL pattern: Extract, Transform, Load.",
      image: "/Portfolio/Projects/n8n/workflow_etl->database.png",
      tags: ["n8n", "CoinGecko", "Supabase", "PostgreSQL"],
      link: "https://github.com/AideB2B3/PIPELINE-ETL-DATABASE-n8n",
      demoLabel: "GitHub",
    },
    {
      title: "Website Uptime Monitor",
      path: "/n8n/website-monitor",
      primary: "n8n",
      description: isIt
        ? "Un monitor di uptime self-contained: un ping HTTP schedulato via cron con Continue-On-Fail che invia un alert Telegram istantaneo appena il sito va offline."
        : "A self-contained uptime monitor: a cron-scheduled HTTP ping with Continue-On-Fail that fires an instant Telegram alert the moment a site goes down.",
      image: "/Portfolio/Projects/n8n/website_workflow.png",
      tags: ["n8n", "HTTP", "Telegram"],
      link: "https://github.com/AideB2B3/web_site_monitor_with_n8n",
      demoLabel: "GitHub",
    },
  ];

  // Pills = solo i linguaggi principali presenti tra i progetti (ordine alfabetico)
  const primaries = [...new Set(projects.map((p) => p.primary))].sort((a, b) => a.localeCompare(b));

  const filtered = projects
    .filter((p) => filter === "all" || p.primary === filter)
    .sort((a, b) => a.title.localeCompare(b.title));

  const handleKeyDown = (e, path) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      navigate(path);
    }
  };

  const pillBase =
    "px-4 py-2 rounded-full text-xs md:text-sm font-medium border transition-all duration-300 cursor-pointer whitespace-nowrap focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background";
  const pillActive = "bg-primary text-primary-foreground border-primary shadow-md shadow-primary/30";
  const pillInactive = "glass text-muted-foreground border-border/50 hover:text-primary hover:border-primary/40";

  const renderCard = (project, idx) => (
    <div
      key={project.path}
      role="button"
      tabIndex={0}
      aria-label={`${t.openProject}: ${project.title}`}
      onClick={() => navigate(project.path)}
      onKeyDown={(e) => handleKeyDown(e, project.path)}
      className="group glass rounded-2xl overflow-hidden animate-fade-in cursor-pointer hover:border-primary/40 hover:scale-[1.01] active:scale-[0.99] transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background flex flex-col"
      style={{ animationDelay: `${(idx + 1) * 80}ms` }}
    >
      {/* IMAGE */}
      <div className="relative overflow-hidden aspect-video">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-card via-card/50 to-transparent opacity-60" />
        {project.link && (
          <div className="absolute inset-0 hidden md:flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="flex items-center gap-2 px-4 py-2 rounded-full glass hover:text-primary-foreground transition-all"
            >
              <span className="text-xs font-bold tracking-wider">{project.demoLabel}</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-5 md:p-6 flex flex-col flex-1">
        <div className="flex items-start justify-between gap-3 mb-3">
          <h3 className="text-lg md:text-xl font-semibold group-hover:text-primary transition-colors">
            {project.title}
          </h3>
          <span
            aria-hidden="true"
            className="flex items-center gap-2 text-muted-foreground group-hover:text-primary transition-all flex-shrink-0"
          >
            <span className="hidden sm:inline text-xs font-medium">{t.seeProject}</span>
            <ArrowUpRight className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
          </span>
        </div>
        <p className="text-muted-foreground text-sm leading-relaxed flex-1 mb-4">
          {project.description}
        </p>
        <div className="flex gap-2 overflow-x-auto scrollbar-none">
          {project.tags.map((tag, tagIdx) => (
            <span
              key={tagIdx}
              className="px-3 py-1.5 rounded-full bg-surface text-xs font-medium border border-border/50 text-muted-foreground whitespace-nowrap flex-shrink-0"
            >
              {tag}
            </span>
          ))}
        </div>
        {project.link && (
          <div className="flex flex-wrap gap-2 md:hidden pt-3">
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="px-4 py-2 rounded-full bg-secondary text-secondary-foreground text-xs font-bold border border-primary/20 flex items-center gap-1.5 shadow-sm active:scale-95 transition-all"
            >
              {project.demoLabel}
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>
        )}
      </div>
    </div>
  );

  return (
    <section className="min-h-screen py-24 md:py-32 relative overflow-hidden">
      {/* BG Glows */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 left-0 w-64 h-64 bg-highlight/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        {/* Back link */}
        <div className="mb-6 md:mb-8">
          <Link to="/" className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors duration-300 group">
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            <span className="text-xs md:text-sm uppercase tracking-widest font-medium">{t.back}</span>
          </Link>
        </div>

        {/* Header (same style as Projects) */}
        <div className="text-left max-w-5xl mb-8 md:mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6 animate-fade-in leading-tight">
            <span className="text-primary">{t.titleStart}</span>
            <span className="font-serif italic font-normal text-white">{t.titleItalic}</span>
          </h2>
          <p className="text-muted-foreground animate-fade-in animation-delay-200">
            {t.description}
          </p>
        </div>

        {/* Filter pills (solo linguaggi principali) */}
        <div className="flex gap-2.5 overflow-x-auto scrollbar-none pb-2 mb-8 md:mb-12 animate-fade-in animation-delay-300 -mx-4 px-4 md:mx-0 md:px-0 md:flex-wrap">
          <button
            type="button"
            onClick={() => setFilter("all")}
            className={`${pillBase} ${filter === "all" ? pillActive : pillInactive}`}
          >
            {t.all}
          </button>
          {primaries.map((p) => (
            <button
              key={p}
              type="button"
              onClick={() => setFilter(p)}
              className={`${pillBase} ${filter === p ? pillActive : pillInactive}`}
            >
              {p}
            </button>
          ))}
        </div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {filtered.map(renderCard)}
        </div>
      </div>
    </section>
  );
};
