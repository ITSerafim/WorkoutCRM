export function getLocaleDate(value = Date.now()): string {
  return new Date(value).toLocaleDateString('sv');
}

export function toDay() {
  let today = getLocaleDate().split('-')[2];
  if (today.startsWith('0')) {
    today = today.split('0')[1];
  }
  return +today;
}
