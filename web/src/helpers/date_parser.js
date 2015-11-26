export default function () {
  const d = new Date()
  let month = d.getMonth() + 1
  if (month > 0 && month < 4) {
    month = '01'
  } else if (month >=4 && month < 7) {
    month = '04'
  } else if (month >= 7 && month < 10) {
    month = '07'
  } else if (month >= 10) {
    month = '10'
  }
  const year = d.getFullYear().toString().substring(2)
  return year + month
}
