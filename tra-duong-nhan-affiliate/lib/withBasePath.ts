export const BASE_PATH = process.env.NODE_ENV === "production" ? "/traduongnhan" : "";

export function withBasePath(path: string): string {
  if (!path.startsWith("/")) return path;
  return `${BASE_PATH}${path}`;
}
