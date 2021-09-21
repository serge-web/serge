import { MessageCustom } from '@serge/custom-types'

const getKey = (message: MessageCustom, canCollaborate: boolean, canReleaseMessages: boolean, canUnClaimMessages: boolean): string => {
  const useReference = canCollaborate || canReleaseMessages || canUnClaimMessages
  return useReference ? message.message.Reference : message._id
}

export default getKey
