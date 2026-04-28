export const sumBy = <T>(arr: T[], key: (item: T) => number) =>
  arr.reduce((acc, x) => acc + key(x), 0);

export const groupBy = <T, K extends string | number>(arr: T[], key: (i: T) => K) =>
  arr.reduce((acc, item) => {
    const k = key(item);
    (acc[k] ||= []).push(item);
    return acc;
  }, {} as Record<K, T[]>);

export const aggregate = <T>(arr: T[], key: (i: T) => number) => ({
  total: sumBy(arr, key),
  count: arr.length,
  avg: arr.length ? sumBy(arr, key) / arr.length : 0,
});
