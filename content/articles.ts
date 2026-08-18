import type { Article, ArticleFeed } from "./types";

export const articleFeeds: ArticleFeed[] = [
  {
    id: "linkedin",
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/raulpenate/recent-activity/articles/",
  },
  {
    id: "dev.to",
    label: "DEV",
    href: "https://dev.to/raulpenate",
  },
];

/** Oldest first for DEV. Early posts have more likes. Dates are publish month (`YYYY-MM`). */
export const articles: Article[] = [
  {
    id: "linkedin-active-listening",
    title: {
      en: "How improve active listening",
      es: "How improve active listening",
    },
    href: {
      en: "https://www.linkedin.com/pulse/how-improve-active-listening-ra%C3%BAl-pe%C3%B1ate-ec6te",
      es: "https://www.linkedin.com/pulse/how-improve-active-listening-ra%C3%BAl-pe%C3%B1ate-ec6te",
    },
    source: "linkedin",
  },
  {
    id: "linkedin-nestjs-fundamentals",
    title: {
      en: "NestJS fundamentals",
      es: "NestJS fundamentals",
    },
    href: {
      en: "https://www.linkedin.com/pulse/nestjs-fundamentals-ra%C3%BAl-pe%C3%B1ate-5ycve",
      es: "https://www.linkedin.com/pulse/nestjs-fundamentals-ra%C3%BAl-pe%C3%B1ate-5ycve",
    },
    source: "linkedin",
  },
  {
    id: "linkedin-doomscrolled-superbia",
    title: {
      en: "We doomscrolled into superbia",
      es: "We doomscrolled into superbia",
    },
    href: {
      en: "https://www.linkedin.com/pulse/we-doomscrolled-superbia-ra%C3%BAl-pe%C3%B1ate-c35te",
      es: "https://www.linkedin.com/pulse/we-doomscrolled-superbia-ra%C3%BAl-pe%C3%B1ate-c35te",
    },
    source: "linkedin",
  },
  {
    id: "linkedin-universal-theory-communication-asi",
    title: {
      en: "Universal theory of communication with ASI",
      es: "Universal theory of communication with ASI",
    },
    href: {
      en: "https://www.linkedin.com/pulse/universal-theory-communication-artificial-super-asi-ra%C3%BAl-pe%C3%B1ate-xgure",
      es: "https://www.linkedin.com/pulse/universal-theory-communication-artificial-super-asi-ra%C3%BAl-pe%C3%B1ate-xgure",
    },
    source: "linkedin",
  },
  {
    id: "linkedin-why-revolutions-start",
    title: {
      en: "Why do revolutions actually start?",
      es: "Why do revolutions actually start?",
    },
    href: {
      en: "https://www.linkedin.com/pulse/why-do-revolutions-actually-start-its-rarely-just-poverty-ra%C3%BAl-pe%C3%B1ate-7evwe",
      es: "https://www.linkedin.com/pulse/why-do-revolutions-actually-start-its-rarely-just-poverty-ra%C3%BAl-pe%C3%B1ate-7evwe",
    },
    source: "linkedin",
  },
  {
    id: "github-cli-beginners-guide",
    title: {
      en: "Begginer's Guide: installing and using GitHub CLI",
      es: "Guía para principiantes: instalación y uso de GitHub CLI",
    },
    href: {
      en: "https://dev.to/raulpenate/begginers-guide-installing-and-using-github-cli-30ka",
      es: "https://dev.to/raulpenate/guia-para-principiantes-instalacion-y-uso-de-github-cli-3o2b",
    },
    source: "dev.to",
    date: "2024-07",
  },
  {
    id: "passion-for-programming",
    title: {
      en: "If You No Longer Feel Passion for Programming, It Might Never Have Existed",
      es: "Si Ya No Sientes Pasión por la Programación, Quizás Nunca Haya Existido",
    },
    href: {
      en: "https://dev.to/raulpenate/if-you-no-longer-feel-passion-for-programming-it-might-never-have-existed-279l",
      es: "https://dev.to/raulpenate/si-ya-no-sientes-pasion-por-la-programacion-quizas-nunca-haya-existido-39j9",
    },
    source: "dev.to",
    date: "2024-08",
  },
  {
    id: "finding-your-own-path",
    title: {
      en: "Finding Your Own Path",
      es: "Encontrando Tu Propio Camino",
    },
    href: {
      en: "https://dev.to/raulpenate/finding-your-own-path-202p",
      es: "https://dev.to/raulpenate/encontrando-tu-propio-camino-2p4f",
    },
    source: "dev.to",
    date: "2024-08",
  },
  {
    id: "clean-code-vs-best-practices",
    title: {
      en: "Clean Code vs Best Practices: What’s the Difference?",
      es: "Clean Code vs Mejores Prácticas: ¿Cuál es la Diferencia?",
    },
    href: {
      en: "https://dev.to/raulpenate/difference-of-clean-code-vs-best-practices-13lf",
      es: "https://dev.to/raulpenate/clean-code-vs-mejores-practicas-cual-es-la-diferencia-1im9",
    },
    source: "dev.to",
    date: "2024-09",
  },
  {
    id: "neds-git-survival-guide",
    title: {
      en: "Ned's Declassified Git Survival Guide",
      es: "Manual de supervivencia Git de Ned",
    },
    href: {
      en: "https://dev.to/raulpenate/neds-declassified-git-survival-guide-4p9e",
      es: "https://dev.to/raulpenate/manual-de-supervivencia-de-git-de-ned-l3i",
    },
    source: "dev.to",
    date: "2024-09",
  },
];
