export function asReverseDictionary<T extends Record<string, string>>(
  obj: T
): { [K in T[keyof T]]: keyof T } {
  const reverse: Partial<{ [K in T[keyof T]]: keyof T }> = {};
  Object.entries(obj).forEach(([key, value]) => {
    reverse[value as T[keyof T]] = key as keyof T;
  });

  return reverse as { [K in T[keyof T]]: keyof T };
}
