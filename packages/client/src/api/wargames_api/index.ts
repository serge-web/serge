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
  MessageInfoType,
  WargameOverview,
  PlatformType,
  ForceData,
  ChannelData,
  MessageDetailsFrom,
  MessageDetails,
  MessageFeedback,
  MessageStructure,
  MessageCustom
} from '@serge/custom-types'

import {
  ApiWargameDbObject,
  ApiWargameDb,
  ListenNewMessageType,
  WargameRevision
} from './types.d'

const wargameDbStore: ApiWargameDbObject[] = []

// give database documents a suffix, so they're easier to open
// in database utility tools
const dbSuffix = '.sqlite'

const rejectDefault = (err: any): any => {
  console.log(err)
  return err
}

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
  const dbObject = wargameDbStore.find((item) => item.name === name || item.name === name + dbSuffix)

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
        const db: ApiWargameDb = new PouchDB(databasePath + name)
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
  fetch(serverPath + 'clearAll').then(() => {
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
  const settings: Wargame = { ...dbDefaultSettings, name: name, wargameTitle: name }


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

  return db.get(dbDefaultSettings._id).then((res) => {
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



const updateWargame = (nextWargame: Wargame, dbName: string, revisionCheck: boolean = true): Promise<Wargame> => {
  const { db } = getWargameDbByName(dbName)
  if (nextWargame.wargameInitiated && revisionCheck) {
    return createLatestWargameRevision(dbName, nextWargame)
  }
  return db.put({
    ...nextWargame,
    _id: dbDefaultSettings._id,
    turnEndTime: moment().add(nextWargame.data.overview.realtimeTurnTime, 'ms').format(),
  }).then(() => {
    return db.get<Wargame>(dbDefaultSettings._id)
  })
}

export const updateWargameTitle = (dbName: string, title: string): Promise<Wargame> => {
  return getAllWargames().then((games) => {
    if (games.some((game) => game && game.title === title && getNameFromPath(game.name) !== dbName)) {
      throw new Error('Name already in use.')
    }
    return getLatestWargameRevision(dbName).then((doc) => {
      return updateWargame({ ...doc, wargameTitle: title }, dbName)
    })
  })
}

export const saveSettings = (dbName: string, data: WargameOverview): Promise<Wargame> => {
  return getLatestWargameRevision(dbName).then((res) => {
    const wargame: Wargame = deepCopy(res)
    wargame.data.overview = data
    wargame.data.overview.complete = calcComplete(data)
    return updateWargame(wargame, dbName)
  })
}

export const savePlatformTypes = (dbName: string, data: PlatformType): Promise<Wargame> => {
  return getLatestWargameRevision(dbName).then((res) => {
    const newDoc = deepCopy(res)
    newDoc.data.platform_types = data
    return updateWargame(newDoc, dbName)
  })
}

export const saveChannel = (dbName: string, newName: string, newData: ChannelData, oldName: string): Promise<Wargame> => {
  return getLatestWargameRevision(dbName).then((res) => {
    const newDoc: Wargame = deepCopy(res)
    const updatedData = newDoc.data
    const channels = updatedData.channels.channels || []
    const channelNew = channels.every((channel: any) => channel.name !== oldName)

    if (channelNew) {
      channels.push({ ...newData, name: newName })
    } else {
      const channelIndex = channels.findIndex((channel) => channel.name === oldName)
      channels.splice(channelIndex, 1, { ...newData, name: newName })
    }

    updatedData.channels.channels = channels
    updatedData.channels.complete = calcComplete(channels)

    return updateWargame({ ...res, data: updatedData }, dbName)
  })
}

export const duplicateChannel = (dbName: string, channelUniqid: string): Promise<Wargame> => {
  return getLatestWargameRevision(dbName).then((res) => {
    const newDoc: Wargame = deepCopy(res)
    const updatedData = newDoc.data
    const channels = updatedData.channels.channels || []
    const channelIndex = channels.findIndex((channel) => channel.uniqid === channelUniqid)

    const duplicateChannel = deepCopy(channels[channelIndex])

    const uniq = uniqid.time()

    duplicateChannel.name = duplicateChannel.name + `-${uniq}`
    duplicateChannel.uniqid = `channel-${uniq}`

    channels.splice(channelIndex, 0, duplicateChannel)
    updatedData.channels.channels = channels
    updatedData.channels.complete = calcComplete(channels) && channels.length !== 0
    updatedData.channels.selectedChannel = duplicateChannel
    return updateWargame({ ...res, data: updatedData }, dbName)
  })
}

export const deleteChannel = (dbName: string, channelUniqid: string): Promise<Wargame> => {
  return getLatestWargameRevision(dbName).then((res) => {
    const newDoc: Wargame = deepCopy(res)
    const updatedData = newDoc.data
    const channels = updatedData.channels.channels || []
    const channelIndex = channels.findIndex((channel) => channel.uniqid === channelUniqid)
    channels.splice(channelIndex, 1)
    updatedData.channels.channels = channels
    updatedData.channels.complete = calcComplete(channels) && channels.length !== 0

    return updateWargame({ ...res, data: updatedData }, dbName)
  })
}

export const saveForce = (dbName: string, newName: string, newData: ForceData, oldName: string) => {
  return getLatestWargameRevision(dbName).then((res) => {
    const newDoc: Wargame = deepCopy(res)
    const updatedData = newDoc.data
    const forces = updatedData.forces.forces
    const forceNew = forces.every((force) => force.name !== oldName)

    if (forceNew) {
      forces.push({ ...newData, name: newName })
    } else {
      const forceIndex = forces.findIndex((force) => force.name === oldName)
      // forces.forceName = newName;
      forces.splice(forceIndex, 1, { ...newData, name: newName })
    }

    updatedData.forces.forces = forces

    // remove default before calc

    const forceCheck: ForceData[] = deepCopy(forces)
    const umpireIndex = forceCheck.findIndex((force) => force.umpire)
    forceCheck.splice(umpireIndex, 1)

    updatedData.forces.complete = calcComplete(forceCheck)

    return updateWargame({...res, data: updatedData}, dbName)
    // if (newDoc.wargameInitiated) {
    //   return createLatestWargameRevision(dbName, newDoc) // TODO: <<< check this part  `updatedData` saves only if wargame not Initiated
    // } else {
    //   return db.put({
    //     ...newDoc,
    //     _id: dbDefaultSettings._id,
    //     data: updatedData,  // TODO: <<< check this part  `updatedData` saves only if wargame not Initiated
    //     turnEndTime: moment().add(res.data.overview.realtimeTurnTime, 'ms').format(),
    //     // @ts-ignore
    //     wargameInitiated: res.wargameInitiated
    //   }).then<Wargame>(() => {
    //     return db.get(dbDefaultSettings._id)
    //   })
    // }
  })
}

export const deleteForce = (dbName: string, forceName: string): Promise<Wargame> => {
  return getLatestWargameRevision(dbName).then((res) => {
    const newDoc: Wargame = deepCopy(res)
    const updatedData = newDoc.data
    const forces = updatedData.forces.forces
    const forceIndex = forces.findIndex((force) => force.name === forceName)
    forces.splice(forceIndex, 1)
    updatedData.forces.forces = forces
    updatedData.channels.complete = calcComplete(forces)
    return updateWargame({...res, data: updatedData}, dbName)
  })
}

export const cleanWargame = (dbPath: string): Promise<WargameRevision[]> => {
  const dbName = getNameFromPath(dbPath)
  const { db } = getWargameDbByName(dbName)
  const uniqId = uniqid.time()

  const newDbName = `wargame-${uniqId}`
  return db.get(dbDefaultSettings._id).then((res) => {
    const newDb: ApiWargameDb = new PouchDB(databasePath + newDbName + dbSuffix)
    const wargame = res as Wargame
    return updateWargame({
      ...wargame,
      name: newDbName,
      wargameTitle: `${wargame.wargameTitle}-${uniqId}`,
      wargameInitiated: false
    }, newDbName).then(() => {
      addWargameDbStore({ name: newDbName, db: newDb })
      return getAllWargames()
    })
    .catch(rejectDefault)
  })
}

export const duplicateWargame = (dbPath: string): Promise<WargameRevision[]> => {
  const dbName = getNameFromPath(dbPath)
  const { db } = getWargameDbByName(dbName)
  const uniqId = uniqid.time()
  const newDbName = `wargame-${uniqId}`
  const newDb: ApiWargameDb = new PouchDB(databasePath + newDbName + dbSuffix)

  return db.replicate.to(newDb).then(() => {
    addWargameDbStore({ name: newDbName, db: newDb })
    return getLatestWargameRevision(dbName)
  }).then((res) => {
    return updateWargame({ ...res, _id: dbDefaultSettings._id, name: newDbName }, newDbName, false)
  }).then((res) => {
    return createLatestWargameRevision(newDbName, res)
  })
  .then(() => getAllWargames())
  .catch(rejectDefault)
}

export const getWargameLocalFromName = (dbName: string): Promise<Wargame> => {
  const { db } = getWargameDbByName(dbName)
  return db.get(dbDefaultSettings._id).then((res) => res as Wargame)
}

export const getWargame = (gamePath: string): Promise<Wargame> => {
  return (async () => {
    const name = getNameFromPath(gamePath)
    return await getLatestWargameRevision(name)
  })()
}

export const createLatestWargameRevision = (dbName: string, wargame: Wargame): Promise<Wargame> => {
  const copiedData = deepCopy(wargame)
  const { db } = getWargameDbByName(dbName)

  return db.put({
    ...copiedData,
    _rev: undefined,
    _id: new Date().toISOString(),
    messageType: INFO_MESSAGE,
  }).then(() => {
    return getLatestWargameRevision(dbName)
  }).catch(rejectDefault)
}

export const getAllWargameRevisions = (dbName: string) => {
  getAllMessages(dbName).then((messages) => {
    return messages.filter((message) => (message.messageType === INFO_MESSAGE))
  }).catch(rejectDefault)
}

export const nextGameTurn = (dbName: string): Promise<Wargame> => {
  return getLatestWargameRevision(dbName).then((res) => {
    switch (res.phase) {
      case PLANNING_PHASE:
        res.phase = ADJUDICATION_PHASE
        res.turnEndTime = '0'
        res.adjudicationStartTime = moment().format()
        break
      case ADJUDICATION_PHASE:
        res.phase = PLANNING_PHASE
        res.data.overview.gameDate = moment(res.data.overview.gameDate).add(res.data.overview.gameTurnTime, 'ms').format('YYYY-MM-DDTHH:mm')
        res.turnEndTime = moment().add(res.data.overview.realtimeTurnTime, 'ms').format()
        break
    }
    return createLatestWargameRevision(dbName, res)
  })
  .catch(rejectDefault)
}

export const postFeedback = (dbName: string, fromDetails: MessageDetailsFrom, message: string): Promise<MessageFeedback> => {
  const { db } = getWargameDbByName(dbName)
  const feedback: MessageFeedback = {
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
  }
  return db.put(feedback).catch(rejectDefault)
}
export const updateMessage = (dbName: string, details: MessageDetails, message: MessageStructure, id: string, rev?: string): Promise<MessageCustom> => {
  const { db } = getWargameDbByName(dbName)
  const customMessage: MessageCustom = {
    _id: id,
    _rev: rev && rev,
    // defined constat for messages, it's not same as message.details.messageType,
    // ex for all template based messages will be used CUSTOM_MESSAGE Type
    messageType: CUSTOM_MESSAGE,
    details,
    message,
    isOpen: false,
    hasBeenRead: false
  }
  return db.put(customMessage).catch(rejectDefault)
}

export const postNewMessage = (dbName: string, details: MessageDetails, message: MessageStructure): Promise<MessageCustom> => {
  const { db } = getWargameDbByName(dbName)
  const customMessage: MessageCustom = {
    _id: new Date().toISOString(),
    // defined constat for messages, it's not same as message.details.messageType,
    // ex for all template based messages will be used CUSTOM_MESSAGE Type
    messageType: CUSTOM_MESSAGE,
    details,
    message,
    isOpen: false,
    hasBeenRead: false
  }
  return db.put(customMessage).catch(rejectDefault)
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

export const getAllWargames = (): Promise<WargameRevision[]> => {
  const promises = wargameDbStore.map<Promise<WargameRevision>>((game) => {
    return getLatestWargameRevision(game.name)
      .then(({ wargameTitle, wargameInitiated }) => {
        return {
          name: game.db.name,
          title: wargameTitle,
          initiated: wargameInitiated
        }
      })
      .catch(rejectDefault)
  })
  return Promise.all<WargameRevision>(promises)
}
