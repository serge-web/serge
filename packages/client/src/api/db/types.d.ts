import { Message, Wargame } from "@serge/custom-types"
import { Socket } from "socket.io-client"

export interface DbProviderInterface {
  changes: (listener: (doc: Message | Wargame) => void) => void
  destroy: () => void
  get: (query: string) => Promise<Wargame | Message>
  put: (doc: Wargame | Message) => Promise<Wargame | Message>
  allDocs: () => Promise<Message[]>
  replicate: (newDb: string) => Promise<DbProvider>
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
  data: Wargame | Message
}
export interface FetchDataArray {
  msg: string,
  data: (Wargame | Message)[]
}

/*
interface ChangesResponseChange<Content extends {}> {
  id: string;
  seq: number | string;
  changes: Array<{ rev: string }>;
  deleted?: boolean;
  doc?: ExistingDocument<Content & ChangesMeta>;
}
interface ChangesResponse<Content extends {}> {
  status: string;
  last_seq: number | string;
  results: Array<ChangesResponseChange<Content>>;
}
*/

export type ChangeListener = (value: ChangesResponseChange<Content>) => any


