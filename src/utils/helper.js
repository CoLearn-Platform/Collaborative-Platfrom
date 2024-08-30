export function formatDate(date) {
  const d = new Date(date);
  return d.toLocaleDateString();
}
