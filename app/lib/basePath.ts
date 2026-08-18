export function withBasePath(path: string) {
  const base = process.env.NEXT_PUBLIC_BASE_PATH ?? "";
  if (!path.startsWith("/") || path.startsWith("http") || path.startsWith(base)) {
    return path;
  }
  return `${base}${path}`;
}
