import { CurrentModal, DBLoadingState, ExportItems, GameInfo, Messages, UmpireMenu } from '@serge/custom-types'
import { messagesReducer } from '../ActionsAndReducers/dbMessages/messages_Reducer'
import { exportItems } from '../ActionsAndReducers/ExportItems/ExportItems_Reducer'
import { loadingDbReducer } from '../ActionsAndReducers/loadingDb_Reducer'
import { currentModal } from '../ActionsAndReducers/Modal/Modal_Reducer'
import { notificationReducer } from '../ActionsAndReducers/Notification/Notification_Reducer'
import { gameInfo } from '../ActionsAndReducers/sergeInfo/sergeInfo_Reducer'
import { umpireMenuReducer } from '../ActionsAndReducers/UmpireMenu/umpireMenu_Reducer'

// almost reducer is written in js file so we don't have a type for this
// it makes a bit difficult when query data from state and we don't know extractly what type of the state
// solution: convert all old state to a new state with type
// TODO*: update action with type
export const messagesTypesReducerWithType = (state: Messages | undefined, action: any): Messages => messagesReducer(state, action)
export const umpireMenuReducerWithType = (state: UmpireMenu | undefined, action: any): UmpireMenu => umpireMenuReducer(state, action)
export const currentModalWithType = (state: CurrentModal | undefined, action: any): CurrentModal => currentModal(state, action)
export const notificationReducerWithType = (state: any[] | undefined, action: any): any[] => notificationReducer(state, action)
export const loadingDbReducerWithType = (state: DBLoadingState | undefined, action: any): DBLoadingState => loadingDbReducer(state, action)
export const exportItemsReducerWithType = (state: ExportItems | undefined, action: any): ExportItems => exportItems(state, action)
export const gameInfoReducerWithType = (state: GameInfo | undefined, action: any): GameInfo => gameInfo(state, action)

// new reducer define here
// ...
