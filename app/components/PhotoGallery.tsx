"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { IconChevronLeft, IconChevronRight, IconClose } from "./icons";
import { useLocale } from "./LocaleProvider";
import { withBasePath } from "../lib/basePath";

type PhotoGalleryProps = {
  images: string[];
  alt: string;
  variant?: "hero" | "grid";
};

export function PhotoGallery({ images, alt, variant = "grid" }: PhotoGalleryProps) {
  const { copy } = useLocale();
  const [index, setIndex] = useState<number | null>(null);

  if (!images.length) return null;

  const multiple = images.length > 1;

  return (
    <>
      <div
        className={
          variant === "hero" || !multiple
            ? "relative aspect-[16/10] w-full bg-surface-elevated"
            : "grid gap-px bg-border sm:grid-cols-3"
        }
      >
        {images.map((src, imageIndex) => (
          <button
            key={src}
            type="button"
            onClick={() => setIndex(imageIndex)}
            className={
              variant === "hero" || !multiple
                ? "relative block h-full w-full cursor-zoom-in"
                : "relative aspect-[4/3] w-full cursor-zoom-in bg-surface-elevated sm:aspect-[16/10]"
            }
            aria-label={`${copy.gallery.view} ${imageIndex + 1}`}
          >
            <Image
              src={src}
              alt={alt}
              fill
              sizes={
                variant === "hero" || !multiple
                  ? "(max-width: 1152px) 100vw, 1152px"
                  : "(max-width: 640px) 100vw, 384px"
              }
              className="object-cover"
            />
          </button>
        ))}
      </div>
      {index !== null ? (
        <Lightbox
          images={images}
          alt={alt}
          index={index}
          onIndexChange={setIndex}
          onClose={() => setIndex(null)}
          labels={copy.gallery}
        />
      ) : null}
    </>
  );
}

function Lightbox({
  images,
  alt,
  index,
  onIndexChange,
  onClose,
  labels,
}: {
  images: string[];
  alt: string;
  index: number;
  onIndexChange: (index: number) => void;
  onClose: () => void;
  labels: { view: string; close: string; prev: string; next: string };
}) {
  const multiple = images.length > 1;

  const go = useCallback(
    (direction: -1 | 1) => {
      if (images.length < 2) return;
      onIndexChange((index + direction + images.length) % images.length);
    },
    [images.length, index, onIndexChange],
  );

  useEffect(() => {
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    function onKey(event: KeyboardEvent) {
      if (event.key === "Escape") onClose();
      if (event.key === "ArrowLeft") go(-1);
      if (event.key === "ArrowRight") go(1);
    }

    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKey);
    };
  }, [go, onClose]);

  const touchStartX = useRef(0);

  return createPortal(
    <div
      role="dialog"
      aria-modal="true"
      aria-label={`${alt} ${index + 1} / ${images.length}`}
      className="fixed inset-0 z-50 flex items-center justify-center bg-background/90 p-4 backdrop-blur-sm md:p-8"
      onClick={onClose}
      onTouchStart={(event) => {
        touchStartX.current = event.changedTouches[0]?.clientX ?? 0;
      }}
      onTouchEnd={(event) => {
        if (!multiple) return;
        const delta = (event.changedTouches[0]?.clientX ?? 0) - touchStartX.current;
        if (delta > 40) go(-1);
        if (delta < -40) go(1);
      }}
    >
      <button
        type="button"
        onClick={onClose}
        className="absolute top-4 right-4 inline-flex size-10 items-center justify-center rounded-md border border-border bg-surface text-foreground transition-colors hover:border-accent hover:text-accent"
        aria-label={labels.close}
      >
        <IconClose className="size-4" />
      </button>

      {multiple ? (
        <>
          <button
            type="button"
            onClick={(event) => {
              event.stopPropagation();
              go(-1);
            }}
            className="absolute left-3 top-1/2 z-10 inline-flex size-10 -translate-y-1/2 items-center justify-center rounded-md border border-border bg-surface text-foreground transition-colors hover:border-accent hover:text-accent md:left-6"
            aria-label={labels.prev}
          >
            <IconChevronLeft className="size-4" />
          </button>
          <button
            type="button"
            onClick={(event) => {
              event.stopPropagation();
              go(1);
            }}
            className="absolute right-3 top-1/2 z-10 inline-flex size-10 -translate-y-1/2 items-center justify-center rounded-md border border-border bg-surface text-foreground transition-colors hover:border-accent hover:text-accent md:right-6"
            aria-label={labels.next}
          >
            <IconChevronRight className="size-4" />
          </button>
        </>
      ) : null}

      <img
        src={withBasePath(images[index])}
        alt={alt}
        onClick={(event) => event.stopPropagation()}
        className="max-h-[90vh] max-w-[min(92vw,1200px)] object-contain"
      />

      {multiple ? (
        <p className="absolute bottom-4 left-1/2 -translate-x-1/2 font-mono text-[11px] tabular-nums text-muted">
          {index + 1} / {images.length}
        </p>
      ) : null}
    </div>,
    document.body,
  );
}
