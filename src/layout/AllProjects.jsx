import { useEffect, useState } from "react";
import { ArrowUpRight, ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";

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
        ? "Workflow n8n con un passaggio human-in-the-loop: classifica i messaggi Gmail in arrivo con l'AI, li instrada per categoria e richiede l'approvazione su Discord prima che l'azione automatica venga eseguita (con logging su Notion)."
        : "n8n workflow with a human-in-the-loop step: classifies incoming Gmail messages with AI, routes them by category, and requires Discord approval before the automated action runs (Notion logging).",
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
        ? "Pipeline ML object-oriented (Python, scikit-learn) che confronta 9 classificatori su dati clinici longitudinali; miglior ROC-AUC ~0.95."
        : "Object-oriented ML pipeline (Python, scikit-learn) benchmarking 9 classifiers on longitudinal clinical data; best ROC-AUC ~0.95.",
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
        ? "Sparatutto arcade nativo per iOS (SwiftUI, SpriteKit, AVFoundation) con object pooling e scalatura dinamica della difficoltà."
        : "Native iOS arcade shooter (SwiftUI, SpriteKit, AVFoundation) with object pooling and dynamic difficulty scaling.",
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
        ? "App di simulazione medica Unity/C#/SwiftUI per bambini in trattamento di radioterapia, sviluppata per CHOC (Sudafrica); pubblicata sull'App Store e testata sul campo con bambini, medici e assistenti sociali."
        : "Unity/C#/SwiftUI medical simulation app for children undergoing radiotherapy, built for CHOC (South Africa); shipped to the App Store and tested on-site with children, doctors and social workers.",
      image: "/Portfolio/Projects/CowPow_cover.png",
      tags: ["Unity", "C#", "iOS"],
      link: "https://apps.apple.com/it/app/cowpow-radio-stories/id6779679122",
      demoLabel: "App Store",
    },
    {
      title: "Daily Weather Report",
      path: "/n8n/daily-weather-report",
      primary: "n8n",
      description: isIt
        ? "Automazione n8n schedulata che recupera i dati meteo e recapita un riepilogo giornaliero su Telegram."
        : "Scheduled n8n automation that fetches forecast data and delivers a daily summary to Telegram.",
      image: "/Portfolio/Projects/n8n/weather_workflow.png",
      tags: ["n8n", "Open-Meteo", "Telegram"],
      link: "https://github.com/AideB2B3/Daily_Weather_Report_with_n8n",
      demoLabel: "GitHub",
    },
    {
      title: "LISionario",
      path: "/lisionario",
      primary: "Swift",
      description: isIt
        ? "Dizionario nativo iOS di Lingua dei Segni Italiana su un'architettura a servizi remoti (SwiftUI, Airtable REST API, Cloudinary CDN), con una pipeline di upload asincrona e una coda di moderazione a due fasi."
        : "Native iOS Italian Sign Language dictionary on a remote-services architecture (SwiftUI, Airtable REST API, Cloudinary CDN), with an async upload pipeline and a two-stage moderation queue.",
      image: "/Portfolio/Projects/Lisionario_workflow.png",
      tags: ["SwiftUI", "Airtable", "Cloudinary", "AVKit"],
      link: null,
    },
    {
      title: "ETL Pipeline → Database",
      path: "/n8n/etl-pipeline",
      primary: "n8n",
      description: isIt
        ? "Workflow n8n schedulato che estrae dati live da un'API pubblica, li trasforma e li carica in un database PostgreSQL (Supabase)."
        : "Scheduled n8n workflow that extracts live data from a public API, transforms it and loads it into a PostgreSQL database (Supabase).",
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
        ? "Monitor n8n self-contained che esegue controlli di salute HTTP schedulati via cron, con alert su Telegram."
        : "Self-contained n8n monitor running cron-scheduled HTTP health checks, with Telegram alerting.",
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
      navigate(path, { state: { from: 'all' } });
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
      onClick={() => navigate(project.path, { state: { from: 'all' } })}
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
          <button
            onClick={() => navigate('/', { state: { scrollTo: 'projects' } })}
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors duration-300 group"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            <span className="text-xs md:text-sm uppercase tracking-widest font-medium">{t.back}</span>
          </button>
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
