export const Education = ({ lang }) => {

    const content = {
        en: {
            badge: "Academic Background",
            titleStart: "Education that",
            titleItalic: " defined my journey.",
            description: "A timeline of my academic and professional growth."
        },
        it: {
            badge: "Percorso Formativo",
            titleStart: "Un'istruzione che",
            titleItalic: " ha dato forma al mio percorso.",
            description: "Le tappe fondamentali della mia crescita accademica."
        }
    };

    const t = content[lang] || content.en;

    const education = [
        {
            period: lang === "en" ? "Present" : "In corso",
            title: lang === "en" ? "B.Sc. in Automation Engineering" : "Laurea Triennale in Ingegneria dell'Automazione",
            institution: lang === "en"
                ? "University of Naples Federico II"
                : "Università degli Studi di Napoli Federico II",
            description: lang === "en"
                ? "Academic career centered on Control Theory, Robotics, and Industrial Automation. Strong focus on mathematical modeling, dynamic systems design, and software development for advanced process control."
                : "Percorso accademico incentrato su Teoria del Controllo, Robotica e Automazione Industriale. Solida formazione nella modellazione matematica, progettazione di sistemi dinamici e sviluppo di software per il controllo di processi complessi.",
            technologies: ["C/C++", "Python", "MATLAB", "Simulink", "Industrial IoT"],
            current: true,
        },
        {
            period: "2024 - 2025",
            title: "Apple Developer Academy @ UniNa",
            institution: lang === "en"
                ? "University of Naples Federico II & Apple"
                : "Università degli Studi di Napoli Federico II & Apple",
            description: lang === "en"
                ? "High-level training program focused on software engineering, UI/UX design, and startup incubation. Applied Challenge-Based Learning (CBL) to solve real-world problems within a multidisciplinary and international team environment."
                : "Programma di alta formazione focalizzato su ingegneria del software, UI/UX design e incubazione di startup. Approccio basato sul Challenge-Based Learning (CBL) per risolvere problemi reali in team multidisciplinari e internazionali.",
            technologies: ["Swift", "Design Thinking", "Business Modeling", "CBL", "Github"],
            current: false,
        },
        {
            period: "2014 - 2019",
            title: lang === "en"
                ? "High School Diploma in Electrical Engineering"
                : "Diploma di Perito Elettrotecnico ed Elettronico",
            institution: "ITIS Ettore Majorana",
            description: lang === "en"
                ? "Technical specialization in industrial automation and power systems. Gained hands-on experience in PLC programming, data acquisition, and electrical circuit design, with a focus on efficiency and industrial safety regulations."
                : "Specializzazione tecnica in automazione e sistemi di potenza. Esperienza pratica in programmazione PLC, acquisizione dati e progettazione di circuiti elettrici, con particolare attenzione all'efficienza e alle normative di sicurezza industriale.",
            technologies: ["Industrial Automation", "Electrical Systems", "PLC", "Data Acquisition", "Safety Regs"],
            current: false,
        },
    ];

    return (
        <section id="education" className="py-10 md:py-32 relative overflow-hidden">
            {/* BG */}
            <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl -translate-y-1/2" />

            <div className="container mx-auto px-6 relative z-10">
                {/* Section Header */}
                <div className="max-w-3xl mb-16">
                    <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase animate-fade-in">
                        {t.badge}
                    </span>
                    <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 animate-fade-in animation-delay-100 text-secondary-foreground">
                        {t.titleStart}
                        <span className="font-serif italic font-normal text-white">
                            {" "} {t.titleItalic}
                        </span>
                    </h2>
                    <p className="text-muted-foreground animate-fade-in animation-delay-200">
                        {t.description}
                    </p>
                </div>

                {/* Timeline Container */}
                <div className="relative">
                    {/* Vertical Line */}
                    <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-primary/70 via-primary/30 to-transparent md:-translate-x-1/2 shadow-[0_0_25px_rgba(32,178,166,0.8)]" />

                    <div className="space-y-12">
                        {education.map((edu, idx) => (
                            <div
                                key={idx}
                                className="relative grid md:grid-cols-2 items-start animate-fade-in"
                                style={{ animationDelay: `${(idx + 1) * 100}ms` }}
                            >

                                {/* Timeline Dot */}
                                <div className="absolute left-0 md:left-1/2 top-0 w-3 h-3 bg-primary rounded-full -translate-x-1/2 ring-4 ring-background z-10">
                                    {edu.current && (
                                        <span className="absolute inset-0 rounded-full bg-primary animate-ping opacity-75 -translate-x-0"></span>
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