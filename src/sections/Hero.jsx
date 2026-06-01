import { Button } from "@/Components/Button";
import { ArrowRight, ChevronDown, Github, Linkedin, Download, Smartphone, Cpu, Gamepad2, Wrench, Globe, Palette } from "lucide-react";
import { AnimatedBorderButton } from "../Components/AnimatedBorderButton";

// Particelle generate UNA sola volta al caricamento del modulo (niente impurità nel render)
const PARTICLES = Array.from({ length: 30 }, () => ({
    left: Math.random() * 100,
    top: Math.random() * 100,
    duration: 15 + Math.random() * 20,
    delay: Math.random() * 5,
}));

const techStack = {
    en: [
        { group: "iOS Development", icon: Smartphone, items: ["Swift", "SwiftUI", "SpriteKit", "AVFoundation", "SwiftData"] },
        { group: "Systems & Embedded", icon: Cpu, items: ["C++", "C (Arduino)", "Python"] },
        { group: "Game & Interactive", icon: Gamepad2, items: ["Unity", "C#"] },
        { group: "Web", icon: Globe, items: ["React", "Tailwind"] },
        { group: "Design & Workflow", icon: Palette, items: ["Figma", "Sketch", "Miro"] },
        { group: "Tools & Automation", icon: Wrench, items: ["Git", "Xcode", "Jira", "N8N"] },
    ],
    it: [
        { group: "Sviluppo iOS", icon: Smartphone, items: ["Swift", "SwiftUI", "SpriteKit", "AVFoundation", "SwiftData", "TestFlight"] },
        { group: "Sistemi & Embedded", icon: Cpu, items: ["C++", "C (Arduino)", "Python"] },
        { group: "Game & Interattivo", icon: Gamepad2, items: ["Unity", "C#"] },
        { group: "Web", icon: Globe, items: ["React", "Tailwind"] },
        { group: "Design & Workflow", icon: Palette, items: ["Figma", "Sketch", "Miro"] },
        { group: "Tools & Automation", icon: Wrench, items: ["Git", "Xcode", "Jira", "N8N"] },
    ],
};

export const Hero = ({ lang }) => {

    const t = {
        en: {
            role: "iOS Developer · Automation Engineering Student",
            headlineStart: "From microcontrollers to ",
            headlineEnd: "multitouch.",
            description: "Hi, I'm Davide Bellobuono, an iOS Developer with an engineering background. I build apps for real human problems, from accessibility tools to embedded systems. I'm currently completing my Automation Engineering degree at Federico II while developing iOS at the Apple Developer Academy.",
            contactBtn: "Contact Me",
            downloadBtn: "Download CV",
            follow: "Follow me:",
            tech: "Technologies I work with:",
        },
        it: {
            role: "Sviluppatore iOS · Studente di Ing. dell'Automazione",
            headlineStart: "Dai microcontrollori al ",
            headlineEnd: "multitouch.",
            description: "Ciao, sono Davide Bellobuono, Sviluppatore iOS con un background da ingegnere. Costruisco app per problemi umani concreti, da strumenti di accessibilità a sistemi embedded. Sto concludendo Ingegneria dell'Automazione alla Federico II mentre sviluppo iOS all'Apple Developer Academy.",
            contactBtn: "Contattami",
            downloadBtn: "Scarica CV",
            follow: "Seguimi su:",
            tech: "Tecnologie che utilizzo:",
        }
    };

    const content = t[lang] || t.en;
    const groups = techStack[lang] || techStack.en;

    return (
        <section className="relative min-h-screen flex items-center overflow-hidden">
            {/* background */}
            <div className="absolute inset-0">
                <img src="/Portfolio/hero-bg.png" alt="Hero image" className="w-full h-full object-cover opacity-40" />
                <div className="absolute inset-0 bg-gradient-to-b from-background/20 via-background/80 to-background" />
            </div>

            {/* Green Dots */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                {PARTICLES.map((p, i) => (
                    <div
                        key={i}
                        className="absolute w-1.5 h-1.5 rounded-full opacity-60"
                        style={{
                            backgroundColor: "#20B2A6",
                            left: `${p.left}%`,
                            top: `${p.top}%`,
                            animation: `slow-drift ${p.duration}s ease-in-out infinite`,
                            animationDelay: `${p.delay}s`,
                        }}
                    />
                ))}
            </div>

            {/* Content */}
            <div className="container mx-auto px-6 pt-32 pb-20 relative z-10">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    {/* Left Column  - Text Content */}
                    <div className="space-y-8">
                        <div className="animate-fade-in">
                            <span className="inline-flex items-center gap-2 px-3 py-1.5 sm:px-4 sm:py-2 rounded-full glass text-[11px] sm:text-sm md:text-base text-primary">
                                <span className="w-2 h-2 sm:w-2.5 sm:h-2.5 md:w-3 md:h-3 bg-primary rounded-full animate-pulse flex-shrink-0" />
                                <span>{content.role}</span>
                            </span>
                        </div>

                        {/* Headline */}
                        <div className="space-y-4">
                            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight animate-fade-in animation-delay-100">
                                <span className="text-primary glow-text">{content.headlineStart}</span>
                                <br />
                                <span className="font-serif italic font-normal text-white">
                                    {content.headlineEnd}
                                </span>
                            </h1>

                            {/* Profile Image - Mobile Only (shown after headline) */}
                            <div className="lg:hidden relative animate-fade-in animation-delay-200 my-8">
                                <div className="relative max-w-sm mx-auto">
                                    <div
                                        className="absolute inset-0
                                        rounded-3xl bg-gradient-to-br
                                        from-primary/30 via-transparent
                                        to-primary/10 blur-2xl animate-pulse"
                                    />
                                    <div className="relative glass rounded-3xl p-2 glow-border">
                                        <img alt="Davide Bellobuono" className="w-full aspect-[4/5] object-cover rounded-2xl" src="/Portfolio/profile-photo.png" />

                                        {/* Floating Badge */}
                                        <div className="absolute -bottom-4 -right-4 glass rounded-xl px-4 py-3 animate-float">
                                            <div className="flex items-center gap-3">
                                                <div className="w-3 h-3 bg-yellow-500 rounded-full animate-pulse" />
                                                <span className="text-sm font-medium">
                                                    Pier Program Apple Developer Academy
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <p className=" text-lg text-muted-foreground max-w-lg animate-fade-in animation-delay-800">
                                {content.description}
                            </p>
                        </div>

                        {/* Call To Action */}
                        <div className="flex flex-wrap gap-4 animate-fade-in animation-delay-300">
                            <a href="#contact">
                                <Button size="lg">
                                    {content.contactBtn} <ArrowRight className="w-5 h-5" />
                                </Button>
                            </a>
                            <a href="Davide_Bellobuono_CV.pdf" download="Davide_Bellobuono_CV.pdf">
                                <AnimatedBorderButton>
                                    <Download className="w-5 h-5" />
                                    {content.downloadBtn}
                                </AnimatedBorderButton>
                            </a>
                        </div>

                        {/* SOCIAL LINKS */}
                        <div className="flex flex-wrap items-center gap-3 animate-fade-in animation-delay-400">
                            <span className="text-sm text-muted-foreground w-full sm:w-auto">{content.follow}</span>
                            {[
                                { icon: Github, href: "https://github.com/AideB2B3", label: "GitHub" },
                                { icon: Linkedin, href: "https://www.linkedin.com/in/davide-bellobuono/", label: "LinkedIn" },
                            ].map((social, idx) => (
                                <a
                                    key={idx}
                                    href={social.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass hover:bg-primary/10 hover:text-primary hover:border-primary/50 transition-all duration-300"
                                >
                                    <social.icon className="w-5 h-5" />
                                    <span className="text-sm font-medium">{social.label}</span>
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Right Column - Profile Image (Desktop Only) */}
                    <div className="hidden lg:block relative animate-fade-in animation-delay-300">
                        {/* Profile image */}
                        <div className="relative max-w-md mx-auto">
                            <div
                                className="absolute inset-0
                                rounded-3xl bg-gradient-to-br
                                from-primary/30 via-transparent
                                to-primary/10 blur-2xl animate-pulse"
                            />
                            <div className="relative glass rounded-3xl p-2 glow-border">
                                <img alt="Davide Bellobuono" className="w-full aspect-[4/5] object-cover rounded-2xl" src="/Portfolio/profile-photo.png" />

                                {/* Floating Badge */}
                                <div className="absolute -bottom-4 -right-4 glass rounded-xl px-4 py-3 animate-float">
                                    <div className="flex items-center gap-3">
                                        <div className="w-3 h-3 bg-yellow-500 rounded-full animate-pulse" />
                                        <span className="text-sm font-medium">
                                            Pier Program Apple Developer Academy
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Technology Stack - Grouped Cards */}
                <div className="mt-20 animate-fade-in animation-delay-600 w-full">
                    <p className="text-xs md:text-sm text-muted-foreground mb-8 uppercase tracking-widest text-left">
                        {content.tech}
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                        {groups.map((category, idx) => {
                            const Icon = category.icon;
                            return (
                                <div
                                    key={idx}
                                    className="glass rounded-2xl p-5 border-primary/15 hover:border-primary/40 transition-all duration-300 animate-fade-in"
                                    style={{ animationDelay: `${idx * 100}ms` }}
                                >
                                    {/* Card header: icon + category title */}
                                    <div className="flex items-center gap-3 mb-4">
                                        <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                                            <Icon className="w-4 h-4 text-primary" />
                                        </div>
                                        <span className="text-xs uppercase tracking-widest text-primary/90 font-semibold">
                                            {category.group}
                                        </span>
                                    </div>

                                    {/* Pills */}
                                    <div className="flex flex-wrap gap-1.5">
                                        {category.items.map((item, i) => (
                                            <span
                                                key={i}
                                                className="text-xs font-medium text-foreground/90 bg-white/[0.04] border border-white/[0.08] rounded-full px-3 py-1.5 hover:border-primary/40 hover:text-primary transition-colors duration-200 cursor-default"
                                            >
                                                {item}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
};
