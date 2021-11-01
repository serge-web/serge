import { 
  COUNTER_MESSAGE,
  serverPath,
  databasePath,
  rdbPrefix,
  socketPath,
  replicate,
  deletePath,
  dbSuffix,
  localSettings
} from '@serge/config'
import { Message, Wargame } from '@serge/custom-types'
import { ProviderRavenDB } from './types'
import { io } from "socket.io-client"
import { DbProviderInterface } from './types'

export const RAVEN_DB = 'ravendb'

interface RavenFetchData {
  msg: string,
  data: Wargame | Message
}
interface RavenFetchDataArray {
  msg: string,
  data: (Wargame | Message)[]
}

export class RavenDbProvider implements DbProviderInterface {

  private provider: ProviderRavenDB
  name: string

  constructor (databasePath: string) {
    this.provider = {
      type: RAVEN_DB,
      db: databasePath
    }
    this.name = databasePath
  }

  changes (listener: (doc: Message | Wargame) => void): void  {
    const socket = io(socketPath)
    socket.on('changes', data => {
      const doc = data as Message | Wargame
      if (data.messageType.toLowerCase().indexOf('message'))
      listener(doc)
    })
  }

  setMaxListeners(_maxListeners: number): void {}

  destroy(): void {
    fetch(serverPath + rdbPrefix + deletePath + this.getDbName(), {
      method: 'DELETE'
    })
  }

  get (query: string): Promise<Wargame | Message> {
    return new Promise((resolve, reject) => {
      fetch(serverPath + rdbPrefix + this.getDbName() + '/' + query)
        .then(res => res.json() as Promise<RavenFetchData>)
        .then(({ msg, data }) => { 
          if (msg === 'ok') resolve(data)
          else reject({ msg: msg, status: 404 })
        })
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
      fetch(serverPath + rdbPrefix + this.getDbName(), {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(doc)
      }).then((res) => resolve(res.json()))
    })
  }

  allDocs (): Promise<Message[]> {
    return new Promise((resolve, reject) => {
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
      })
  }

  replicate(newDbName: string): Promise<RavenDbProvider> {
    return new Promise((resolve, reject) => {
      fetch(serverPath + rdbPrefix + replicate + `${this.getDbNameFromUrl(newDbName)}/${this.getDbName()}`)
        .then(() => {
          resolve(new RavenDbProvider(newDbName))
        })
        .catch((err: string) => {
          reject(err)
        })
    })
  }
}

export default RavenDbProvider
