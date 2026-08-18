import type {
  Award,
  Certification,
  Education,
  Experience,
  Profile,
  Project,
} from "./types";

export const profileEs: Profile = {
  id: "profile",
  fullName: "Raúl Humberto Peñate Ramírez",
  displayName: "Raúl Peñate",
  headline:
    "Ingeniero de software agéntico, certificado CCA-F. Trabajo con Claude. Me encargo de arquitectura, código, pruebas y deploys a producción. JavaScript/TypeScript, Java, arquitectura cloud y MCP.",
  location: "El Salvador, San Salvador",
  email: "dev.raulpenate@gmail.com",
  links: [
    { label: "LinkedIn", href: "https://www.linkedin.com/in/raulpenate/" },
    { label: "GitHub", href: "https://github.com/raulpenate" },
    {
      label: "Stack Overflow",
      href: "https://stackoverflow.com/users/15445661/raul-penate",
    },
    { label: "Luma", href: "https://luma.com/user/raulpenate" },
  ],
  images: ["/images/profile/raul-penate-portrait.png"],
  languages: [
    { name: "Español", level: "nativo" },
    { name: "Inglés", level: "C1" },
  ],
  skills: [
    {
      id: "ai-tools",
      category: "Herramientas de IA",
      items: ["Claude Code", "Cursor CLI", "AgentOS", "Spec-Kit", "Gemini"],
    },
    {
      id: "frontend",
      category: "Frontend",
      items: [
        "React.js",
        "Vue.js",
        "Next.js",
        "Nuxt.js",
        "Svelte",
        "Zustand",
        "Vuex",
        "HTML",
        "CSS/SASS",
        "Bootstrap",
        "Vuetify",
        "Tailwind",
        "TypeScript",
      ],
    },
    {
      id: "backend",
      category: "Backend",
      items: [
        "Node.js (Express.js, Nest.js, Mongoose, Sequelize, TypeORM)",
        "C# (ASP.NET Core, Entity Framework)",
        "Java (JavaEE, Spring Boot, Maven)",
        "Python (FastAPI, Flask, Jinja, SQLAlchemy, Beanie, Uvicorn, PyTest)",
        "gRPC",
        "microservicios",
        "REST",
        "GraphQL",
        "SOAP",
      ],
    },
    {
      id: "databases",
      category: "Bases de datos",
      items: ["SQL Server", "MySQL", "MongoDB", "PostgreSQL", "Firebase"],
    },
    {
      id: "cloud-devops",
      category: "Cloud y DevOps",
      items: [
        "Docker",
        "AWS",
        "Azure",
        "Git",
        "GitHub",
        "GitHub CLI",
        "Bitbucket",
        "GitLab",
        "Netlify",
        "Google Cloud",
        "Linux",
      ],
    },
    {
      id: "package-managers",
      category: "Gestores de paquetes",
      items: [
        "npm",
        "pnpm",
        "Yarn",
        "Deno",
        "Bun",
        "Gradle",
        "Maven",
        "NuGet",
        "pip",
      ],
    },
    {
      id: "testing",
      category: "Testing",
      items: ["Jest", "PyTest", "Playwright"],
    },
    {
      id: "knowledge",
      category: "Conocimientos",
      items: [
        "principios SOLID",
        "buenas prácticas",
        "Scrum",
        "arquitecturas de software",
        "patrones de diseño",
        "code smells",
        "Clean Code",
      ],
    },
  ],
};

export const experienceEs: Experience[] = [
  {
    id: "ravn-agentic-2026",
    company: "Ravn",
    role: "Ingeniero de software agéntico",
    location: "Estados Unidos (Remoto)",
    employmentType: "Contrato",
    start: "2026-01",
    end: "present",
    bullets: [
      "Construyendo SaaS de cumplimiento en salud y proyectos internos en Ravn (EE. UU. remoto, contrato).",
      "Me encargo de arquitectura, implementación, pruebas y deploys a producción de esos productos, con Claude y Claude Code.",
      "Uso inteligencia artificial en todo el ciclo: especificar, programar, probar y desplegar.",
    ],
    tech: ["Claude Code", "Inteligencia artificial"],
  },
  {
    id: "ravn-backend-2025",
    company: "Ravn",
    role: "Ingeniero de software NodeJS",
    location: "Estados Unidos (Remoto)",
    employmentType: "Contrato",
    start: "2025-07",
    end: "present",
    bullets: [
      "Construyendo una plataforma de recursos humanos con NestJS en Google Cloud Platform (EE. UU. remoto, contrato).",
      "Desarrollando y manteniendo el backend NestJS de esa plataforma de RR. HH. en producción.",
    ],
    tech: ["Google Cloud Platform", "NestJS"],
  },
  {
    id: "banco-integral-backend-2024",
    company: "Banco Integral",
    role: "Ingeniero de software backend",
    location: "San Salvador, El Salvador",
    employmentType: "Contrato",
    start: "2024-11",
    end: "2025-02",
    bullets: [
      "Entregué un proyecto de integración DTE para documentos tributarios electrónicos en Banco Integral (San Salvador, contrato).",
      "Desarrollé y mantuve servicios backend con NestJS y TypeScript para procesos de negocio críticos.",
      "Diseñé e implementé comunicación gRPC con archivos proto para el intercambio de datos entre microservicios de DTE.",
      "Contribuí a la arquitectura de microservicios, mejorando escalabilidad y tolerancia a fallos.",
      "Integré Remix (React, server-side rendering) para consultar y mostrar todos los documentos tributarios electrónicos (DTE).",
      "Colaboré con equipos de otras áreas para integrar servicios backend con el frontend.",
      "Optimicé procesos backend para mejorar el rendimiento y reducir tiempos de respuesta.",
      "El trabajo se entregó en Kanban.",
    ],
    tech: ["Microservicios", "Kanban", "NestJS", "TypeScript", "gRPC", "Remix", "React"],
  },
  {
    id: "muchiwa-fullstack-2023",
    company: "MUCHIWA, INC",
    role: "Ingeniero full stack",
    location: "Estados Unidos (Remoto)",
    employmentType: "Contrato",
    start: "2023-08",
    end: "2024-04",
    bullets: [
      "Entregué sistemas de tienda DTE, veterinaria y laboratorio de sangre para MUCHIWA, INC (EE. UU. remoto, contrato).",
      "Desarrollé y mantuve frontend (Vue.js, HTML5) y backend (Node.js, MySQL), con features y hotfixes para ERPs de veterinaria, laboratorio de sangre y facturación.",
      "Implementé un módulo de transferencia para mover datos entre sistemas.",
      "Creé una barra de búsqueda personalizada para cargar más rápido las tablas.",
      "Construí un sistema de seguimiento dental para caries y endodoncia.",
      "Generé reportes CTE para clientes.",
      "Desarrollé funcionalidad de códigos de barras para productos y servicios.",
      "Gestioné asignaciones, requerimientos y fechas con un equipo pequeño en Kanban.",
    ],
    tech: ["HTML5", "Kanban", "Vue.js", "Node.js", "MySQL"],
  },
  {
    id: "career-break-2022",
    company: "Desarrollo profesional",
    role: "Pausa laboral",
    location: "Santa Ana, El Salvador",
    start: "2022-06",
    end: "2023-07",
    bullets: [
      "Tomé una pausa laboral en Santa Ana, El Salvador para priorizar estudios, matemáticas y programación.",
      "Dediqué tiempo a desarrollo personal y a la comunidad de ajedrez.",
    ],
  },
  {
    id: "moondev-fullstack-2021",
    company: "MoonDev",
    role: "Desarrollador full stack",
    location: "El Salvador (Híbrido)",
    employmentType: "Contrato",
    start: "2021-01",
    end: "2022-06",
    bullets: [
      "Construí un sistema de gestión de transporte en MoonDev (El Salvador, híbrido, contrato).",
      "Lo implementé con Java, Spring Boot, Node.js, React.js, TypeScript y JavaScript.",
      "Usé MySQL y MongoDB para datos, REST APIs para servicios, y OAuth con OpenID Connect (OIDC) para identidad.",
    ],
    tech: [
      "MySQL",
      "TypeScript",
      "Java",
      "OAuth",
      "Spring Boot",
      "REST APIs",
      "MongoDB",
      "JavaScript",
      "OpenID Connect (OIDC)",
      "React.js",
      "Node.js",
    ],
  },
  {
    id: "digital-solutions-repair-2017",
    company: "Digit@l Solutions",
    role: "Técnico en reparación de computadoras",
    location: "El Salvador, Chalchuapa",
    employmentType: "Pasantía",
    start: "2017-11",
    end: "2018-01",
    bullets: [
      "Diagnostiqué y reparé fallas de hardware y software en equipos de clientes.",
      "Reemplacé componentes defectuosos e hice upgrades para mejorar el rendimiento.",
      "Apoyé instalaciones y configuraciones de software.",
    ],
  },
  {
    id: "ce-insa-it-2016",
    company: "CE INSA",
    role: "Técnico de IT",
    location: "El Salvador, Santa Ana",
    employmentType: "Pasantía",
    start: "2016-05",
    end: "2016-08",
    bullets: [
      "Di soporte técnico a sistemas de cómputo y redes.",
      "Diagnostiqué y resolví problemas de hardware y conectividad, y mejoré la seguridad para estudiantes.",
    ],
  },
];

export const projectsEs: Project[] = [
  {
    id: "levelo",
    name: "Levelo",
    summary:
      "Forma gamificada de seguir metas. Primer lugar en AI Cursor Hackathon First Edition.",
    bullets: [
      "Lideré el backend del MVP de Levelo. Ganamos primer lugar en el hackathon.",
      "Integré la API de ChatGPT para el chatbot, con gamificación Octalysis.",
      "Usé Claude Code con desarrollo dirigido por specs a través de AgentOS para los agentes y todo el backend.",
    ],
    tech: ["ChatGPT API", "Claude Code", "AgentOS"],
    images: ["/images/projects/levelo/cursor-hackathon.jpg"],
  },
  {
    id: "claude-for-dummies-sv",
    name: "Claude For Dummies SV",
    summary:
      "Ayudé en la primera conferencia de Claude en El Salvador. Meetup de Claude y Notion MCP, gracias a Ai Labs.",
    bullets: [
      "Ayudé en Claude For Dummies SV (Claude & Notion MCP for dummies), el primer meetup de Claude y Notion MCP en El Salvador.",
      "Di la charla Don Quijote en la Era del Silicio.",
      "Gracias a Ai Labs por apoyar el meetup, en la Universidad Francisco Gavidia.",
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
      "Apps en tiempo real con Socket.IO, React.js y TypeScript en frontend y backend.",
    bullets: [
      "Mapas con marcadores en tiempo real.",
      "App de colas de tickets en tiempo real.",
      "Votación en tiempo real para bandas.",
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
    summary: "Herramientas de Linux y personalización del window manager.",
    bullets: [
      "Instalador de Arch Linux (un instalador para un sistema Arch funcional).",
      "Temas de i3wm (temas personalizados para i3).",
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
    id: "vue-apps",
    name: "Vue.js",
    summary: "Aplicaciones en Vue.js.",
    bullets: [
      "Who's That Pokémon?",
      "Map App (TypeScript y MapBox).",
      "JournalApp (Vuex).",
    ],
    tech: ["Vue.js", "TypeScript", "MapBox", "Vuex"],
    repos: [
      {
        name: "journal-app",
        href: "https://github.com/raulpenate/journal-app",
      },
      {
        name: "mapbox-ts-vue",
        href: "https://github.com/raulpenate/mapbox-ts-vue",
      },
    ],
  },
  {
    id: "pokeapi-hoenn",
    name: "PokeApi for Hoenn",
    summary: "PokeApi de Hoenn en React.js, responsive.",
    bullets: ["PokeApi for Hoenn (responsive)."],
    tech: ["React.js"],
    repos: [
      {
        name: "pokemon-api-hoenn",
        href: "https://github.com/raulpenate/pokemon-api-hoenn",
      },
    ],
  },
  {
    id: "jungle-ds-algo",
    name: "The jungle of DS & Algo",
    summary:
      "Proyecto en construcción que junta conocimiento de estructuras de datos y algoritmos.",
    status: "in-progress",
    bullets: [
      "Empieza con notación asintótica y conceptos matemáticos como logaritmos, y luego implementa algoritmos y estructuras en JS, Java, y a veces Python, C#, C++ y otros.",
      "Hecho con Python, MKDocs y JavaScript, desplegado en GitHub con Dockerfile para CI/CD, y KaTeX para renderizar matemáticas.",
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
      "Intérprete de sintaxis JS salvadoreña, en construcción, hecho en Python con TDD.",
    status: "in-progress",
    bullets: [
      "PyPususa: un intérprete de sintaxis JS salvadoreña hecho en Python con Test-Driven Development (TDD).",
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

export const awardsEs: Award[] = [
  {
    id: "levelo-cursor-hackathon-first",
    name: "1er lugar en AI Cursor Hackathon First Edition",
    issuer: "AI Cursor Hackathon First Edition",
    relatedProjectId: "levelo",
    bullets: [
      "Primer lugar con Levelo, una forma gamificada de seguir metas.",
    ],
  },
];

export const certificationsEs: Certification[] = [
  { id: "cca-f", name: "CCA-F" },
  {
    id: "gov-sv-data-science",
    name: "Programa de Data Science",
    issuer: "Gobierno de El Salvador",
  },
  {
    id: "rsm-pentesting-trainee",
    name: "Pentesting trainee",
    issuer: "RSM US-El Salvador",
  },
  { id: "udemy-vuejs", name: "Vue.js", issuer: "Udemy" },
  { id: "udemy-typescript", name: "TypeScript", issuer: "Udemy" },
  {
    id: "devtalles-solid-clean-code",
    name: "Principios SOLID y Clean Code",
    issuer: "DevTalles",
  },
  { id: "platzi-data-science", name: "Data Science", issuer: "Platzi" },
  { id: "platzi-csharp-dotnet", name: "C# .NET", issuer: "Platzi" },
];

export const educationEs: Education[] = [
  {
    id: "unicaes-software-development-2018",
    institution: "UNICAES (Universidad Católica de El Salvador)",
    program: "Ingeniería en Desarrollo de Software",
    credential: "Licenciatura",
    location: "El Salvador, Santa Ana",
    start: "2018-06",
    end: "2026-06",
  },
  {
    id: "platzi-data-analyst-bootcamp-2020",
    institution: "Secretaría de Innovación de El Salvador y Platzi",
    program: "Bootcamp de analista de datos",
    location: "El Salvador",
    start: "2020-09",
    end: "2021-01",
  },
  {
    id: "itca-fepade-computer-systems-2016",
    institution: "ITCA-FEPADE",
    program: "Técnico en Sistemas Informáticos",
    location: "El Salvador, Santa Ana",
    start: "2016-01",
    end: "2017-12",
  },
];
