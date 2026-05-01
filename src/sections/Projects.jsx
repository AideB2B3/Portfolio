import { ArrowUpRight } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { AnimatedBorderButton } from "../Components/AnimatedBorderButton";

export const Projects = ({ lang }) => {

  const navigate = useNavigate();

  const content = {
    en: {
      badge: "Featured Work",
      titleStart: "Projects built at the ",
      titleItalic: "intersection of engineering and human experience.",
      description: "A selection of recent work where engineering rigor meets human-centered design.",
      demo: "Demo",
      seeProject: "See project",
      openProject: "Open project page",
    },
    it: {
      badge: "Progetti in Evidenza",
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
        <div className="text-center mx-auto max-w-3xl mb-10 md:mb-16">
          <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase animate-fade-in">
            {t.badge}
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mt-4 mb-4 md:mb-6 animate-fade-in animation-delay-100 leading-tight">
            {t.titleStart}
            <span className="font-serif italic font-normal text-white">
              {t.titleItalic}
            </span>
          </h2>
          <p className="text-muted-foreground animate-fade-in animation-delay-200">
            {t.description}
          </p>
        </div>

        {/* Project Grid */}
        <div className="grid md:grid-cols-2 gap-6 md:gap-8">
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
                <div className="absolute inset-0 hidden md:flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    className="flex items-center gap-2 px-4 py-2 rounded-full glass hover:text-primary-foreground transition-all"
                  >
                    <span className="text-xs font-bold uppercase tracking-wider">{t.demo}</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </a>
                </div>
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
                <div className="flex flex-wrap gap-2 md:hidden pt-2">
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    className="px-4 py-2 rounded-full bg-secondary text-secondary-foreground text-xs font-bold border border-primary/20 flex items-center gap-1.5 shadow-sm active:scale-95 transition-all"
                  >
                    {t.demo}
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
