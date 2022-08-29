import { Message, MessageInfoType, Wargame, ActivityLogsInterface } from '@serge/custom-types'
import DbProvider from '.'

export interface DbProviderInterface {
  changes: (listener: (doc: Message | Wargame) => void) => void
  destroy: () => void
  get: (query: string) => Promise<Wargame | Message | { status: number }>
  put: (doc: Wargame | Message | ActivityLogsInterface) => Promise<Wargame | Message | ActivityLogsInterface>
  allDocs: () => Promise<Message[]>
  lastWargame: () => Promise<MessageInfoType>
  playlogs: () => Promise<ActivityLogsInterface>
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
  data: ActivityLogsInterface
}
export type ChangeListener = (value: ChangesResponseChange) => any
