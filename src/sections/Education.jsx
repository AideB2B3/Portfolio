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
            title: lang === "en" ? "Bachelor's Degree in Automation Engineering" : "Laurea Triennale in Ingegneria dell'Automazione",
            institution: lang === "en"
                ? "University of Naples Federico II"
                : "Università degli Studi di Napoli Federico II",
            description: lang === "en"
                ? "Engineering degree focused on the design and management of systems that operate autonomously. I'm building expertise across three core disciplines: Automatic Control (feedback laws for linear dynamic systems), Robotics (modeling, kinematics, trajectory planning, control schemes), and Industrial Automation (formal languages, PLC, automation algorithms), all grounded on a solid mathematical and physics foundation. The engineering core that continues into the master's program in Automation and Robotics."
                : "Laurea in ingegneria focalizzata sulla progettazione e gestione di sistemi capaci di operare autonomamente. Sto costruendo competenze su tre discipline core: Controlli Automatici (leggi di controllo in retroazione per sistemi dinamici lineari), Robotica (modellazione, cinematica, pianificazione delle traiettorie, schemi di controllo) e Automazione Industriale (linguaggi formali, PLC, algoritmi di automazione), il tutto su una solida base matematica e fisica. Il core ingegneristico che prosegue nella Magistrale in Ingegneria dell'Automazione e Robotica.",
            technologies: ["Control Systems", "Robotics", "MATLAB", "Simulink", "Python", "C/C++"],
            current: true,
        },
        {
            period: "2024 - 2025",
            title: lang === "en" ? "Student Year" : "Anno da Studente",
            institution: lang === "en"
                ? "Apple Developer Academy @ UniNa · 1st Year"
                : "Apple Developer Academy @ UniNa · Anno 1",
            description: lang === "en"
                ? "First year of the Apple Developer Academy: a 9-month full-time program at the largest Academy outside the US. I learned to build production iOS apps end-to-end with Swift and SwiftUI, applied Human-Centered Design and Apple's Challenge Based Learning methodology working in multidisciplinary teams, and developed business modeling and pitching skills alongside the technical track. The year ended with concrete output: team-built iOS apps shipped to the App Store."
                : "Primo anno dell'Apple Developer Academy: programma full-time di 9 mesi presso la più grande Academy al di fuori degli Stati Uniti. Ho imparato a costruire app iOS production-ready end-to-end con Swift e SwiftUI, applicando Human-Centered Design e la metodologia Challenge Based Learning di Apple lavorando in team multidisciplinari, e ho sviluppato competenze di business modeling e pitching insieme al percorso tecnico. L'anno si è chiuso con un risultato concreto: app iOS costruite in team e pubblicate sull'App Store.",
            technologies: ["Swift", "SwiftUI", "Human-Centered Design", "Challenge Based Learning", "Business Modeling"],
            current: false,
        },
        {
            period: "2014 - 2019",
            title: lang === "en"
                ? "Technical Diploma · Electronics & Electrical Engineering"
                : "Diploma di Perito Industriale · Elettronica ed Elettrotecnica",
            institution: lang === "en"
                ? "ITIS Ettore Majorana · Somma Vesuviana (NA)"
                : "ITIS Ettore Majorana · Somma Vesuviana (NA)",
            description: lang === "en"
                ? "Five-year technical diploma with specialization in the Electrical Engineering articulation. I learned to combine electrical engineering, electronics, and computer science skills to design power systems and intervene in industrial automation and process control, with hands-on labs in electrical circuit design, electrical systems, automatic systems, and PLC programming. The technical foundation that led directly into the engineering degree."
                : "Diploma tecnico quinquennale con specializzazione nell'articolazione Elettrotecnica. Ho imparato a combinare competenze di elettrotecnica, elettronica e informatica per progettare sistemi di potenza e intervenire nell'automazione industriale e nel controllo dei processi, con laboratori pratici su progettazione circuitale, impianti elettrici, sistemi automatici e programmazione PLC. La base tecnica che ha portato direttamente alla laurea in ingegneria.",
            technologies: ["Electrical Systems", "Industrial Automation", "PLC", "Circuit Design", "Electronics"],
            current: false,
        },
    ];

    return (
        <section id="education" className="py-10 md:py-32 relative overflow-hidden">
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

                    <div className="space-y-8 md:space-y-12">
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
                                    <div className="glass p-5 md:p-6 rounded-2xl border border-primary/30 hover:border-primary/50 transition-all duration-500">
                                        <span className="block text-xs md:text-sm text-primary font-medium uppercase tracking-wider">
                                            {edu.period}
                                        </span>
                                        <h3 className="text-lg md:text-xl font-semibold mt-2 leading-tight">
                                            {edu.title}
                                        </h3>
                                        <p className="text-sm md:text-base text-muted-foreground mt-1">
                                            {edu.institution}
                                        </p>
                                        <p className="text-sm text-muted-foreground/90 leading-relaxed mt-4 text-left">
                                            {edu.description}
                                        </p>

                                        <div className={`flex flex-wrap gap-2 mt-5 ${idx % 2 === 0 ? "md:justify-end" : "justify-start"}`}>
                                            {edu.technologies.map((tech, techIdx) => (
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
    );
};