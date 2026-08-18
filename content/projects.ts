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
    images: ["/images/projects/levelo/cursor-hackathon.jpg"],
  },
  {
    id: "claude-for-dummies-sv",
    name: "Claude For Dummies SV",
    summary:
      "Helped with El Salvador's first Claude conference. Claude and Notion MCP meetup, thanks to Ai Labs.",
    bullets: [
      "Helped at Claude For Dummies SV (Claude & Notion MCP for dummies), El Salvador's first Claude and Notion MCP meetup.",
      "Spoke on Don Quijote en la Era del Silicio.",
      "Thanks to Ai Labs for supporting the meetup, hosted at Universidad Francisco Gavidia.",
    ],
    tech: ["Claude", "MCP", "Notion"],
    images: [
      "/images/projects/claude-for-dummies-sv/group.png",
      "/images/projects/claude-for-dummies-sv/talk.png",
      "/images/projects/claude-for-dummies-sv/poster.png",
    ],
    links: [
      {
        name: "Ai Labs",
        href: "https://www.ailabs.sv/en",
      },
    ],
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
    repos: [
      {
        name: "WebSockets-React",
        href: "https://github.com/raulpenate/WebSockets-React",
      },
    ],
  },
  {
    id: "bash-linux",
    name: "Bash",
    summary: "Linux tooling and window-manager customization.",
    bullets: [
      "Arch Linux installer (script to install Arch Linux plus the tools I use day to day).",
      "Built long before AI tooling was mainstream, and the early versions took a lot of trial-and-error hours to make it reliable.",
      "i3wm themes (collection of custom themes for i3 window manager).",
    ],
    tech: ["Bash", "Arch Linux", "i3wm"],
    repos: [
      {
        name: "archinstaller",
        href: "https://github.com/raulpenate/archinstaller",
      },
      {
        name: ".dotfiles-i3wm",
        href: "https://github.com/raulpenate/.dotfiles-i3wm",
      },
    ],
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
    repos: [
      {
        name: "DS-Algo",
        href: "https://github.com/raulpenate/DS-Algo",
      },
    ],
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
    repos: [
      {
        name: "PyPususa",
        href: "https://github.com/raulpenate/PyPususa",
      },
    ],
  },
];
