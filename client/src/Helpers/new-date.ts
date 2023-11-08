import moment from 'moment'

/** function to create a date in UTC timezone
 */
const newDate = (date?: Date): string => {
  const timestamp = date || new Date()
  return moment(timestamp).toISOString()
}

export default newDate
