import { PlayerUiDispatch, PlayerUiActionTypes } from './player-ui-actions'
import Message from './message.d'

export type ApiWargameDb = PouchDB.Database<Message>

export interface ApiWargameListenNewMessage {
  db: ApiWargameDb,
  name: string,
  dispatch: PlayerUiDispatch
}

export type ApiWargameDbObject = { db: ApiWargameDb, name: string }
