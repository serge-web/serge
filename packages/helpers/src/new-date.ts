import moment from 'moment'

/** function to create a date in UTC timezone
 */
const newDate = (): string => {
  const timestamp = new Date()
  return moment(timestamp).toISOString()
}

export default newDate
