export function range(start = 0, end = 100): number[] {
  const range = [];
  for (let i = start; i < end; i++) {
    range.push(i);
  }
  return range;
}
