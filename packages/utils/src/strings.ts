export const slugify = (s: string) =>
  s.toLowerCase().trim().replace(/[^\w\s-]/g, "").replace(/\s+/g, "-");
export const truncate = (s: string, n = 80) =>
  s.length > n ? s.slice(0, n - 1) + "…" : s;
export const capitalize = (s: string) =>
  s ? s[0].toUpperCase() + s.slice(1) : s;

export const getInitials = (name: string) => {
  if (!name) return "";
  const parts = name.split(" ");
  if (parts.length === 1) return parts[0].charAt(0).toUpperCase();
  return (parts[0].charAt(0) + parts[parts.length - 1].charAt(0)).toUpperCase();
};