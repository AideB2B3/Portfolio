import { Gauge, Rocket, GitBranch, Cpu } from "lucide-react"

export const About = ({ lang }) => {

    const translations = {
        en: {
            badge: "About Me",
            titlePart1: "Two technical paths,",
            titlePart2: " one craft.",
            p1: "I'm walking two technical paths in parallel: completing my Automation Engineering degree at Federico II while developing iOS apps at the Apple Developer Academy. The combination is intentional. I want to build software that understands the hardware it runs on.",
            p2: "On the engineering side, I work with C and C++ on embedded systems and microcontrollers, where every byte of memory and every clock cycle matters.",
            p3: "On the iOS side, I build for real human problems. The interfaces I care about have to do more than look good. They have to actually work for the people relying on them.",
            p4: "I bring engineering rigor to design and design empathy to engineering. The two disciplines aren't separate languages for me. They're two halves of building something that actually works for someone.",
            quote: "Good UX starts where the firmware ends, and someone has to speak both languages.",
            highlights: [
                { title: "Performance-Conscious", description: "Profiling with Instruments to make sure apps stay responsive on real devices, not just simulators." },
                { title: "Full-Stack Ownership", description: "From idea to App Store: architecture, logic, and implementation. Not just the easy parts." },
                { title: "Engineering Mindset", description: "Control theory, feedback loops, and system thinking applied to every iOS project." },
                { title: "Embedded + Mobile", description: "From C on microcontrollers to SwiftUI on iPhone. Embedded constraints sharpen how I write mobile." }
            ]
        },
        it: {
            badge: "Chi Sono",
            titlePart1: "Due percorsi tecnici,",
            titlePart2: " un solo mestiere.",
            p1: "Sto portando avanti due percorsi tecnici in parallelo: concludo Ingegneria dell'Automazione alla Federico II mentre sviluppo app iOS all'Apple Developer Academy. La combinazione è voluta. Voglio costruire software che capisce l'hardware su cui gira.",
            p2: "Sul lato ingegneria lavoro con C e C++ su sistemi embedded e microcontrollori, dove ogni byte di memoria e ogni ciclo di clock contano.",
            p3: "Sul lato iOS costruisco per problemi umani concreti. Le interfacce che mi interessano devono fare più che essere belle. Devono davvero funzionare per le persone che le usano.",
            p4: "Porto rigore ingegneristico al design e empatia da designer all'ingegneria. Per me non sono due linguaggi separati. Sono le due metà di qualcosa che funziona davvero per qualcuno.",
            quote: "La buona UX inizia dove finisce il firmware, e qualcuno deve parlare entrambe le lingue.",
            highlights: [
                { title: "Attento alle Performance", description: "Profiling con Instruments per app reattive sui dispositivi reali, non solo nei simulatori." },
                { title: "Ownership End-to-End", description: "Dall'idea all'App Store: architettura, logica e implementazione. Non solo le parti facili." },
                { title: "Mentalità Ingegneristica", description: "Teoria del controllo, retroazione e pensiero per sistemi applicati a ogni progetto iOS." },
                { title: "Embedded + Mobile", description: "Dal C sui microcontrollori a SwiftUI su iPhone. I vincoli embedded affinano come scrivo mobile." }
            ]
        }
    };


    const icons = [Gauge, Rocket, GitBranch, Cpu];
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