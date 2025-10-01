import WargameList from './wargame-list'
import Message from './message'
import WargameData from './wargame-data'

export default interface WargamesState {
    isLoading: boolean
    wargameList: WargameList[]
    currentWargame: string
    exportMessagelist?: Message[] 
    wargameTitle: string
    data: WargameData 
    currentTab: string
    wargameInitiated: boolean
    adminNotLoggedIn: boolean
}
