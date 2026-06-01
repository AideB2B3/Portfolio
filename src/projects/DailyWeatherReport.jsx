import React, { useEffect } from 'react';
import { CloudSun, Clock, Globe, Workflow, Send } from 'lucide-react';
import { N8nLayout } from './AiEmailAgent';

const GITHUB = "https://github.com/AideB2B3/Daily_Weather_Report_with_n8n";

const DailyWeatherReport = ({ lang }) => {
  useEffect(() => { window.scrollTo(0, 0); }, []);

  const l = lang === 'it' ? 'it' : 'en';

  const t = {
    en: {
      back: "Back to all projects",
      viewGithub: "View on GitHub",
      badge: "Project built entirely with n8n",
      tagline: "An n8n workflow that every morning at 09:00 fetches the day's weather via the free Open-Meteo API and sends a formatted Telegram message with temperature, conditions and wind speed.",
      quickFacts: [
        { label: "Type", value: "Scheduled Automation" },
        { label: "Role", value: "Solo Developer" },
        { label: "Integrations", value: "Open-Meteo · Telegram" },
        { label: "Schedule", value: "Every day at 09:00" },
      ],
      screenshotsTitle: "Screenshots",
      images: [
        { src: "/Portfolio/Projects/n8n/weather_workflow.png", caption: "The n8n workflow: Schedule Trigger → HTTP Request → Code → Edit Fields → Telegram." },
        { src: "/Portfolio/Projects/n8n/weather_telegram.png", caption: "The formatted forecast as it arrives in Telegram each morning." },
      ],
      howTitle: "How it works",
      steps: [
        { icon: Clock, title: "Schedule Trigger", description: "Runs every day at 09:00." },
        { icon: Globe, title: "HTTP Request", description: "Calls the Open-Meteo API with the latitude and longitude of the chosen city — no API key required." },
        { icon: Workflow, title: "Code (JavaScript)", description: "Converts the numeric weathercode into readable text (e.g. 0 → 'Clear sky ☀️') and formats temperature and wind." },
        { icon: Send, title: "Telegram", description: "Sends the formatted daily forecast to your chat_id via a Telegram bot." },
      ],
    },
    it: {
      back: "Torna a tutti i progetti",
      viewGithub: "Vedi su GitHub",
      badge: "Progetto realizzato interamente con n8n",
      tagline: "Un workflow n8n che ogni mattina alle 09:00 recupera il meteo del giorno tramite la API gratuita Open-Meteo e invia un messaggio Telegram formattato con temperatura, condizioni e velocità del vento.",
      quickFacts: [
        { label: "Tipo", value: "Automazione Schedulata" },
        { label: "Ruolo", value: "Solo Developer" },
        { label: "Integrazioni", value: "Open-Meteo · Telegram" },
        { label: "Frequenza", value: "Ogni giorno alle 09:00" },
      ],
      screenshotsTitle: "Screenshot",
      images: [
        { src: "/Portfolio/Projects/n8n/weather_workflow.png", caption: "Il workflow su n8n: Schedule Trigger → HTTP Request → Code → Edit Fields → Telegram." },
        { src: "/Portfolio/Projects/n8n/weather_telegram.png", caption: "Le previsioni formattate così come arrivano ogni mattina su Telegram." },
      ],
      howTitle: "Come funziona",
      steps: [
        { icon: Clock, title: "Schedule Trigger", description: "Si avvia ogni giorno alle 09:00." },
        { icon: Globe, title: "HTTP Request", description: "Chiama l'API Open-Meteo con latitudine e longitudine della città scelta — nessuna API key richiesta." },
        { icon: Workflow, title: "Code (JavaScript)", description: "Converte il weathercode numerico in testo leggibile (es. 0 → 'Cielo sereno ☀️') e formatta temperatura e vento." },
        { icon: Send, title: "Telegram", description: "Invia le previsioni formattate al tuo chat_id tramite un bot Telegram." },
      ],
    },
  }[l];

  return (
    <N8nLayout
      lang={l}
      t={t}
      github={GITHUB}
      HeroIcon={CloudSun}
      title={l === 'it' ? 'Notifica Meteo' : 'Daily Weather'}
      titleItalic={l === 'it' ? 'Giornaliera' : 'Report'}
    />
  );
};

export default DailyWeatherReport;
