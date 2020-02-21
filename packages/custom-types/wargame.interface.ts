import { WargameList } from './wargame-list.interface'
import { WargameData } from './wargame-data.interface'

export interface Wargame {
  isLoading: boolean,
  wargameList: Array<WargameList>,
  currentWargame: string,
  exportMessageList: Array<string>
  wargameTitle: string,
  data: WargameData,
  currentTab: string,
  wargameInitiated: boolean,
  adminNotLoggedIn: boolean
}