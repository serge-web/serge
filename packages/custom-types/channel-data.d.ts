import Participant from './participant'
import { SpecialChannelTypes } from '@serge/config'

/** special configuration for collaborative channels */
export interface CollabOptions {
  /** edit mode */
  mode: 'edit' | 'response',
  /** verbs for returning for edit */
  returnVerbs: Array<string>,
  /** who original document goes to first */
  startWithReview : boolean,
  /** extra columns to show in status view */
  extraColumns: Array<string>
}

/** description of channel, as stored in database */
export default interface ChannelData {
  /** unique id for this channel */
  readonly uniqid: string,
  /** name of this channel */
  name: string,
  /** list of participants for this channel */
  participants: Array<Participant>
  /** special channel types */
  format?: SpecialChannelTypes
  /** special collaborative working options */
  collabOptions?: CollabOptions
}
