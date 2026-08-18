export type Locale = "en" | "es";

export type PortfolioSection =
  | "profile"
  | "education"
  | "experience"
  | "projects"
  | "certifications"
  | "awards";

/** Calendar month as `YYYY-MM`. */
export type DateMonth = string;

export type DateEnd = DateMonth | "present";

export type SkillGroup = {
  id: string;
  category: string;
  items: string[];
};

export type Language = {
  name: string;
  level: string;
};

export type ProfileLink = {
  label: string;
  href: string;
};

export type Profile = {
  id: "profile";
  fullName: string;
  displayName: string;
  headline: string;
  location: string;
  email: string;
  languages: Language[];
  skills: SkillGroup[];
  links?: ProfileLink[];
  images?: string[];
};

export type Education = {
  id: string;
  institution: string;
  program: string;
  credential?: string;
  location: string;
  start: DateMonth;
  end: DateEnd;
  bullets?: string[];
  images?: string[];
};

export type Experience = {
  id: string;
  company: string;
  role: string;
  location: string;
  employmentType?: string;
  start: DateMonth;
  end: DateEnd;
  bullets: string[];
  tech?: string[];
  images?: string[];
};

export type ProjectLink = {
  name: string;
  href: string;
};

export type Project = {
  id: string;
  name: string;
  summary: string;
  status?: "complete" | "in-progress";
  bullets: string[];
  tech?: string[];
  images?: string[];
  repos?: ProjectLink[];
  links?: ProjectLink[];
};

export type Certification = {
  id: string;
  name: string;
  issuer?: string;
  date?: DateMonth;
  images?: string[];
};

export type Award = {
  id: string;
  name: string;
  issuer?: string;
  date?: DateMonth;
  relatedProjectId?: string;
  bullets?: string[];
  images?: string[];
};
