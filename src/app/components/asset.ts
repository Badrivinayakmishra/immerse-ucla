export const basePath = process.env.NODE_ENV === "production" ? "/immerse-ucla" : "";

export function asset(path: string) {
  return `${basePath}${path.startsWith("/") ? path : `/${path}`}`;
}
