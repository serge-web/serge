import {
  ERROR_THROTTLE,
  INFO_MESSAGE,
  FEEDBACK_MESSAGE
} from '@serge/config'

import { setCurrentWargame, setLatestWargameMessage, setLatestFeedbackMessage } from '@serge/actions'
import {
  ApiWargameDbObject,
  PlayerUiDispatch,
  ApiWargameListenNewMessage,
  Wargame
} from '@serge/custom-types'

const wargameDbStore: ApiWargameDbObject[] = []


// get db name from path
const getNameFromPath = (dbPath: string): string => {
  if (!dbPath) throw new Error('Wrong dbPath')
  const path: string = new URL(dbPath).pathname
  const index: number = path.lastIndexOf('/')
  if (index === -1) throw new Error('Wrong dbPath')
  return path.substring(index + 1)
}

// get database object by :name key
const getWargameDbByName = (name: string): ApiWargameDbObject => {
  const dbObject = wargameDbStore.find((item) => item.name === name)
  if (dbObject === undefined) throw new Error(`wargame database with "${name}" not found`)
  return dbObject
}

// get database object by database path
// const getWargameDbByDbPath = (dbPath: string): WargameDb => {
//   const name: string = getNameFromPath(dbPath)
//   return getWargameDbByName(name)
// }

// add a new wargame database
export const addWargameDbStore = (wargameDbObject: ApiWargameDbObject) => {
  wargameDbStore.unshift(wargameDbObject)
}

// remove wargame database
export const deleteWargame = (wargamePath: string): void => {
  const name: string = getNameFromPath(wargamePath)
  const wargame = getWargameDbByName(name)
  wargame.db.destroy()
  const index = wargameDbStore.findIndex((item) => item.name === name)
  wargameDbStore.splice(index, 1)
}

export const listenNewMessage = ({ db, name, dispatch }: ApiWargameListenNewMessage): void => {
  db.changes({
    since: 'now',
    live: true,
    timeout: false,
    heartbeat: false,
    include_docs: true
  }).on('change', ({ doc }) => {
    (async () => { // TODO: why async?
      if (doc === undefined) return
      if (doc.messageType === INFO_MESSAGE) {
        // @ts-ignore: need to update INFO_MESSAGE to be able to use it as Wargame object
        dispatch(setCurrentWargame(doc as Wargame))
        dispatch(setLatestWargameMessage(doc))
        return
      }

      if (doc.messageType === FEEDBACK_MESSAGE) {
        dispatch(setLatestFeedbackMessage(doc))
      } else {
        // @ts-ignore: need to update INFO_MESSAGE to be able to use it as Wargame object
        dispatch(setLatestWargameMessage(doc))
      }
    })()
  }).on('error', (_err) => {
    // hey, maybe the server is down. introduce a pause
    setTimeout((): void => {
      listenNewMessage({ db, name, dispatch })
    }, ERROR_THROTTLE)
  })
}

export const listenForWargameChanges = (name: string, dispatch: PlayerUiDispatch) => {
  const wargame = wargameDbStore.find((item) => item.name === name)
  if (wargame === undefined) return
  const db = wargame.db
  listenNewMessage({ db, name, dispatch })
}
