import React from "react";
import { Github, Linkedin, Mail, ArrowUp } from "lucide-react";

export const Footer = ({ lang = "it" }) => {
    const currentYear = new Date().getFullYear();

    const t = {
        en: {
            connectLabel: "Connect",
            backToTop: "Back to top",
            rights: "All rights reserved.",
            builtWith: "Built with React, Tailwind & care.",
        },
        it: {
            connectLabel: "Contatti",
            backToTop: "Torna su",
            rights: "Tutti i diritti riservati.",
            builtWith: "Costruito con React, Tailwind & cura.",
        },
    };

    const content = t[lang] || t.en;

    const socialLinks = [
        { icon: Github, href: "https://github.com/AideB2B3", label: "GitHub" },
        { icon: Linkedin, href: "https://www.linkedin.com/in/davide-bellobuono/", label: "LinkedIn" },
        { icon: Mail, href: "mailto:davide23bellobuono@gmail.com", label: "Email" },
    ];

    return (
        <footer className="relative pt-8 pb-6 md:pt-10 md:pb-7 border-t border-border/50 bg-background overflow-hidden">
            {/* Subtle BG glow consistent with other sections */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[28rem] h-24 bg-primary/5 rounded-full blur-3xl pointer-events-none" />

            <div className="container mx-auto px-4 md:px-6 relative z-10">

                {/* Top section */}
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 md:gap-8 mb-6 md:mb-8">

                    {/* Row 1 mobile (DB + Back to top) / desktop (just DB) */}
                    <div className="flex items-center justify-between md:justify-start gap-4">
                        <a
                            href="#"
                            className="inline-block text-2xl font-bold tracking-tight text-foreground hover:text-primary transition-colors"
                        >
                            DB<span className="text-primary">.</span>
                        </a>

                        {/* Back to top: visible only on mobile here, on desktop it's centered separately */}
                        <a
                            href="#"
                            aria-label={content.backToTop}
                            className="md:hidden group inline-flex items-center gap-2 px-4 py-2 rounded-full glass hover:border-primary/40 hover:text-primary transition-all duration-300"
                        >
                            <ArrowUp className="w-4 h-4 group-hover:-translate-y-0.5 transition-transform" />
                            <span className="text-sm font-medium">{content.backToTop}</span>
                        </a>
                    </div>

                    {/* Back to top — center column, desktop only */}
                    <div className="hidden md:flex md:justify-center">
                        <a
                            href="#"
                            aria-label={content.backToTop}
                            className="group inline-flex items-center gap-2.5 px-5 py-2.5 rounded-full glass hover:border-primary/40 hover:text-primary transition-all duration-300"
                        >
                            <ArrowUp className="w-4 h-4 group-hover:-translate-y-0.5 transition-transform" />
                            <span className="text-sm font-medium">{content.backToTop}</span>
                        </a>
                    </div>

                    {/* Connect column */}
                    <div className="flex items-center justify-center md:justify-end gap-3">
                        <span className="text-xs uppercase tracking-widest text-primary/80 font-semibold mr-1 md:mr-2">
                            {content.connectLabel}
                        </span>
                        {socialLinks.map((social) => {
                            const Icon = social.icon;
                            return (
                                <a
                                    key={social.label}
                                    href={social.href}
                                    target={social.href.startsWith("http") ? "_blank" : undefined}
                                    rel={social.href.startsWith("http") ? "noopener noreferrer" : undefined}
                                    aria-label={social.label}
                                    className="w-9 h-9 md:w-10 md:h-10 rounded-full glass flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/40 transition-all duration-300 hover:scale-105"
                                >
                                    <Icon className="w-4 h-4" />
                                </a>
                            );
                        })}
                    </div>
                </div>

                {/* Bottom strip: copyright · built-with */}
                <div className="pt-4 md:pt-5 border-t border-border/30 flex flex-col md:flex-row items-center justify-between gap-2 text-xs text-muted-foreground">
                    <p className="text-center md:text-left">
                        © {currentYear} Davide Bellobuono. {content.rights}
                    </p>
                    <p className="text-center md:text-right">
                        {content.builtWith}
                    </p>
                </div>
            </div>
        </footer>
    );
};
