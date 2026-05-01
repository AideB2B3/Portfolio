import { Code2, Lightbulb, Rocket, Users } from "lucide-react"

export const About = ({ lang }) => {

    const translations = {
        en: {
            badge: "About Me",
            titlePart1: "Two technical paths,",
            titlePart2: " one craft.",
            p1: "I'm walking two technical paths in parallel: completing my Automation Engineering degree at Federico II while developing iOS apps at the Apple Developer Academy. The combination is intentional. I want to build software that understands the hardware it runs on.",
            p2: "On the engineering side, I work with C and C++ on embedded systems and microcontrollers, where every byte of memory and every clock cycle matters. That mindset stays with me when I write Swift.",
            p3: "On the iOS side, I've been building apps for real human problems. I'm currently working on Lisionario, an in-progress accessibility tool for the deaf community where the interface has to do more than look good. It has to bridge a real communication gap.",
            p4: "I bring engineering rigor to design and design empathy to engineering. The two disciplines aren't separate languages for me. They're two halves of building something that actually works for someone.",
            quote: "Good UX starts where the firmware ends, and someone has to speak both languages.",
            highlights: [
                { title: "Engineering Rigor", description: "Hardware-aware thinking applied to software, where constraints sharpen design." },
                { title: "Performance", description: "Profiling with Instruments to ship apps that stay responsive on real devices." },
                { title: "Human-Centered", description: "Building for accessibility and real-world use cases, not just happy paths." },
                { title: "Cross-Stack", description: "Comfortable from C on microcontrollers to SwiftUI on iPhone." }
            ]
        },
        it: {
            badge: "Chi Sono",
            titlePart1: "Due percorsi tecnici,",
            titlePart2: " un solo mestiere.",
            p1: "Sto portando avanti due percorsi tecnici in parallelo: concludo Ingegneria dell'Automazione alla Federico II mentre sviluppo app iOS all'Apple Developer Academy. La combinazione è voluta. Voglio costruire software che capisce l'hardware su cui gira.",
            p2: "Sul lato ingegneria lavoro con C e C++ su sistemi embedded e microcontrollori, dove ogni byte di memoria e ogni ciclo di clock contano. Questa mentalità me la porto dietro quando scrivo Swift.",
            p3: "Sul lato iOS sto costruendo app per problemi umani concreti. Attualmente lavoro a Lisionario, uno strumento di accessibilità in sviluppo per la comunità sorda, dove l'interfaccia deve fare più che essere bella. Deve colmare un vero divario comunicativo.",
            p4: "Porto rigore ingegneristico al design e empatia da designer all'ingegneria. Per me non sono due linguaggi separati. Sono le due metà di qualcosa che funziona davvero per qualcuno.",
            quote: "La buona UX inizia dove finisce il firmware, e qualcuno deve parlare entrambe le lingue.",
            highlights: [
                { title: "Rigore Ingegneristico", description: "Pensiero hardware-aware applicato al software, dove i vincoli affinano il design." },
                { title: "Performance", description: "Profiling con Instruments per pubblicare app reattive su dispositivi reali." },
                { title: "Centrato sulle persone", description: "Costruisco per accessibilità e casi d'uso concreti, non solo per gli happy path." },
                { title: "Cross-Stack", description: "A mio agio dal C sui microcontrollori a SwiftUI su iPhone." }
            ]
        }
    };


    const icons = [Code2, Rocket, Users, Lightbulb];
    const t = translations[lang] || translations.en;

    return (
        <section id="about" className="pt-10 pb-10 md:pt-32 md:pb-32 relative overflow-hidden">
            <div className="container mx-auto px-4 md:px-6 relative z-10">
                <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
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