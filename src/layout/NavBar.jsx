import { Button } from "@/Components/Button";
import { Menu, X, Languages } from "lucide-react";
import { useEffect, useState } from "react";

export const Navbar = ({ lang, setLang }) => {

    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    // Definisco i link con entrambe le lingue
    const navLinks = [
        { href: "#about", label: lang === "en" ? "About" : "Chi Sono" },
        { href: "#projects", label: lang === "en" ? "Projects" : "Progetti" },
        { href: "#experience", label: lang === "en" ? "Experience" : "Esperienza" },
        { href: "#education", label: lang === "en" ? "Education" : "Formazione" },
    ];

    const toggleLanguage = () => {
        setLang(prev => prev === "en" ? "it" : "en");
    };

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        }

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const scrollToContact = () => {
        const contactSection = document.getElementById('contact');
        if (contactSection) {
            contactSection.scrollIntoView({ behavior: 'smooth' });
        }
        setIsMobileMenuOpen(false);
    };

    return (
        <header className={`fixed top-0 left-0 right-0 
        ${isScrolled ? "glass-strong py-3" : "bg-transparent py-5"} z-50 transition-all duration-100`}>
            <nav className="container mx-auto px-6 flex justify-between items-center relative">

                {/* Logo */}
                <a href="#" className="text-xl font-bold tracking-tight hover:text-primary z-20">
                    DB<span className="text-primary">.</span>
                </a>

                {/* Desktop Navigation */}
                <div className="hidden md:flex items-center gap-1 absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
                    <div className="glass rounded-full px-2 py-1 flex items-center gap-1">
                        {navLinks.map((link, index) => (
                            <a href={link.href} key={index}
                                className="px-4 py-2 text-sm text-muted-foreground hover:text-foreground rounded-full hover:bg-surface transition-colors">
                                {link.label}
                            </a>
                        ))}
                    </div>
                </div>

                {/* CTA Button & Language Desktop */}
                <div className="hidden md:flex items-center gap-4 z-20">

                    {/* Tasto Cambio Lingua */}
                    <button
                        onClick={toggleLanguage}
                        className="flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
                    >
                        <Languages size={18} />
                        <span className="uppercase">{lang}</span>
                    </button>

                    <Button size="sm" onClick={scrollToContact}>
                        {lang === "en" ? "Contact Me" : "Contattami"}
                    </Button>
                </div>

                {/* Mobile Menu Button & Language Mobile */}
                <div className="flex md:hidden items-center gap-4 z-20">
                    <button onClick={toggleLanguage} className="text-muted-foreground hover:text-primary">
                        <span className="font-bold uppercase text-sm">{lang}</span>
                    </button>

                    <button className="p-2 text-foreground hover:text-primary transition-colors cursor-pointer"
                        onClick={() => setIsMobileMenuOpen((prev) => !prev)}>
                        {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>
            </nav>

            {/* Mobile Menu */}
            {isMobileMenuOpen && (
                <div className="md:hidden glass-strong animate-fade-in" >
                    <div className="container mx-auto px-6 py-6 flex flex-col gap-4">
                        {navLinks.map((link, index) => (
                            <a href={link.href} key={index}
                                className="text-lg text-muted-foreground hover:text-foreground py-2 block"
                                onClick={() => setIsMobileMenuOpen(false)}>
                                {link.label}
                            </a>
                        ))}

                        {/* CTA Button Mobile */}
                        <Button className="w-full" onClick={scrollToContact}>
                            {lang === "en" ? "Contact Me" : "Contattami"}
                        </Button>
                    </div>
                </div>

            )}
        </header>
    )
}