import React from "react";
import { Github, Linkedin, Mail, ArrowUp } from "lucide-react";

export const Footer = ({ lang = "it" }) => {
    const currentYear = new Date().getFullYear();

    const t = {
        en: {
            navLabel: "Navigate",
            connectLabel: "Connect",
            backToTop: "Back to top",
            rights: "All rights reserved.",
            builtWith: "Built with React, Tailwind & care.",
        },
        it: {
            navLabel: "Naviga",
            connectLabel: "Contatti",
            backToTop: "Torna su",
            rights: "Tutti i diritti riservati.",
            builtWith: "Costruito con React, Tailwind & cura.",
        },
    };

    const content = t[lang] || t.en;

    const navLinks = [
        { href: "#about", label: lang === "en" ? "About" : "Chi Sono" },
        { href: "#projects", label: lang === "en" ? "Projects" : "Progetti" },
        { href: "#experience", label: lang === "en" ? "Experience" : "Esperienza" },
        { href: "#contact", label: lang === "en" ? "Contact" : "Contattami" },
    ];

    const socialLinks = [
        { icon: Github, href: "https://github.com/AideB2B3", label: "GitHub" },
        { icon: Linkedin, href: "https://www.linkedin.com/in/davide-bellobuono/", label: "LinkedIn" },
        { icon: Mail, href: "mailto:davide23bellobuono@gmail.com", label: "Email" },
    ];

    return (
        <footer className="relative pt-12 pb-8 md:pt-16 md:pb-10 border-t border-border/50 bg-background overflow-hidden">
            {/* Subtle BG glow consistent with other sections */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[32rem] h-32 bg-primary/5 rounded-full blur-3xl pointer-events-none" />

            <div className="container mx-auto px-4 md:px-6 relative z-10">

                {/* Top section: logo · navigate · connect */}
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-10 md:gap-8 mb-10 md:mb-12">

                    {/* Brand: logo only */}
                    <div className="flex justify-center md:justify-start">
                        <a
                            href="#"
                            className="inline-block text-2xl font-bold tracking-tight text-foreground hover:text-primary transition-colors"
                        >
                            DB<span className="text-primary">.</span>
                        </a>
                    </div>

                    {/* Navigate column */}
                    <div className="text-center md:text-left">
                        <h4 className="text-xs uppercase tracking-widest text-primary/80 font-semibold mb-4">
                            {content.navLabel}
                        </h4>
                        <nav className="flex flex-col gap-2.5 items-center md:items-start">
                            {navLinks.map((link) => (
                                <a
                                    key={link.label}
                                    href={link.href}
                                    className="text-sm text-muted-foreground hover:text-primary transition-colors duration-200"
                                >
                                    {link.label}
                                </a>
                            ))}
                        </nav>
                    </div>

                    {/* Connect column */}
                    <div className="text-center md:text-left">
                        <h4 className="text-xs uppercase tracking-widest text-primary/80 font-semibold mb-4">
                            {content.connectLabel}
                        </h4>
                        <div className="flex justify-center md:justify-start gap-3">
                            {socialLinks.map((social) => {
                                const Icon = social.icon;
                                return (
                                    <a
                                        key={social.label}
                                        href={social.href}
                                        target={social.href.startsWith("http") ? "_blank" : undefined}
                                        rel={social.href.startsWith("http") ? "noopener noreferrer" : undefined}
                                        aria-label={social.label}
                                        className="w-10 h-10 rounded-full glass flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/40 transition-all duration-300 hover:scale-105"
                                    >
                                        <Icon className="w-4 h-4" />
                                    </a>
                                );
                            })}
                        </div>
                    </div>
                </div>

                {/* Bottom strip: copyright · built-with · back-to-top */}
                <div className="pt-6 md:pt-8 border-t border-border/30 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-muted-foreground">
                    <p className="text-center md:text-left">
                        © {currentYear} Davide Bellobuono. {content.rights}
                    </p>

                    <p className="hidden md:block text-center order-3 md:order-2">
                        {content.builtWith}
                    </p>

                    <a
                        href="#"
                        aria-label={content.backToTop}
                        className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full glass hover:text-primary hover:border-primary/40 transition-all duration-300 group order-2 md:order-3"
                    >
                        <ArrowUp className="w-3 h-3 group-hover:-translate-y-0.5 transition-transform" />
                        <span>{content.backToTop}</span>
                    </a>

                    {/* Mobile-only "Built with" line below */}
                    <p className="md:hidden text-center order-4">
                        {content.builtWith}
                    </p>
                </div>
            </div>
        </footer>
    );
};
