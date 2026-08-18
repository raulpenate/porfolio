export default function imageLoader({ src }: { src: string }) {
  const base = process.env.NEXT_PUBLIC_BASE_PATH ?? "";
  if (src.startsWith("http") || src.startsWith(base) || !src.startsWith("/")) {
    return src;
  }
  return `${base}${src}`;
}
