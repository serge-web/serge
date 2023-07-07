import { PlayerUiDispatch } from './player-ui-actions'
import { Message, Wargame } from 'src/custom-types'
import { DbProviderInterface } from '../db/types'
import { Socket } from 'socket.io-client'

export type ApiWargameDb = DbProviderInterface

export interface ListenNewMessageType {
  db: ApiWargameDb,
  name: string,
  dispatch: PlayerUiDispatch,
  changes?: Socket.Core.Changes<Wargame | Message>
}

export type ApiWargameDbObject = { db: ApiWargameDb, name: string }
