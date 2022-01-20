import { MessageCustom } from '@serge/custom-types'

/** produce a key for this message
 * @param message the new message
 * @param canCollaborate if this role can collaborate in this channel
 * @param canReleaseMessages if this role can release messages in this channel
 * @param canUnClaimMessages if this role can unclaim messages in this channel
 * @param isFinalised if this document has been finalised/closed/released. Submitters of
 *                    RFIs are only informed of an update if it's the finalised document
 * @param isObserver if this role is an observer, and should see all updates as new messages
 */
const getKey = (message: MessageCustom, canCollaborate: boolean, canReleaseMessages: boolean,
  canUnClaimMessages: boolean, isFinalisedResponse: boolean, isObserver: boolean): string => {
  const useId = canCollaborate || canReleaseMessages || canUnClaimMessages || isObserver
  const res = useId ? message._id : message.message.Reference + (isFinalisedResponse ? '-finalised' : '')
  return res
}

export default getKey
