// import React, { useEffect } from 'react';
// import { Link } from 'react-router-dom';
// import {
//   ArrowLeft, Calendar, User, Code2, GitBranch,
//   Paintbrush, FileText, Database, Globe, Heart,
//   Layers, Smartphone, Clock, Users
// } from 'lucide-react';


// const CowPowRadio = ({ lang }) => {
//   useEffect(() => {
//     window.scrollTo(0, 0);
//   }, []);

//   const content = {
//     en: {
//       back: "Back to Projects",
//       tagline: "A Unity app that helps children face radiotherapy through play, story, and honest medical simulation.",

//       quickFactsLabel: {
//         origin: "Context",
//         role: "Role",
//         team: "Team",
//         timeline: "Timeline",
//       },
//       quickFactsValue: {
//         origin: "Apple Developer Academy @ UniNa, Pier Program",
//         role: "Game Developer",
//         team: "6 people",
//         timeline: "8 months",
//       },

//       challengeTitle: "The Challenge",
//       challengeText: (
//         <>
//           Children undergoing radiotherapy face one of the most{' '}
//           <span className="text-primary font-semibold">intimidating moments of their young lives</span>{' '}
//           without any real understanding of what is about to happen. The machines are large, the room is cold,
//           and the staff, however kind, can only explain so much in words. The result is fear, resistance,
//           and in some cases a treatment experience that leaves{' '}
//           <span className="text-primary font-semibold">lasting emotional marks</span>.
//           <br /><br />
//           The core difficulty was not technical. It was about{' '}
//           <span className="text-primary font-semibold">translating real medical procedures</span> into something
//           a child could genuinely understand and feel less afraid of, without misrepresenting the experience or
//           oversimplifying the emotional weight of it.
//         </>
//       ),

//       collaborationTitle: "Collaboration",
//       collaborationText: (
//         <>
//           <span className="text-primary font-semibold">CHOC (Childhood Cancer Foundation)</span> has been
//           supporting families of children with cancer and life-threatening blood disorders across South Africa
//           since 1979. With over{' '}
//           <span className="text-primary font-semibold">1,500 children and teenagers in care</span> at any given
//           time, CHOC is the only organization in the country providing free, comprehensive support: accommodation
//           near treatment centers, psychosocial support for children and families, nutritional aid, and awareness
//           programs across communities.
//           <br /><br />
//           Their mission is clear:{' '}
//           <span className="italic text-foreground">no family walks this journey alone</span>.
//           CowPow! Radio Stories was born directly from this partnership, addressing one of the most emotionally
//           charged moments in a child's treatment journey.
//         </>
//       ),

//       roleTitle: "My Role",
//       roleText: (
//         <>
//           I joined the project as a{' '}
//           <span className="text-primary font-semibold">game developer within a cross-functional team</span>,
//           focused on building core gameplay systems, phase logic, and interactive mechanics.
//           <br /><br />
//           I shaped{' '}
//           <span className="text-primary font-semibold">architectural decisions</span> around scene and state
//           management throughout the app. Each person carried significant ownership over their area, so I wrote
//           systems that had to be both{' '}
//           <span className="text-primary font-semibold">robust and maintainable by others</span>.
//         </>
//       ),

//       techTitle: "Tech Stack",
//       techIntro: "Built in Unity targeting iOS with a full 2D pipeline.",
//       tools: [
//         { name: "Unity (URP)", desc: "2D Pipeline, Universal Render Pipeline", img: "Unity.png" },
//         { name: "C#", desc: "Scripting, Game Logic, State Machines", img: "CSharp.png" },
//         { name: "SwiftUI", desc: "UI layer and iOS integration", img: "SwiftUI.png" },
//       ],

//       highlightsTitle: "Technical Highlights",
//       highlightsSubtitle: "Key systems built to support the medical simulation experience",
//       highlights: [
//         {
//           icon: GitBranch,
//           title: "Phase-Based State Machine",
//           description: "GameManager coordinates 7 independent phase controllers. Each responds to state change events, supporting checkpoint re-entry without restarting the full flow."
//         },
//         {
//           icon: Paintbrush,
//           title: "Real-Time Texture Painting",
//           description: "Marker tracing paints pixels directly on a runtime-generated Texture2D, interpolating between touch positions. Phase completes once a coverage threshold is reached."
//         },
//         {
//           icon: FileText,
//           title: "Session Logging",
//           description: "A static LoggingManager tracks state transitions, dialogue triggers, and interaction steps across all phases, exporting the full session as a .tsv file on quit."
//         },
//         {
//           icon: Database,
//           title: "ScriptableObject Architecture",
//           description: "StageData ScriptableObjects define each module independently. The main menu populates dynamically and new stages can be added without touching scene logic."
//         },
//         {
//           icon: Globe,
//           title: "Voiced Localisation",
//           description: "A custom audio table maps voiced lines to language keys at runtime. Text and dialogue are both managed per locale, making regional adaptation straightforward."
//         },
//         {
//           icon: Heart,
//           title: "Child-Centered Design",
//           description: "Every interaction was designed around emotional honesty, walking young patients through real medical steps using characters and stories they could relate to."
//         },
//       ],

//       impactTitle: "Technical Metrics",
//       impactStats: [
//         { icon: Layers, label: "Game Modules", value: "4", highlight: true },
//         { icon: GitBranch, label: "Sequential Phases", value: "7", highlight: true },
//         { icon: Users, label: "Team Size", value: "6", highlight: false },
//         { icon: Clock, label: "Duration", value: "8 mo", highlight: false },
//         { icon: Globe, label: "Languages", value: "Multi", highlight: true },
//         { icon: Smartphone, label: "Platform", value: "iOS", highlight: false },
//       ],
//     },

//     it: {
//       back: "Torna ai Progetti",
//       tagline: "Un'app Unity che aiuta i bambini ad affrontare la radioterapia attraverso il gioco, la narrazione e una simulazione medica onesta.",

//       quickFactsLabel: {
//         origin: "Contesto",
//         role: "Ruolo",
//         team: "Team",
//         timeline: "Durata",
//       },
//       quickFactsValue: {
//         origin: "Apple Developer Academy @ UniNa, Pier Program",
//         role: "Game Developer",
//         team: "6 persone",
//         timeline: "8 mesi",
//       },

//       challengeTitle: "La Sfida",
//       challengeText: (
//         <>
//           I bambini che affrontano la radioterapia si trovano di fronte a uno dei{' '}
//           <span className="text-primary font-semibold">momenti più intimidatori della loro giovane vita</span>{' '}
//           senza una vera comprensione di quello che sta per succedere. Le macchine sono grandi, la stanza è fredda,
//           e il personale, per quanto gentile, può spiegare solo fino a un certo punto con le parole.
//           Il risultato è paura, resistenza, e in alcuni casi un'esperienza di trattamento che lascia{' '}
//           <span className="text-primary font-semibold">segni emotivi duraturi</span>.
//           <br /><br />
//           La difficoltà principale non era tecnica. Si trattava di{' '}
//           <span className="text-primary font-semibold">tradurre procedure mediche reali</span> in qualcosa che
//           un bambino potesse davvero capire e di cui aver meno paura, senza snaturare l'esperienza né
//           semplificarne eccessivamente il peso emotivo.
//         </>
//       ),

//       collaborationTitle: "Collaboration",
//       collaborationText: (
//         <>
//           <span className="text-primary font-semibold">CHOC (Childhood Cancer Foundation)</span> supporta le
//           famiglie di bambini con cancro e patologie ematologiche gravi in tutta il Sudafrica dal 1979. Con
//           oltre{' '}
//           <span className="text-primary font-semibold">1.500 bambini e ragazzi in carico</span> in ogni momento,
//           CHOC è l'unica organizzazione del paese a fornire supporto gratuito e completo: alloggi vicino ai
//           centri di cura, supporto psicosociale per bambini e famiglie, aiuto nutrizionale e programmi di
//           sensibilizzazione nelle comunità.
//           <br /><br />
//           La loro missione è chiara:{' '}
//           <span className="italic text-foreground">nessuna famiglia affronta questo percorso da sola</span>.
//           CowPow! Radio Stories è nata direttamente da questa collaborazione, affrontando uno dei momenti
//           emotivamente più intensi del percorso di cura di un bambino.
//         </>
//       ),

//       roleTitle: "Il Mio Ruolo",
//       roleText: (
//         <>
//           Ho partecipato al progetto come{' '}
//           <span className="text-primary font-semibold">game developer in un team cross-funzionale</span>,
//           concentrandomi sulla costruzione dei core gameplay system, della logica a fasi e delle meccaniche
//           interattive.
//           <br /><br />
//           Ho contribuito alle{' '}
//           <span className="text-primary font-semibold">decisioni architetturali</span> su come scene e stati
//           venivano gestiti nell'app. Ogni membro del team aveva forte ownership sulla propria area, quindi
//           ho scritto sistemi che dovevano essere sia{' '}
//           <span className="text-primary font-semibold">robusti che manutenibili da altri</span>.
//         </>
//       ),

//       techTitle: "Tech Stack",
//       techIntro: "Sviluppato in Unity per iOS con una pipeline 2D completa.",
//       tools: [
//         { name: "Unity (URP)", desc: "Pipeline 2D, Universal Render Pipeline", img: "Unity.png" },
//         { name: "C#", desc: "Scripting, Logica di gioco, State Machine", img: "CSharp.png" },
//         { name: "SwiftUI", desc: "Layer UI e integrazione iOS", img: "SwiftUI.png" },
//       ],

//       highlightsTitle: "Highlights Tecnici",
//       highlightsSubtitle: "Sistemi chiave costruiti a supporto della simulazione medica",
//       highlights: [
//         {
//           icon: GitBranch,
//           title: "State Machine a Fasi",
//           description: "Il GameManager coordina 7 controller di fase indipendenti. Ognuno risponde a eventi di cambio stato, supportando il re-ingresso da checkpoint senza riavviare il flusso."
//         },
//         {
//           icon: Paintbrush,
//           title: "Texture Painting in Tempo Reale",
//           description: "Il marker tracing dipinge pixel direttamente su una Texture2D generata a runtime, interpolando tra le posizioni touch. La fase si completa al raggiungimento di una soglia di copertura."
//         },
//         {
//           icon: FileText,
//           title: "Logging delle Sessioni",
//           description: "Un LoggingManager statico traccia transizioni di stato, trigger di dialogo e step di interazione su tutte le fasi, esportando la sessione come file .tsv all'uscita."
//         },
//         {
//           icon: Database,
//           title: "Architettura con ScriptableObject",
//           description: "Gli StageData ScriptableObject definiscono ogni modulo in modo indipendente. Il menu principale si popola dinamicamente e nuovi stage si aggiungono senza toccare la logica di scena."
//         },
//         {
//           icon: Globe,
//           title: "Localizzazione con Dialogo Doppiato",
//           description: "Una tabella audio custom mappa le linee doppiate a chiavi di lingua a runtime. Testo e dialogo sono gestiti per locale, rendendo l'adattamento regionale diretto."
//         },
//         {
//           icon: Heart,
//           title: "Design Centrato sul Bambino",
//           description: "Ogni interazione è stata progettata intorno all'onestà emotiva, guidando i giovani pazienti attraverso i veri passaggi medici con personaggi e storie con cui possono identificarsi."
//         },
//       ],

//       impactTitle: "Metriche Tecniche",
//       impactStats: [
//         { icon: Layers, label: "Moduli di Gioco", value: "4", highlight: true },
//         { icon: GitBranch, label: "Fasi Sequenziali", value: "7", highlight: true },
//         { icon: Users, label: "Persone nel Team", value: "6", highlight: false },
//         { icon: Clock, label: "Durata", value: "8 mesi", highlight: false },
//         { icon: Globe, label: "Lingue", value: "Multi", highlight: true },
//         { icon: Smartphone, label: "Piattaforma", value: "iOS", highlight: false },
//       ],
//     },
//   };

//   const t = content[lang] || content.en;

//   const quickFacts = [
//     { icon: User, label: t.quickFactsLabel.origin, value: t.quickFactsValue.origin },
//     { icon: Code2, label: t.quickFactsLabel.role, value: t.quickFactsValue.role },
//     { icon: Users, label: t.quickFactsLabel.team, value: t.quickFactsValue.team },
//     { icon: Calendar, label: t.quickFactsLabel.timeline, value: t.quickFactsValue.timeline },
//   ];

//   return (
//     <div className="min-h-screen bg-background text-foreground font-sans selection:bg-primary/30 pt-24 md:pt-32 pb-16 md:pb-20">

//       {/* Navigation Back */}
//       <div className="container mx-auto px-4 md:px-6 mb-6 md:mb-8">
//         <Link to="/" className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors duration-300 group">
//           <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
//           <span className="text-xs md:text-sm uppercase tracking-widest font-medium">{t.back}</span>
//         </Link>
//       </div>

//       {/* HERO SECTION */}
//       <header className="container mx-auto px-4 md:px-6 mb-12 md:mb-20">
//         <div className="flex flex-col-reverse lg:flex-row items-center lg:items-end justify-between gap-8 md:gap-12">

//           {/* Text Content */}
//           <div className="w-full lg:w-2/3 space-y-5 md:space-y-6 text-center lg:text-left">
//             <h1 className="text-4xl md:text-6xl lg:text-7xl font-black tracking-tight leading-[0.95] text-white animate-fade-in">
//               CowPow! <span className="font-serif italic font-normal">Radio Stories</span>
//             </h1>
//             <p className="text-base md:text-xl lg:text-2xl text-muted-foreground font-medium max-w-2xl mx-auto lg:mx-0 animate-fade-in animation-delay-100">
//               {t.tagline}
//             </p>
//           </div>

//           {/* Icon / Visual */}
//           <div className="w-full lg:w-1/3 flex justify-center lg:justify-end animate-float">
//             <div className="relative w-36 h-36 md:w-56 md:h-56 lg:w-64 lg:h-64 group">
//               <div className="absolute inset-0 bg-primary/20 blur-3xl rounded-full group-hover:bg-primary/30 transition-all duration-700" />
//               <div className="relative w-full h-full rounded-[1.75rem] md:rounded-[2rem] overflow-hidden border border-white/10 shadow-2xl bg-surface/50 glass">
//                 <img
//                   src="/Portfolio/Projects/CW_app_icon.png"
//                   alt="CowPow! Radio Stories App Icon"
//                   className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-110"
//                 />
//               </div>
//             </div>
//           </div>
//         </div>
//       </header>

//       {/* QUICK FACTS */}
//       <section className="container mx-auto px-4 md:px-6 mb-12 md:mb-20 animate-fade-in animation-delay-300">
//         <div className="max-w-6xl mx-auto">
//           <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4">
//             {quickFacts.map((fact, idx) => {
//               const Icon = fact.icon;
//               return (
//                 <div
//                   key={idx}
//                   className="glass rounded-2xl p-4 md:p-5 hover:border-primary/30 transition-all duration-300"
//                 >
//                   <div className="flex items-center gap-2 text-[10px] md:text-xs uppercase tracking-widest text-muted-foreground mb-2">
//                     <Icon className="w-3 h-3 md:w-3.5 md:h-3.5 text-primary flex-shrink-0" />
//                     <span>{fact.label}</span>
//                   </div>
//                   <span className="block text-sm md:text-base font-semibold text-foreground leading-snug">
//                     {fact.value}
//                   </span>
//                 </div>
//               );
//             })}
//           </div>
//         </div>
//       </section>

//       {/* THE CHALLENGE */}
//       <section className="container mx-auto px-4 md:px-6 mb-12 md:mb-20 animate-fade-in animation-delay-400">
//         <div className="max-w-6xl mx-auto">
//           <div className="glass p-6 md:p-10 rounded-[1.5rem] md:rounded-[2rem] border-primary/10 relative overflow-hidden">
//             <div className="absolute -top-20 -right-20 w-64 h-64 bg-primary/5 rounded-full blur-3xl pointer-events-none" />
//             <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4 md:mb-6 text-white relative">
//               {t.challengeTitle}
//             </h2>
//             <div className="text-sm md:text-base lg:text-lg text-muted-foreground leading-relaxed relative">
//               {t.challengeText}
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* COLLABORATION */}
//       <section className="container mx-auto px-4 md:px-6 mb-12 md:mb-20 animate-fade-in animation-delay-400">
//         <div className="max-w-6xl mx-auto">
//           <div className="glass p-6 md:p-10 rounded-[1.5rem] md:rounded-[2rem] border-primary/10 relative overflow-hidden">
//             <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-primary/5 rounded-full blur-3xl pointer-events-none" />
//             <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4 md:mb-6 text-white relative">
//               {t.collaborationTitle}
//             </h2>
//             <div className="text-sm md:text-base lg:text-lg text-muted-foreground leading-relaxed relative">
//               {t.collaborationText}
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* MY ROLE + TECH STACK */}
//       <section className="container mx-auto px-4 md:px-6 mb-12 md:mb-20 animate-fade-in animation-delay-500">
//         <div className="max-w-6xl mx-auto">
//           <div className="grid lg:grid-cols-12 gap-6 md:gap-8">

//             {/* Left: My Role */}
//             <div className="lg:col-span-7">
//               <div className="glass p-6 md:p-10 rounded-[1.5rem] md:rounded-[2rem] border-primary/10 relative overflow-hidden h-full">
//                 <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4 md:mb-6 text-white">
//                   {t.roleTitle}
//                 </h2>
//                 <div className="text-sm md:text-base lg:text-lg text-muted-foreground leading-relaxed">
//                   {t.roleText}
//                 </div>
//               </div>
//             </div>

//             {/* Right: Tech Stack */}
//             <div className="lg:col-span-5">
//               <div className="glass p-6 md:p-10 rounded-[1.5rem] md:rounded-[2rem] h-full flex flex-col justify-center">
//                 <h3 className="text-xl md:text-2xl lg:text-3xl font-black mb-3 tracking-wide text-white">
//                   {t.techTitle}
//                 </h3>
//                 <p className="text-muted-foreground text-xs md:text-sm mb-6 md:mb-8">
//                   {t.techIntro}
//                 </p>

//                 <div className="space-y-5 md:space-y-6">
//                   {t.tools.map((tool, index) => (
//                     <div
//                       key={index}
//                       className="flex items-center justify-between group border-b border-border/30 pb-5 md:pb-6 last:border-b-0 last:pb-0"
//                     >
//                       <div className="flex flex-col items-start pr-4 flex-1 min-w-0">
//                         <span className="text-lg md:text-xl lg:text-2xl font-bold text-foreground tracking-tight group-hover:text-primary transition-colors duration-300">
//                           {tool.name}
//                         </span>
//                         <span className="text-[11px] md:text-sm text-muted-foreground font-medium mt-1 leading-snug">
//                           {tool.desc}
//                         </span>
//                       </div>
//                       <div className="relative w-12 h-12 md:w-14 md:h-14 lg:w-16 lg:h-16 flex-shrink-0">
//                         <div className="absolute inset-0 bg-primary/20 blur-xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
//                         <img
//                           src={`/Portfolio/Projects/iconTech/${tool.img}`}
//                           alt={tool.name}
//                           className="relative w-full h-full object-contain drop-shadow-2xl group-hover:scale-110 transition-transform duration-300"
//                         />
//                       </div>
//                     </div>
//                   ))}
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* TECHNICAL HIGHLIGHTS */}
//       <section className="container mx-auto px-4 md:px-6 mb-12 md:mb-20 animate-fade-in animation-delay-600">
//         <div className="max-w-6xl mx-auto">
//           <div className="text-left md:text-center mb-8 md:mb-12">
//             <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-3 md:mb-4 text-white">
//               {t.highlightsTitle}
//             </h2>
//             <p className="text-muted-foreground text-sm md:text-base lg:text-lg">
//               {t.highlightsSubtitle}
//             </p>
//           </div>

//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
//             {t.highlights.map((highlight, index) => {
//               const Icon = highlight.icon;
//               return (
//                 <div
//                   key={index}
//                   className="glass p-5 md:p-6 rounded-2xl hover:border-primary/30 transition-all duration-300 group"
//                 >
//                   <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
//                     <Icon className="w-5 h-5 text-primary" />
//                   </div>
//                   <h3 className="text-base md:text-lg font-bold mb-2 group-hover:text-primary transition-colors leading-tight">
//                     {highlight.title}
//                   </h3>
//                   <p className="text-xs md:text-sm text-muted-foreground leading-relaxed">
//                     {highlight.description}
//                   </p>
//                 </div>
//               );
//             })}
//           </div>
//         </div>
//       </section>

//       {/* TECHNICAL METRICS */}
//       <section className="container mx-auto px-4 md:px-6 mb-12 md:mb-20 animate-fade-in animation-delay-700">
//         <div className="max-w-6xl mx-auto">
//           <div className="text-left md:text-center mb-8 md:mb-12">
//             <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-3 md:mb-4 text-white">
//               {t.impactTitle}
//             </h2>
//           </div>

//           <div className="glass p-6 md:p-8 rounded-2xl">
//             <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 md:gap-8">
//               {t.impactStats.map((stat, index) => {
//                 const Icon = stat.icon;
//                 return (
//                   <div key={index} className="text-center">
//                     <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center mb-3 mx-auto">
//                       <Icon className="w-5 h-5 text-primary" />
//                     </div>
//                     <div className={`text-2xl md:text-3xl lg:text-4xl font-black mb-2 ${stat.highlight ? 'text-primary' : 'text-foreground'} leading-none`}>
//                       {stat.value}
//                     </div>
//                     <div className="text-[10px] md:text-xs text-muted-foreground uppercase tracking-wider leading-tight">
//                       {stat.label}
//                     </div>
//                   </div>
//                 );
//               })}
//             </div>
//           </div>
//         </div>
//       </section>

//     </div>
//   );
// };

// export default CowPowRadio;
