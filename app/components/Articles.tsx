"use client";

import { useEffect, useState } from "react";
import type { Article, ArticleFeed, Locale } from "@/content";
import { formatMonth } from "../lib/dates";
import { IconArrowUpRight, linkIcon } from "./icons";
import { useLocale } from "./LocaleProvider";

function articleHref(article: Article, lang: Locale) {
  return article.href[lang] ?? article.href.en ?? article.href.es;
}

function articleTitle(article: Article, lang: Locale) {
  return article.title[lang] ?? article.title.en ?? article.title.es;
}

function ArticleLocaleToggle({
  value,
  onChange,
  label,
}: {
  value: Locale;
  onChange: (locale: Locale) => void;
  label: string;
}) {
  return (
    <div
      role="group"
      aria-label={label}
      className="inline-flex h-9 items-stretch overflow-hidden rounded-md border border-border bg-background"
    >
      {(["en", "es"] as const).map((locale, index) => (
        <span key={locale} className="contents">
          {index > 0 ? <span className="w-px bg-border" aria-hidden /> : null}
          <button
            type="button"
            onClick={() => onChange(locale)}
            aria-pressed={value === locale}
            className={`px-2.5 font-mono text-[11px] uppercase transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/60 ${
              value === locale
                ? "bg-surface-elevated text-accent"
                : "bg-background text-muted hover:bg-surface-elevated/50 hover:text-foreground"
            }`}
          >
            {locale}
          </button>
        </span>
      ))}
    </div>
  );
}

export function Articles({
  articles,
  feeds,
}: {
  articles: Article[];
  feeds: ArticleFeed[];
}) {
  const { locale, copy } = useLocale();
  const [articleLocale, setArticleLocale] = useState<Locale>(locale);

  useEffect(() => {
    setArticleLocale(locale);
  }, [locale]);

  const groups = feeds.map((feed) => ({
    feed,
    items: articles.filter((article) => article.source === feed.id),
  }));

  return (
    <section id="articles" className="border-b border-border px-5 py-20 md:px-8 md:py-24">
      <div className="mx-auto max-w-6xl">
        <h2 className="text-3xl font-medium tracking-tight text-foreground md:text-4xl">
          {copy.articles.title}
        </h2>

        <div className="mt-12 space-y-12">
          {groups.map(({ feed, items }) => {
            const Icon = linkIcon(feed.label);
            const isDev = feed.id === "dev.to";
            const sectionBadgeClass = isDev
              ? "border-accent/40 bg-accent/15 text-accent"
              : "border-sky-500/40 bg-sky-500/10 text-sky-300";
            return (
              <div key={feed.id}>
                <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
                  <div className="flex items-center gap-2">
                    <span
                      className={`inline-flex items-center rounded-md border px-2.5 py-1 font-mono text-[11px] uppercase tracking-[0.14em] ${sectionBadgeClass}`}
                    >
                      {feed.label}
                    </span>
                    {isDev ? (
                      <ArticleLocaleToggle
                        value={articleLocale}
                        onChange={setArticleLocale}
                        label={copy.articles.language}
                      />
                    ) : null}
                  </div>
                  <a
                    href={feed.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-sm text-muted transition-colors hover:text-accent"
                  >
                    <Icon className="size-3.5" />
                    {copy.articles.viewAll}
                  </a>
                </div>

                {items.length > 0 ? (
                  <ul className="mt-4 divide-y divide-border border-y border-border">
                    {items.map((article) => {
                      const href = articleHref(article, articleLocale);
                      const title = articleTitle(article, articleLocale);
                      if (!href || !title) return null;
                      const articleBadgeClass =
                        article.source === "dev.to"
                          ? "border-accent/35 bg-accent/10 text-accent"
                          : "border-sky-500/35 bg-sky-500/10 text-sky-300";
                      return (
                        <li key={article.id}>
                          <a
                            href={href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group flex flex-col gap-1 py-4 sm:flex-row sm:items-baseline sm:justify-between sm:gap-8"
                          >
                            <p className="font-medium text-foreground transition-colors group-hover:text-accent">
                              {title}
                            </p>
                            <p className="inline-flex shrink-0 items-center gap-1.5 font-mono text-[11px] text-muted-strong">
                              <span
                                className={`inline-flex items-center rounded-md border px-2 py-0.5 font-mono text-[10px] uppercase tracking-[0.1em] ${articleBadgeClass}`}
                              >
                                {feed.label}
                              </span>
                              {article.date ? formatMonth(article.date, locale) : feed.label}
                              <IconArrowUpRight className="size-3.5 opacity-0 transition-opacity group-hover:opacity-100" />
                            </p>
                          </a>
                        </li>
                      );
                    })}
                  </ul>
                ) : (
                  <a
                    href={feed.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group mt-4 flex items-baseline justify-between gap-8 border-y border-border py-4"
                  >
                    <p className="font-medium text-foreground transition-colors group-hover:text-accent">
                      {copy.articles.viewAll} {feed.label}
                    </p>
                    <IconArrowUpRight className="size-3.5 shrink-0 text-muted-strong opacity-0 transition-opacity group-hover:opacity-100" />
                  </a>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
