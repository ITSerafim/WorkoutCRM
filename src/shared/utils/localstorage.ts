export function get<T>(key: string): T {
  return (
    localStorage.getItem(key) && JSON.parse(localStorage.getItem(key) as string)
  );
}

export function set<T>(key: string, value: T): void {
  localStorage.setItem(key, JSON.stringify(value));
}
