import { ArrowUpRight } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { AnimatedBorderButton } from "../Components/AnimatedBorderButton";

export const Projects = ({ lang }) => {

  const navigate = useNavigate();

  const content = {
    en: {
      badge: "My Projects",
      titleStart: "Projects built at the ",
      titleItalic: "intersection of engineering and human experience.",
      description: "A selection of recent work where engineering rigor meets human-centered design.",
      demo: "Demo",
      seeProject: "See project",
      openProject: "Open project page",
    },
    it: {
      badge: "I Miei Progetti",
      titleStart: "Progetti costruiti all'",
      titleItalic: "incrocio tra ingegneria ed esperienza umana.",
      description: "Una selezione di lavori recenti dove il rigore ingegneristico incontra il design centrato sulle persone.",
      demo: "Demo",
      seeProject: "Vedi progetto",
      openProject: "Apri pagina progetto",
    }
  };

  const t = content[lang] || content.en;


  const projects = [
    {
      title: "Bug Busters",
      path: "/bug-busters",
      description: lang === "en"
        ? "Bug Busters is a cartoon-style arcade shooter where players face relentless waves of bugs. Building it pushed me to confront the real-world complexities of game logic, from object lifecycle management to gameplay balance tuning, all running natively on iOS."
        : "Bug Busters è un arcade shooter in stile cartoon dove il giocatore affronta ondate di bug. Svilupparlo mi ha spinto a confrontarmi con le complessità reali della logica di gioco: dalla gestione del ciclo di vita degli oggetti al bilanciamento della difficoltà, tutto in nativo iOS.",
      image: "/Portfolio/Projects/Bug_busters.png",
      tags: ["SwiftUI", "SpriteKit", "AVFoundation"],
      link: "https://apps.apple.com/it/app/bug-busters/id6747584160",
    },
    {
      title: "Alzheimer Classification",
      path: "/alzheimer-classification",
      description: lang === "en"
        ? "A machine learning pipeline to classify Alzheimer's dementia status from the OASIS Longitudinal dataset. 9 classifiers compared on 3 target classes with 7 evaluation metrics, built with a fully object-oriented architecture in Python and scikit-learn."
        : "Una pipeline di machine learning per classificare lo stato di demenza dell'Alzheimer dal dataset OASIS Longitudinal. 9 classificatori confrontati su 3 classi target con 7 metriche di valutazione, sviluppata con architettura object-oriented in Python e scikit-learn.",
      image: "/Portfolio/Projects/Progetto_ai.png",
      tags: ["Python", "Scikit-learn", "Machine Learning"],
      link: "https://github.com/AideB2B3/AI-Project-for-University-Exams",
      demoLabel: "GitHub",
    },
    // {
    //   title: "CowPow! Radio Stories",
    //   path: "/cowpow-radio",
    //   description: lang === "en"
    //     ? "A Unity app built for CHOC (Childhood Cancer Foundation) that prepares children for radiotherapy through play and honest medical simulation — walking young patients through mask fitting, laser alignment, and marker tracing using characters and stories they can relate to."
    //     : "Un'app Unity sviluppata per CHOC (Childhood Cancer Foundation) che prepara i bambini alla radioterapia attraverso il gioco e una simulazione medica onesta — guidando i giovani pazienti attraverso mask fitting, laser alignment e marker tracing con personaggi e storie con cui possono identificarsi.",
    //   image: "/Portfolio/Projects/CowPow_cover.png",
    //   tags: ["Unity", "C#", "iOS"],
    //   link: null,
    // },
  ];

  // Handler tastiera per accessibilità (Enter/Space attivano la card come un bottone)
  const handleKeyDown = (e, path) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      navigate(path);
    }
  };

  return (
    <section id="projects" className="py-10 md:py-32 relative overflow-hidden">
      {/* BG Glows */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 left-0 w-64 h-64 bg-highlight/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        {/* Section Header */}
        <div className="text-left max-w-5xl mb-10 md:mb-16">
          <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase animate-fade-in">
            {t.badge}
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mt-4 mb-4 md:mb-6 animate-fade-in animation-delay-100 leading-tight">
            <span className="text-primary">{t.titleStart}</span>
            <span className="font-serif italic font-normal text-white">
              {t.titleItalic}
            </span>
          </h2>
          <p className="text-muted-foreground animate-fade-in animation-delay-200">
            {t.description}
          </p>
        </div>

        {/* Project Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {projects.map((project, idx) => (
            <div
              key={idx}
              role="button"
              tabIndex={0}
              aria-label={`${t.openProject}: ${project.title}`}
              onClick={() => navigate(project.path)}
              onKeyDown={(e) => handleKeyDown(e, project.path)}
              className="group glass rounded-2xl overflow-hidden animate-fade-in cursor-pointer hover:border-primary/40 hover:scale-[1.01] active:scale-[0.99] transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background"
              style={{ animationDelay: `${(idx + 1) * 100}ms` }}
            >
              {/* IMAGE */}
              <div className="relative overflow-hidden aspect-video">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card via-card/50 to-transparent opacity-60" />
                {/* Overlay Demo (desktop only, on hover) */}
                {project.link && (
                  <div className="absolute inset-0 hidden md:flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="flex items-center gap-2 px-4 py-2 rounded-full glass hover:text-primary-foreground transition-all"
                    >
                      <span className={`text-xs font-bold tracking-wider ${project.demoLabel ? '' : 'uppercase'}`}>{project.demoLabel || t.demo}</span>
                      <ArrowUpRight className="w-4 h-4" />
                    </a>
                  </div>
                )}
              </div>

              {/* Content */}
              <div className="p-5 md:p-6 space-y-4">
                <div className="flex items-start justify-between gap-3">
                  <h3 className="text-lg md:text-xl font-semibold group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  {/* "See project" indicator (non-interactive — the whole card is clickable) */}
                  <span
                    aria-hidden="true"
                    className="flex items-center gap-2 text-muted-foreground group-hover:text-primary transition-all flex-shrink-0"
                  >
                    <span className="hidden sm:inline text-xs font-medium">{t.seeProject}</span>
                    <ArrowUpRight className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
                  </span>
                </div>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {project.description}
                </p>

                {/* Tag Container */}
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIdx) => (
                    <span
                      key={tagIdx}
                      className="px-3 py-1.5 rounded-full bg-surface text-xs font-medium border border-border/50 text-muted-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Demo button (mobile only, below tags) */}
                {project.link && (
                  <div className="flex flex-wrap gap-2 md:hidden pt-2">
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="px-4 py-2 rounded-full bg-secondary text-secondary-foreground text-xs font-bold border border-primary/20 flex items-center gap-1.5 shadow-sm active:scale-95 transition-all"
                    >
                      {project.demoLabel || t.demo}
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </a>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
