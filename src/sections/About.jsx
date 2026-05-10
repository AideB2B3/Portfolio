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
        },
        it: {
            badge: "Chi Sono",
            titlePart1: "Due percorsi tecnici,",
            titlePart2: " un solo mestiere.",
            p1: "Sto portando avanti due percorsi tecnici in parallelo: concludo Ingegneria dell'Automazione alla Federico II mentre sviluppo app iOS all'Apple Developer Academy. La combinazione è voluta. Voglio costruire software che capisce l'hardware su cui gira.",
            p2: "Sul lato ingegneria lavoro con C e C++ su sistemi embedded e microcontrollori, dove ogni byte di memoria e ogni ciclo di clock contano.",
            p3: "Sul lato iOS costruisco per problemi umani concreti. Le interfacce che mi interessano devono fare più che essere belle. Devono davvero funzionare per le persone che le usano.",
            p4: "Porto rigore ingegneristico al design e empatia da designer all'ingegneria. Per me non sono due linguaggi separati. Sono le due metà di qualcosa che funziona davvero per qualcuno.",
        }
    };

    const t = translations[lang] || translations.en;

    return (
        <section id="about" className="pt-10 pb-10 md:pt-32 md:pb-32 relative overflow-hidden">
            {/* Subtle BG glow */}
            <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl -translate-y-1/2 pointer-events-none" />
            <div className="absolute bottom-1/4 right-1/4 w-72 h-72 bg-primary/5 rounded-full blur-3xl pointer-events-none" />

            <div className="container mx-auto px-4 md:px-6 relative z-10">
                <div className="max-w-3xl mx-auto">

                    {/* Badge + heading sopra la card */}
                    <div className="text-center mb-8 md:mb-10">
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

                    {/* Bio in glass card per dare ancora visiva */}
                    <div className="glass rounded-2xl md:rounded-3xl p-6 md:p-10 border-primary/10 relative overflow-hidden animate-fade-in animation-delay-200">
                        <div className="absolute -top-20 -right-20 w-64 h-64 bg-primary/5 rounded-full blur-3xl pointer-events-none" />
                        <div className="space-y-4 text-muted-foreground leading-relaxed relative">
                            <p>{t.p1}</p>
                            <p>{t.p2}</p>
                            <p>{t.p3}</p>
                            <p>{t.p4}</p>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    )
}
