import React from "react";
import { Github, Linkedin } from "lucide-react";

const socialLinks = [
    { icon: Github, href: "https://github.com/AideB2B3", label: "GitHub" },
    { icon: Linkedin, href: "https://www.linkedin.com/in/davide-bellobuono/", label: "LinkedIn" },
];

const footLinks = [
    { href: "#about", label: "About" },
    { href: "#projects", label: "Projects" },
    { href: "#experience", label: "Experience" },
    { href: "#education", label: "Education" },
    { href: "#contact", label: "Contact" },
];

export const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="py-10 border-t border-border bg-background">
            <div className="container mx-auto px-6">
                <div className="flex flex-col md:flex-row items-center justify-between gap-10 md:gap-8">

                    {/* SINISTRA: Logo & Copyright */}
                    <div className="flex flex-col items-center md:items-start gap-2 order-3 md:order-1">
                        <a href="#" className="text-2xl font-bold tracking-tight text-foreground transition-opacity hover:opacity-80">
                            DB<span className="text-primary">.</span>
                        </a>
                        <p className="text-sm text-muted-foreground text-center md:text-left">
                            © {currentYear} Davide Bellobuono.
                            <span className="block sm:inline"> All rights reserved.</span>
                        </p>
                    </div>

                    {/* CENTRO: Navigation Links */}
                    <nav className="flex flex-wrap justify-center gap-x-6 gap-y-4 order-1 md:order-2">
                        {footLinks.map((link) => (
                            <a
                                key={link.label}
                                href={link.href}
                                className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors duration-200"
                            >
                                {link.label}
                            </a>
                        ))}
                    </nav>

                    {/* DESTRA: Social Icons */}
                    <div className="flex gap-4 order-2 md:order-3">
                        {socialLinks.map((social) => {
                            const Icon = social.icon;
                            return (
                                <a
                                    key={social.label}
                                    href={social.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="p-3 md:p-2 rounded-full bg-secondary text-muted-foreground hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:scale-110"
                                    aria-label={social.label}
                                >
                                    <Icon size={20} />
                                </a>
                            );
                        })}
                    </div>

                </div>
            </div>
        </footer>
    );
};