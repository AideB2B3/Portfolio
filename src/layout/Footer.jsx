import { Github, Linkedin } from "lucide-react";

const socialLinks = [
    { icon: Github, href: "#", label: "Github" },
    { icon: Linkedin, href: "#", label: "Linkedin" },
];

const footLinks = [
    { href: "#about", label: "About" },
    { href: "#projects", label: "Projects" },
    { href: "#experience", label: "Experience" },
    {href: "#education", label: "Education" },
    { href: "#contact", label: "Contact" },
];

export const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="py-12 border-t border-border bg-background">
            <div className="container mx-auto px-6">
                <div className="flex flex-col md:flex-row items-center justify-between gap-8">
                    
                    {/* SINISTRA: Logo & Copyright */}
                    <div className="flex flex-col items-center md:items-start gap-2">
                        {/* Logo con il tuo colore Primary */}
                        <a href="#" className="text-2xl font-bold tracking-tight text-foreground">
                            DB<span className="text-primary">.</span>
                        </a>
                        {/* Testo muted basato sulle tue variabili */}
                        <p className="text-sm text-muted-foreground">
                            © {currentYear} Davide Bellobuono. All rights reserved.
                        </p>
                    </div>

                    {/* CENTRO: Navigation Links */}
                    <nav className="flex gap-8">
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
                    <div className="flex gap-4">
                        {socialLinks.map((social) => {
                            const Icon = social.icon;
                            return (
                                <a
                                    key={social.label}
                                    href={social.href}
                                    className="p-2 rounded-full bg-secondary text-muted-foreground hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:scale-110"
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