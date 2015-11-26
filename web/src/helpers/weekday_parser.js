export default function (day) {
  const days = {
    'sunday': '0',
    'monday': '1',
    'tuesday': '2',
    'wednesday': '3',
    'thursday': '4',
    'friday': '5',
    'saturday': '6'
  }
  if (days[day]) {
    return parseInt(days[day])
  } else if (day === 'today') {
    return (new Date()).getDay()
  }
}
