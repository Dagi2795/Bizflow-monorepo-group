export const formatCurrency = (n: number, currency = "USD") =>
  new Intl.NumberFormat("en-US", { style: "currency", currency }).format(n);

export const formatNumber = (n: number) =>
  new Intl.NumberFormat("en-US").format(n);

export const formatDate = (d: Date | string) =>
  new Intl.DateTimeFormat("en-US", { dateStyle: "medium" }).format(new Date(d));

export const timeAgo = (d: Date | string) => {
  const diff = (Date.now() - new Date(d).getTime()) / 1000;
  if (diff < 60) return "just now";
  if (diff < 3600) return `${Math.floor(diff / 60)}m ago`;
  if (diff < 86400) return `${Math.floor(diff / 3600)}h ago`;
  return `${Math.floor(diff / 86400)}d ago`;
};
