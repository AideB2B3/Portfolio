export const Experience = ({ lang }) => {

    const content = {
        en: {
            badge: "Career Journey",
            titleStart: "Experience that",
            titleItalic: " speaks volumes.",
            description: "A timeline of my professional growth."
        },
        it: {
            badge: "Percorso Professionale",
            titleStart: "Esperienze che",
            titleItalic: " lasciano il segno.",
            description: "La cronologia della mia crescita professionale."
        }
    };

    const t = content[lang] || content.en;

    const experience = [
        {
            period: lang === "en" ? "2025 - Present" : "2025 - In corso",
            role: lang === "en"
                ? "Pier Program · Advanced Developer"
                : "Programma Pier · Advanced Developer",
            company: lang === "en"
                ? "Apple Developer Academy @ UniNa · Year 2"
                : "Apple Developer Academy @ UniNa · Anno 2",
            description: lang === "en"
                ? "Second year of the Apple Developer Academy in the Pier program, reserved for first-year graduates. I'm building iOS apps full-time for external stakeholders, NGOs, university research departments, and public-private organizations, working through the full client cycle: requirements gathering, sprint planning, delivery. The skills I'm sharpening here are the ones the first year introduced and this one demands at professional level: stakeholder communication, scoping under real constraints, accountability for what gets shipped, and managing the gap between what a client asks for and what they actually need."
                : "Secondo anno dell'Apple Developer Academy nel programma Pier, riservato ai diplomati del primo anno. Costruisco app iOS full-time per stakeholder esterni, ONG, dipartimenti di ricerca universitari e organizzazioni pubblico-private, gestendo l'intero ciclo cliente: raccolta requisiti, sprint planning, rilascio. Le competenze che sto affinando qui sono quelle che il primo anno ha introdotto e che questo richiede a livello professionale: comunicazione con gli stakeholder, scoping con vincoli reali, responsabilità su ciò che viene rilasciato, e la capacità di gestire la differenza tra quello che un cliente chiede e quello di cui ha effettivamente bisogno.",
            technologies: ["Swift", "SwiftUI", "Unity", "Scrum", "Stakeholder Management"],
            current: true,
        },
        /* 
        {
            period: "2022 - 2024", 
            role: "Junior Developer",
            company: "Tech Company Inc.", 
            description: lang === "en" 
                ? "Frontend development and maintenance of responsive user interfaces using React and Tailwind CSS."
                : "Sviluppo frontend e manutenzione di interfacce utente responsive utilizzando React e Tailwind CSS.", 
            technologies: ["React", "JavaScript", "CSS"], 
            current: false, 
        }, 
        */
    ];

    return (
        <section id="experience" className="py-10 md:py-32 relative overflow-hidden">
            {/* BG */}
            <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl -translate-y-1/2" />

            <div className="container mx-auto px-4 md:px-6 relative z-10">
                {/* Section Header */}
                <div className="max-w-3xl mb-10 md:mb-16">
                    <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase animate-fade-in">
                        {t.badge}
                    </span>
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mt-4 mb-4 md:mb-6 animate-fade-in animation-delay-100 text-secondary-foreground leading-tight">
                        {t.titleStart}
                        <span className="font-serif italic font-normal text-white">
                            {" "}{t.titleItalic}
                        </span>
                    </h2>
                </div>

                {/* Timeline Container */}
                <div className="relative">
                    <div className="timeline-glow absolute left-0 md:left-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-primary/70 via-primary/30 to-transparent md:-translate-x-1/2 shadow-[0_0_25px_rgba(32,178,166,0.8)]" />

                    <div className="space-y-8 md:space-y-12">
                        {experience.map((exp, idx) => (
                            <div
                                key={idx}
                                className="relative grid md:grid-cols-2 animate-fade-in"
                                style={{ animationDelay: `${(idx + 1) * 100}ms` }}
                            >
                                {/* Timeline Dot */}
                                <div className="absolute left-0 md:left-1/2 top-0 w-3 h-3 bg-primary rounded-full -translate-x-1/2 ring-4 ring-background z-10">
                                    {exp.current && (
                                        <span className="absolute inset-0 rounded-full bg-primary animate-ping opacity-75"></span>
                                    )}
                                </div>

                                {/* Content */}
                                <div className={`pl-8 md:pl-0 ${idx % 2 === 0 ? "md:pr-16 md:text-right" : "md:col-start-2 md:pl-16"}`}>
                                    <div className="glass p-5 md:p-6 rounded-2xl border border-primary/30 hover:border-primary/50 transition-all duration-500">
                                        <span className="block text-xs md:text-sm text-primary font-medium uppercase tracking-wider">
                                            {exp.period}
                                        </span>
                                        <h3 className="text-lg md:text-xl font-semibold mt-2 leading-tight">
                                            {exp.role}
                                        </h3>
                                        <p className="text-sm md:text-base text-muted-foreground mt-1">
                                            {exp.company}
                                        </p>
                                        <p className="text-sm text-muted-foreground/90 leading-relaxed mt-4 text-left">
                                            {exp.description}
                                        </p>

                                        <div className={`flex flex-wrap gap-2 mt-5 ${idx % 2 === 0 ? "md:justify-end" : "justify-start"}`}>
                                            {exp.technologies.map((tech, techIdx) => (
                                                <span key={techIdx} className="px-3 py-1 bg-surface text-xs rounded-full text-muted-foreground border border-border/40">
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
    )
}