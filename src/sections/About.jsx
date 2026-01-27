import { Code2, Lightbulb, Rocket, Users } from "lucide-react"

export const About = ({ lang }) => {

    // Oggetto con le traduzioni complete
    const translations = {
        en: {
            badge: "About Me",
            titlePart1: "Developing with passion,",
            titlePart2: " designing for people.",
            p1: "I like to think of development as a way to create something useful that can truly simplify people's lives. When I'm passionate about a project, I get so into the flow that I forget everything around me — that's when I feel in my element.",
            p2: "I have a background in Automation Engineering from the University Federico II, where I learned to think in a logical and structured way. I've always loved robots and automated systems, and the idea of improving daily life through technology has always fascinated me.",
            p3: "Currently, I am continuing my journey at the Apple Developer Academy, where I'm learning not only SwiftUI and Unity development, but also the value of collaboration, creative thinking, and human-centered design. It's an environment that's helping me challenge myself, build a solid network, and discover how technology can be a deeply human and inclusive tool.",
            p4: "In my work, I always strive to collaborate by listening to others and contributing to project decisions or team problem-solving. I would define myself as a skilled mediator, capable of bringing strong empathy to the group.",
            quote: "I strongly believe that a great project starts first and foremost with a positive and cohesive team spirit.",
            highlights: [
                { title: "Clean Code", description: "Writing maintainable, scalable code that stands the test of time." },
                { title: "Performance", description: "Optimizing for speed and delivering lightning-fast user experiences." },
                { title: "Collaboration", description: "Working closely with others to bring ideas to life." },
                { title: "Innovation", description: "Staying ahead with the latest technologies and best practices." }
            ]
        },
        it: {
            badge: "Chi Sono",
            titlePart1: "Sviluppare con passione,",
            titlePart2: " progettare per le persone.",
            p1: "Mi piace vedere lo sviluppo come un mezzo per creare qualcosa di utile, capace di semplificare davvero la vita delle persone. Quando mi appassiono a un progetto, mi immergo così tanto nel flusso di lavoro da dimenticare tutto ciò che mi circonda: è in quel momento che mi sento davvero nel mio elemento.",
            p2: "Il mio percorso parte dall'Ingegneria dell'Automazione presso l'Università Federico II, dove ho imparato a pensare in modo logico e strutturato. Ho sempre amato la robotica e i sistemi automatizzati; l'idea di migliorare la quotidianità attraverso la tecnologia è qualcosa che mi ha sempre affascinato.",
            p3: "Attualmente sto proseguendo il mio cammino alla Apple Developer Academy. Qui non sto solo approfondendo lo sviluppo in SwiftUI e Unity, ma sto scoprendo il valore della collaborazione, del pensiero creativo e dello Human-Centered Design. È un ambiente che mi spinge a mettermi in gioco, a costruire un network solido e a scoprire come la tecnologia possa essere uno strumento profondamente umano e inclusivo.",
            p4: "Nel lavoro, punto sempre alla collaborazione: ascolto gli altri e contribuisco attivamente alle decisioni di progetto e al problem-solving di squadra. Mi definirei un mediatore attento, capace di portare una forte empatia all'interno del gruppo.",
            quote: "Credo fermamente che un grande progetto nasca, prima di tutto, da uno spirito di squadra positivo e coeso.",
            highlights: [
                { title: "Clean Code", description: "Scrivere codice scalabile e manutenibile, fatto per durare nel tempo." },
                { title: "Performance", description: "Ottimizzare la velocità per offrire esperienze utente fluide e immediate." },
                { title: "Collaborazione", description: "Lavorare a stretto contatto con gli altri per dare vita alle idee." },
                { title: "Innovazione", description: "Restare sempre al passo con le ultime tecnologie e le best practices." }
            ]
        }
    };


    const icons = [Code2, Rocket, Users, Lightbulb];
    const t = translations[lang] || translations.en;

    return (
        <section id="about" className="py-32 relative overflow-hidden">
            <div className="container mx-auto px-6 relative z-10">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    {/* Left Column */}
                    <div className="space-y-8">
                        <div className="animate-fade-in">
                            <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase">
                                {t.badge}
                            </span>
                        </div>

                        <h2 className="text-4xl md:text-5xl font-bold animate-fade-in animation-delay-100 text-secondary-foreground">
                            {t.titlePart1}
                            <span className="font-serif italic font-normal text-white">
                                {" "}{t.titlePart2}
                            </span>
                        </h2>

                        <div className="space-y-4 text-muted-foreground animate-fade-in animation-delay-200">
                            <p dangerouslySetInnerHTML={{ __html: t.p1.replace("strong", "strong") }} />
                            <p>{t.p2}</p>
                            <p>{t.p3}</p>
                            <p>{t.p4}</p>
                        </div>

                        <div className="glass rounded-2xl p-6 glow-border animate-fade-in animation-delay-300">
                            <p className="text-lg font-medium italic text-foreground">
                                "{t.quote}"
                            </p>
                        </div>
                    </div>

                    {/* Right Column - Highlights */}
                    <div className="grid sm:grid-cols-2 gap-6">
                        {t.highlights.map((item, idx) => {
                            const Icon = icons[idx];
                            return (
                                <div
                                    key={idx}
                                    className="glass p-6 rounded-2xl animate-fade-in"
                                    style={{ animationDelay: `${(idx + 1) * 100}ms` }}
                                >
                                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 hover:bg-primary/20">
                                        <Icon className="w-6 h-6 text-primary" />
                                    </div>
                                    <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                                    <p className="text-sm text-muted-foreground">{item.description}</p>
                                </div>
                            )
                        })}
                    </div>

                </div>
            </div>
        </section>
    )
}