import {
  ArrowUpRight,
  Award,
  BadgeCheck,
  Briefcase,
  Calendar,
  ChevronLeft,
  ChevronRight,
  Mail,
  MapPin,
  Moon,
  Sun,
  X,
  type LucideIcon,
  type LucideProps,
} from "lucide-react";

const stroke = { strokeWidth: 1.75 } as const;

function withStroke(Icon: LucideIcon) {
  function Wrapped(props: LucideProps) {
    return <Icon {...stroke} {...props} />;
  }
  Wrapped.displayName = Icon.displayName ?? Icon.name;
  return Wrapped;
}

export const IconMail = withStroke(Mail);
export const IconMapPin = withStroke(MapPin);
export const IconSun = withStroke(Sun);
export const IconMoon = withStroke(Moon);
export const IconAward = withStroke(Award);
export const IconBadge = withStroke(BadgeCheck);
export const IconBriefcase = withStroke(Briefcase);
export const IconArrowUpRight = withStroke(ArrowUpRight);
export const IconLuma = withStroke(Calendar);
export const IconChevronLeft = withStroke(ChevronLeft);
export const IconChevronRight = withStroke(ChevronRight);
export const IconClose = withStroke(X);

/** Brand marks are not in Lucide — keep official SVGs. */
export function IconGithub({ className = "size-4", ...props }: LucideProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden
      className={className}
      {...props}
    >
      <path d="M12 2C6.477 2 2 6.586 2 12.253c0 4.53 2.865 8.37 6.839 9.725.5.094.682-.222.682-.493 0-.243-.01-1.052-.014-1.91-2.782.618-3.369-1.207-3.369-1.207-.455-1.18-1.11-1.495-1.11-1.495-.908-.635.069-.622.069-.622 1.003.072 1.53 1.053 1.53 1.053.892 1.562 2.341 1.111 2.91.85.091-.66.35-1.111.636-1.367-2.22-.258-4.555-1.14-4.555-5.077 0-1.122.39-2.04 1.029-2.76-.103-.259-.446-1.3.098-2.71 0 0 .84-.275 2.75 1.053A9.37 9.37 0 0 1 12 6.84c.85.004 1.705.117 2.504.343 1.909-1.328 2.747-1.053 2.747-1.053.546 1.41.202 2.451.1 2.71.64.72 1.028 1.638 1.028 2.76 0 3.948-2.34 4.816-4.566 5.068.359.316.679.94.679 1.896 0 1.368-.012 2.47-.012 2.807 0 .273.18.593.688.492C19.138 20.62 22 16.78 22 12.253 22 6.586 17.523 2 12 2Z" />
    </svg>
  );
}

export function IconLinkedin({ className = "size-4", ...props }: LucideProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden
      className={className}
      {...props}
    >
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 1 1 0-4.125 2.062 2.062 0 0 1 0 4.125zM7.119 20.452H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

export function IconStackOverflow({ className = "size-4", ...props }: LucideProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden
      className={className}
      {...props}
    >
      <path d="M17.24 19.4v-5.32h1.78V21.2H4.98v-7.12h1.78v5.32zM7.4 18.22h8.2v-1.78H7.4zm.22-4.04 8.02 1.68.37-1.74-8.02-1.68-.37 1.74zm1.04-3.9 7.42 3.46.82-1.58-7.42-3.48-.82 1.6zm2.04-3.7 6.3 5.24 1.24-1.3-6.3-5.24-1.24 1.3zM14.5 2.8 12.9 4l4.92 6.58 1.6-1.2z" />
    </svg>
  );
}

export function IconDev({ className = "size-4", ...props }: LucideProps) {
  return (
    <svg
      viewBox="0 0 448 512"
      fill="currentColor"
      aria-hidden
      className={className}
      {...props}
    >
      <path d="M120.12 208.29c-3.88-2.9-7.77-4.35-11.65-4.35H91.03v104.47h17.45c3.88 0 7.77-1.45 11.65-4.35 3.88-2.9 5.82-7.25 5.82-13.06v-69.65c-.01-5.8-1.96-10.16-5.83-13.06zM404.1 32H43.9C19.7 32 .06 51.59 0 75.8v360.4C.06 460.41 19.7 480 43.9 480h360.2c24.14 0 43.74-19.59 43.79-43.8V75.8C447.84 51.59 428.25 32 404.1 32zM154.2 291.19c0 18.81-11.61 47.31-48.36 47.25h-46.4V172.98h47.38c35.44 0 47.36 28.46 47.37 47.28l.01 70.93zm100.68-88.66H201.6v38.42h32.57v29.57H201.6v38.41h53.29v29.57h-62.18c-11.16.29-20.44-8.53-20.72-19.69V193.7c-.27-11.15 8.56-20.41 19.71-20.69h63.19l-.01 29.52zm103.64 115.29c-13.2 30.75-36.85 24.63-47.44 0l-38.53-144.8h32.57l29.71 113.72 29.57-113.72h32.58l-38.46 144.8z" />
    </svg>
  );
}

export function linkIcon(label: string) {
  const key = label.toLowerCase();
  if (key.includes("github")) return IconGithub;
  if (key.includes("linkedin")) return IconLinkedin;
  if (key === "dev" || key.includes("dev.to")) return IconDev;
  if (key.includes("stack")) return IconStackOverflow;
  if (key.includes("luma")) return IconLuma;
  if (key.includes("mail") || key.includes("email")) return IconMail;
  return IconArrowUpRight;
}
