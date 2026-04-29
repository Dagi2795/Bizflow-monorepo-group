export const validateEmail = (s: string) =>
  /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(s);
export const validateRequired = (s: string) => s.trim().length > 0;
export const validateMinLength = (s: string, n: number) => s.length >= n;
