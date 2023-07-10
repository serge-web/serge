import _ from 'lodash'
import { MessagePlanning } from 'src/custom-types'

/** helper function to produce unique ids for channel messages
 */
const getIDs = (message: MessagePlanning): string => {
  let res
  const msg = message.message
  if (msg.Reference !== undefined) {
    res = msg.Reference
  } else {
    res = message._id
  }
  return res
}

/** helper function to reduce the list of messages by removing duplicate
 * turn markers & older versions of messages with reference numbers
 */
const mostRecentPlanningOnly = (messages: MessagePlanning[]): MessagePlanning[] => {
  return _.uniqBy(messages, getIDs)
}
export default mostRecentPlanningOnly
