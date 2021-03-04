import uniqid from 'uniqid'
import _ from 'lodash'
import moment from 'moment'
import PouchDB from 'pouchdb'
import fetch, { Response } from 'node-fetch'
import deepCopy from '../../Helpers/copyStateHelper'
import calcComplete from '../../Helpers/calcComplete'
import handleForceDelta from '../../ActionsAndReducers/playerUi/helpers/handleForceDelta'
import { clipInfoMEssage } from '@serge/helpers'
import {
  databasePath,
  serverPath,
  MSG_STORE,
  MSG_TYPE_STORE,
  PLANNING_PHASE,
  ADJUDICATION_PHASE,
  MAX_LISTENERS,
  SERGE_INFO,
  ERROR_THROTTLE
} from '@serge/config'
import { dbDefaultSettings } from '../../consts'

import { INFO_MESSAGE, FEEDBACK_MESSAGE, CUSTOM_MESSAGE } from '@serge/config'

import {
  setLatestFeedbackMessage,
  setCurrentWargame,
  setLatestWargameMessage
} from '../../ActionsAndReducers/playerUi/playerUi_ActionCreators'

import {
  PlayerUiDispatch,
  Wargame,
  Message,
  MessageInfoType
} from '@serge/custom-types'

import {
  ApiWargameDbObject,
  ApiWargameDb,
  ListenNewMessageType
} from './types.d'

const wargameDbStore: ApiWargameDbObject[] = []

// give database documents a suffix, so they're easier to open
// in database utility tools
const dbSuffix = '.sqlite'

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

export const listenNewMessage = ({ db, name, dispatch }: ListenNewMessageType): void => {
  db.changes({
    since: 'now',
    live: true,
    timeout: false,
    heartbeat: false,
    include_docs: true
  }).on('change', (res) => {
    const doc = res.doc as Message
    (async () => {
      if (doc === undefined) return
      if (doc.messageType === INFO_MESSAGE) {
        dispatch(setCurrentWargame(doc as Wargame))
        dispatch(setLatestWargameMessage(clipInfoMEssage(doc)))
        return
      }

      if (doc.messageType === FEEDBACK_MESSAGE) {
        dispatch(setLatestFeedbackMessage(doc))
      } else {
        // @ts-ignore: TODO: check this case
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

export const listenForWargameChanges = (name: string, dispatch: PlayerUiDispatch): void => {
  const wargame = wargameDbStore.find((item) => item.name === name)
  if (wargame === undefined) return
  const db = wargame.db
  listenNewMessage({ db, name, dispatch })
}

export const populateWargame = (): Promise<Wargame> => {
  return fetch(serverPath + 'allDbs')
    .then((response: Response): Promise<string[]> => response.json())
    .then((dbs: string[]) => {
      const wargameNames: string[] = wargameDbStore.map((db) => db.name)
      const toCreateDiff: string[] = _.difference(dbs, wargameNames)
      const toCreate: string[] = _.pull(toCreateDiff, MSG_STORE, MSG_TYPE_STORE, SERGE_INFO, '_replicator', '_users')

      toCreate.forEach((name) => {
        const db: ApiWargameDb = new PouchDB(databasePath + name + dbSuffix)
        db.setMaxListeners(MAX_LISTENERS)
        wargameDbStore.unshift({ name, db })
      })

      const promises: (Promise<Wargame>)[] = wargameDbStore.map(({ name, db }) => {
        return getLatestWargameRevision(name).then((res) => ({
          name: db.name,
          title: res.wargameTitle,
          initiated: res.wargameInitiated
        })).catch((err) => {
          console.log(err)
          return err
        })
      })
      return Promise.all(promises)
    })
    .catch((err) => {
      console.log(err)
      return err
    })
}

export const clearWargames = (): void => {
  fetch(serverPath + 'clearAll')
    .then(() => {
      window.location.reload(true)
    })
}


export const getIpAddress = (): Promise<{ ip: string }> => {
  return fetch(serverPath + 'getIp')
    .then<{ ip: string }>((res) => res.json())
}

// TODO: Need to check component "ImageDropzone" it returns file with Any type
// @ts-ignore
export const saveIcon = (file) => {
  return fetch(serverPath + 'saveIcon', {
    method: 'POST',
      // @ts-ignore
    'Content-Type': 'image/png',
    body: file
  })
    // @ts-ignore
    .then((res) => res.json())
}

export const createWargame = (): Promise<Wargame> => {

  const name: string = `wargame-${uniqid.time()}`
  const db: ApiWargameDb = new PouchDB(databasePath + name + dbSuffix)

  db.setMaxListeners(15)
  addWargameDbStore({ name, db })

  // TODo: update dbDefaultSettings to valid wargame json
  // @ts-ignore
  const settings: Wargame = { ...dbDefaultSettings, wargameTitle: name }


  return new Promise((resolve, reject) => {
    db.put(settings)
    .then(() => {
      db.get<Promise<Wargame>>(dbDefaultSettings._id).then((res) => {
        resolve(res)
      }).catch((err) => {
        reject(err)
      })
    }).catch((err) => {
      console.log(err)
      reject(err)
    })
  })
}

export const checkIfWargameStarted = (dbName: string): Promise<boolean> => {
  return getAllMessages(dbName).then((messages) => {
    const latestWargame = messages.find((message) => (message.messageType === INFO_MESSAGE))
    return !!latestWargame
  })
}

export const getLatestWargameRevision = (dbName: string): Promise<Wargame> => {
  return getAllMessages(dbName).then((messages) => {
    const latestWargame: MessageInfoType | undefined = messages.find(({ messageType }) => messageType === INFO_MESSAGE) as MessageInfoType
    if (latestWargame !== undefined) return latestWargame as Wargame
    return getWargameLocalFromName(dbName)
  }).catch(err => err)
}

export const editWargame = (dbPath: string): Promise<Wargame> => (
  getLatestWargameRevision(getNameFromPath(dbPath))
)

export const exportWargame = (dbPath: string): Promise<Wargame> => {
  const dbName: string = getNameFromPath(dbPath)

  return getAllMessages(dbName).then((messages) => {
    const latestWargame: MessageInfoType = messages.find(({ messageType }) => (messageType === INFO_MESSAGE)) as MessageInfoType

    if (latestWargame) {
      return { ...latestWargame, exportMessagelist: messages } as Wargame
    } else {
      const { db } = getWargameDbByName(dbName)
      return db.get<Wargame>(dbDefaultSettings._id).then(res => {
        return { ...res, exportMessagelist: messages } as Wargame
      })
    }
  })
}

export const initiateGame = (dbName: string): Promise<MessageInfoType> => {
  const { db } = getWargameDbByName(dbName)

  return db.get(dbDefaultSettings._id)
    .then((res) => {
      const wargame = res as Wargame
      const initiatedWargame: Wargame = {
        ...wargame,
        phase: ADJUDICATION_PHASE,
        adjudicationStartTime: moment().format(),
        turnEndTime: moment().add(wargame.data.overview.realtimeTurnTime, 'ms').format(),
        wargameInitiated: true
      }
      // return  db.put(initiatedWargame)
      db.put(initiatedWargame)
      return initiatedWargame
    }).then((wargame) => {
      const messageInfoType: MessageInfoType = {
        ...wargame,
        _id: new Date().toISOString(),
        messageType: INFO_MESSAGE,
        wargameTitle: wargame.wargameTitle,
        data: wargame.data,
        turnEndTime: moment().add(wargame.data.overview.realtimeTurnTime, 'ms').format(),
        gameTurn: 0,
        infoType: true // TODO: remove infoType
      }
      db.put(messageInfoType)
      return messageInfoType
    }).catch((err) => {
      console.log(err)
      return err
    })
}

  // @ts-ignore
export const updateWargameTitle = (dbName, title) => {
  return getAllWargames()
    .then(function (games) {
      // @ts-ignore
      if (games.some((game) => game.title === title && getNameFromPath(game.name) !== dbName)) return 'Name already in use.'

        // @ts-ignore
      const db = wargameDbStore.find((db) => db.name === dbName).db

      return new Promise((resolve, reject) => {
        return getLatestWargameRevision(dbName)
          .then(function (doc) {
            // @ts-ignore
            if (doc.wargameInitiated) {
              // @ts-ignore
              doc.wargameTitle = title
              resolve(createLatestWargameRevision(dbName, doc))
            } else {
              // @ts-ignore
              return db.put({
                _id: dbDefaultSettings._id,
                // @ts-ignore
                _rev: doc._rev,
                // @ts-ignore
                name: doc.name,
                wargameTitle: title,
                  // @ts-ignore
                data: doc.data,
                  // @ts-ignore
                gameTurn: doc.gameTurn,
                  // @ts-ignore
                phase: doc.phase,
                  // @ts-ignore
                timeWarning: doc.timeWarning,
                  // @ts-ignore
                adjudicationStartTime: doc.adjudicationStartTime,
                  // @ts-ignore
                turnEndTime: moment().add(doc.data.overview.realtimeTurnTime, 'ms').format(),
                  // @ts-ignore
                wargameInitiated: doc.wargameInitiated
              })
                // @ts-ignore
                .then(() => {
                  resolve(db.get(dbDefaultSettings._id))
                })
                  // @ts-ignore
                .catch((err) => {
                  reject(err)
                })
            }
          })
      })
    })
}

  // @ts-ignore
export const saveSettings = (dbName, data) => {
  // @ts-ignore
  const db = wargameDbStore.find((wargame) => dbName === wargame.name).db

  return getLatestWargameRevision(dbName)
    .then(function (res) {
      const newDoc = deepCopy(res)
      newDoc.data.overview = data
      newDoc.data.overview.complete = calcComplete(data)

      return new Promise((resolve, reject) => {
        if (newDoc.wargameInitiated) {
          resolve(createLatestWargameRevision(dbName, newDoc))
        } else {
        // @ts-ignore
          return db.put({
          // @ts-ignore
            _id: dbDefaultSettings._id,
            // @ts-ignore
            _rev: newDoc._rev,
            // @ts-ignore
            name: newDoc.name,
            // @ts-ignore
            wargameTitle: newDoc.wargameTitle,
            // @ts-ignore
            data: newDoc.data,
            // @ts-ignore
            gameTurn: newDoc.gameTurn,
            // @ts-ignore
            phase: newDoc.phase,
            // @ts-ignore
            adjudicationStartTime: newDoc.adjudicationStartTime,
            // @ts-ignore
            turnEndTime: moment().add(newDoc.data.overview.realtimeTurnTime, 'ms').format(),
            // @ts-ignore
            wargameInitiated: newDoc.wargameInitiated
          })
          // @ts-ignore
            .then(() => {
              resolve(db.get(dbDefaultSettings._id))
            })
        }
      })
    })
}

// @ts-ignore
export const savePlatformTypes = (dbName, data) => {
// @ts-ignore
  const db = wargameDbStore.find((wargame) => dbName === wargame.name).db

  return getLatestWargameRevision(dbName)
    .then(function (res) {
      const newDoc = deepCopy(res)
      newDoc.data.platform_types = data

      return new Promise((resolve, reject) => {
        if (newDoc.wargameInitiated) {
          resolve(createLatestWargameRevision(dbName, newDoc))
        } else {
        // @ts-ignore
          return db.put({
            _id: dbDefaultSettings._id,
            // @ts-ignore
            _rev: newDoc._rev,
            // @ts-ignore
            name: newDoc.name,
            // @ts-ignore
            wargameTitle: newDoc.wargameTitle,
            // @ts-ignore
            data: newDoc.data,
            // @ts-ignore
            gameTurn: newDoc.gameTurn,
            // @ts-ignore
            phase: newDoc.phase,
            // @ts-ignore
            adjudicationStartTime: newDoc.adjudicationStartTime,
            // @ts-ignore
            turnEndTime: moment().add(newDoc.data.overview.realtimeTurnTime, 'ms').format(),
            // @ts-ignore
            wargameInitiated: newDoc.wargameInitiated
          })
          // @ts-ignore
            .then(() => {
              resolve(db.get(dbDefaultSettings._id))
            })
        }
      })
    })
}

// @ts-ignore
export const saveForce = (dbName, newName, newData, oldName) => {
// @ts-ignore
  const db = wargameDbStore.find((wargame) => dbName === wargame.name).db

  return getLatestWargameRevision(dbName)
    .then(function (res) {
      const newDoc = deepCopy(res)

      const updatedData = newDoc.data

      const forces = updatedData.forces.forces

      // @ts-ignore
      const forceNew = forces.every((force) => force.name !== oldName)

      if (forceNew) {
        forces.push({ ...newData, name: newName })
      } else {
      // @ts-ignore
        const forceIndex = forces.findIndex((force) => force.name === oldName)
        // forces.forceName = newName;
        forces.splice(forceIndex, 1, { ...newData, name: newName })
      }

      updatedData.forces.forces = forces

      // remove default before calc

      const forceCheck = deepCopy(forces)
      // @ts-ignore
      const umpireIndex = forceCheck.findIndex((force) => force.umpire)
      forceCheck.splice(umpireIndex, 1)

      updatedData.forces.complete = calcComplete(forceCheck)

      return new Promise((resolve, reject) => {
        if (newDoc.wargameInitiated) {
          resolve(createLatestWargameRevision(dbName, newDoc))
        } else {
        // @ts-ignore
          return db.put({
            _id: dbDefaultSettings._id,
            // @ts-ignore
            _rev: res._rev,
            // @ts-ignore
            name: res.name,
            // @ts-ignore
            wargameTitle: res.wargameTitle,
            // @ts-ignore
            data: updatedData,
            // @ts-ignore
            gameTurn: res.gameTurn,
            // @ts-ignore
            phase: res.phase,
            // @ts-ignore
            adjudicationStartTime: res.adjudicationStartTime,
            // @ts-ignore
            turnEndTime: moment().add(res.data.overview.realtimeTurnTime, 'ms').format(),
            // @ts-ignore
            wargameInitiated: res.wargameInitiated
          })
          // @ts-ignore
            .then(() => {
              resolve(db.get(dbDefaultSettings._id))
            })
        }
      })
    })
}

// @ts-ignore
export const saveChannel = (dbName, newName, newData, oldName) => {
// @ts-ignore
  const db = wargameDbStore.find((wargame) => dbName === wargame.name).db

  return getLatestWargameRevision(dbName)
    .then(function (res) {
      const newDoc = deepCopy(res)

      const updatedData = newDoc.data

      const channels = updatedData.channels.channels

      // @ts-ignore
      const channelNew = channels.every((channel) => channel.name !== oldName)

      if (channelNew) {
        channels.push({ ...newData, name: newName })
      } else {
      // @ts-ignore
        const channelIndex = channels.findIndex((channel) => channel.name === oldName)
        channels.splice(channelIndex, 1, { ...newData, name: newName })
      }

      updatedData.channels.channels = channels
      updatedData.channels.complete = calcComplete(channels)

      return new Promise((resolve, reject) => {
      // @ts-ignore
        if (res.wargameInitiated) {
          const data = res
          // @ts-ignore
          data.data = updatedData
          resolve(createLatestWargameRevision(dbName, data))
        } else {
        // @ts-ignore
          db.put({
            _id: dbDefaultSettings._id,
            // @ts-ignore
            _rev: res._rev,
            // @ts-ignore
            name: res.name,
            // @ts-ignore
            wargameTitle: res.wargameTitle,
            // @ts-ignore
            data: updatedData,
            // @ts-ignore
            gameTurn: res.gameTurn,
            // @ts-ignore
            phase: res.phase,
            // @ts-ignore
            adjudicationStartTime: res.adjudicationStartTime,
            // @ts-ignore
            turnEndTime: moment().add(res.data.overview.realtimeTurnTime, 'ms').format(),
            // @ts-ignore
            wargameInitiated: res.wargameInitiated
            // @ts-ignore
          })
          // @ts-ignore
            .then(() => {
              resolve(db.get(dbDefaultSettings._id))
            })
            // @ts-ignore
            .catch((err) => {
              reject(err)
            })
        }
      })
    })
}

// @ts-ignore
export const duplicateChannel = (dbName, channelUniqid) => {
// @ts-ignore
  const db = wargameDbStore.find((wargame) => dbName === wargame.name).db

  return getLatestWargameRevision(dbName)
    .then(function (res) {
      const newDoc = deepCopy(res)

      const updatedData = newDoc.data

      const channels = updatedData.channels.channels

      // @ts-ignore
      const channelIndex = channels.findIndex((channel) => channel.uniqid === channelUniqid)

      const duplicateChannel = deepCopy(channels[channelIndex])

      const uniq = uniqid.time()

      duplicateChannel.name = duplicateChannel.name + `-${uniq}`
      duplicateChannel.uniqid = `channel-${uniq}`

      channels.splice(channelIndex, 0, duplicateChannel)

      updatedData.channels.channels = channels
      updatedData.channels.complete = calcComplete(channels) && channels.length !== 0
      updatedData.channels.selectedChannel = duplicateChannel

      return new Promise((resolve, reject) => {
      // @ts-ignore
        if (res.wargameInitiated) {
          const data = res
          // @ts-ignore
          data.data = updatedData
          createLatestWargameRevision(dbName, data)
            .then((res) => {
              resolve(res)
            })
        } else {
        // @ts-ignore
          db.put({
          // @ts-ignore
            _id: dbDefaultSettings._id,
            // @ts-ignore
            _rev: res._rev,
            // @ts-ignore
            name: res.name,
            // @ts-ignore
            wargameTitle: res.wargameTitle,
            // @ts-ignore
            data: updatedData,
            // @ts-ignore
            gameTurn: res.gameTurn,
            // @ts-ignore
            phase: res.phase,
            // @ts-ignore
            adjudicationStartTime: res.adjudicationStartTime,
            // @ts-ignore
            turnEndTime: moment().add(res.data.overview.realtimeTurnTime, 'ms').format(),
            // @ts-ignore
            wargameInitiated: res.wargameInitiated
          })
          // @ts-ignore
            .then(() => {
            // @ts-ignore
              resolve(db.get(dbDefaultSettings._id))
            })
            // @ts-ignore
            .catch((err) => {
              reject(err)
            })
        }
      })
    })
}

// @ts-ignore
export const deleteChannel = (dbName, channelUniqid) => {
// @ts-ignore
  const db = wargameDbStore.find((wargame) => dbName === wargame.name).db
  //
  return getLatestWargameRevision(dbName)
    .then(function (res) {
      const newDoc = deepCopy(res)

      const updatedData = newDoc.data

      const channels = updatedData.channels.channels

      // @ts-ignore
      const channelIndex = channels.findIndex((channel) => channel.uniqid === channelUniqid)

      channels.splice(channelIndex, 1)

      updatedData.channels.channels = channels
      updatedData.channels.complete = calcComplete(channels) && channels.length !== 0

      return new Promise((resolve, reject) => {
      // @ts-ignore
        if (res.wargameInitiated) {
          const data = res
          // @ts-ignore
          data.data = updatedData
          createLatestWargameRevision(dbName, data)
            .then((res) => {
              resolve(res)
            })
        } else {
        // @ts-ignore
          db.put({
          // @ts-ignore
            _id: dbDefaultSettings._id,
            // @ts-ignore
            _rev: res._rev,
            // @ts-ignore
            name: res.name,
            // @ts-ignore
            wargameTitle: res.wargameTitle,
            // @ts-ignore
            data: updatedData,
            // @ts-ignore
            gameTurn: res.gameTurn,
            // @ts-ignore
            phase: res.phase,
            // @ts-ignore
            adjudicationStartTime: res.adjudicationStartTime,
            // @ts-ignore
            turnEndTime: moment().add(res.data.overview.realtimeTurnTime, 'ms').format(),
            // @ts-ignore
            wargameInitiated: res.wargameInitiated
          })
          // @ts-ignore
            .then(() => {
              resolve(db.get(dbDefaultSettings._id))
            })
            // @ts-ignore
            .catch((err) => {
              reject(err)
            })
        }
      })
    })
}

// @ts-ignore
export const deleteForce = (dbName, forceName) => {
// @ts-ignore
  const db = wargameDbStore.find((wargame) => dbName === wargame.name).db
  //
  return getLatestWargameRevision(dbName)
    .then(function (res) {
      const newDoc = deepCopy(res)

      const updatedData = newDoc.data

      const forces = updatedData.forces.forces

      // @ts-ignore
      const forceIndex = forces.findIndex((force) => force.name === forceName)

      forces.splice(forceIndex, 1)

      updatedData.forces.forces = forces
      updatedData.channels.complete = calcComplete(forces)

      return new Promise((resolve, reject) => {
      // @ts-ignore
        if (res.wargameInitiated) {
          const data = res
          // @ts-ignore
          data.data = updatedData
          createLatestWargameRevision(dbName, data)
            .then((res) => {
              resolve(res)
            })
        } else {
        // @ts-ignore
          db.put({
          // @ts-ignore
            _id: dbDefaultSettings._id,
            // @ts-ignore
            _rev: res._rev,
            // @ts-ignore
            name: res.name,
            // @ts-ignore
            wargameTitle: res.wargameTitle,
            // @ts-ignore
            data: updatedData,
            // @ts-ignore
            gameTurn: res.gameTurn,
            // @ts-ignore
            phase: res.phase,
            // @ts-ignore
            adjudicationStartTime: res.adjudicationStartTime,
            // @ts-ignore
            turnEndTime: moment().add(res.data.overview.realtimeTurnTime, 'ms').format(),
            // @ts-ignore
            wargameInitiated: res.wargameInitiated
          })
          // @ts-ignore
            .then(() => {
              resolve(db.get(dbDefaultSettings._id))
            })
            // @ts-ignore
            .catch((err) => {
              reject(err)
            })
        }
      })
    })
}

// @ts-ignore
export const cleanWargame = (dbPath) => {
  const dbName = getNameFromPath(dbPath)

  // @ts-ignore
  const db = wargameDbStore.find((db) => db.name === dbName).db
  const uniqId = uniqid.time()

  return new Promise((resolve, reject) => {
  // @ts-ignore
    var newDb
    var newDbName = `wargame-${uniqId}`

    db.get(dbDefaultSettings._id)
      .then((res) => {
        newDb = new PouchDB(databasePath + newDbName + dbSuffix)
        return res
      })
      .then((res) => {
      // @ts-ignore
        return newDb.put({
          _id: dbDefaultSettings._id,
          name: newDbName,
          // @ts-ignore
          wargameTitle: `${res.wargameTitle}-${uniqId}`,
          // @ts-ignore
          data: res.data,
          // @ts-ignore
          gameTurn: res.gameTurn,
          // @ts-ignore
          phase: res.phase,
          // @ts-ignore
          adjudicationStartTime: res.adjudicationStartTime,
          // @ts-ignore
          turnEndTime: moment().add(res.data.overview.realtimeTurnTime, 'ms').format(),
          wargameInitiated: false
        })
      })
      .then(() => {
      // @ts-ignore
        wargameDbStore.unshift({ name: newDbName, db: newDb })
        return getAllWargames()
      })
      .then((res) => {
        resolve(res)
      })
      .catch((err) => {
        reject(err)
        console.log(err)
      })
  })
}

// @ts-ignore
export const duplicateWargame = (dbPath) => {
  const dbName = getNameFromPath(dbPath)

  const dbInStore = wargameDbStore.find((db) => db.name === dbName)
  const uniqId = uniqid.time()

  return new Promise((resolve, reject) => {
    var newDbName = `wargame-${uniqId}`
    var newDb = new PouchDB(databasePath + newDbName + dbSuffix)

    // @ts-ignore
    return dbInStore.db.replicate.to(newDb)
      .then(() => {
      // @ts-ignore
        return wargameDbStore.unshift({ name: newDbName, db: newDb })
      })
      .then(() => {
        return getLatestWargameRevision(dbName)
      })
      .then((res) => {
        return newDb.put({
          _id: dbDefaultSettings._id,
          name: newDbName,
          // @ts-ignore
          wargameTitle: `${res.wargameTitle}-${uniqId}`,
          // @ts-ignore
          data: res.data,
          // @ts-ignore
          gameTurn: res.gameTurn,
          // @ts-ignore
          phase: res.phase,
          // @ts-ignore
          adjudicationStartTime: res.adjudicationStartTime,
          // @ts-ignore
          turnEndTime: moment().add(res.data.overview.realtimeTurnTime, 'ms').format(),
          // @ts-ignore
          wargameInitiated: res.wargameInitiated
        })
      })
      .then(() => {
        return newDb.get(dbDefaultSettings._id)
      })
      .then((res) => {
        return createLatestWargameRevision(newDbName, res)
      })
      .then(() => {
        return getAllWargames()
      })
      .then((res) => {
        resolve(res)
      })
      .catch((err) => {
        reject(err)
        console.log(err)
      })
  })
}

export const getWargameLocalFromName = (dbName: string): Promise<Wargame> => {
  const { db } = getWargameDbByName(dbName)
  // @ts-ignore: need to update INFO_MESSAGE to be able to use it as Wargame object
  return db.get(dbDefaultSettings._id).then((res) => res as Wargame)
}

// @ts-ignore
export const getWargame = (gamePath) => {
  return (async () => {
    const name = getNameFromPath(gamePath)

    const wargame = await getLatestWargameRevision(name)

    return wargame
  })()
}

// @ts-ignore
export const createLatestWargameRevision = (dbName, wargameData) => {
  const copiedData = deepCopy(wargameData)
  delete copiedData._id
  delete copiedData._rev

  const game = wargameDbStore.find((wargame) => dbName === wargame.name)

  return new Promise((resolve, reject) => {
  // @ts-ignore
    game.db.put({
      _id: new Date().toISOString(),
      messageType: INFO_MESSAGE,
      ...copiedData
    })
      .then((res) => {
        resolve(getLatestWargameRevision(dbName))
      })
      .catch((err) => {
        reject(err)
        throw new Error(err)
      })
  })
}

// @ts-ignore
export const getAllWargameRevisions = (dbName) => {
  return new Promise((resolve, reject) => {
    getAllMessages(dbName)
      .then((messages) => {
      // @ts-ignore
        const revisions = messages.filter((message) => (message.messageType === INFO_MESSAGE))
        resolve(revisions)
      })
      .catch((err) => {
        reject(err)
      })
  })
}

// @ts-ignore
export const nextGameTurn = (dbName) => {
  return new Promise((resolve, reject) => {
    getLatestWargameRevision(dbName)
      .then((res) => {
      // @ts-ignore
        switch (res.phase) {
          case PLANNING_PHASE:
          // @ts-ignore
            res.phase = ADJUDICATION_PHASE
            // @ts-ignore
            res.turnEndTime = 0
            // @ts-ignore
            res.adjudicationStartTime = moment().format()
            break
          case ADJUDICATION_PHASE:
          // @ts-ignore
            res.phase = PLANNING_PHASE
            // @ts-ignore
            res.gameTurn += 1
            // @ts-ignore
            res.data.overview.gameDate = moment(res.data.overview.gameDate).add(res.data.overview.gameTurnTime, 'ms').format('YYYY-MM-DDTHH:mm')
            // @ts-ignore
            res.turnEndTime = moment().add(res.data.overview.realtimeTurnTime, 'ms').format()
            break
          default:
            break
        }
        return createLatestWargameRevision(dbName, res)
      })
      .then((res) => {
        resolve(res)
      })
      .catch((err) => {
        console.log(err)
        reject(err)
      })
  })
}

// @ts-ignore
export const postFeedback = (dbName, fromDetails, message) => {
// @ts-ignore
  const db = wargameDbStore.find((db) => db.name === dbName).db

  return new Promise((resolve, reject) => {
    db.put({
      _id: new Date().toISOString(),
      details: {
        channel: 'Feedback',
        from: fromDetails,
        messageType: 'Chat',
        timestamp: new Date().toISOString()
      },
      message: {
        content: message
      },
      messageType: FEEDBACK_MESSAGE
    })
      .then((res) => {
        resolve(res)
      })
      .catch((err) => {
        console.log(err)
        reject(err)
      })
  })
}
// @ts-ignore
export const postNewMessage = (dbName, details, message) => {
  // @ts-ignore
  const db = wargameDbStore.find((db) => db.name === dbName).db

  return new Promise((resolve, reject) => {
    // @ts-ignore
    db.put({
      // @ts-ignore
      _id: new Date().toISOString(),
      // defined constat for messages, it's not same as message.details.messageType,
      // ex for all template based messages will be used CUSTOM_MESSAGE Type
        // @ts-ignore
      messageType: CUSTOM_MESSAGE,
      details,
      message
    })
      // @ts-ignore
      .then((res) => {
        resolve(res)
      })
        // @ts-ignore
      .catch((err) => {
        console.log(err)
        reject(err)
      })
  })
}

// Copied from postNewMessage cgange and add new logic for Mapping
// console logs will not works there
  // @ts-ignore
export const postNewMapMessage = (dbName, details, message) => {
  // first, send the message
    // @ts-ignore
  const db = wargameDbStore.find((db) => db.name === dbName).db
  db.put({
    _id: new Date().toISOString(),
    details,
    // defined constat for messages, it's not same as message.details.messageType,
    // ex for all template based messages will be used CUSTOM_MESSAGE Type
    messageType: details.messageType,
    message
  }).catch((err) => {
    console.log(err)
    return err
  })

  // also make the modification to the wargame
  return new Promise((resolve, reject) => {
    getLatestWargameRevision(dbName)
      .then((res) => {
        // apply the reducer to this wargame
          // @ts-ignore
        res.data.forces.forces = handleForceDelta(message, details, res.data.forces.forces)
        // store the new verison
        return createLatestWargameRevision(dbName, res)
      })
      .then((res) => {
        resolve(res)
      })
      .catch((err) => {
        console.log(err)
        reject(err)
      })
  })
}

export const getAllMessages = (dbName: string): Promise<Message[]> => {
  const { db } = getWargameDbByName(dbName)
  return db.allDocs<Message>({ include_docs: true, descending: true })
    .then((res): Message[] => res.rows.map(a => a.doc as Message))
    .catch(() => {
      throw new Error('Serge disconnected')
    })
}

export const getAllWargames = function () {
  const promises = wargameDbStore.map((game) => {
    return getLatestWargameRevision(game.name)
      .then(function (res) {
        return {
          name: game.db.name,
            // @ts-ignore
          title: res.wargameTitle,
            // @ts-ignore
          initiated: res.wargameInitiated
        }
      })
      .catch((err) => {
        console.log(err)
      })
  })
  return Promise.all(promises)
}
