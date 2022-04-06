import { 
  serverPath,
  databasePath,
  socketPath,
  replicate,
  deletePath
} from '@serge/config'
import { Message, Wargame } from '@serge/custom-types'
import { io } from "socket.io-client"
import {
   ProviderDbInterface,
   DbProviderInterface,
   FetchData,
   FetchDataArray
   } from './types'

export class DbProvider implements DbProviderInterface {

  private provider: ProviderDbInterface
  name: string

  constructor (databasePath: string) {
    this.provider = {
      db: databasePath
    }
    this.name = databasePath
  }

  changes (listener: (doc: Message) => void): void  {
    const socket = io(socketPath)
    console.log('SOCKET', socket)
    socket.on('changes', data => {
      const doc = data as Message
        listener(doc)
    })
  }

  destroy(): void {
    fetch(serverPath + deletePath + this.getDbName(), {
      method: 'DELETE'
    })
  }

  get (query: string): Promise<Wargame | Message | { status: number }> {
    return new Promise((resolve, reject) => {
      fetch(serverPath + this.getDbName() + '/' + query)
        .then(res => res.json() as Promise<FetchData>)
        .then(({ msg, data }) => {
          if (msg === 'ok') resolve(data)
          else resolve({ status: 404 })
        })
    })
  }

  private getDbName(): string {
    return this.getDbNameFromUrl(this.provider.db)
  }

  private getDbNameFromUrl(url: string): string {
    return url.replace(databasePath, '')
  }

  put (doc: Wargame | Message): Promise<Wargame | Message> {
    return new Promise((resolve, reject) => {
      fetch(serverPath + this.getDbName(), {
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
      fetch(serverPath + this.getDbName())
        .then(res => res.json() as Promise<FetchDataArray>)
        .then((res) => {
          const { msg, data } = res
          // @ts-ignore
          if (msg === 'ok') resolve(data[0] && data[0].docs ? data[0].docs : data as Message[])
          else reject(msg)
        })
      })
  }

  replicate(newDbProvider: { name: string, db: ProviderDbInterface }): Promise<DbProvider> {
    return new Promise((resolve, reject) => {
      fetch(serverPath + replicate + `${this.getDbNameFromUrl(newDbProvider.name)}/${this.getDbName()}`)
        .then(() => resolve(new DbProvider(newDbProvider.name)))
        .catch((err: string) => reject(err))
    })
  }
}

export default DbProvider
