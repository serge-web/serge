import WargameList from './wargame-list'
import WargameData from './wargame-data'
import Message from './message'
import { ADJUDICATION_PHASE, PLANNING_PHASE } from '@serge/config'

export default interface Wargame {
  _id: string,
  _rev?: string,
  name: string,
  phase: typeof ADJUDICATION_PHASE | typeof PLANNING_PHASE ,
  turnEndTime?: string,
  adjudicationStartTime?: string,
  isLoading: boolean,
  wargameList: Array<WargameList>,
  currentWargame: string,
  exportMessageList?: Array<string>
  wargameTitle: string,
  data: WargameData,
  currentTab: string,
  wargameInitiated: boolean,
  adminNotLoggedIn: boolean,
  exportMessagelist?: Message[]
}
