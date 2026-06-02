import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowLeft, ExternalLink, Bot, Mail, GitBranch,
  MessageSquare, ShieldCheck, Database,
  Zap, User, Plug, RefreshCw
} from 'lucide-react';

const GITHUB = "https://github.com/AideB2B3/AI-Powered-Email-Agent-with-Human-Approval";

const AiEmailAgent = ({ lang }) => {
  useEffect(() => { window.scrollTo(0, 0); }, []);

  const l = lang === 'it' ? 'it' : 'en';

  const t = {
    en: {
      back: "Back to all projects",
      viewGithub: "View on GitHub",
      badge: "Project built entirely with n8n",
      tagline: "An n8n workflow that reads incoming emails, classifies them with Claude AI and handles them automatically by category, with human approval on Discord for urgent ones.",
      contextTitle: "Context",
      quickFacts: [
        { icon: Zap, label: "Type", value: "AI Automation - n8n" },
        { icon: User, label: "Role", value: "Solo Developer" },
        { icon: Plug, label: "Integrations", value: "Gmail · Claude · Discord · Notion" },
        { icon: RefreshCw, label: "Pattern", value: "Human-in-the-loop" },
      ],
      screenshotsTitle: "Screenshots",
      images: [
        { src: "/Portfolio/Projects/n8n/ai_email_workflow.png", caption: "The full n8n workflow: Gmail Trigger → Claude classifies → Switch → Discord / Gmail Label / Notion." },
      ],
      howTitle: "How it works",
      steps: [
        { icon: Mail, title: "Gmail Trigger", description: "Monitors the inbox in poll mode every minute and starts the workflow when a new email arrives." },
        { icon: Bot, title: "Claude Haiku classifies", description: "Classifies each email into one of 4 categories: URGENTE, SPAM, FOLLOW_UP, NEWSLETTER." },
        { icon: GitBranch, title: "Switch routing", description: "Routes the flow to the correct branch based on Claude's response." },
        { icon: MessageSquare, title: "URGENTE branch", description: "A second Claude node drafts a professional reply (max 100 words) and sends it to Discord for manual approval." },
        { icon: ShieldCheck, title: "SPAM branch", description: "Automatically adds the SPAM label to the email in Gmail." },
        { icon: Database, title: "FOLLOW_UP branch", description: "Creates a Notion page with sender, email body and a due date set to +2 days." },
      ],
    },
    it: {
      back: "Torna a tutti i progetti",
      viewGithub: "Vedi su GitHub",
      badge: "Progetto realizzato interamente con n8n",
      tagline: "Un workflow n8n che legge le email in arrivo, le classifica con Claude AI e le gestisce automaticamente per categoria, con approvazione umana su Discord per quelle urgenti.",
      contextTitle: "Contesto",
      quickFacts: [
        { icon: Zap, label: "Tipo", value: "AI Automation - n8n" },
        { icon: User, label: "Ruolo", value: "Solo Developer" },
        { icon: Plug, label: "Integrazioni", value: "Gmail · Claude · Discord · Notion" },
        { icon: RefreshCw, label: "Pattern", value: "Human-in-the-loop" },
      ],
      screenshotsTitle: "Screenshot",
      images: [
        { src: "/Portfolio/Projects/n8n/ai_email_workflow.png", caption: "Il workflow completo su n8n: Gmail Trigger → Claude classifica → Switch → Discord / Gmail Label / Notion." },
      ],
      howTitle: "Come funziona",
      steps: [
        { icon: Mail, title: "Gmail Trigger", description: "Monitora la casella in poll mode ogni minuto e avvia il workflow all'arrivo di una nuova email." },
        { icon: Bot, title: "Claude Haiku classifica", description: "Classifica ogni email in una di 4 categorie: URGENTE, SPAM, FOLLOW_UP, NEWSLETTER." },
        { icon: GitBranch, title: "Smistamento con Switch", description: "Indirizza il flusso verso il branch corretto in base alla risposta di Claude." },
        { icon: MessageSquare, title: "Branch URGENTE", description: "Un secondo nodo Claude scrive una bozza professionale (max 100 parole) e la manda su Discord per approvazione manuale." },
        { icon: ShieldCheck, title: "Branch SPAM", description: "Aggiunge automaticamente l'etichetta SPAM all'email su Gmail." },
        { icon: Database, title: "Branch FOLLOW_UP", description: "Crea una pagina Notion con mittente, testo email e scadenza a +2 giorni." },
      ],
    },
  }[l];

  return (
    <N8nLayout
      lang={l}
      t={t}
      github={GITHUB}
      HeroIcon={Bot}
      title="AI Email Agent"
      titleItalic={l === 'it' ? 'con Approvazione Umana' : 'with Human Approval'}
    />
  );
};

// Layout condiviso minimale, ma ogni progetto ha la propria view/file dedicato.
export const N8nLayout = ({ lang, t, github, HeroIcon, title, titleItalic }) => (
  <div className="min-h-screen bg-background text-foreground font-sans selection:bg-primary/30 pt-24 md:pt-32 pb-16 md:pb-20">

    {/* Back */}
    <div className="container mx-auto px-4 md:px-6 mb-6 md:mb-8">
      <Link to="/projects" className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors duration-300 group">
        <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
        <span className="text-xs md:text-sm uppercase tracking-widest font-medium">{t.back}</span>
      </Link>
    </div>

    {/* HERO */}
    <header className="container mx-auto px-4 md:px-6 mb-10 md:mb-16">
      <div className="flex flex-col-reverse lg:flex-row items-center lg:items-end justify-between gap-8 md:gap-12">
        <div className="w-full lg:w-2/3 space-y-4 md:space-y-6 text-center lg:text-left">
          <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-black tracking-tight leading-[1] md:leading-[0.95] text-white animate-fade-in">
            {title}{' '}
            <span className="font-serif italic font-normal">{titleItalic}</span>
          </h1>
          <div className="flex flex-wrap gap-4 justify-center lg:justify-start pt-2 animate-fade-in animation-delay-200">
            <a
              href={github}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-3 px-5 md:px-6 py-3 bg-primary text-primary-foreground rounded-full font-semibold hover:bg-primary/90 transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-primary/50 text-sm md:text-base"
            >
              <ExternalLink className="w-4 h-4 md:w-5 md:h-5 group-hover:rotate-12 transition-transform" />
              {t.viewGithub}
            </a>
          </div>
        </div>

        <div className="w-full lg:w-1/3 flex justify-center lg:justify-end animate-float">
          <div className="relative w-28 h-28 sm:w-36 sm:h-36 md:w-56 md:h-56 lg:w-64 lg:h-64 group">
            <div className="absolute inset-0 bg-primary/20 blur-3xl rounded-full group-hover:bg-primary/30 transition-all duration-700" />
            <div className="relative w-full h-full rounded-[1.75rem] md:rounded-[2rem] overflow-hidden border border-white/10 shadow-2xl glass flex items-center justify-center">
              <HeroIcon className="w-16 h-16 sm:w-20 sm:h-20 md:w-32 md:h-32 text-primary opacity-80" />
            </div>
          </div>
        </div>
      </div>
    </header>

    {/* QUICK FACTS */}
    <section className="container mx-auto px-4 md:px-6 mb-12 md:mb-20 animate-fade-in animation-delay-300">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4">
          {t.quickFacts.map((fact, idx) => {
            const FactIcon = fact.icon;
            return (
              <div key={idx} className="glass rounded-2xl p-4 md:p-5 hover:border-primary/30 transition-all duration-300">
                <div className="flex items-center gap-2 text-[10px] md:text-xs uppercase tracking-widest text-muted-foreground mb-2">
                  <FactIcon className="w-3 h-3 md:w-3.5 md:h-3.5 text-primary flex-shrink-0" />
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

    {/* CONTEXT */}
    <section className="container mx-auto px-4 md:px-6 mb-12 md:mb-20 animate-fade-in animation-delay-350">
      <div className="max-w-6xl mx-auto">
        <div className="glass p-6 md:p-10 rounded-[1.5rem] md:rounded-[2rem] border-primary/10 relative overflow-hidden">
          <div className="absolute -top-20 -right-20 w-64 h-64 bg-primary/5 rounded-full blur-3xl pointer-events-none" />
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4 md:mb-6 text-white relative">
            {t.contextTitle}
          </h2>
          <div className="text-sm md:text-base lg:text-lg text-muted-foreground leading-relaxed relative">
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-semibold uppercase tracking-wider mb-4 inline-block">
              <img src="/Portfolio/Projects/iconTech/N8n.png" alt="n8n" className="w-3.5 h-3.5 object-contain flex-shrink-0" />
              PROJECT BUILT ENTIRELY WITH n8n
            </span>
            <br />
            {t.tagline}
          </div>
        </div>
      </div>
    </section>

    {/* HOW IT WORKS */}
    <section className="container mx-auto px-4 md:px-6 mb-12 md:mb-20 animate-fade-in animation-delay-400">
      <div className="max-w-6xl mx-auto">
        <div className="text-left md:text-center mb-8 md:mb-12">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white">{t.howTitle}</h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {t.steps.map((step, index) => {
            const StepIcon = step.icon;
            return (
              <div key={index} className="glass p-5 md:p-6 rounded-2xl hover:border-primary/30 transition-all duration-300 group">
                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <StepIcon className="w-5 h-5 text-primary" />
                </div>
                <h3 className="text-base md:text-lg font-bold mb-2 group-hover:text-primary transition-colors leading-tight">
                  {step.title}
                </h3>
                <p className="text-xs md:text-sm text-muted-foreground leading-relaxed">
                  {step.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>

    {/* SCREENSHOTS */}
    <section className="container mx-auto px-4 md:px-6 animate-fade-in animation-delay-500">
      <div className="max-w-6xl mx-auto">
        <div className="text-left md:text-center mb-6 md:mb-10">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white">{t.screenshotsTitle}</h2>
        </div>
        <div className="space-y-8 md:space-y-12">
          {t.images.map((img, idx) => (
            <figure key={idx} className="glass p-3 sm:p-4 md:p-6 rounded-[1.25rem] md:rounded-[2rem] border-primary/10">
              <img
                src={img.src}
                alt={img.caption}
                className="w-full h-auto rounded-xl md:rounded-2xl object-contain"
              />
              <figcaption className="text-xs sm:text-sm text-muted-foreground text-center italic mt-3 md:mt-4 px-2">
                {img.caption}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>

  </div>
);

export default AiEmailAgent;
