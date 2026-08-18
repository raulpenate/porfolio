import type {
  Article,
  ArticleFeed,
  Award,
  Certification,
  Education,
  Experience,
  Locale,
  Profile,
  Project,
} from "./types";
import { articleFeeds, articles } from "./articles";
import { awards } from "./awards";
import { certifications } from "./certifications";
import { education } from "./education";
import { experience } from "./experience";
import {
  articleFeedsEs,
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
  articles: Article[];
  articleFeeds: ArticleFeed[];
  awards: Award[];
  certifications: Certification[];
  education: Education[];
};

export const catalogs: Record<Locale, Catalog> = {
  en: {
    profile,
    experience,
    projects,
    articles,
    articleFeeds,
    awards,
    certifications,
    education,
  },
  es: {
    profile: profileEs,
    experience: experienceEs,
    projects: projectsEs,
    articles,
    articleFeeds: articleFeedsEs,
    awards: awardsEs,
    certifications: certificationsEs,
    education: educationEs,
  },
};
