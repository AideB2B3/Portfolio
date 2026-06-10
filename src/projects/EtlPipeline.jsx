import React, { useEffect } from 'react';
import { Database, Clock, Globe, Code, Zap, User, Plug } from 'lucide-react';
import { N8nLayout } from './AiEmailAgent';

const GITHUB = "https://github.com/AideB2B3/PIPELINE-ETL-DATABASE-n8n";

const EtlPipeline = ({ lang }) => {
  useEffect(() => { window.scrollTo(0, 0); }, []);

  const l = lang === 'it' ? 'it' : 'en';

  const t = {
    en: {
      back: "Back to all projects",
      viewGithub: "View on GitHub",
      badge: "Project built entirely with n8n",
      tagline: "An n8n workflow that every 30 minutes fetches Bitcoin and Ethereum prices via the free CoinGecko API, transforms the data into structured format, and saves it to a PostgreSQL database on Supabase. A complete ETL pattern: Extract, Transform, Load.",
      contextTitle: "Context",
      quickFacts: [
        { icon: Zap, label: "Type", value: "Scheduled Automation - n8n" },
        { icon: User, label: "Role", value: "Solo Developer" },
        { icon: Plug, label: "Integrations", value: "CoinGecko · Supabase" },
        { icon: Clock, label: "Schedule", value: "Every 30 minutes" },
      ],
      screenshotsTitle: "Screenshots",
      images: [
        { src: "/Portfolio/Projects/n8n/workflow_etl->database.png", caption: "The n8n workflow: Schedule Trigger → HTTP Request (CoinGecko) → Code in JavaScript → HTTP Request (Supabase REST API)." },
        { src: "/Portfolio/Projects/n8n/Result_Database.png", caption: "Data saved in the Prezzi_Crypto table on Supabase after each execution." },
      ],
      howTitle: "How it works",
      steps: [
        { icon: Clock, title: "Schedule Trigger", description: "Runs automatically every 30 minutes using the cron expression */30 * * * *." },
        { icon: Globe, title: "HTTP Request", description: "Calls the public CoinGecko API to get Bitcoin and Ethereum prices in EUR. No API key required." },
        { icon: Code, title: "Code (JavaScript)", description: "Transforms the JSON response into two separate objects, one for Bitcoin and one for Ethereum, each with the current timestamp." },
        { icon: Database, title: "HTTP Request (Supabase)", description: "Inserts each row into the Prezzi_Crypto table on Supabase via the built-in REST API. Uses HTTPS instead of a direct TCP connection to avoid Docker DNS issues." },
      ],
      noteTitle: "Technical Note",
      noteItems: [
        {
          label: "The problem",
          text: "During development I tried using n8n's native Postgres node to connect directly to Supabase, but ran into a DNS issue typical of n8n running on Docker. The container could not resolve the Supabase hostname, returning a \"getaddrinfo ENOTFOUND db.[ref].supabase.co\" error on both port 5432 (direct connection) and port 6543 (connection pooler).",
        },
        {
          label: "The solution: Supabase REST API via HTTP Request",
          text: "Supabase exposes a built-in REST API on every project. Instead of the Postgres node I used the HTTP Request node with a POST call to the Supabase REST endpoint. This works perfectly from Docker because it uses standard HTTPS instead of a direct TCP connection — no extra configuration needed.",
        },
        {
          label: "When to use the native Postgres node",
          text: "The native Postgres node works fine on n8n Cloud, where there are no DNS restrictions. If you are using n8n Cloud instead of Docker, you can connect it directly with the Supabase connection string.",
        },
      ],
    },
    it: {
      back: "Torna a tutti i progetti",
      viewGithub: "Vedi su GitHub",
      badge: "Progetto realizzato interamente con n8n",
      tagline: "Un workflow n8n che ogni 30 minuti recupera i prezzi di Bitcoin ed Ethereum tramite l'API gratuita CoinGecko, trasforma i dati in formato strutturato e li salva su un database PostgreSQL su Supabase. Un pattern ETL completo: Extract, Transform, Load.",
      contextTitle: "Contesto",
      quickFacts: [
        { icon: Zap, label: "Tipo", value: "Automazione Schedulata - n8n" },
        { icon: User, label: "Ruolo", value: "Solo Developer" },
        { icon: Plug, label: "Integrazioni", value: "CoinGecko · Supabase" },
        { icon: Clock, label: "Frequenza", value: "Ogni 30 minuti" },
      ],
      screenshotsTitle: "Screenshot",
      images: [
        { src: "/Portfolio/Projects/n8n/workflow_etl->database.png", caption: "Il workflow su n8n: Schedule Trigger → HTTP Request (CoinGecko) → Code in JavaScript → HTTP Request (Supabase REST API)." },
        { src: "/Portfolio/Projects/n8n/Result_Database.png", caption: "I dati salvati nella tabella Prezzi_Crypto su Supabase dopo ogni esecuzione." },
      ],
      howTitle: "Come funziona",
      steps: [
        { icon: Clock, title: "Schedule Trigger", description: "Si avvia automaticamente ogni 30 minuti tramite l'espressione cron */30 * * * *." },
        { icon: Globe, title: "HTTP Request", description: "Chiama l'API pubblica CoinGecko per ottenere i prezzi in EUR di Bitcoin ed Ethereum. Nessuna API key richiesta." },
        { icon: Code, title: "Code (JavaScript)", description: "Trasforma la risposta JSON in due oggetti separati, uno per Bitcoin e uno per Ethereum, aggiungendo il timestamp corrente." },
        { icon: Database, title: "HTTP Request (Supabase)", description: "Inserisce ogni riga nella tabella Prezzi_Crypto su Supabase tramite la REST API integrata. Usa HTTPS invece di una connessione TCP diretta per evitare problemi DNS su Docker." },
      ],
      noteTitle: "Nota Tecnica",
      noteItems: [
        {
          label: "Il problema",
          text: "Durante lo sviluppo ho provato a usare il nodo Postgres nativo di n8n per connettermi direttamente a Supabase, ma ho riscontrato un problema DNS tipico di n8n su Docker. Il container non riusciva a risolvere il hostname di Supabase, restituendo l'errore \"getaddrinfo ENOTFOUND db.[ref].supabase.co\" sia sulla porta 5432 (connessione diretta) che sulla 6543 (connection pooler).",
        },
        {
          label: "La soluzione: Supabase REST API tramite HTTP Request",
          text: "Supabase espone una REST API integrata su ogni progetto. Al posto del nodo Postgres ho usato il nodo HTTP Request con una chiamata POST all'endpoint REST di Supabase. Questo approccio funziona perfettamente da Docker perche usa HTTPS standard invece di una connessione TCP diretta, senza configurazioni aggiuntive.",
        },
        {
          label: "Quando usare il nodo Postgres nativo",
          text: "Il nodo Postgres nativo funziona senza problemi su n8n Cloud, dove non ci sono restrizioni DNS. Se usi n8n Cloud invece di Docker, puoi collegarlo direttamente con la connection string di Supabase.",
        },
      ],
    },
  }[l];

  return (
    <N8nLayout
      lang={l}
      t={t}
      github={GITHUB}
      HeroIcon={Database}
      title="ETL Pipeline"
      titleItalic="→ Database"
      note={{ title: t.noteTitle, items: t.noteItems }}
    />
  );
};

export default EtlPipeline;
