import React, { useEffect, useState, useCallback } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { ArrowLeft, Rocket, Calendar, User, Code2, ExternalLink, Database, Cloud, UploadCloud, Search, Layers, Hand, Film, ShieldCheck, GitBranch, Clock, Users, Smartphone, Apple, Wrench, X, ChevronLeft, ChevronRight } from 'lucide-react';

const LISionario = ({ lang }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const handleBack = () => {
    if (location.state?.from === 'home') {
      navigate(-1);
    } else {
      navigate('/projects');
    }
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const content = {
    en: {
      back: "Back to Projects",
      tagline: "The living dictionary of Italian Sign Language, built by the community, for the community.",
      // NON pubblicata: nessun link App Store, ma un badge di stato
      wipBadge: "Work in progress · Not on the App Store yet",

      // Quick Facts
      quickFactsLabel: {
        origin: "Origin",
        role: "Role",
        team: "Team",
        status: "Status",
      },
      quickFactsValue: {
        origin: "Apple Developer Academy @ UniNa · 2025",
        role: "iOS Developer",
        team: "6 people",
        status: "In development",
      },

      // The Challenge
      challengeTitle: "The Challenge",
      challengeText: (
        <>
          LIS interpreters need a reliable reference they can reach in the middle of a session. LISionario answers that: search a word, watch the sign. But a static dictionary goes stale fast, so the real challenge was building it as a <span className="text-primary font-semibold">living resource</span>. The Deaf community and interpreters can <span className="italic text-foreground">submit their own signs</span>, every submission goes through an <span className="text-primary font-semibold">expert review</span> before it reaches the published dictionary, and the two never mix until a human says they should.
        </>
      ),

      // My Role
      roleTitle: "My Role",
      roleText: (
        <>
          LISionario is built by a team of <span className="text-primary font-semibold">6 people</span> and is designed for anyone learning or working with Italian Sign Language, with a focus on <span className="text-primary font-semibold">interpreters who need a fast, reliable tool</span> in real-time contexts. I put particular attention on <span className="text-primary font-semibold">UI/UX</span>: the interface combines search and playback into a single, fluid view so the time between a query and a sign is as short as possible. On the data side, I designed the pipeline that lets users contribute without touching the live dictionary, routing every submission through expert review before it goes public.
        </>
      ),

      // Tech Stack
      techTitle: "Tech Stack",
      techIntro: "SwiftUI on the front, two cloud services on the back, and no local database at all.",
      tools: [
        { name: "SwiftUI", desc: "UI & MVVM State Management", img: "SwiftUI.png" },
        { name: "Airtable", desc: "Content database via REST API", img: "Airtable.png" },
        { name: "Cloudinary", desc: "Video media storage (CDN)", img: "Cloudinary.png" },
      ],

      // Database Architecture (sezione dedicata)
      dbTitle: "Database Architecture",
      dbSubtitle: "All persistence is remote and split between structured data and media files",
      dbIntro: (
        <>
          LISionario keeps <span className="text-primary font-semibold">nothing in an on-device database</span> (no Core Data, no SwiftData). Everything lives remotely, and it's split in a clean way: <span className="text-primary font-semibold">Airtable</span> holds the structured records, while <span className="text-primary font-semibold">Cloudinary</span> stores the heavy video files. A record never carries the file inside it, it just keeps the link to where the video lives.
        </>
      ),
      dbTables: [
        {
          icon: Database,
          title: "Airtable \"Videos\"",
          tag: "READ",
          description: "The published dictionary. The app fetches it with a GET and decodes the JSON into Codable structs (Title, Tags, Segno attachments). Search and alphabetical grouping then run locally on the array it already downloaded.",
        },
        {
          icon: ShieldCheck,
          title: "Airtable \"Awaiting Approval\"",
          tag: "CREATE",
          description: "The review queue. Whatever a user sends gets POSTed here with the state \"In Attesa\", never straight into the dictionary. We go through them by hand and move the good ones over.",
        },
        {
          icon: Cloud,
          title: "Cloudinary (media)",
          tag: "UPLOAD",
          description: "The video goes straight from the phone to Cloudinary using an unsigned preset. Cloudinary hands back a secure_url, and that link is exactly what we save inside the Airtable record.",
        },
      ],
      pipelineTitle: "Upload pipeline",
      pipeline: [
        { icon: Film, label: "Local video", note: "Library or camera" },
        { icon: Wrench, label: "Compress", note: "AVFoundation export" },
        { icon: UploadCloud, label: "Cloudinary", note: "→ secure_url" },
        { icon: Database, label: "Airtable", note: "Record \"In Attesa\"" },
        { icon: ShieldCheck, label: "Review", note: "Manual → published" },
      ],

      // Technical Highlights
      highlightsTitle: "Technical Highlights",
      highlightsSubtitle: "What the data layer actually does",
      highlights: [
        { icon: GitBranch, title: "Two-Table Moderation", description: "One \"Videos\" table that's live, one \"Awaiting Approval\" queue that isn't. That separation is the whole moderation idea, because users simply can't write into the live dictionary." },
        { icon: Search, title: "Client-Side Search", description: "Title and tag matching runs on the downloaded array, splitting results into exact word matches and related signs. No extra network round-trips." },
        { icon: Cloud, title: "Media / Data Separation", description: "Heavy video files live on Cloudinary; Airtable stores only the secure URL. Keeps records light and the database fast." },
        { icon: UploadCloud, title: "Async Upload Pipeline", description: "Compress → upload to Cloudinary → write Airtable record, orchestrated end-to-end with Swift async/await." },
        { icon: Hand, title: "Alphabetical Grouping", description: "Decoded records are grouped by first letter in memory (with a \"#\" bucket for missing titles) to drive the dictionary UI." },
        { icon: Film, title: "Remote Streaming Playback", description: "Signs play straight from their remote URL with AVKit, so there's no download step and nothing to keep on the device." },
      ],

      // Status / Roadmap (al posto delle "metriche" di un'app pubblicata)
      statusTitle: "Project Status",
      statusStats: [
        { icon: Clock, label: "Stage", value: "In dev", highlight: true },
        { icon: Smartphone, label: "App Store", value: "Not yet", highlight: true },
        { icon: Users, label: "Team", value: "6 people", highlight: false },
        { icon: Apple, label: "Platform", value: "iOS Native", highlight: false },
      ],
      roadmapTitle: "What we're still improving",
      roadmap: [
        "Move API keys out of the client behind a backend/proxy",
        "Add Airtable pagination as the dictionary grows",
        "Real upload progress instead of a simulated timer",
        "Structured error handling and retry",
        "Offline cache for the dictionary",
      ],

      // Gallery
      galleryTitle: "Gallery",
      gallerySubtitle: "Screens from the current development build",
      gallery: [
        { src: "/Portfolio/Projects/Lisionario_workflow.png", caption: "LISionario workflow overview" },
      ],
    },
    it: {
      back: "Torna ai Progetti",
      tagline: "Il dizionario vivente della Lingua dei Segni Italiana, costruito dalla community, per la community.",
      wipBadge: "Work in progress · Non ancora sull'App Store",

      quickFactsLabel: {
        origin: "Contesto",
        role: "Ruolo",
        team: "Team",
        status: "Stato",
      },
      quickFactsValue: {
        origin: "Apple Developer Academy @ UniNa · 2025",
        role: "Sviluppo iOS",
        team: "6 persone",
        status: "In sviluppo",
      },

      challengeTitle: "Contesto",
      challengeText: (
        <>
          Gli interpreti LIS hanno bisogno di un riferimento affidabile da consultare anche nel mezzo di una sessione. LISionario risponde a questo: cerchi una parola, guardi il segno. Ma un dizionario statico invecchia in fretta, quindi la vera sfida era costruirlo come una <span className="text-primary font-semibold">risorsa viva</span>. La community sorda e gli interpreti possono <span className="italic text-foreground">inviare i propri segni</span>, ogni contributo passa attraverso la <span className="text-primary font-semibold">revisione di un esperto</span> prima di entrare nel dizionario pubblicato, e i due livelli non si mescolano mai finché un umano non lo decide.
        </>
      ),

      roleTitle: "Il Mio Ruolo",
      roleText: (
        <>
          LISionario è fatta da un team di <span className="text-primary font-semibold">6 persone</span> e pensata per chiunque studi o lavori con la LIS, con un focus particolare sugli <span className="text-primary font-semibold">interpreti che hanno bisogno di uno strumento veloce e affidabile</span> in contesti real-time. Ho dedicato molta attenzione alla <span className="text-primary font-semibold">UI/UX</span>: l'interfaccia unisce ricerca e riproduzione in un'unica vista fluida, per ridurre al minimo il tempo tra la query e il segno. Sul lato dati, ho progettato la pipeline che permette agli utenti di contribuire senza toccare il dizionario live, portando ogni invio attraverso la revisione di un esperto prima della pubblicazione.
        </>
      ),

      techTitle: "Tech Stack",
      techIntro: "SwiftUI davanti, due servizi cloud dietro, e nessun database locale.",
      tools: [
        { name: "SwiftUI", desc: "UI & gestione stato MVVM", img: "SwiftUI.png" },
        { name: "Airtable", desc: "Database contenuti via REST API", img: "Airtable.png" },
        { name: "Cloudinary", desc: "Storage video media (CDN)", img: "Cloudinary.png" },
      ],

      dbTitle: "Architettura del Database",
      dbSubtitle: "Tutta la persistenza è remota e divisa tra dati strutturati e file media",
      dbIntro: (
        <>
          LISionario <span className="text-primary font-semibold">non tiene niente in un database sul telefono</span> (niente Core Data, niente SwiftData). Tutto vive da remoto, e in modo ben diviso: <span className="text-primary font-semibold">Airtable</span> conserva i record strutturati, mentre <span className="text-primary font-semibold">Cloudinary</span> ospita i file video pesanti. Il record non porta mai il file dentro di sé, tiene solo il link a dove sta il video.
        </>
      ),
      dbTables: [
        {
          icon: Database,
          title: "Airtable \"Videos\"",
          tag: "READ",
          description: "Il dizionario pubblicato. L'app lo legge con una GET e decodifica il JSON in struct Codable (Title, Tags, allegati Segno). Ricerca e raggruppamento alfabetico girano poi in locale, sull'array già scaricato.",
        },
        {
          icon: ShieldCheck,
          title: "Airtable \"In Attesa di Approvazione\"",
          tag: "CREATE",
          description: "La coda di revisione. Quello che un utente invia arriva qui in POST con stato \"In Attesa\", mai dritto nel dizionario. Li guardiamo a mano e spostiamo quelli buoni.",
        },
        {
          icon: Cloud,
          title: "Cloudinary (media)",
          tag: "UPLOAD",
          description: "Il video va dritto dal telefono a Cloudinary con un preset unsigned. Cloudinary restituisce un secure_url, ed è proprio quel link che salviamo dentro il record Airtable.",
        },
      ],
      pipelineTitle: "Pipeline di upload",
      pipeline: [
        { icon: Film, label: "Video locale", note: "Libreria o camera" },
        { icon: Wrench, label: "Compressione", note: "Export AVFoundation" },
        { icon: UploadCloud, label: "Cloudinary", note: "→ secure_url" },
        { icon: Database, label: "Airtable", note: "Record \"In Attesa\"" },
        { icon: ShieldCheck, label: "Revisione", note: "Manuale → pubblicato" },
      ],

      highlightsTitle: "Highlights Tecnici",
      highlightsSubtitle: "Cosa fa davvero il livello dati",
      highlights: [
        { icon: GitBranch, title: "Moderazione a Due Tabelle", description: "Una tabella \"Videos\" che è live, una coda \"In Attesa di Approvazione\" che non lo è. Quella separazione è tutta la moderazione, perché l'utente nel dizionario live non ci scrive proprio." },
        { icon: Search, title: "Ricerca Lato Client", description: "Il match su titolo e tag gira sull'array scaricato, dividendo i risultati tra parola esatta e segni collegati. Nessuna chiamata di rete aggiuntiva." },
        { icon: Cloud, title: "Separazione Media / Dati", description: "I video pesanti stanno su Cloudinary; Airtable salva solo l'URL sicuro. Record leggeri e database veloce." },
        { icon: UploadCloud, title: "Pipeline Upload Async", description: "Compressione → upload su Cloudinary → scrittura record Airtable, orchestrati end-to-end con async/await di Swift." },
        { icon: Hand, title: "Raggruppamento Alfabetico", description: "I record decodificati vengono raggruppati per lettera iniziale in memoria (con categoria \"#\" per i titoli mancanti) per la UI del dizionario." },
        { icon: Film, title: "Riproduzione in Streaming", description: "I segni partono direttamente dal loro URL remoto con AVKit, così non c'è nessun download e niente da tenere sul dispositivo." },
      ],

      statusTitle: "Stato del Progetto",
      statusStats: [
        { icon: Clock, label: "Fase", value: "In sviluppo", highlight: true },
        { icon: Smartphone, label: "App Store", value: "Non ancora", highlight: true },
        { icon: Users, label: "Team", value: "6 persone", highlight: false },
        { icon: Apple, label: "Piattaforma", value: "iOS Nativo", highlight: false },
      ],
      roadmapTitle: "Cosa stiamo ancora migliorando",
      roadmap: [
        "Spostare le API key fuori dal client dietro un backend/proxy",
        "Aggiungere la paginazione Airtable man mano che il dizionario cresce",
        "Progresso di upload reale invece del timer simulato",
        "Gestione errori strutturata e retry",
        "Cache offline del dizionario",
      ],

      galleryTitle: "Gallery",
      gallerySubtitle: "Schermate dalla build di sviluppo attuale",
      gallery: [
        { src: "/Portfolio/Projects/LISionario_home.png", caption: "Home, \"Our App, your dictionary\"" },
        { src: "/Portfolio/Projects/LISionario_upload.png", caption: "Flusso di upload della community" },
      ],
    }
  };

  const t = content[lang] || content.en;

  // Lightbox state
  const [lightboxIdx, setLightboxIdx] = useState(null);
  const gallery = t.gallery;

  const openLightbox = (idx) => setLightboxIdx(idx);
  const closeLightbox = () => setLightboxIdx(null);
  const prevImage = useCallback(() => setLightboxIdx(i => (i - 1 + gallery.length) % gallery.length), [gallery.length]);
  const nextImage = useCallback(() => setLightboxIdx(i => (i + 1) % gallery.length), [gallery.length]);

  useEffect(() => {
    if (lightboxIdx === null) return;
    const handleKey = (e) => {
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowLeft') prevImage();
      if (e.key === 'ArrowRight') nextImage();
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [lightboxIdx, prevImage, nextImage]);

  // Quick Facts data structure
  const quickFacts = [
    { icon: User, label: t.quickFactsLabel.origin, value: t.quickFactsValue.origin },
    { icon: Rocket, label: t.quickFactsLabel.role, value: t.quickFactsValue.role },
    { icon: Code2, label: t.quickFactsLabel.team, value: t.quickFactsValue.team },
    { icon: Calendar, label: t.quickFactsLabel.status, value: t.quickFactsValue.status },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground font-sans selection:bg-primary/30 pt-24 md:pt-32 pb-16 md:pb-20">

      {/* Navigation Back */}
      <div className="container mx-auto px-4 md:px-6 mb-6 md:mb-8">
        <button onClick={handleBack} className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors duration-300 group">
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
          <span className="text-xs md:text-sm uppercase tracking-widest font-medium">{t.back}</span>
        </button>
      </div>

      {/* HERO SECTION */}
      <header className="container mx-auto px-4 md:px-6 mb-12 md:mb-20">
        <div className="flex flex-col-reverse lg:flex-row items-center lg:items-end justify-between gap-8 md:gap-12">

          {/* Text Content */}
          <div className="w-full lg:w-2/3 space-y-5 md:space-y-6 text-center lg:text-left">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-black tracking-tight leading-[0.95] text-white animate-fade-in">
              LISionario
            </h1>
            <p className="text-base md:text-xl lg:text-2xl text-muted-foreground font-medium max-w-2xl mx-auto lg:mx-0 animate-fade-in animation-delay-100">
              {t.tagline}
            </p>

            {/* WIP Badge: non è un'app pubblicata, quindi niente link App Store */}
            <div className="flex flex-wrap gap-4 justify-center lg:justify-start pt-2 animate-fade-in animation-delay-200">
              <span className="inline-flex items-center gap-3 px-5 md:px-6 py-3 bg-primary/10 text-primary border border-primary/30 rounded-full font-semibold text-sm md:text-base">
                <Wrench className="w-4 h-4 md:w-5 md:h-5" />
                {t.wipBadge}
              </span>
            </div>
          </div>

          {/* App Icon */}
          <div className="w-full lg:w-1/3 flex justify-center lg:justify-end animate-float">
            <div className="relative w-36 h-36 md:w-56 md:h-56 lg:w-64 lg:h-64 group">
              <div className="absolute inset-0 bg-primary/20 blur-3xl rounded-full group-hover:bg-primary/30 transition-all duration-700"></div>
              <div className="relative w-full h-full rounded-[1.75rem] md:rounded-[2rem] overflow-hidden border border-white/10 shadow-2xl bg-surface/50 glass flex items-center justify-center">
                <img
                  src="/Portfolio/Projects/Lisonario_app_icon.png"
                  alt="LISionario App Icon"
                  className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-110"
                />
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* QUICK FACTS */}
      <section className="container mx-auto px-4 md:px-6 mb-12 md:mb-20 animate-fade-in animation-delay-300">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4">
            {quickFacts.map((fact, idx) => {
              const Icon = fact.icon;
              return (
                <div
                  key={idx}
                  className="glass rounded-2xl p-4 md:p-5 hover:border-primary/30 transition-all duration-300"
                >
                  <div className="flex items-center gap-2 text-[10px] md:text-xs uppercase tracking-widest text-muted-foreground mb-2">
                    <Icon className="w-3 h-3 md:w-3.5 md:h-3.5 text-primary flex-shrink-0" />
                    <span>{fact.label}</span>
                  </div>
                  <span className="block text-sm md:text-base font-semibold text-foreground leading-snug">
                    {fact.value}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* THE CHALLENGE */}
      <section className="container mx-auto px-4 md:px-6 mb-12 md:mb-20 animate-fade-in animation-delay-400">
        <div className="max-w-6xl mx-auto">
          <div className="glass p-6 md:p-10 rounded-[1.5rem] md:rounded-[2rem] border-primary/10 relative overflow-hidden">
            <div className="absolute -top-20 -right-20 w-64 h-64 bg-primary/5 rounded-full blur-3xl pointer-events-none"></div>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4 md:mb-6 text-white relative">
              {t.challengeTitle}
            </h2>
            <div className="text-sm md:text-base lg:text-lg text-muted-foreground leading-relaxed relative">
              {t.challengeText}
            </div>
          </div>
        </div>
      </section>

      {/* MY ROLE + TECH STACK */}
      <section className="container mx-auto px-4 md:px-6 mb-12 md:mb-20 animate-fade-in animation-delay-500">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-12 gap-6 md:gap-8">

            {/* Left: My Role */}
            <div className="lg:col-span-7">
              <div className="glass p-6 md:p-10 rounded-[1.5rem] md:rounded-[2rem] border-primary/10 relative overflow-hidden h-full">
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4 md:mb-6 text-white">
                  {t.roleTitle}
                </h2>
                <div className="text-sm md:text-base lg:text-lg text-muted-foreground leading-relaxed">
                  {t.roleText}
                </div>
              </div>
            </div>

            {/* Right: Tech Stack */}
            <div className="lg:col-span-5">
              <div className="glass p-6 md:p-10 rounded-[1.5rem] md:rounded-[2rem] h-full flex flex-col justify-center">
                <h3 className="text-xl md:text-2xl lg:text-3xl font-black mb-3 tracking-wide text-white">
                  {t.techTitle}
                </h3>
                <p className="text-muted-foreground text-xs md:text-sm mb-6 md:mb-8">
                  {t.techIntro}
                </p>

                <div className="space-y-5 md:space-y-6">
                  {t.tools.map((tool, index) => (
                    <div
                      key={index}
                      className="flex items-center justify-between group border-b border-border/30 pb-5 md:pb-6 last:border-b-0 last:pb-0"
                    >
                      <div className="flex flex-col items-start pr-4 flex-1 min-w-0">
                        <span className="text-lg md:text-xl lg:text-2xl font-bold text-foreground tracking-tight group-hover:text-primary transition-colors duration-300">
                          {tool.name}
                        </span>
                        <span className="text-[11px] md:text-sm text-muted-foreground font-medium mt-1 leading-snug">
                          {tool.desc}
                        </span>
                      </div>
                      <div className="relative w-12 h-12 md:w-14 md:h-14 lg:w-16 lg:h-16 flex-shrink-0">
                        <div className="absolute inset-0 bg-primary/20 blur-xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                        <img
                          src={`/Portfolio/Projects/iconTech/${tool.img}`}
                          alt={tool.name}
                          className="relative w-full h-full object-contain drop-shadow-2xl group-hover:scale-110 transition-transform duration-300"
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* DATABASE ARCHITECTURE (sezione dedicata, richiesta esplicitamente) */}
      <section className="container mx-auto px-4 md:px-6 mb-12 md:mb-20 animate-fade-in animation-delay-600">
        <div className="max-w-6xl mx-auto">
          <div className="text-left md:text-center mb-8 md:mb-12">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-3 md:mb-4 text-white">
              {t.dbTitle}
            </h2>
            <p className="text-muted-foreground text-sm md:text-base lg:text-lg max-w-3xl mx-auto">
              {t.dbSubtitle}
            </p>
          </div>

          {/* Intro */}
          <div className="glass p-6 md:p-8 rounded-2xl border-primary/10 mb-6 md:mb-8">
            <div className="text-sm md:text-base lg:text-lg text-muted-foreground leading-relaxed">
              {t.dbIntro}
            </div>
          </div>

          {/* Le tre "fonti" dati */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 mb-8 md:mb-10">
            {t.dbTables.map((tbl, index) => {
              const Icon = tbl.icon;
              return (
                <div
                  key={index}
                  className="glass p-5 md:p-6 rounded-2xl hover:border-primary/30 transition-all duration-300 group"
                >
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                      <Icon className="w-5 h-5 text-primary" />
                    </div>
                    <span className="text-[10px] md:text-xs font-bold uppercase tracking-wider text-primary bg-primary/10 px-2.5 py-1 rounded-full">
                      {tbl.tag}
                    </span>
                  </div>
                  <h3 className="text-base md:text-lg font-bold mb-2 leading-tight">
                    {tbl.title}
                  </h3>
                  <p className="text-xs md:text-sm text-muted-foreground leading-relaxed">
                    {tbl.description}
                  </p>
                </div>
              );
            })}
          </div>

          {/* Pipeline di upload */}
          <div className="glass p-6 md:p-8 rounded-2xl">
            <h3 className="text-base md:text-lg font-bold mb-6 text-white text-center">
              {t.pipelineTitle}
            </h3>
            <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-3 md:gap-2">
              {t.pipeline.map((step, index) => {
                const Icon = step.icon;
                return (
                  <React.Fragment key={index}>
                    <div className="flex md:flex-col items-center gap-3 md:gap-2 md:flex-1 md:text-center">
                      <div className="w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <Icon className="w-5 h-5 text-primary" />
                      </div>
                      <div className="flex flex-col md:items-center">
                        <span className="text-sm font-semibold text-foreground leading-tight">{step.label}</span>
                        <span className="text-[11px] md:text-xs text-muted-foreground leading-tight">{step.note}</span>
                      </div>
                    </div>
                    {index < t.pipeline.length - 1 && (
                      <ChevronRight className="hidden md:block w-5 h-5 text-primary/40 flex-shrink-0" />
                    )}
                  </React.Fragment>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* TECHNICAL HIGHLIGHTS */}
      <section className="container mx-auto px-4 md:px-6 mb-12 md:mb-20 animate-fade-in animation-delay-700">
        <div className="max-w-6xl mx-auto">
          <div className="text-left md:text-center mb-8 md:mb-12">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-3 md:mb-4 text-white">
              {t.highlightsTitle}
            </h2>
            <p className="text-muted-foreground text-sm md:text-base lg:text-lg">
              {t.highlightsSubtitle}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            {t.highlights.map((highlight, index) => {
              const Icon = highlight.icon;
              return (
                <div
                  key={index}
                  className="glass p-5 md:p-6 rounded-2xl hover:border-primary/30 transition-all duration-300 group"
                >
                  <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                    <Icon className="w-5 h-5 text-primary" />
                  </div>
                  <h3 className="text-base md:text-lg font-bold mb-2 group-hover:text-primary transition-colors leading-tight">
                    {highlight.title}
                  </h3>
                  <p className="text-xs md:text-sm text-muted-foreground leading-relaxed">
                    {highlight.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* PROJECT STATUS + ROADMAP (sostituisce le metriche di un'app pubblicata) */}
      <section className="container mx-auto px-4 md:px-6 mb-12 md:mb-20 animate-fade-in animation-delay-800">
        <div className="max-w-6xl mx-auto">
          <div className="text-left md:text-center mb-8 md:mb-12">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-3 md:mb-4 text-white">
              {t.statusTitle}
            </h2>
          </div>

          <div className="glass p-6 md:p-8 rounded-2xl mb-6 md:mb-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
              {t.statusStats.map((stat, index) => {
                const Icon = stat.icon;
                return (
                  <div key={index} className="text-center">
                    <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center mb-3 mx-auto">
                      <Icon className="w-5 h-5 text-primary" />
                    </div>
                    <div className={`text-xl md:text-2xl lg:text-3xl font-black mb-2 ${stat.highlight ? 'text-primary' : 'text-foreground'} leading-none`}>
                      {stat.value}
                    </div>
                    <div className="text-[10px] md:text-xs text-muted-foreground uppercase tracking-wider leading-tight">
                      {stat.label}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Roadmap */}
          <div className="glass p-6 md:p-8 rounded-2xl">
            <h3 className="text-base md:text-lg font-bold mb-5 text-white">
              {t.roadmapTitle}
            </h3>
            <ul className="space-y-3">
              {t.roadmap.map((item, index) => (
                <li key={index} className="flex items-start gap-3 text-sm md:text-base text-muted-foreground">
                  <Wrench className="w-4 h-4 text-primary flex-shrink-0 mt-1" />
                  <span className="leading-snug">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* GALLERY */}
      <section className="container mx-auto px-4 md:px-6 animate-fade-in animation-delay-900">
        <div className="max-w-6xl mx-auto">
          <div className="text-left md:text-center mb-8 md:mb-12">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-3 md:mb-4 text-white">
              {t.galleryTitle}
            </h2>
            <p className="text-muted-foreground text-sm md:text-base lg:text-lg">
              {t.gallerySubtitle}
            </p>
          </div>

          {/* Mobile: horizontal scroll snap, Desktop: 2-col grid */}
          <div className="flex md:grid md:grid-cols-2 gap-4 md:gap-6 overflow-x-auto md:overflow-x-visible snap-x snap-mandatory md:snap-none pb-4 md:pb-0 no-scrollbar -mx-4 md:mx-0 px-4 md:px-0">
            {t.gallery.map((item, idx) => (
              <figure
                key={idx}
                onClick={() => openLightbox(idx)}
                className="glass rounded-2xl overflow-hidden group hover:border-primary/30 transition-all duration-300 min-w-[85vw] md:min-w-0 snap-center flex flex-col cursor-zoom-in"
              >
                <div className="overflow-hidden relative">
                  <img
                    src={item.src}
                    alt={item.caption}
                    className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center">
                    <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/50 rounded-full p-2">
                      <ExternalLink className="w-5 h-5 text-white" />
                    </div>
                  </div>
                </div>
                <figcaption className="px-4 md:px-5 py-3 md:py-4 text-xs md:text-sm text-muted-foreground border-t border-border/30">
                  {item.caption}
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* LIGHTBOX */}
      {lightboxIdx !== null && (
        <div
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
          onClick={closeLightbox}
        >
          {/* Close */}
          <button
            onClick={closeLightbox}
            className="absolute top-4 right-4 text-white/70 hover:text-white transition-colors bg-white/10 hover:bg-white/20 rounded-full p-2"
          >
            <X className="w-6 h-6" />
          </button>

          {/* Prev */}
          {gallery.length > 1 && (
            <button
              onClick={(e) => { e.stopPropagation(); prevImage(); }}
              className="absolute left-4 text-white/70 hover:text-white transition-colors bg-white/10 hover:bg-white/20 rounded-full p-2"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
          )}

          {/* Image */}
          <div
            className="max-w-5xl w-full flex flex-col items-center gap-4"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={gallery[lightboxIdx].src}
              alt={gallery[lightboxIdx].caption}
              className="max-h-[80vh] w-auto rounded-xl object-contain shadow-2xl"
            />
            <p className="text-sm text-white/60">{gallery[lightboxIdx].caption}</p>
          </div>

          {/* Next */}
          {gallery.length > 1 && (
            <button
              onClick={(e) => { e.stopPropagation(); nextImage(); }}
              className="absolute right-4 text-white/70 hover:text-white transition-colors bg-white/10 hover:bg-white/20 rounded-full p-2"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          )}
        </div>
      )}
    </div>
  );
};

export default LISionario;
