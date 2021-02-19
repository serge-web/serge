import { PlayerUiDispatch, PlayerUiActionTypes } from './player-ui-actions'
import { Database } from '@types'
import Message from './message.d'

export type ApiWargameDb = Database<Message>

export interface ApiWargameListenNewMessage {
  db: ApiWargameDb,
  name: string,
  dispatch: PlayerUiDispatch
}

export type ApiWargameDbObject = { db: ApiWargameDb, name: string }
