import { 
  serverPath,
  databasePath,
  socketPath,
  replicate,
  deletePath,
  wargameSettings,
  settings
} from '@serge/config'
import { Message, MessageCustom, Wargame } from '@serge/custom-types'
import { io } from 'socket.io-client'
import {
  ProviderDbInterface,
  DbProviderInterface,
  FetchData,
  FetchDataArray
} from './types'

export class DbProvider implements DbProviderInterface {
  private provider: ProviderDbInterface
  name: string
  // track the most recently received message
  message_ID: string

  constructor (databasePath: string) {
    this.provider = {
      db: databasePath
    }
    this.name = databasePath
    this.message_ID = '' 
  }

  changes (listener: (doc: Message) => void): void {
    const socket = io(socketPath)
    const listenerMessage = (data: MessageCustom) => {
      // we use two special names for the wargame document
      const specialFiles = [wargameSettings, settings]
      // have we just received this message?
      if (!specialFiles.includes(data._id) && (this.message_ID === data._id)) {
        // yes - stop listening on this socket
        console.warn('stopping listening for', data._id)
        socket.off(this.getDbName(), listenerMessage) 
      } else {
        // no, handle the message
        listener(data)
        // and cache the id
        this.message_ID = data._id 
      }
    }
    socket.on(this.getDbName(), listenerMessage)
  }

  destroy (): void {
    fetch(serverPath + deletePath + this.getDbName(), {
      method: 'DELETE'
    })
  }

  get (query: string): Promise<Wargame | Message | { status: number }> {
    return new Promise((resolve, reject) => {
      fetch(serverPath + 'get/' + this.getDbName() + '/' + query)
        .then(res => res.json() as Promise<FetchData>)
        .then(({ msg, data }) => {
          if (msg === 'ok') resolve(data)
          else resolve({ status: 404 })
        })
    })
  }

  private getDbName (): string {
    return this.getDbNameFromUrl(this.provider.db)
  }

  private getDbNameFromUrl (url: string): string {
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

  allDocs (): Promise<MessageCustom[]> {
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

  replicate (newDbProvider: { name: string, db: ProviderDbInterface }): Promise<DbProvider> {
    return new Promise((resolve, reject) => {
      fetch(serverPath + replicate + `${this.getDbNameFromUrl(newDbProvider.name)}/${this.getDbName()}`)
        .then(() => resolve(new DbProvider(newDbProvider.name)))
        .catch((err: string) => reject(err))
    })
  }
}

export default DbProvider
