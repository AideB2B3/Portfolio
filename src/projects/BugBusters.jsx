import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Code2, Rocket, Calendar, User } from 'lucide-react';

const BugBusters = ({ lang }) => {
  // Riporta lo scroll in alto al caricamento della pagina
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Gestione Traduzioni
  const content = {
    en: {
      back: "Back to Home",
      welcome: "Welcome to the Project",
      clientLabel: "Client",
      clientValue: "Apple Academy Project",
      serviceLabel: "Service",
      serviceValue: "Game Design & Dev",
      techLabel: "Technology",
      yearLabel: "Year",
      challengeTitle: "The Challenge",
      challengeDesc: "Bug Busters was born from the curiosity to move from player to creator. The main challenge was managing the complex logic of an arcade shooter: from enemy lifecycle management to progressive difficulty balancing to make the experience dynamic and engaging.",
      deepDiveTitle: "Deep Dive",
      deepDiveDesc: "Developing this title allowed me to tackle the real-world complexities of game logic, honing my skills in SpriteKit and audio asset management.",
      techDesc: "The project was developed entirely natively for the Apple ecosystem, leveraging the power of SpriteKit for graphical performance."
    },
    it: {
      back: "Torna alla Home",
      welcome: "Benvenuto nel Progetto",
      clientLabel: "Cliente",
      clientValue: "Progetto Apple Academy",
      serviceLabel: "Servizio",
      serviceValue: "Game Design & Sviluppo",
      techLabel: "Tecnologia",
      yearLabel: "Anno",
      challengeTitle: "La Sfida",
      challengeDesc: "Bug Busters nasce dalla curiosità di passare da giocatore a creatore. La sfida principale è stata gestire la logica complessa di un arcade shooter: dalla gestione del ciclo di vita dei nemici a schermo fino al bilanciamento progressivo della difficoltà per rendere l'esperienza dinamica e stimolante.",
      deepDiveTitle: "Approfondimento",
      deepDiveDesc: "Sviluppare questo titolo mi ha permesso di scontrarmi con le complessità reali della logica di gioco, affinando le mie competenze in SpriteKit e nella gestione degli asset audio.",
      techDesc: "Il progetto è stato interamente sviluppato nativamente per l'ecosistema Apple, sfruttando le potenzialità di SpriteKit per le performance grafiche."
    }
  };

  const t = content[lang] || content.en;

  return (
    // MODIFICA: Aggiunto pt-20 (mobile) e pt-32 (desktop) per distanziare dalla Navbar
    <div className="min-h-screen bg-background text-foreground pb-20 pt-20 md:pt-32">

      {/* Hero Section Progetto */}
      <header className="container mx-auto px-6 pt-10 pb-16">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-8 uppercase tracking-widest">
          <div className="space-y-4">
            <h2 className="text-primary text-sm font-bold animate-fade-in text-shadow">
              {t.welcome}
            </h2>
            <h1 className="text-6xl md:text-8xl font-bold animate-fade-in animation-delay-100">
              Bug<span className="text-primary italic font-serif font-normal">Busters</span>
            </h1>
          </div>
          {/* Icona/Logo Progetto */}
          <div className="w-24 h-24 rounded-2xl glass flex items-center justify-center p-4 animate-float border border-primary/20">
             <img src="Projects/Bug_busters.png" alt="Logo" className="w-full h-full object-contain rounded-lg" />
          </div>
        </div>

        {/* Info Grid (Cliente, Servizio, Anno) */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 pt-8 border-t border-border/30 animate-fade-in animation-delay-200">
          <div className="space-y-2">
            <p className="text-muted-foreground text-[10px] md:text-xs uppercase flex items-center gap-2 tracking-widest">
              <User className="w-3 h-3 text-primary" /> {t.clientLabel}
            </p>
            <p className="font-medium text-sm md:text-base">{t.clientValue}</p>
          </div>
          <div className="space-y-2">
            <p className="text-muted-foreground text-[10px] md:text-xs uppercase flex items-center gap-2 tracking-widest">
              <Rocket className="w-3 h-3 text-primary" /> {t.serviceLabel}
            </p>
            <p className="font-medium text-sm md:text-base">{t.serviceValue}</p>
          </div>
          <div className="space-y-2">
            <p className="text-muted-foreground text-[10px] md:text-xs uppercase flex items-center gap-2 tracking-widest">
              <Code2 className="w-3 h-3 text-primary" /> {t.techLabel}
            </p>
            <p className="font-medium text-sm md:text-base">Swift & SwiftUI</p>
          </div>
          <div className="space-y-2">
            <p className="text-muted-foreground text-[10px] md:text-xs uppercase flex items-center gap-2 tracking-widest">
              <Calendar className="w-3 h-3 text-primary" /> {t.yearLabel}
            </p>
            <p className="font-medium text-sm md:text-base">2025</p>
          </div>
        </div>
      </header>

      {/* Main Content Area */}
      <section className="container mx-auto px-6 grid md:grid-cols-3 gap-12 mt-10">
        
        {/* Colonna Sinistra: The Challenge */}
        <div className="md:col-span-2 space-y-8">
          <div className="glass p-8 md:p-12 rounded-3xl space-y-6">
            <h3 className="text-3xl font-bold tracking-tight">{t.challengeTitle}</h3>
            <p className="text-muted-foreground leading-relaxed text-lg">
              {t.challengeDesc}
            </p>
            <div className="pt-6">
               <div className="h-1.5 w-20 bg-primary rounded-full shadow-[0_0_10px_rgba(32,178,166,0.5)]"></div>
            </div>
          </div>

          {/* Box Secondario Deep Dive */}
          <div className="bg-primary/5 border border-primary/20 p-8 md:p-12 rounded-3xl">
             <h4 className="text-2xl font-bold mb-4 italic font-serif text-primary">{t.deepDiveTitle}</h4>
             <p className="text-muted-foreground leading-relaxed italic text-lg">
               "{t.deepDiveDesc}"
             </p>
          </div>
        </div>

        {/* Colonna Destra: Sidebar Tecnologie */}
        <div className="space-y-6">
          <div className="glass-strong p-8 rounded-3xl border border-primary/10 sticky top-32">
            <h3 className="text-xl font-bold mb-6 flex items-center gap-2 uppercase tracking-tighter">
              {t.techLabel}
            </h3>
            <div className="flex flex-wrap gap-4">
               {/* Icone Swift & SwiftUI */}
               <div className="p-3 bg-surface rounded-xl border border-border/50 flex flex-col items-center gap-2 w-20">
                  <div className="w-8 h-8 bg-[#007AFF] rounded-lg shadow-lg shadow-blue-500/30"></div>
                  <span className="text-[10px] font-bold tracking-tighter">Swift</span>
               </div>
               <div className="p-3 bg-surface rounded-xl border border-border/50 flex flex-col items-center gap-2 w-20">
                  <div className="w-8 h-8 bg-[#F05138] rounded-lg shadow-lg shadow-orange-500/30"></div>
                  <span className="text-[10px] font-bold tracking-tighter">SwiftUI</span>
               </div>
            </div>
            <p className="text-muted-foreground text-sm mt-6 leading-relaxed">
              {t.techDesc}
            </p>
          </div>
        </div>

      </section>
    </div>
  );
};

export default BugBusters;