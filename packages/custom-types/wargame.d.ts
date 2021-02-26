import WargameList from './wargame-list'
import WargameData from './wargame-data'
import Message from './message'

export default interface Wargame {
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
