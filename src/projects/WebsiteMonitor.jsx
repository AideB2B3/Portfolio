import React, { useEffect } from 'react';
import { Globe, Clock, Bell } from 'lucide-react';
import { N8nLayout } from './AiEmailAgent';

const GITHUB = "https://github.com/AideB2B3/web_site_monitor_with_n8n";

const WebsiteMonitor = ({ lang }) => {
  useEffect(() => { window.scrollTo(0, 0); }, []);

  const l = lang === 'it' ? 'it' : 'en';

  const t = {
    en: {
      back: "Back to all projects",
      viewGithub: "View on GitHub",
      badge: "Project built entirely with n8n",
      tagline: "An n8n workflow that checks every 5 minutes whether a website is online and immediately sends a Telegram alert in case of downtime. No external dependencies.",
      quickFacts: [
        { label: "Type", value: "Monitoring" },
        { label: "Role", value: "Solo Developer" },
        { label: "Integrations", value: "HTTP · Telegram" },
        { label: "Schedule", value: "Every 5 minutes" },
      ],
      screenshotsTitle: "Screenshots",
      images: [
        { src: "/Portfolio/Projects/n8n/website_workflow.png", caption: "The n8n workflow: Schedule Trigger → HTTP Request → Telegram alert (only on the error branch)." },
        { src: "/Portfolio/Projects/n8n/website_alert.png", caption: "The downtime alert delivered to Telegram with the exact timestamp." },
      ],
      howTitle: "How it works",
      steps: [
        { icon: Clock, title: "Schedule Trigger", description: "Runs every 5 minutes using the cron expression */5 * * * *." },
        { icon: Globe, title: "HTTP Request", description: "Sends a GET request to the monitored site with Continue-On-Fail enabled, so the workflow keeps going if the site is unreachable." },
        { icon: Bell, title: "Telegram Alert", description: "Receives data only on the error branch and immediately sends an alert with the exact downtime timestamp." },
      ],
    },
    it: {
      back: "Torna a tutti i progetti",
      viewGithub: "Vedi su GitHub",
      badge: "Progetto realizzato interamente con n8n",
      tagline: "Un workflow n8n che controlla ogni 5 minuti se un sito è online e invia subito un alert su Telegram in caso di downtime. Zero dipendenze esterne.",
      quickFacts: [
        { label: "Tipo", value: "Monitoraggio" },
        { label: "Ruolo", value: "Solo Developer" },
        { label: "Integrazioni", value: "HTTP · Telegram" },
        { label: "Frequenza", value: "Ogni 5 minuti" },
      ],
      screenshotsTitle: "Screenshot",
      images: [
        { src: "/Portfolio/Projects/n8n/website_workflow.png", caption: "Il workflow su n8n: Schedule Trigger → HTTP Request → alert Telegram (solo sul ramo di errore)." },
        { src: "/Portfolio/Projects/n8n/website_alert.png", caption: "L'alert di downtime recapitato su Telegram con l'orario esatto." },
      ],
      howTitle: "Come funziona",
      steps: [
        { icon: Clock, title: "Schedule Trigger", description: "Si avvia ogni 5 minuti tramite l'espressione cron */5 * * * *." },
        { icon: Globe, title: "HTTP Request", description: "Fa una GET al sito monitorato con Continue-On-Fail attivo: se il sito è irraggiungibile il workflow continua invece di bloccarsi." },
        { icon: Bell, title: "Alert Telegram", description: "Riceve i dati solo sul ramo di errore e invia subito un alert con l'orario esatto del downtime." },
      ],
    },
  }[l];

  return (
    <N8nLayout
      lang={l}
      t={t}
      github={GITHUB}
      HeroIcon={Globe}
      title={l === 'it' ? 'Monitor Uptime' : 'Website Uptime'}
      titleItalic={l === 'it' ? 'Sito Web' : 'Monitor'}
    />
  );
};

export default WebsiteMonitor;
