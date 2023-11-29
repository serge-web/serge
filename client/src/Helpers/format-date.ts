import moment from 'moment-timezone'

/** function to create a date in UTC timezone
 */
const formatDate = (timestamp: string, format: string): string => {
  const m = moment.utc(timestamp)
  return m.format(format)
}

/** format date as 'HH:mm' */
export const formatTime = (timestamp: string): string => {
  return formatDate(timestamp, 'HH:mm')
}

/** format date as 'YYYY-MM-DD HH:mm' */
export const formatFullDate = (timestamp: string): string => {
  return formatDate(timestamp, 'YYYY-MM-DD HH:mm')
}

/** format date as 'DD/MM/YY */
export const formatShortDate = (timestamp: string): string => {
  return formatDate(timestamp, 'DD/MM/YY')
}

/** format date as 'DDHHmm */
export const formatLongMilitaryDate = (timestamp: string): string => {
  return formatDate(timestamp, 'MMM DDHHmm[Z]')
}

export default formatDate
