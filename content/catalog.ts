import type {
  Award,
  Certification,
  Education,
  Experience,
  Locale,
  Profile,
  Project,
} from "./types";
import { awards } from "./awards";
import { certifications } from "./certifications";
import { education } from "./education";
import { experience } from "./experience";
import {
  awardsEs,
  certificationsEs,
  educationEs,
  experienceEs,
  profileEs,
  projectsEs,
} from "./es";
import { profile } from "./profile";
import { projects } from "./projects";

export type Catalog = {
  profile: Profile;
  experience: Experience[];
  projects: Project[];
  awards: Award[];
  certifications: Certification[];
  education: Education[];
};

export const catalogs: Record<Locale, Catalog> = {
  en: {
    profile,
    experience,
    projects,
    awards,
    certifications,
    education,
  },
  es: {
    profile: profileEs,
    experience: experienceEs,
    projects: projectsEs,
    awards: awardsEs,
    certifications: certificationsEs,
    education: educationEs,
  },
};
