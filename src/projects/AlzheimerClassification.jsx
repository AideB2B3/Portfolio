import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowLeft, ExternalLink, User, Code2, Database,
  GitBranch, Layers, Sliders, BarChart2, RefreshCw,
  ClipboardList, Brain, Calendar, Gauge, Share2, GraduationCap
} from 'lucide-react';

const AlzheimerClassification = ({ lang }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const content = {
    en: {
      back: "Back to Projects",
      tagline: "A machine learning system to automatically classify Alzheimer's dementia status from longitudinal clinical data.",
      viewDemo: "View on GitHub",

      quickFactsLabel: {
        origin: "Context",
        role: "Role",
        dataset: "Dataset",
        timeline: "Timeline",
      },
      quickFactsValue: {
        origin: "University Exam — Artificial Intelligence",
        role: "Solo Developer",
        dataset: "OASIS Longitudinal",
        timeline: "2024 / 2025",
      },

      challengeTitle: "The Challenge",
      challengeText: (
        <>
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-semibold uppercase tracking-wider mb-4 inline-block">
            <GraduationCap className="w-3.5 h-3.5" />
            Artificial Intelligence Exam — Prof.ssa Amato Flora
          </span>
          <br />
          The goal was to build a system that can{' '}
          <span className="text-primary font-semibold">automatically classify the dementia status</span> of a
          patient based on clinical and demographic data collected over time. Each patient belongs to one of
          three classes: <span className="text-primary font-semibold">Demented</span> (stable dementia across
          all visits), <span className="text-primary font-semibold">Nondemented</span> (no dementia detected),
          and <span className="text-primary font-semibold">Converted</span> (dementia developed over time).
          <br /><br />
          Three core difficulties shaped the work. First, handling a multi-class problem using the{' '}
          <span className="text-primary font-semibold">one-vs-rest strategy</span>, which requires a separate
          binary classifier for each target class. Second, features on very different scales made{' '}
          <span className="text-primary font-semibold">normalization essential</span> for algorithms like KNN
          and SVM to work correctly. Third, significant{' '}
          <span className="text-primary font-semibold">class imbalance</span> in the Converted class made
          accuracy alone an unreliable metric for evaluating model performance.
        </>
      ),

      roleTitle: "My Role",
      roleText: (
        <>
          I designed and built the entire pipeline{' '}
          <span className="text-primary font-semibold">independently</span>, covering every stage from data
          preprocessing and feature engineering to model training, systematic evaluation, and result
          visualization. A key decision was to refactor the original procedural code into a{' '}
          <span className="text-primary font-semibold">fully object-oriented architecture</span> with five
          classes and clearly separated responsibilities, making the system extensible, reproducible, and easy
          to maintain. The pipeline benchmarks{' '}
          <span className="text-primary font-semibold">nine classifiers across three target classes</span> using
          seven evaluation metrics, with cross-validation integrated to ensure reliable results despite the
          limited dataset size.
        </>
      ),

      techTitle: "Tech Stack",
      techIntro: "Built in Python with a full scikit-learn ML pipeline.",
      tools: [
        { name: "Python", desc: "Core language, data pipeline, OOP architecture", img: "python.png" },
        { name: "Scikit-learn", desc: "9 classifiers, StandardScaler, cross-validation, metrics", img: "Scikit.png" },
        { name: "Pandas", desc: "Data loading, manipulation, feature extraction", img: "Pandas.png" },
        { name: "NumPy", desc: "Numerical operations and array processing", img: "NumPy.png" },
      ],

      highlightsTitle: "Technical Highlights",
      highlightsSubtitle: "Key design decisions and systems built for this ML pipeline",
      highlights: [
        {
          icon: GitBranch,
          title: "Object-Oriented Architecture",
          description: "5 classes with separate responsibilities: Config, DataLoader, FeatureProcessor, ModelEvaluator, Visualizer. Adding a classifier requires one line in the config dictionary."
        },
        {
          icon: Share2,
          title: "One-vs-Rest Strategy",
          description: "Multi-class classification handled by training a separate binary classifier for each target class. Each model learns to distinguish one class from all others, then predictions are combined to assign the final label."
        },
        {
          icon: Sliders,
          title: "StandardScaler Normalisation",
          description: "Applied before training to bring every feature to mean 0 and std 1 (z = (x - mean) / std). Essential for scale-sensitive algorithms like KNN and SVM."
        },
        {
          icon: BarChart2,
          title: "9 Classifiers, Same Pipeline",
          description: "Every model is evaluated with identical split and metrics, ensuring a fair and reproducible comparison across Logistic Regression, SVM, KNN, Random Forest, Gradient Boosting and more."
        },
        {
          icon: RefreshCw,
          title: "5-Fold Cross-Validation",
          description: "Computed alongside the standard train/test split to estimate model stability and detect potential overfitting on the limited 373-sample dataset."
        },
        {
          icon: ClipboardList,
          title: "7 Evaluation Metrics",
          description: "Accuracy, Precision, Recall, F1-Score, ROC-AUC, CV Mean F1, and CV Std Dev. Critical for reliable evaluation with imbalanced classes like Converted."
        },
      ],

      impactTitle: "Technical Metrics",
      impactStats: [
        { icon: Brain, label: "Classifiers", value: "9", highlight: true },
        { icon: Layers, label: "Features", value: "8", highlight: true },
        { icon: Database, label: "Samples", value: "373", highlight: false },
        { icon: RefreshCw, label: "CV Folds", value: "5", highlight: false },
        { icon: ClipboardList, label: "Metrics / Model", value: "7", highlight: true },
        { icon: Gauge, label: "Best ROC-AUC", value: "~0.95", highlight: true },
      ],

      datasetTitle: "Dataset",
      datasetRows: [
        { label: "Name", value: "OASIS Longitudinal" },
        { label: "Source", value: "oasis-brains.org", href: "https://www.oasis-brains.org" },
        { label: "Samples", value: "373 visits, ~150 unique patients" },
        { label: "Features", value: "8 numerical (Age, EDUC, SES, MMSE, CDR, eTIV, nWBV, ASF)" },
        { label: "Classes", value: "Demented, Nondemented, Converted" },
        { label: "Task", value: "Binary one-vs-rest classification per class" },
      ],
    },

    it: {
      back: "Torna ai Progetti",
      tagline: "Un sistema di machine learning per classificare automaticamente lo stato di demenza dell'Alzheimer da dati clinici longitudinali.",
      viewDemo: "Vedi su GitHub",

      quickFactsLabel: {
        origin: "Contesto",
        role: "Ruolo",
        dataset: "Dataset",
        timeline: "Timeline",
      },
      quickFactsValue: {
        origin: "Esame Universitario — Intelligenza Artificiale",
        role: "Sviluppo Autonomo",
        dataset: "OASIS Longitudinal",
        timeline: "2024 / 2025",
      },

      challengeTitle: "Contesto",
      challengeText: (
        <>
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-semibold uppercase tracking-wider mb-4 inline-block">
            <GraduationCap className="w-3.5 h-3.5" />
            Esame di Intelligenza Artificiale — Prof.ssa Amato Flora
          </span>
          <br />
          L'obiettivo era costruire un sistema capace di{' '}
          <span className="text-primary font-semibold">classificare automaticamente lo stato di demenza</span>{' '}
          di un paziente a partire da dati clinici e demografici raccolti nel tempo. Ogni paziente appartiene
          a una di tre classi: <span className="text-primary font-semibold">Demented</span> (demenza stabile),{' '}
          <span className="text-primary font-semibold">Nondemented</span> (nessuna demenza) e{' '}
          <span className="text-primary font-semibold">Converted</span> (demenza sviluppata nel tempo).
          <br /><br />
          Tre difficoltà principali hanno caratterizzato il lavoro. Prima, la gestione di un problema
          multi-classe tramite{' '}
          <span className="text-primary font-semibold">strategia one-vs-rest</span>, che richiede un
          classificatore binario separato per ogni classe. Seconda, features su scale molto diverse hanno
          reso la{' '}
          <span className="text-primary font-semibold">normalizzazione essenziale</span> per algoritmi come
          KNN e SVM. Terza, il significativo{' '}
          <span className="text-primary font-semibold">sbilanciamento delle classi</span> nella classe
          Converted ha reso l'accuracy da sola una metrica inaffidabile per valutare le performance dei modelli.
        </>
      ),

      roleTitle: "My Role",
      roleText: (
        <>
          Ho progettato e sviluppato l'intera pipeline{' '}
          <span className="text-primary font-semibold">in autonomia</span>, seguendo ogni fase: dal
          preprocessing dei dati e l'estrazione delle feature fino al training dei modelli, alla valutazione
          sistematica e alla visualizzazione dei risultati. Una decisione chiave è stata refactorizzare il
          codice procedurale originale in un'{' '}
          <span className="text-primary font-semibold">architettura completamente object-oriented</span> con
          cinque classi a responsabilità separate, rendendo il sistema estendibile, riproducibile e facilmente
          manutenibile. La pipeline mette a confronto{' '}
          <span className="text-primary font-semibold">nove classificatori su tre classi target</span> con
          sette metriche di valutazione, integrando la cross-validation per garantire risultati affidabili
          nonostante le dimensioni limitate del dataset.
        </>
      ),

      techTitle: "Tech Stack",
      techIntro: "Sviluppato in Python con una pipeline ML completa in scikit-learn.",
      tools: [
        { name: "Python", desc: "Linguaggio principale, pipeline dati, architettura OOP", img: "python.png" },
        { name: "Scikit-learn", desc: "9 classificatori, StandardScaler, cross-validation, metriche", img: "Scikit.png" },
        { name: "Pandas", desc: "Caricamento dati, manipolazione, estrazione feature", img: "Pandas.png" },
        { name: "NumPy", desc: "Operazioni numeriche e gestione degli array", img: "NumPy.png" },
      ],

      highlightsTitle: "Highlights Tecnici",
      highlightsSubtitle: "Decisioni progettuali chiave e sistemi costruiti per questa pipeline ML",
      highlights: [
        {
          icon: GitBranch,
          title: "Architettura Object-Oriented",
          description: "5 classi con responsabilità separate: Config, DataLoader, FeatureProcessor, ModelEvaluator, Visualizer. Aggiungere un classificatore richiede una riga nel dizionario di config."
        },
        {
          icon: Share2,
          title: "Strategia One-vs-Rest",
          description: "La classificazione multi-classe viene gestita addestrando un classificatore binario separato per ogni classe target. Ogni modello impara a distinguere una classe da tutte le altre, poi le predizioni vengono combinate per assegnare l'etichetta finale."
        },
        {
          icon: Sliders,
          title: "Normalizzazione con StandardScaler",
          description: "Applicata prima del training per portare ogni feature a media 0 e deviazione standard 1 (z = (x - media) / std). Essenziale per algoritmi sensibili alla scala come KNN e SVM."
        },
        {
          icon: BarChart2,
          title: "9 Classificatori, Stessa Pipeline",
          description: "Ogni modello è valutato con lo stesso split e le stesse metriche, garantendo un confronto equo e riproducibile tra Logistic Regression, SVM, KNN, Random Forest, Gradient Boosting e altri."
        },
        {
          icon: RefreshCw,
          title: "5-Fold Cross-Validation",
          description: "Calcolata insieme al singolo split train/test per stimare la stabilità di ogni modello e individuare overfitting sul dataset limitato di 373 campioni."
        },
        {
          icon: ClipboardList,
          title: "7 Metriche di Valutazione",
          description: "Accuracy, Precision, Recall, F1-Score, ROC-AUC, CV Mean F1 e CV Std Dev. Essenziali per una valutazione affidabile con classi sbilanciate come Converted."
        },
      ],

      impactTitle: "Metriche Tecniche",
      impactStats: [
        { icon: Brain, label: "Classificatori", value: "9", highlight: true },
        { icon: Layers, label: "Features", value: "8", highlight: true },
        { icon: Database, label: "Campioni", value: "373", highlight: false },
        { icon: RefreshCw, label: "CV Fold", value: "5", highlight: false },
        { icon: ClipboardList, label: "Metriche / Modello", value: "7", highlight: true },
        { icon: Gauge, label: "Miglior ROC-AUC", value: "~0.95", highlight: true },
      ],

      datasetTitle: "Dataset",
      datasetRows: [
        { label: "Nome", value: "OASIS Longitudinal" },
        { label: "Fonte", value: "oasis-brains.org", href: "https://www.oasis-brains.org" },
        { label: "Campioni", value: "373 visite, ~150 pazienti unici" },
        { label: "Features", value: "8 numeriche (Age, EDUC, SES, MMSE, CDR, eTIV, nWBV, ASF)" },
        { label: "Classi", value: "Demented, Nondemented, Converted" },
        { label: "Task", value: "Classificazione binaria one-vs-rest per ogni classe" },
      ],
    },
  };

  const t = content[lang] || content.en;

  const quickFacts = [
    { icon: User, label: t.quickFactsLabel.origin, value: t.quickFactsValue.origin },
    { icon: Code2, label: t.quickFactsLabel.role, value: t.quickFactsValue.role },
    { icon: Database, label: t.quickFactsLabel.dataset, value: t.quickFactsValue.dataset },
    { icon: Calendar, label: t.quickFactsLabel.timeline, value: t.quickFactsValue.timeline },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground font-sans selection:bg-primary/30 pt-24 md:pt-32 pb-16 md:pb-20">

      {/* Navigation Back */}
      <div className="container mx-auto px-4 md:px-6 mb-6 md:mb-8">
        <Link to="/" className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors duration-300 group">
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
          <span className="text-xs md:text-sm uppercase tracking-widest font-medium">{t.back}</span>
        </Link>
      </div>

      {/* HERO */}
      <header className="container mx-auto px-4 md:px-6 mb-12 md:mb-20">
        <div className="flex flex-col-reverse lg:flex-row items-center lg:items-end justify-between gap-8 md:gap-12">

          <div className="w-full lg:w-2/3 space-y-5 md:space-y-6 text-center lg:text-left">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-black tracking-tight leading-[0.95] text-white animate-fade-in">
              Alzheimer <span className="font-serif italic font-normal">Classification</span>
            </h1>
            <p className="text-base md:text-xl lg:text-2xl text-muted-foreground font-medium max-w-2xl mx-auto lg:mx-0 animate-fade-in animation-delay-100">
              {t.tagline}
            </p>
            <div className="flex flex-wrap gap-4 justify-center lg:justify-start pt-2 animate-fade-in animation-delay-200">
              <a
                href="https://github.com/AideB2B3/AI-Project-for-University-Exams"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-3 px-5 md:px-6 py-3 bg-primary text-primary-foreground rounded-full font-semibold hover:bg-primary/90 transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-primary/50 text-sm md:text-base"
              >
                <ExternalLink className="w-4 h-4 md:w-5 md:h-5 group-hover:rotate-12 transition-transform" />
                {t.viewDemo}
              </a>
            </div>
          </div>

          {/* Icon */}
          <div className="w-full lg:w-1/3 flex justify-center lg:justify-end animate-float">
            <div className="relative w-36 h-36 md:w-56 md:h-56 lg:w-64 lg:h-64 group">
              <div className="absolute inset-0 bg-primary/20 blur-3xl rounded-full group-hover:bg-primary/30 transition-all duration-700" />
              <div className="relative w-full h-full rounded-[1.75rem] md:rounded-[2rem] overflow-hidden border border-white/10 shadow-2xl glass flex items-center justify-center">
                <Brain className="w-20 h-20 md:w-32 md:h-32 text-primary opacity-80" />
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
                <div key={idx} className="glass rounded-2xl p-4 md:p-5 hover:border-primary/30 transition-all duration-300">
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
            <div className="absolute -top-20 -right-20 w-64 h-64 bg-primary/5 rounded-full blur-3xl pointer-events-none" />
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
                    <div key={index} className="flex items-center justify-between group border-b border-border/30 pb-5 md:pb-6 last:border-b-0 last:pb-0">
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

      {/* TECHNICAL HIGHLIGHTS */}
      <section className="container mx-auto px-4 md:px-6 mb-12 md:mb-20 animate-fade-in animation-delay-600">
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
                <div key={index} className="glass p-5 md:p-6 rounded-2xl hover:border-primary/30 transition-all duration-300 group">
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

      {/* TECHNICAL METRICS */}
      <section className="container mx-auto px-4 md:px-6 mb-12 md:mb-20 animate-fade-in animation-delay-700">
        <div className="max-w-6xl mx-auto">
          <div className="text-left md:text-center mb-8 md:mb-12">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-3 md:mb-4 text-white">
              {t.impactTitle}
            </h2>
          </div>
          <div className="glass p-6 md:p-8 rounded-2xl">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 md:gap-8">
              {t.impactStats.map((stat, index) => {
                const Icon = stat.icon;
                return (
                  <div key={index} className="text-center">
                    <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center mb-3 mx-auto">
                      <Icon className="w-5 h-5 text-primary" />
                    </div>
                    <div className={`text-2xl md:text-3xl lg:text-4xl font-black mb-2 ${stat.highlight ? 'text-primary' : 'text-foreground'} leading-none`}>
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
        </div>
      </section>

      {/* DATASET */}
      <section className="container mx-auto px-4 md:px-6 animate-fade-in animation-delay-800">
        <div className="max-w-6xl mx-auto">
          <div className="text-left md:text-center mb-8 md:mb-12">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-3 md:mb-4 text-white">
              {t.datasetTitle}
            </h2>
          </div>
          <div className="glass p-6 md:p-8 rounded-2xl">
            <div className="divide-y divide-border/40">
              {t.datasetRows.map((row, idx) => (
                <div key={idx} className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-4 py-3 md:py-4 first:pt-0 last:pb-0">
                  <span className="text-xs uppercase tracking-widest text-primary font-semibold w-full sm:w-32 flex-shrink-0">
                    {row.label}
                  </span>
                  {row.href ? (
                    <a
                      href={row.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm md:text-base text-muted-foreground hover:text-primary transition-colors underline underline-offset-2"
                    >
                      {row.value}
                    </a>
                  ) : (
                    <span className="text-sm md:text-base text-muted-foreground">{row.value}</span>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default AlzheimerClassification;
