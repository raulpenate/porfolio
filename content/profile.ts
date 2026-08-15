import type { Profile } from "./types";

export const profile: Profile = {
  id: "profile",
  fullName: "Raúl Humberto Peñate Ramírez",
  displayName: "Raúl Peñate",
  headline:
    "CCA-F-certified agentic software engineer specializing in advanced AI integrations with Anthropic's Claude. I focus on building highly scalable, spec-driven systems (JavaScript/TypeScript, Java, Cloud Architecture) and leverage tools like the Model Context Protocol to bridge cutting-edge AI capabilities with robust backend architectures.",
  location: "El Salvador, San Salvador",
  email: "dev.raulpenate@gmail.com",
  languages: [
    { name: "Spanish", level: "native" },
    { name: "English", level: "C1" },
  ],
  skills: [
    {
      category: "AI tools",
      items: ["Claude Code", "Cursor CLI", "AgentOS", "Spec-Kit", "Gemini"],
    },
    {
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
      category: "Backend",
      items: [
        "Node.js (Express.js, Nest.js, Mongoose, Sequelize, TypeORM)",
        "C# (ASP.NET Core, Entity Framework)",
        "Java (JavaEE, Spring Boot, Maven)",
        "Python (FastAPI, Flask, Jinja, SQLAlchemy, Beanie, Uvicorn, PyTest)",
        "gRPC",
        "microservices",
        "REST",
        "GraphQL",
        "SOAP",
      ],
    },
    {
      category: "Databases",
      items: ["SQL Server", "MySQL", "MongoDB", "PostgreSQL", "Firebase"],
    },
    {
      category: "Cloud & DevOps",
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
      category: "Package managers",
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
      category: "Testing",
      items: ["Jest", "PyTest", "Playwright"],
    },
    {
      category: "Knowledge",
      items: [
        "SOLID principles",
        "good practices",
        "Scrum",
        "software architectures",
        "design patterns",
        "code smells",
        "Clean Code",
      ],
    },
  ],
};
