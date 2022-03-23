import moment from 'moment'

/** function to create a date in UTC timezone
 */
export default function (): string {
  const timestamp = new Date()
  return moment(timestamp).toISOString()
}
