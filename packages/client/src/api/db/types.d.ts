import { Forces, Message, PlayerLogEntries, TurnPeriod, Wargame } from '@serge/custom-types'
import DbProvider from '.'

export interface DbProviderInterface {
  changes: (listener: (doc: Message | Wargame) => void) => void
  destroy: () => void
  get: (query: string) => Promise<Wargame | Message | { status: number } | Forces>
  put: (doc: Wargame | Message | Forces) => Promise<Wargame | Message >
  allDocs: () => Promise<Message[]>
  lastDoc: (type: string) => Promise<Wargame | Forces>
  getTurnPeriods: () => Promise<TurnPeriod[]>
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
  data: Wargame | Message | Forces,
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

export interface FetchTurnPeriod {
  msg: string,
  data: TurnPeriod[]
}

export type ChangeListener = (value: ChangesResponseChange) => any
