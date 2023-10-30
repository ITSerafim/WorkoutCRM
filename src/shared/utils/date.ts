export function getLocaleDate(value = Date.now()): string {
  return new Date(value).toLocaleDateString('sv');
}
