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

    const p1En = <p>I'm walking <strong className="text-white">two technical paths</strong> in parallel: completing my <strong className="text-white">Automation Engineering degree at Federico II</strong> while developing <strong className="text-white">iOS apps at the Apple Developer Academy</strong>. The combination is intentional. I want to build <strong className="text-white">software that understands the hardware it runs on</strong>.</p>;
    const p2En = <p>On the engineering side, I work with <strong className="text-white">C and C++</strong> on <strong className="text-white">embedded systems and microcontrollers</strong>, where every byte of memory and every clock cycle matters.</p>;
    const p3En = <p>On the iOS side, I build for <strong className="text-white">real human problems</strong>. The interfaces I care about have to do more than look good. They have to <strong className="text-white">actually work</strong> for the people relying on them.</p>;
    const p4En = <p>I bring <strong className="text-white">engineering rigor to design</strong> and <strong className="text-white">design empathy to engineering</strong>. The two disciplines aren't separate languages for me. They're two halves of building something that actually works for someone.</p>;

    const p1It = <p>Sto portando avanti <strong className="text-white">due percorsi tecnici</strong> in parallelo: concludo <strong className="text-white">Ingegneria dell'Automazione alla Federico II</strong> mentre sviluppo <strong className="text-white">app iOS all'Apple Developer Academy</strong>. La combinazione è voluta. Voglio costruire <strong className="text-white">software che capisce l'hardware su cui gira</strong>.</p>;
    const p2It = <p>Sul lato ingegneria lavoro con <strong className="text-white">C e C++</strong> su <strong className="text-white">sistemi embedded e microcontrollori</strong>, dove ogni byte di memoria e ogni ciclo di clock contano.</p>;
    const p3It = <p>Sul lato iOS costruisco per <strong className="text-white">problemi umani concreti</strong>. Le interfacce che mi interessano devono fare più che essere belle. Devono <strong className="text-white">davvero funzionare</strong> per le persone che le usano.</p>;
    const p4It = <p>Porto <strong className="text-white">rigore ingegneristico al design</strong> ed <strong className="text-white">empatia da designer all'ingegneria</strong>. Per me non sono due linguaggi separati. Sono le due metà di qualcosa che funziona davvero per qualcuno.</p>;

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
