import type { Locale } from "./types";

export type UiCopy = {
  nav: {
    home: string;
    work: string;
    experience: string;
    stack: string;
    about: string;
    contact: string;
    menu: string;
  };
  hero: {
    tagline: string;
    emailMe: string;
  };
  proof: {
    highlights: string;
    recognition: string;
    certification: string;
    now: string;
  };
  projects: {
    title: string;
    inProgress: string;
    also: string;
  };
  experience: {
    title: string;
    earlier: string;
  };
  stack: {
    title: string;
  };
  about: {
    title: string;
    languages: string;
    basedIn: string;
  };
  theme: {
    toLight: string;
    toDark: string;
  };
  locale: {
    switchTo: string;
  };
  gallery: {
    view: string;
    close: string;
    prev: string;
    next: string;
  };
};

export const ui: Record<Locale, UiCopy> = {
  en: {
    nav: {
      home: "Home",
      work: "Work",
      experience: "Experience",
      stack: "Stack",
      about: "About",
      contact: "Contact",
      menu: "Toggle menu",
    },
    hero: {
      tagline:
        "Agentic software engineer. Architecture, code, tests, and production deploys. I use Claude.",
      emailMe: "Email me",
    },
    proof: {
      highlights: "Highlights",
      recognition: "Recognition",
      certification: "Certification",
      now: "Now",
    },
    projects: {
      title: "Work",
      inProgress: "In progress",
      also: "Also",
    },
    experience: {
      title: "Experience",
      earlier: "Earlier",
    },
    stack: {
      title: "Stack",
    },
    about: {
      title: "About",
      languages: "Languages",
      basedIn: "Based in",
    },
    theme: {
      toLight: "Switch to light mode",
      toDark: "Switch to dark mode",
    },
    locale: {
      switchTo: "Switch to Spanish",
    },
    gallery: {
      view: "View photo",
      close: "Close photo",
      prev: "Previous photo",
      next: "Next photo",
    },
  },
  es: {
    nav: {
      home: "Inicio",
      work: "Proyectos",
      experience: "Experiencia",
      stack: "Stack",
      about: "Sobre mí",
      contact: "Contacto",
      menu: "Abrir menú",
    },
    hero: {
      tagline:
        "Ingeniero de software agéntico. Arquitectura, código, pruebas y deploys a producción. Uso Claude.",
      emailMe: "Escríbeme",
    },
    proof: {
      highlights: "Destacados",
      recognition: "Reconocimiento",
      certification: "Certificación",
      now: "Ahora",
    },
    projects: {
      title: "Proyectos",
      inProgress: "En curso",
      also: "También",
    },
    experience: {
      title: "Experiencia",
      earlier: "Antes",
    },
    stack: {
      title: "Stack",
    },
    about: {
      title: "Sobre mí",
      languages: "Idiomas",
      basedIn: "Ubicación",
    },
    theme: {
      toLight: "Cambiar a modo claro",
      toDark: "Cambiar a modo oscuro",
    },
    locale: {
      switchTo: "Cambiar a inglés",
    },
    gallery: {
      view: "Ver foto",
      close: "Cerrar foto",
      prev: "Foto anterior",
      next: "Foto siguiente",
    },
  },
};
