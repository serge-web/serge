import { Message, Wargame } from "@serge/custom-types"
import { Socket } from "socket.io-client"

export interface DbProviderInterface {
  changes: (listener: (doc: Message | Wargame) => void) => void
  destroy: () => void
  get: (query: string) => Promise<Wargame | Message | { status: number }>
  put: (doc: Wargame | Message) => Promise<Wargame | Message>
  allDocs: () => Promise<Message[]>
  replicate: (newDb: { name: string, db: ProviderDbInterface }) => Promise<DbProvider>
  name: string
}

export interface ProviderDbInterface {
  db: DbProviderInterface.Socket<Message | Wargame>
}

export interface ChangesResponseChange<Content extends {}> {
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

export type ChangeListener = (value: ChangesResponseChange<Content>) => any


