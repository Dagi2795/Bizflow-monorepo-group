export const slugify = (s: string) =>
  s.toLowerCase().trim().replace(/[^\w\s-]/g, "").replace(/\s+/g, "-");
export const truncate = (s: string, n = 80) =>
  s.length > n ? s.slice(0, n - 1) + "…" : s;
export const capitalize = (s: string) =>
  s ? s[0].toUpperCase() + s.slice(1) : s;
