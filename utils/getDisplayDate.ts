export const getDisplayDate = (date: Date) => {
  const dtf = new Intl.DateTimeFormat('en', { year: 'numeric', month: '2-digit', day: '2-digit' })
  const [{ value: mo },,{ value: da },,{ value: ye }] = dtf.formatToParts(date)

  return `${da}.${mo}.${ye}`
}
