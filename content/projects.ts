import type { Project } from "./types";

export const projects: Project[] = [
  {
    id: "levelo",
    name: "Levelo",
    summary:
      "Gamified way to track goals in your life. First place in AI Cursor Hackathon First Edition.",
    bullets: [
      "Led backend development for the Levelo MVP, resulting in a first-place hackathon win.",
      "Integrated ChatGPT API for the chatbot, based on Octalysis gamification.",
      "Used Claude Code with spec-driven development through AgentOS to manage AI agents and develop the whole backend.",
    ],
    tech: ["ChatGPT API", "Claude Code", "AgentOS"],
  },
  {
    id: "react-websockets",
    name: "React.js and webSockets",
    summary:
      "Real-time apps using Socket.IO with React.js and TypeScript on the front and back end.",
    bullets: [
      "Maps with real-time markers.",
      "Ticket Queues App in real-time.",
      "Real-time voting application for bands.",
    ],
    tech: ["React.js", "TypeScript", "Socket.IO"],
  },
  {
    id: "bash-linux",
    name: "Bash",
    summary: "Linux tooling and window-manager customization.",
    bullets: [
      "Arch Linux installer (an installer for a fully functioning Linux operating system called Arch).",
      "i3wm themes (collection of custom themes for i3 window manager).",
    ],
    tech: ["Bash", "Arch Linux", "i3wm"],
  },
  {
    id: "vue-apps",
    name: "Vue.js",
    summary: "Vue.js applications.",
    bullets: [
      "Who's That Pokémon?",
      "Map App (TypeScript & MapBox).",
      "JournalApp (Vuex).",
    ],
    tech: ["Vue.js", "TypeScript", "MapBox", "Vuex"],
  },
  {
    id: "pokeapi-hoenn",
    name: "PokeApi for Hoenn",
    summary: "Responsive React.js PokeApi for Hoenn.",
    bullets: ["PokeApi for Hoenn (Responsive)."],
    tech: ["React.js"],
  },
  {
    id: "jungle-ds-algo",
    name: "The jungle of DS & Algo",
    summary:
      "Under-construction project that compiles knowledge about data structures and algorithms.",
    status: "in-progress",
    bullets: [
      "Starts with asymptotic notation and mathematical concepts such as logarithms, then implements algorithms and data structures in JS, Java, and sometimes Python, C#, C++, and others.",
      "Built using Python with MKDocs and JavaScript, deployed on GitHub with a Dockerfile for CI/CD, and uses KaTeX to render math synchronously.",
    ],
    tech: ["Python", "MKDocs", "JavaScript", "Docker", "KaTeX", "Java"],
  },
  {
    id: "pypususa",
    name: "PyPususa",
    summary:
      "Under-construction Salvadorian-JS syntax interpreter built in Python using TDD.",
    status: "in-progress",
    bullets: [
      "PyPususa: a Salvadorian-JS syntax interpreter built in Python using Test-Driven Development (TDD).",
    ],
    tech: ["Python", "TDD"],
  },
];
