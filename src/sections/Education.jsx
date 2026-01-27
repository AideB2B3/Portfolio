export const Education = ({ lang }) => {
    
    // Testi statici dell'intestazione
    const content = {
        en: {
            badge: "Academic Education",
            titleStart: "An education that",
            titleItalic: " shaped my path.",
            description: "A timeline of my academic growth."
        },
        it: {
            badge: "Formazione Accademica",
            titleStart: "Un percorso che",
            titleItalic: " ha plasmato il mio percorso.",
            description: "La cronologia della mia crescita accademica."
        }
    };

    const t = content[lang] || content.en;

    // Dati educativi con traduzioni
    const education = [
        {
            period: lang === "en" ? "Present" : "Oggi",
            title: lang === "en" ? "Bachelor's in Automation Engineering" : "Laurea in Ingegneria dell'Automazione",
            institution: lang == "en"
             ? "University of Naples Federico II"
             : "Università degli Studi di Napoli Federico II",
            description: lang === "en" 
                ? "Academic path focused on Control Theory, Robotics, and Industrial Automation. Strong foundation in mathematics and physics applied to the design of dynamic systems and software development for process control."
                : "Percorso accademico focalizzato su Teoria del Controllo, Robotica e Automazione Industriale. Solide basi di matematica e fisica applicate alla progettazione di sistemi dinamici e allo sviluppo software per il controllo di processo.",
            technologies: ["C/C++", "Python", "MATLAB", "Simulink", "Industrial IoT"],
            current: true,
        },
        {
            period: "2024 - 2025",
            title: "Apple Developer Academy @ UniNa",
            institution: lang == "en"
             ? "University of Naples Federico II & Apple Academy"
             : "Università degli Studi di Napoli Federico II & Apple Academy",
            description: lang === "en" 
                ? "A 9-month training program focused on software development, app design, startup creation, and entrepreneurial skills. Utilizes a Challenge-Based Learning approach to prepare international students for the digital innovation ecosystem."
                : "Un programma formativo di 9 mesi incentrato su sviluppo software, app design, creazione di startup e competenze imprenditoriali. Utilizza l'approccio Challenge-Based Learning per preparare studenti internazionali all'ecosistema dell'innovazione digitale.",
            technologies: ["Swift", "Design Thinking", "Business Modeling", "CBL", "Github"],
            current: false,
        },
    ];

    return (
        <section id="education" className="py-32 relative overflow-hidden">
            {/* BG */}
            <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl -translate-y-1/2" />

            <div className="container mx-auto px-6 relative z-10">
                {/* Section Header */}
                <div className="max-w-3xl mb-16">
                    <span
                        className="text-secondary-foreground text-sm font-medium
                        tracking-wider uppercase animate-fade-in"
                    >
                        {t.badge}
                    </span>
                    <h2
                        className="text-4xl md:text-5xl font-bold 
                        mt-4 mb-6 animate-fade-in animation-delay-100
                        text-secondary-foreground"
                    >
                        {t.titleStart}
                        <span
                            className="font-serif italic font-normal text-white"
                        >
                            {" "}
                            {t.titleItalic}
                        </span>
                    </h2>

                    <p
                        className="text-muted-foreground animate-fade-in animation-delay-200"
                    >
                        {t.description}
                    </p>
                </div>

                {/* Timeline Container */}
                <div className="relative">
                    <div className="timeline-glow absolute left-0 md:left-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-primary/70 via-primary/30 to-transparent md:-translate-x-1/2 shadow-[0_0_25px_rgba(32,178,166,0.8)]" />

                    <div className="space-y-12">
                        {education.map((edu, idx) => (
                            <div
                                key={idx}
                                className="relative grid md:grid-cols-2 animate-fade-in"
                                style={{ animationDelay: `${(idx + 1) * 100}ms` }}
                            >
                                {/* Timeline Dot */}
                                <div className="absolute left-0 md:left-1/2 top-0 w-3 h-3 bg-primary rounded-full -translate-x-1/2 ring-4 ring-background z-10">
                                    {edu.current && (
                                        <span className="absolute inset-0 rounded-full bg-primary animate-ping opacity-75"></span>
                                    )}
                                </div>

                                {/* Content */}
                                <div className={`pl-8 md:pl-0 ${idx % 2 === 0 ? "md:pr-16 md:text-right" : "md:col-start-2 md:pl-16"}`}>
                                    <div className="glass p-6 rounded-2xl border border-primary/30 hover:border-primary/50 transition-all duration-500">
                                        <span className="text-sm text-primary font-medium">
                                            {edu.period}
                                        </span>
                                        <h3 className="text-xl font-semibold mt-2">
                                            {edu.title}
                                        </h3>
                                        <p className="text-muted-foreground">
                                            {edu.institution}
                                        </p>
                                        <p className="text-sm text-muted-foreground mt-4">
                                            {edu.description}
                                        </p>

                                        <div className={`flex flex-wrap gap-2 mt-4 ${idx % 2 === 0 ? "md:justify-end" : ""}`}>
                                            {edu.technologies.map((tech, techIdx) => (
                                                <span key={techIdx} className="px-3 py-1 bg-surface text-xs rounded-full text-muted-foreground">
                                                    {tech}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};