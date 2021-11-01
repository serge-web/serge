import { 
  COUNTER_MESSAGE,
  ERROR_THROTTLE
} from '@serge/config'
import { Message, Wargame } from '@serge/custom-types'
import PouchDB from 'pouchdb'
import { ProviderPouchDB, DbProviderInterface } from './types'

export const POUCH_DB = 'pouchdb'

type initPDB = (n: string) => PouchDB.Database<Message | Wargame>
const initPouchDbDefault: initPDB = (databasePath: string) => new PouchDB(databasePath)

export class PouchDbProvider implements DbProviderInterface {

  private provider: ProviderPouchDB
  name: string
  private changesListener: PouchDB.Core.Changes<Wargame | Message> | undefined
  private timerId: ReturnType<typeof setTimeout> | undefined

  constructor (databasePath: string, pouchDbInitFc: initPDB = initPouchDbDefault) {
    this.provider = {
      type: POUCH_DB,
      db: pouchDbInitFc(databasePath)
    }
    this.name = this.provider.db.name
  }

  changes (listener: (doc: Message | Wargame) => void): void  {
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
  }

  setMaxListeners(maxListeners: number): void {
    this.provider.db.setMaxListeners(maxListeners)
  }

  destroy(): void {
    this.provider.db.destroy()
  }

  get (query: string): Promise<Wargame | Message> {
    return new Promise((resolve, reject) => {
      this.provider.db.get(query).then((res) => {
        resolve(res)
      })
      .catch((err:string) => {
        reject(err)
      })
    })
  }

  put (doc: Wargame | Message): Promise<Wargame | Message> {
    return new Promise((resolve, reject) => {
      this.provider.db.put(doc)
        .then((res: any) => resolve(res))
        .catch((err:string) => {
          reject(err)
        })
    })
  }

  allDocs (include_docs: boolean, descending: boolean): Promise<Message[]> {
    return new Promise((resolve, reject) => {
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
    })
  }

  replicate(newDbName: string): Promise<PouchDbProvider> {
    return new Promise((resolve, reject) => {
      const newDb: PouchDB.Database<Message | Wargame> = new PouchDB(newDbName)
      this.provider.db.replicate.to(newDb).then(() => {
        resolve(new PouchDbProvider(newDbName, initPouchDbDefault))
      }).catch((err:string) => {
        reject(err)
      })
    })
  }
}

export default PouchDbProvider
