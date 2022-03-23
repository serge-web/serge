import moment from 'moment-timezone'

/** function to create a date in UTC timezone
 */
const formatDate = (timestamp: string, format: string): string => {
  const m = moment(timestamp)
  const t = m.tz('UTC')
  return t.format(format)
}

export const formatTime = (timestamp: string): string => {
  return formatDate(timestamp, 'HH:mm')
}

export default formatDate
