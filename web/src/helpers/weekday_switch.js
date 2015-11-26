export default (weekday, type) => {
  weekday = parseInt(weekday)
  if (type === 'prev') {
    if (weekday === 0) {
      return 6
    }
    return weekday-1
  } else if (type === 'next') {
    if (weekday === 6) {
      return 0
    }
    return weekday+1
  }
}
