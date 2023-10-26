export function createMethod<T extends { key: string }>(
  value: T,
  formsMethods: any,
): void {
  formsMethods[value.key](value);
}
