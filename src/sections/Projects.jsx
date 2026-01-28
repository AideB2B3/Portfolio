import { ArrowUpRight, Github } from "lucide-react";
import { AnimatedBorderButton } from "../Components/AnimatedBorderButton";

export const Projects = ({ lang }) => {

  const content = {
    en: {
      badge: "Featured Work",
      titleStart: "Projects that ",
      titleItalic: "make an impact.",
      description: "A selection of my recent work, from complex web applications to innovative tools that solve real-world problems."
    },
    it: {
      badge: "Progetti in Evidenza",
      titleStart: "Progetti che ",
      titleItalic: "lasciano il segno.",
      description: "Una selezione dei miei lavori recenti, da applicazioni web complesse a strumenti innovativi che risolvono problemi reali."
    }
  };

  const t = content[lang] || content.en;


  const projects = [
    {
      title: "Bug Busters",
      description: lang === "en"
        ? "Bug Busters is my debut project in game development, driven by the challenge of moving from player to creator. It’s a cartoon-style arcade shooter where players face relentless waves of bugs. Developing this title allowed me to master the real-world complexities of game logic, from managing object lifecycles to fine-tuning gameplay balance."
        : "Bug Busters rappresenta il mio debutto nel game development, un progetto nato dalla curiosità di passare da giocatore a creatore. È un arcade shooter in stile cartoon dove il giocatore deve affrontare ondate di bug. Sviluppare questo titolo mi ha permesso di scontrarmi con le complessità reali della logica di gioco: dalla gestione del ciclo di vita degli oggetti a schermo fino al bilanciamento della difficoltà.",
      image: "Projects/Bug_busters.png",
      tags: ["SwiftUI", "SpriteKit", "AVFoundation"],
      link: "https://apps.apple.com/it/app/bug-busters/id6747584160",
      // github: "#", 
    },
    {
      title: "Work in progress",
      description: lang === "en" ? "Work in progress" : "Lavori in corso",
      image: "Projects/nomeProgettoEsempio2.png",
      tags: ["-", "-"],
      link: "#",
      github: "#",
    },
  ];

  return (
    <section id="projects" className="py-32 relative overflow-hidden">
      {/* BG Glows */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 left-0 w-64 h-64 bg-highlight/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mx-auto max-w-3xl mb-16">
          <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase animate-fade-in">
            {t.badge}
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 animate-fade-in animation-delay-100">
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
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, idx) => (
            <div
              key={idx}
              className="group glass rounded-2xl overflow-hidden animate-fade-in md:row-span-1"
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
                {/* Overlay Links */}
                <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <a
                    href={project.link}
                    className="p-3 rounded-full glass hover:text-primary-foreground transition-all"
                  >
                    <ArrowUpRight className="w-5 h-5" />
                  </a>
                  {project.github && (
                    <a
                      href={project.github}
                      className="p-3 rounded-full glass hover:text-primary-foreground transition-all"
                    >
                      <Github className="w-5 h-5" />
                    </a>
                  )}
                </div>
              </div>
              {/* Content */}
              <div className="p-6 space-y-4">
                <div className="flex items-start justify-between">
                  <h3 className="text-xl font-semibold group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <ArrowUpRight
                    className="w-5 h-5 text-muted-foreground group-hover:text-primary
                        group-hover:translate-x-1
                        group-hover:-translate-y-1 transition-all"
                  />
                </div>
                <p className="text-muted-foreground text-sm">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIdx) => (
                    <span
                      key={tagIdx}
                      className="px-4 py-1.5 rounded-full bg-surface text-xs font-medium border border-border/50 text-muted-foreground hover:border-primary/50 hover:text-primary transition-all duration-300">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View ALL Call To Action - (Commentato come nell'originale) */}

        {/* <div className="text-center mt-12 animate-fade-in animation-delay-500">
            <AnimatedBorderButton>
                View all Projects
                <ArrowUpRight className="w-5 h-5"/>
            </AnimatedBorderButton>
        </div> */}
      </div>
    </section>
  );
};