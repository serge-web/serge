import { PlayerUiDispatch, PlayerUiActionTypes } from './player-ui-actions'
import { Message, Wargame } from '@serge/custom-types'
import PouchDB from 'pouchdb'

export type ApiWargameDb = PouchDB.Database<Message | Wargame>

export interface ListenNewMessageType {
  db: ApiWargameDb,
  name: string,
  dispatch: PlayerUiDispatch
}

export type ApiWargameDbObject = { db: ApiWargameDb, name: string }

export interface WargameRevision {
  name: string,
  title: string,
  initiated: boolean,
  shortName: string
}
