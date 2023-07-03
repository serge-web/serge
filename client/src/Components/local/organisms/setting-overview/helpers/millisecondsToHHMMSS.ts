export default (milliseconds: number): string => {
  if (!milliseconds) return ''

  let hours, minutes, seconds
  seconds = Math.floor(milliseconds / 1000)
  minutes = Math.floor(seconds / 60)
  seconds = seconds % 60
  hours = Math.floor(minutes / 60)
  minutes = minutes % 60
  hours = hours % 24

  hours = hours < 10 ? '0' + hours : hours.toString()
  minutes = minutes < 10 ? '0' + minutes : minutes.toString()
  seconds = seconds < 10 ? '0' + seconds : seconds.toString()

  return hours + minutes + seconds
}
