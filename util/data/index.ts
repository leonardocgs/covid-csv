export function getFormattedDate(date: Date) {
  const formattedData = date.toLocaleDateString('en-US', {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric',
  });
  return formattedData;
}
