export const About = ({ lang }) => {

    const translations = {
        en: {
            badge: "About Me",
            titlePart1: "Two technical paths,",
            titlePart2: " one craft.",
            p1: "I'm an iOS Developer (Swift/SwiftUI) with a background in Automation Engineering, a foundation that shapes how I build software: precise, thoroughly tested, and conscious of real-world constraints.",
            p2: "Selected for the Pier Program alongside the top students of my Apple Developer Academy cohort, I deliver end-to-end iOS apps for external clients, from initial requirements to App Store release.",
            p3: "My shipped projects include CowPow!, a medical simulation app used by children and medical staff in South Africa, and LISionario, an Italian Sign Language dictionary powered by a remote-services architecture.",
            p4: "Beyond native mobile, I'm expanding into full-stack development and workflow automation, building data pipelines with Python, n8n, PostgreSQL, and Docker, alongside frontend interfaces in React. I care about building software that genuinely works for the person using it, not just software that looks good in a demo.",
        },
        it: {
            badge: "Chi Sono",
            titlePart1: "Due percorsi tecnici,",
            titlePart2: " un solo mestiere.",
            p1: "Sono uno Sviluppatore iOS (Swift/SwiftUI) con un background in Ingegneria dell'Automazione, una base che influenza il modo in cui costruisco software: preciso, testato a fondo e consapevole dei vincoli del mondo reale.",
            p2: "Selezionato per il Pier Program insieme ai migliori studenti della mia coorte all'Apple Developer Academy, realizzo app iOS end-to-end per clienti esterni, dai requisiti iniziali al rilascio sull'App Store.",
            p3: "Tra i miei progetti rilasciati ci sono CowPow!, un'app di simulazione medica usata da bambini e personale medico in Sudafrica, e LISionario, un dizionario di Lingua dei Segni Italiana basato su un'architettura a servizi remoti.",
            p4: "Oltre al mobile nativo, mi sto espandendo verso lo sviluppo full-stack e l'automazione dei workflow, costruendo pipeline dati con Python, n8n, PostgreSQL e Docker, insieme a interfacce frontend in React. Mi interessa costruire software che funzioni davvero per chi lo usa, non solo software che sembra bello in una demo.",
        }
    };

    const t = translations[lang] || translations.en;

    const p1En = <p>I'm an <strong className="text-white">iOS Developer (Swift/SwiftUI)</strong> with a background in <strong className="text-white">Automation Engineering</strong>, a foundation that shapes how I build software: <strong className="text-white">precise, thoroughly tested, and conscious of real-world constraints</strong>.</p>;
    const p2En = <p>Selected for the <strong className="text-white">Pier Program</strong> alongside the top students of my Apple Developer Academy cohort, I deliver <strong className="text-white">end-to-end iOS apps for external clients</strong>, from initial requirements to App Store release.</p>;
    const p3En = <p>My shipped projects include <strong className="text-white">CowPow!</strong>, a medical simulation app used by children and medical staff in South Africa, and <strong className="text-white">LISionario</strong>, an Italian Sign Language dictionary powered by a remote-services architecture.</p>;
    const p4En = <p>Beyond native mobile, I'm expanding into <strong className="text-white">full-stack development and workflow automation</strong>, building data pipelines with Python, n8n, PostgreSQL, and Docker, alongside frontend interfaces in React. I care about building software that <strong className="text-white">genuinely works for the person using it</strong>, not just software that looks good in a demo.</p>;

    const p1It = <p>Sono uno <strong className="text-white">Sviluppatore iOS (Swift/SwiftUI)</strong> con un background in <strong className="text-white">Ingegneria dell'Automazione</strong>, una base che influenza il modo in cui costruisco software: <strong className="text-white">preciso, testato a fondo e consapevole dei vincoli del mondo reale</strong>.</p>;
    const p2It = <p>Selezionato per il <strong className="text-white">Pier Program</strong> insieme ai migliori studenti della mia coorte all'Apple Developer Academy, realizzo <strong className="text-white">app iOS end-to-end per clienti esterni</strong>, dai requisiti iniziali al rilascio sull'App Store.</p>;
    const p3It = <p>Tra i miei progetti rilasciati ci sono <strong className="text-white">CowPow!</strong>, un'app di simulazione medica usata da bambini e personale medico in Sudafrica, e <strong className="text-white">LISionario</strong>, un dizionario di Lingua dei Segni Italiana basato su un'architettura a servizi remoti.</p>;
    const p4It = <p>Oltre al mobile nativo, mi sto espandendo verso lo <strong className="text-white">sviluppo full-stack e l'automazione dei workflow</strong>, costruendo pipeline dati con Python, n8n, PostgreSQL e Docker, insieme a interfacce frontend in React. Mi interessa costruire software che <strong className="text-white">funzioni davvero per chi lo usa</strong>, non solo software che sembra bello in una demo.</p>;

    const paragraphs = lang === 'it'
        ? [p1It, p2It, p3It, p4It]
        : [p1En, p2En, p3En, p4En];

    return (
        <section id="about" className="pt-10 pb-10 md:pt-32 md:pb-32 relative overflow-hidden">
            {/* Subtle BG glow */}
            <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl -translate-y-1/2 pointer-events-none" />
            <div className="absolute bottom-1/4 right-1/4 w-72 h-72 bg-primary/5 rounded-full blur-3xl pointer-events-none" />

            <div className="container mx-auto px-4 md:px-6 relative z-10">
                <div className="max-w-5xl">

                    {/* Badge + heading */}
                    <div className="text-left mb-8 md:mb-12">
                        <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase animate-fade-in">
                            {t.badge}
                        </span>
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mt-4 animate-fade-in animation-delay-100 text-secondary-foreground leading-tight">
                            {t.titlePart1}
                            <span className="font-serif italic font-normal text-white">
                                {" "}{t.titlePart2}
                            </span>
                        </h2>
                    </div>

                    {/* Bio text */}
                    <div className="space-y-6 text-lg md:text-xl text-muted-foreground leading-relaxed animate-fade-in animation-delay-200">
                        {paragraphs.map((p, i) => (
                            <div key={i}>{p}</div>
                        ))}
                    </div>

                </div>
            </div>
        </section>
    )
}
