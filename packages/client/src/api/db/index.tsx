import { 
  serverPath,
  rdbPrefix,
  allDbs
 } from '@serge/config'
import { Message, Wargame } from '@serge/custom-types'
import { ProviderTypeType, DbProviderInterface } from './types'
import PouchDbProvider from './pouchdb'
import RavenDbProvider from './ravendb'

export const POUCH_DB = 'pouchdb'
export const RAVEN_DB = 'ravendb'
const defaultProvider = RAVEN_DB // change value to POUCH_DB or RAVEN_DB

export class DbProvider implements DbProviderInterface {

  private provider: DbProviderInterface
  name: string

  // define methods witch ones should extends from db providers
  get: (query: string) => Promise<Wargame | Message>
  put: (doc: Wargame | Message) => Promise<Wargame | Message>
  allDocs: (include_docs: boolean, descending: boolean) => Promise<Message[]>
  changes: (listener: (doc: Wargame | Message) => void) => void
  destroy: () => void
  replicate: (newDb: string) => Promise<any>
  setMaxListeners: (maxListeners: number) => void

  constructor (databasePath: string, provider: ProviderTypeType = defaultProvider) {
    if (provider === POUCH_DB) {
      this.provider = new PouchDbProvider(databasePath)
      this.name = this.provider.name
    } else if (provider === RAVEN_DB) {
      this.provider = new RavenDbProvider(databasePath)
      this.name = databasePath
    } else {
      throw new TypeError('Wrong provider type')
    }

    // extend methods
    this.changes = this.provider.changes.bind(this.provider)
    this.setMaxListeners = this.provider.setMaxListeners.bind(this.provider)
    this.destroy = this.provider.destroy.bind(this.provider)
    this.get = this.provider.get.bind(this.provider)
    this.put = this.provider.put.bind(this.provider)
    this.allDocs = this.provider.allDocs.bind(this.provider)
    this.replicate = this.provider.replicate.bind(this.provider)
  }
}

export const getAllDocs = (provider: ProviderTypeType = defaultProvider): Promise<string[]> => {
  if (provider === RAVEN_DB) {
    return fetch(serverPath + rdbPrefix).then(res => res.json()).then(res => (res.data || []) as string[])
  } else if (provider === POUCH_DB) {
    return fetch(serverPath + allDbs).then(res => res.json())
  } else {
    throw new Error('Wrong provider ' + provider)
  }
}

export default DbProvider