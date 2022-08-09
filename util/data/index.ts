export function getFormattedDate(date: Date) {
  const formattedData = date.toLocaleDateString('en-US', {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric',
  });
  return formattedData;
}
export function getData() {
  return getFormattedDate(new Date());
}
export function getDashedDate() {
  const date = new Date();
  const dashedDate = `${
    date.getMonth() + 1
  }-${date.getDate()}-${date.getFullYear()}`;

  return dashedDate;
}
