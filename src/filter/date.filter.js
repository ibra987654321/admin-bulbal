export default function dateFilter(value) {
  const date = new Date(value).toLocaleString('ru', {
    year: 'numeric',
    month: 'numeric',
    day: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
  })
  return date
}
