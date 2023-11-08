const convertMilliseconds = (milliseconds: number, type: string): string => {
  if (milliseconds === null) return ''

  let hours, minutes, seconds, days
  seconds = Math.floor(milliseconds / 1000)
  minutes = Math.floor(seconds / 60)
  seconds = seconds % 60
  hours = Math.floor(minutes / 60)
  minutes = minutes % 60
  days = Math.floor(hours / 24)
  hours = hours % 24

  days = days < 10 ? '0' + days : days.toString()
  hours = hours < 10 ? '0' + hours : hours.toString()
  minutes = minutes < 10 ? '0' + minutes : minutes.toString()
  seconds = seconds < 10 ? '0' + seconds : seconds.toString()

  let output = ''
  switch (type) {
    case 'ddhhmmss':
      output = days + hours + minutes + seconds
      break
    case 'mmss':
      output = minutes + seconds
      break
    case 'dd':
      output = days
      break
    case 'hhmmss':
    default:
      output = hours + minutes + seconds
      break
  }

  return output
}

export default convertMilliseconds
