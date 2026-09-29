<div align="center">

# Davide Bellobuono — Portfolio

**iOS Developer (Swift / SwiftUI) with an Automation Engineering background, building toward full-stack.**

[![Live Site](https://img.shields.io/badge/Live%20Site-aideb2b3.github.io%2FPortfolio-20B2A6?style=for-the-badge&logo=github&logoColor=white)](https://aideb2b3.github.io/Portfolio/)

[![React](https://img.shields.io/badge/React-19-61DAFB?logo=react&logoColor=white)](https://react.dev/)
[![Vite](https://img.shields.io/badge/Vite-Rolldown-646CFF?logo=vite&logoColor=white)](https://vite.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-4-06B6D4?logo=tailwindcss&logoColor=white)](https://tailwindcss.com/)
[![React Router](https://img.shields.io/badge/React%20Router-7-CA4245?logo=reactrouter&logoColor=white)](https://reactrouter.com/)
[![Deployed on GitHub Pages](https://img.shields.io/badge/Deployed%20on-GitHub%20Pages-181717?logo=github&logoColor=white)](https://pages.github.com/)

**[View the live portfolio →](https://aideb2b3.github.io/Portfolio/)**

</div>

---

## Overview

This repository contains the source code of my personal portfolio: a bilingual (English / Italian) single-page application that presents my background, technical skills, professional experience, education and a curated selection of projects, each with a dedicated case-study page.

The portfolio is designed to be fast, responsive and accessible on every device, with a dark, glass-style interface, subtle motion and a downloadable CV in both languages.

## Live Demo

| | |
|---|---|
| **Website** | [aideb2b3.github.io/Portfolio](https://aideb2b3.github.io/Portfolio/) |
| **Projects overview** | [aideb2b3.github.io/Portfolio/projects](https://aideb2b3.github.io/Portfolio/projects) |

## Features

- **Bilingual interface** — instant switch between English and Italian, including content, CV download and metadata.
- **Dedicated project pages** — every project has its own route with context, challenges, technical choices and outcomes.
- **Single-page routing on GitHub Pages** — client-side routing with React Router, plus a `404.html` redirect so that deep links (e.g. `/Portfolio/cowpow-radio`) work on refresh and when shared.
- **Working contact form** — messages are delivered by email through EmailJS, with no backend to maintain.
- **Downloadable CV** — English and Italian versions available from the hero section.
- **Responsive, modern UI** — mobile-first layout built with Tailwind CSS 4, glassmorphism styling, animated timelines and a grouped tech-stack overview.
- **SEO and social sharing** — Open Graph and Twitter Card metadata for rich link previews.

## Featured Projects

| Project | Description | Stack | Link |
|---|---|---|---|
| **CowPow! Radio Stories** | Medical simulation app for children undergoing radiotherapy, developed for CHOC (South Africa) and tested on-site with children, doctors and social workers. | Unity, C#, SwiftUI | [App Store](https://apps.apple.com/it/app/cowpow-radio-stories/id6779679122) |
| **LISionario** | Native iOS Italian Sign Language dictionary on a remote-services architecture, with an asynchronous upload pipeline and a two-stage moderation queue. | SwiftUI, Airtable REST API, Cloudinary, AVKit | [Case study](https://aideb2b3.github.io/Portfolio/lisionario) |
| **Bug Busters** | Native iOS arcade shooter featuring object pooling and dynamic difficulty scaling. | SwiftUI, SpriteKit, AVFoundation | [App Store](https://apps.apple.com/it/app/bug-busters/id6747584160) |
| **Alzheimer Classification** | Object-oriented ML pipeline benchmarking 9 classifiers on longitudinal clinical data (best ROC-AUC ≈ 0.95). | Python, scikit-learn | [GitHub](https://github.com/AideB2B3/AI-Project-for-University-Exams) |
| **AI Email Agent with Human Approval** | n8n workflow that classifies incoming Gmail messages with AI and requires Discord approval (human-in-the-loop) before acting, with Notion logging. | n8n, Claude AI, Gmail, Discord | [GitHub](https://github.com/AideB2B3/AI-Powered-Email-Agent-with-Human-Approval) |
| **ETL Pipeline → Database** | Scheduled workflow that extracts live data from a public API, transforms it and loads it into PostgreSQL. | n8n, CoinGecko, Supabase, PostgreSQL | [GitHub](https://github.com/AideB2B3/PIPELINE-ETL-DATABASE-n8n) |
| **Daily Weather Report** | Scheduled automation that fetches forecast data and delivers a daily summary to Telegram. | n8n, Open-Meteo, Telegram | [GitHub](https://github.com/AideB2B3/Daily_Weather_Report_with_n8n) |
| **Website Uptime Monitor** | Cron-scheduled HTTP health checks with Telegram alerting. | n8n, HTTP, Telegram | [GitHub](https://github.com/AideB2B3/web_site_monitor_with_n8n) |

## Tech Stack

**This portfolio**

| Area | Technologies |
|---|---|
| Framework | React 19 |
| Build tool | Vite (Rolldown) |
| Styling | Tailwind CSS 4 |
| Routing | React Router 7 |
| Icons | Lucide React |
| Contact form | EmailJS |
| Quality | ESLint 9 (with React Hooks and React Refresh rules) |
| Deployment | GitHub Pages via `gh-pages` |

**Skills showcased**

- **iOS** — Swift, SwiftUI, UIKit, SwiftData, Combine, SpriteKit, AVFoundation, MVVM, Xcode
- **Web / Full-stack** — React, TypeScript, JavaScript, HTML5, CSS3, Tailwind CSS, REST APIs
- **Automation & Data** — n8n, Python, PostgreSQL, Docker, REST API integration
- **Tools & Methods** — Git, Agile, Scrum, CI/CD, Jira, Confluence, Figma, Sketch, Unity

## Project Structure

```text
Portfolio/
├── public/                 # Static assets: images, CV (EN/IT), 404.html for SPA routing
├── src/
│   ├── Components/         # Reusable UI components (Button, AnimatedBorderButton)
│   ├── layout/             # NavBar, Footer, AllProjects
│   ├── sections/           # Home sections: Hero, About, Projects, Experience, Education, Contact
│   ├── projects/           # One case-study page per project
│   ├── App.jsx             # Routes and global layout
│   ├── main.jsx            # Application entry point
│   └── index.css           # Global styles and Tailwind configuration
├── index.html              # HTML entry point with SEO / Open Graph metadata
├── vite.config.js          # Vite configuration (base path, aliases, plugins)
└── package.json
```

## Contact

- **Website:** [aideb2b3.github.io/Portfolio](https://aideb2b3.github.io/Portfolio/)
- **LinkedIn:** [linkedin.com/in/davide-bellobuono](https://www.linkedin.com/in/davide-bellobuono/)
- **GitHub:** [@AideB2B3](https://github.com/AideB2B3)
- **Email:** [davide23bellobuono@gmail.com](mailto:davide23bellobuono@gmail.com)

## License

© Davide Bellobuono. All rights reserved. The source code is published for portfolio and reference purposes; the content, texts, images and project material may not be reused without permission.
