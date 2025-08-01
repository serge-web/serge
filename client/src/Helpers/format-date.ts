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

// Check if a given date string is in one of the accepted formats.
export const isValidDateFormat = (dateString: string) => {
  const formats = [
    'YYYY-MM-DD',
    'YYYY/MM/DD',
    'YYYY-MM-DDTHH:mm:ssZ'
  ]
  return formats.some(format => moment(dateString, format, true).isValid())
}

/** format date as 'DD/MM/YY */
export const formatShortDate = (timestamp: string): string => {
  return formatDate(timestamp, 'DD/MM/YY')
}

export default formatDate
