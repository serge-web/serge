import { Message, MessageInfoType, Wargame, PlayerLogEntries } from '@serge/custom-types'
import DbProvider from '.'

export interface DbProviderInterface {
  changes: (listener: (doc: Message | Wargame) => void) => void
  destroy: () => void
  get: (query: string) => Promise<Wargame | Message | { status: number }>
  put: (doc: Wargame | Message) => Promise<Wargame | Message >
  allDocs: () => Promise<Message[]>
  lastWargame: () => Promise<MessageInfoType>
  lastCounter: (roleId: string, id: string) => Promise<number>
  getPlayerLogs: (wargames: string, query: string) => Promise<PlayerLogEntries>
  putPlayerLogs: (docs: PlayerLogEntries) => Promise<{msg: string}> 
  replicate: (newDb: { name: string, db: ProviderDbInterface }) => Promise<DbProvider>
  name: string
}

export interface ProviderDbInterface {
  db: DbProviderInterface.Socket<Message | Wargame>
}

export interface ChangesResponseChange {
  id: string;
  seq: number | string;
  changes: Array<{ rev: string }>;
  deleted?: boolean;
  wargame?: Wargame | Message;
}

export interface FetchReferenc {
  msg: string,
  data: number
}

export interface FetchData {
  msg: string,
  data: Wargame | Message,
  status: number
}
export interface FetchDataArray {
  msg: string,
  data: (Wargame | Message)[]
}

export interface FetchDataLogs {
  msg: string,
  data: PlayerLogEntries
}

export type ChangeListener = (value: ChangesResponseChange) => any
