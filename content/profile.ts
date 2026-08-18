import type { Profile } from "./types";

export const profile: Profile = {
  id: "profile",
  fullName: "Raúl Humberto Peñate Ramírez",
  displayName: "Raúl Peñate",
  headline:
    "CCA-F certified agentic software engineer. I work with Claude. I handle architecture, code, tests, and production deploys. JavaScript/TypeScript, Java, cloud architecture, and MCP.",
  location: "El Salvador, San Salvador",
  email: "dev.raulpenate@gmail.com",
  links: [
    {
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/raulpenate/",
    },
    {
      label: "GitHub",
      href: "https://github.com/raulpenate",
    },
    {
      label: "DEV",
      href: "https://dev.to/raulpenate",
    },
    {
      label: "Stack Overflow",
      href: "https://stackoverflow.com/users/15445661/raul-penate",
    },
    {
      label: "Luma",
      href: "https://luma.com/user/raulpenate",
    },
  ],
  images: ["/images/profile/raul-penate-portrait.png"],
  languages: [
    { name: "Spanish", level: "native" },
    { name: "English", level: "C1" },
  ],
  skills: [
    {
      category: "AI tools",
      id: "ai-tools",
      items: ["Claude Code", "Cursor CLI", "AgentOS", "Spec-Kit", "Gemini"],
    },
    {
      category: "Frontend",
      id: "frontend",
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
      id: "backend",
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
      id: "databases",
      items: ["SQL Server", "MySQL", "MongoDB", "PostgreSQL", "Firebase"],
    },
    {
      category: "Cloud & DevOps",
      id: "cloud-devops",
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
      id: "package-managers",
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
      id: "testing",
      items: ["Jest", "PyTest", "Playwright"],
    },
    {
      category: "Knowledge",
      id: "knowledge",
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
