import { PlayerUiDispatch, PlayerUiActionTypes } from './player-ui-actions'
import { Message, Wargame } from '@serge/custom-types'
import PouchDB from 'pouchdb'
import { DbProviderInterface } from '../db/types'
import DbProvider from '../db'

export type ApiWargameDb = DbProviderInterface

export interface ListenNewMessageType {
  db: ApiWargameDb,
  name: string,
  dispatch: PlayerUiDispatch,
  changes?: PouchDB.Core.Changes<Wargame | Message>
}

export type ApiWargameDbObject = { db: ApiWargameDb, name: string }

export interface WargameRevision {
  name: string,
  title: string,
  initiated: boolean,
  shortName: string
}
