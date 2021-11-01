import { Message, Wargame } from "@serge/custom-types"
import PouchDB from 'pouchdb'
import  RavenDB  from 'ravendb'
import { Socket } from "socket.io-client"
import { POUCH_DB, RAVEN_DB } from "."

export interface DbProviderInterface {
  changes: (listener: (doc: Message | Wargame) => void) => void
  setMaxListeners: (maxListeners: number) => void
  destroy: () => void
  get: (query: string) => Promise<Wargame | Message>
  put: (doc: Wargame | Message) => Promise<Wargame | Message>
  allDocs: (include_docs: boolean, descending: boolean) => Promise<Message[]>
  replicate: (newDb: string) => Promise<DbProvider>
  name: string
}

export interface ProviderPouchDB {
  type: typeof POUCH_DB,
  db: PouchDB.Database<Message | Wargame>
}

export interface ProviderRavenDB {
  type: typeof RAVEN_DB,
  db: RavenDB.Socket<Message | Wargame>
}

export type ProviderTypeType = typeof POUCH_DB | typeof RAVEN_DB
export type ProviderType = ProviderPouchDB | ProviderRavenDB

interface DbProviderInterfaceChangesOptions {
  live?: boolean
}


export interface ChangesResponseChange<Content extends {}> {
  id: string;
  seq: number | string;
  changes: Array<{ rev: string }>;
  deleted?: boolean;
  wargame?: Wargame | Message;
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


