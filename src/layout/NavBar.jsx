import { Button } from "@/Components/Button";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";

const navLinks = [
    {href: "#about", label: "About" },
    {href: "#projects", label: "Projects" },
    {href: "#experience", label: "Experience" },
    {href: "#testimonials", label: "Testimonials" },
];

export const Navbar = () => {

    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        }

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // --- FUNZIONE PER LO SCROLL ---
    // Questa funzione cerca l'elemento con id="contact" e ci scorre
    const scrollToContact = () => {
        const contactSection = document.getElementById('contact');
        if (contactSection) {
            contactSection.scrollIntoView({ behavior: 'smooth' });
        }
        // Chiudiamo il menu mobile se per caso è aperto
        setIsMobileMenuOpen(false);
    };

    return (
        <header className={`fixed top-0 left-0 right-0 
        ${isScrolled ? "glass-strong py-3": "bg-transparent py-5"} z-50`}> 
            <nav className="container mx-auto px-6 flex justify-between items-center">
                
                <a href="#" className="text-xl font-bold tracking-tight hover:text-primary">
                    DB<span className="text-primary">.</span>
                </a>

                {/* Desktop Navigation */}
                <div className="hidden md:flex items-center gap-1">
                    <div className="glass rounded-full px-2 py-1 flex items-center gap-1">
                        {navLinks.map((link, index) => (
                            <a href={link.href} key={index} 
                            className="px-4 py-2 text-sm text-muted-foreground hover:text-foreground rounded-full hover:bg-surface transition-colors"> 
                                {link.label}    
                            </a>
                        ))}
                    </div>
                </div>
                
                {/* CTA Button Desktop - CORRETTO */}
                {/* Abbiamo rimosso il tag <a> e usiamo onClick sul bottone */}
                <div className="hidden md:block"> 
                    <Button size="sm" onClick={scrollToContact}>
                        Contact Me
                    </Button> 
                </div>

                {/* Mobile Menu Button */}
                <button className="md:hidden p-2 text-foreground hover:text-primary transition-colors cursor-pointer"
                onClick={() => setIsMobileMenuOpen((prev) => !prev)}>
                    { isMobileMenuOpen ? <X size={24}/> : <Menu size={24}/>}
                </button>
            </nav>

            {/* Mobile Menu */}
            { isMobileMenuOpen && (
            <div className="md:hidden glass-strong animate-fade-in" >
                <div className="container mx-auto px-6 py-6 flex flex-col gap-4">
                {navLinks.map((link, index) => (
                            <a href={link.href} key={index} 
                            className="text-lg text-muted-foreground hover:text-foreground py-2 block"
                            onClick={() => setIsMobileMenuOpen(false)}> 
                                {link.label}    
                            </a>
                        ))}
                        
                        {/* CTA Button Mobile - CORRETTO */}
                        {/* Anche qui usiamo onClick invece di href */}
                        <Button className="w-full" onClick={scrollToContact}>
                            Contact Me
                        </Button>
                </div>
            </div>

            )}
         </header>
    )
}