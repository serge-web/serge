import { 
  COUNTER_MESSAGE,
  ERROR_THROTTLE,
  serverPath,
  databasePath,
  rdbPrefix,
  socketPath,
  replicate,
  deletePath,
  dbSuffix,
  localSettings,
  allDbs
 } from '@serge/config'
import { Message, Wargame } from '@serge/custom-types'
import PouchDB from 'pouchdb'
import { ProviderTypeType, ProviderRavenDB, ProviderPouchDB } from './types'
import { io } from "socket.io-client"

export const POUCH_DB = 'pouchdb'
export const RAVEN_DB = 'ravendb'
const defaultProvider = RAVEN_DB

export const availableProviders: ProviderTypeType[] = [POUCH_DB, RAVEN_DB]

export interface DbProviderInterface {
  changes: (listener: (doc: Message | Wargame) => void) => void
  setMaxListeners: (maxListeners: number) => void
  destroy: () => void
  get: (query: string) => Promise<Wargame | Message>
  put: (doc: Wargame | Message) => Promise<Wargame | Message>
  allDocs: (include_docs: boolean, descending: boolean) => Promise<Message[]>
  replicate: (newDb: string) => Promise<DbProvider>
  name: string,
}

interface RavenFetchData {
  msg: string,
  data: Wargame | Message
}
interface RavenFetchDataArray {
  msg: string,
  data: (Wargame | Message)[]
}

type initPDB = (n: string) => PouchDB.Database<Message | Wargame>
const initPouchDbDefault: initPDB = (databasePath: string) => new PouchDB(databasePath)

export class DbProvider implements DbProviderInterface {

  private provider: ProviderPouchDB | ProviderRavenDB
  name: string
  private changesListener: PouchDB.Core.Changes<Wargame | Message> | undefined
  private timerId: ReturnType<typeof setTimeout> | undefined

  constructor (databasePath: string, provider: ProviderTypeType = defaultProvider, pouchDbInitFc: initPDB = initPouchDbDefault) {
    if (provider === POUCH_DB) {
      this.provider = {
        type: POUCH_DB,
        db: pouchDbInitFc(databasePath)
      }
      this.name = this.provider.db.name
    } else if (provider === RAVEN_DB) {
      this.provider = {
        type: RAVEN_DB,
        db: databasePath
      }
      this.name = databasePath
    } else {
      throw new TypeError('Wrong provider type')
    }
 }

  changes (listener: (doc: Message | Wargame) => void): void  {
    if (this.provider.type === POUCH_DB) {
      // if (changes) will works only when we recall listenNewMessage()
      // it conain old listenter with error, as we need to re-listen changes we need to clean old listener (no double fire)
      if (this.changesListener) this.changesListener.cancel()

      // save db.changes listener in to nextChanges const to be able remove it as we don't want to have case when we had a 2 .changes listener
      this.changesListener = this.provider.db.changes({
        since: 'now',
        live: true,
        timeout: false,
        heartbeat: false,
        include_docs: true
      }).on('change', (res) => {
        const doc = res.doc as Message | Wargame
        listener(doc)
      }).on('error', (err) => {
        // in case if error wil works multiple times we have global `timerId` (function body level)
        // on every error need to clean `timerId` to keep working timer for last error fire
        if (this.timerId) clearTimeout(this.timerId)
        console.log('error on listen for new message', err)
        // hey, maybe the server is down. introduce a pause
        // save timer to have way to stop it when error trigger multiple times
        this.timerId = setTimeout((): void => {
          // set timerId and changes listener for new listenNewMessage() to be able to remove them before new listener creation
          this.changes(listener)
        }, ERROR_THROTTLE)
      })
    } else if (this.provider.type === RAVEN_DB) {
      const socket = io(socketPath)
       socket.on('changes', data => {
        const doc = data as Message | Wargame
        listener(doc)
      })
    }
  }

  setMaxListeners(maxListeners: number): void {
    if (this.provider.type === POUCH_DB) {
      this.provider.db.setMaxListeners(maxListeners)
    }
  }

  destroy(): void {
    if (this.provider.type === POUCH_DB) {
      this.provider.db.destroy()
    } else if(RAVEN_DB) {
      fetch(serverPath + rdbPrefix + deletePath + this.getDbName(), {
        method: 'DELETE'
      })
    }
  }

  get (query: string): Promise<Wargame | Message> {
    return new Promise((resolve, reject) => {
      if (this.provider.type === POUCH_DB) {
        this.provider.db.get(query).then((res) => {
          resolve(res)
        })
        .catch((err:string) => {
          reject(err)
        })
      } else if (this.provider.type === RAVEN_DB) {
        fetch(serverPath + rdbPrefix + this.getDbName() + '/' + query)
          .then(res => res.json() as Promise<RavenFetchData>)
          .then(({ msg, data }) => { 
            if (msg === 'ok') resolve(data)
            else reject({ msg: msg, status: 404 })
          })
      } else {
        reject('type is undefined')
      }
    })
  }

  private getDbName(): string {
    return this.getDbNameFromUrl(this.provider.db)
  }

  private getDbNameFromUrl(url: string): string {
    return url.replace(dbSuffix, '').replace(databasePath, '')
  }

  put (doc: Wargame | Message): Promise<Wargame | Message> {

    return new Promise((resolve, reject) => {
      if (this.provider.type === POUCH_DB) {
        this.provider.db.put(doc)
          .then((res: any) => resolve(res))
          .catch((err:string) => {
            reject(err)
          })
      } else if (this.provider.type === RAVEN_DB) {
        fetch(serverPath + rdbPrefix + this.getDbName(), {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(doc)
        }).then(() => resolve(doc))
      } else {
        reject('type is undefined')
      }
    })
  }

  allDocs (include_docs: boolean, descending: boolean): Promise<Message[]> {
    return new Promise((resolve, reject) => {
      if (this.provider.type === POUCH_DB) {
        this.provider.db
          .allDocs({ include_docs, descending })
          .then(({ rows }): void => {
            const res = rows.reduce((messages: Message[], row): Message[] => {
              const doc = row.doc as Message
              if (typeof doc === 'object' && doc.messageType !== COUNTER_MESSAGE) messages.push(doc)
              return messages
            }, [])
              resolve(res)
          })
          .catch((err: string) => {
            reject(err)
          })
      } else if (this.provider.type === RAVEN_DB) {
        fetch(serverPath + rdbPrefix + this.getDbName())
          .then(res => res.json() as Promise<RavenFetchDataArray>)
          .then((res) => {
            const { msg, data } = res
            if (msg === 'ok') {
              const messages = data.reduce((messages: Message[], row): Message[] => {
                const doc = row as Message
                // @ts-ignore
                const isNotSystem = doc._id !== localSettings
                if (typeof doc === 'object' && doc.messageType !== COUNTER_MESSAGE && isNotSystem) messages.push(doc)
                return messages
              }, [])
              
              resolve(messages)
            } else reject(msg)
          })
      } else {
        reject('type is undefined')
      }
    })
  }

  replicate(newDbName: string): Promise<DbProvider> {
    return new Promise((resolve, reject) => {
      if (this.provider.type === POUCH_DB) {
        const newDb: PouchDB.Database<Message | Wargame> = new PouchDB(newDbName)
        this.provider.db.replicate.to(newDb).then(() => {
          resolve(new DbProvider(newDbName, POUCH_DB, () => newDb))
        }).catch((err:string) => {
          reject(err)
        })
      } else if (this.provider.type === RAVEN_DB) {
        const replacedNewDbName = newDbName.slice(newDbName.indexOf('wargame'))
        fetch(serverPath + rdbPrefix + replicate + `${this.getDbNameFromUrl(replacedNewDbName)}/${this.getDbName()}`)
          .then(() => {
            resolve(new DbProvider(newDbName, RAVEN_DB))
          })
          .catch((err:string) => {
            reject(err)
          })
      } else {
        reject('type is undefined')
      }
    })
  }
}

export const getAllDocs = (provider: ProviderTypeType = defaultProvider): Promise<string[]> => {
  if(provider === RAVEN_DB){
    return fetch(serverPath + rdbPrefix).then(res => res.json()).then(res => (res.data || []) as string[])
  } else if (provider === POUCH_DB) {
    return fetch(serverPath + allDbs).then(res => res.json())
  } else {
    throw new Error('Wrong provider ' + provider)
  }
}

export default DbProvider