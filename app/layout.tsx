import type { Metadata } from "next";
import Script from "next/script";
import { IBM_Plex_Mono, Inter_Tight } from "next/font/google";
import { experience, profile } from "@/content";
import { LocaleProvider } from "./components/LocaleProvider";
import { ThemeProvider } from "./components/ThemeProvider";
import "./globals.css";

const interTight = Inter_Tight({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

const ibmPlexMono = IBM_Plex_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  weight: ["400", "500"],
});

const currentRole = experience.find((role) => role.end === "present");

export const metadata: Metadata = {
  title: currentRole
    ? `${profile.displayName} · ${currentRole.role}`
    : profile.displayName,
  description: profile.headline,
};

const themeInitScript = `(function(){try{var t=localStorage.getItem('portfolio-theme');var dark=t==='light'?false:t==='dark'?true:true;document.documentElement.classList.toggle('dark',dark);document.documentElement.style.colorScheme=dark?'dark':'light';var l=localStorage.getItem('portfolio-locale');if(l==='es')document.documentElement.lang='es';}catch(e){document.documentElement.classList.add('dark');}})();`;

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${interTight.variable} ${ibmPlexMono.variable} dark h-full antialiased`}
      suppressHydrationWarning
    >
      <body className="flex min-h-full flex-col bg-background text-foreground font-sans">
        <Script id="theme-init" strategy="beforeInteractive">
          {themeInitScript}
        </Script>
        <ThemeProvider>
          <LocaleProvider>{children}</LocaleProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
