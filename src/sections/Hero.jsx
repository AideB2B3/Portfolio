import { Button } from "@/Components/Button";
import { ArrowRight, ChevronDown, Github, Linkedin, Download } from "lucide-react";
import { AnimatedBorderButton } from "../Components/AnimatedBorderButton";

const skills = [
    "C++",
    "C",
    "C#",
    "Java",
    "Python",
    "CSS",
    "HTML",
    "JavaScript",
    "ReactJS",
    "SwiftUI",
    "Unity",
    "Git",
]

export const Hero = ({ lang }) => {

    const t = {
        en: {
            role: "Automation Engineer - iOS Developer",
            headlineStart: "Engineering ",
            headlineGlow: "Logic",
            headlineMiddle: "meets",
            headlineEnd: "Intuitive Design.",
            description: "Hi, I'm Davide Bellobuono. Currently mastering Automation Engineering and iOS Development at Federico II. My focus is on crafting efficient systems and engaging digital products through code and design.",
            contactBtn: "Contact Me",
            downloadBtn: "Download CV",
            follow: "Follow me: ",
            tech: "Technologies I work with:",
        },
        it: {
            role: "Ing. dell'Automazione - Sviluppatore iOS",
            headlineStart: "Logica ",
            headlineGlow: "Ingegneristica",
            headlineMiddle: "incontra il",
            headlineEnd: "Design Intuitivo.",
            description: "Ciao, sono Davide Bellobuono. Sto perfezionando i miei studi in Ingegneria dell'Automazione e sviluppo iOS alla Federico II. Il mio obiettivo è creare sistemi efficienti ed esperienze digitali coinvolgenti, unendo codice e design.",
            contactBtn: "Contattami",
            downloadBtn: "Scarica CV",
            follow: "Seguimi su: ",
            tech: "Tecnologie che utilizzo:",
        }
    };

    const content = t[lang] || t.en;

    return (
        <section className="relative min-h-screen flex items-center overflow-hidden">
            {/* background */}
            <div className="absolute inset-0">
                <img src="/Portfolio/hero-bg.png" alt="Hero image" className="w-full h-full object-cover opacity-40" />
                <div className="absolute inset-0 bg-gradient-to-b from-background/20 via-background/80 to-background" />
            </div>

            {/* Green Dots */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                {[...Array(30)].map((_, i) => (
                    <div
                        key={i}
                        className="absolute w-1.5 h-1.5 rounded-full opacity-60"
                        style={{
                            backgroundColor: "#20B2A6",
                            left: `${Math.random() * 100}%`,
                            top: `${Math.random() * 100}%`,
                            animation: `slow-drift ${15 + Math.random() * 20}s ease-in-out infinite`,
                            animationDelay: `${Math.random() * 5}s`,
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
                            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-l text-primary">
                                <span className="w-3 h-3 bg-primary rounded-full animate-pulse" />
                                {content.role}
                            </span>
                        </div>

                        {/* Headline */}
                        <div className="space-y-4">
                            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight animate-fade-in animation-delay-100">
                                <span className="text-primary glow-text">Engineering Logic</span>
                                <br />
                                meets
                                <br />
                                <span className="font-serif italic font-normal text-white">
                                    Intuitive Design.
                                </span>
                            </h1>
                            <p className=" text-lg text-muted-foreground max-w-lg animate-fade-in animation-delay-800">
                                {content.description}
                            </p>
                        </div>

                        {/* <div className="space-y-4">
                            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight animate-fade-in animation-delay-100">
                                <span className="text-primary glow-text">{content.headlineStart}{content.headlineGlow}</span>
                                <br />
                                {content.headlineMiddle}
                                <br />
                                <span className="font-serif italic font-normal text-white">
                                    {content.headlineEnd}
                                </span>
                            </h1>
                            <p className=" text-lg text-muted-foreground max-w-lg animate-fade-in animation-delay-800">
                                {content.description}
                            </p>
                        </div> */}

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
                        <div className="flex items-center gap-4 animate-fade-in animation-delay-400">
                            <span className="text-sm text-muted-foreground">{content.follow}</span>
                            {[
                                { icon: Github, href: "https://github.com/AideB2B3" },
                                { icon: Linkedin, href: "https://www.linkedin.com/in/davide-bellobuono/" },
                            ].map((social, idx) => (
                                <a key={idx} href={social.href} target="_blank" rel="noopener noreferrer" className="p-2 rounded-full glass hover:bg-primary/10 hover:text-primary transition-all duration-300">
                                    {<social.icon className="w-5 h-5" />}
                                </a>
                            ))}
                        </div>
                    </div>
                    {/* Right Column  - Profile Image */}
                    <div className="relative animate-fade-in animation-delay-300">
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
                {/* Skill Section */}
                <div className="mt-20 animate-fade-in animation-delay-600 w-full">
                    <p className="text-xs md:text-sm text-muted-foreground mb-6 uppercase tracking-widest text-left">
                        {content.tech}
                    </p>

                    <div className="relative group">
                        <div className="hidden md:block absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-[var(--color-background)] to-transparent z-10 pointer-events-none"></div>
                        <div className="hidden md:block absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-[var(--color-background)] to-transparent z-10 pointer-events-none"></div>
                        <div className="overflow-x-auto no-scrollbar touch-pan-x">
                            <div
                                className="flex w-max animate-marquee group-hover:animate-none py-4"
                                style={{ animationDelay: "15s" }}
                            >
                                {[...skills, ...skills].map((skill, idx) => (
                                    <div key={idx} className="flex-shrink-0 px-6 md:px-12">
                                        <span className="text-lg md:text-2xl font-semibold text-muted-foreground/30 hover:text-primary hover:scale-110 transition-all duration-300 cursor-default inline-block select-none">
                                            {skill}
                                        </span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};