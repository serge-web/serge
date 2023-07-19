import { ADJUDICATION_PHASE, PLANNING_PHASE, TurnFormats } from 'src/config'
import Message from './message'
import WargameData from './wargame-data'
import WargameList from './wargame-list'

export default interface Wargame {
  _id?: string
  _rev?: string
  /** metadata created for sending wargame message */
  infoType?: boolean
  /** metadata created for sending wargame message */
  messageType?: string
  name: string
  phase: typeof ADJUDICATION_PHASE | typeof PLANNING_PHASE
  gameTurn: number
  /** format for displaying turn number */
  turnPresentation?: TurnFormats
  turnEndTime?: string
  adjudicationStartTime?: string
  isLoading?: boolean
  wargameList: Array<WargameList>
  currentWargame?: string
  wargameTitle: string
  data: WargameData
  currentTab?: string
  wargameInitiated?: boolean
  adminNotLoggedIn?: boolean
  exportMessagelist?: Message[]
}
