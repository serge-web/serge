import uniqid from 'uniqid'
import _ from 'lodash'
import moment from 'moment'
import fetch, { Response } from 'node-fetch'
import deepCopy from '../../Helpers/copyStateHelper'
import handleForceDelta from '../../ActionsAndReducers/playerUi/helpers/handleForceDelta'
import { clipInfoMEssage, deleteRoleAndParts, duplicateThisForce, handleUpdateMarker } from '@serge/helpers'
import {
  databasePath,
  serverPath,
  MSG_STORE,
  MSG_TYPE_STORE,
  PLANNING_PHASE,
  ADJUDICATION_PHASE,
  clearAll,
  allDbs,
  COUNTER_MESSAGE,
  expiredStorage,
  ACTIVITY_TIME,
  ACTIVITY_TYPE,
  SERGE_INFO,
  INFO_MESSAGE,
  FEEDBACK_MESSAGE,
  CUSTOM_MESSAGE,
  UPDATE_MARKER,
  STATE_OF_WORLD,
  hiddenPrefix
} from '@serge/config'
import { dbDefaultSettings } from '../../consts'

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
  MessageDetailsFrom,
  MessageDetails,
  MessageFeedback,
  MessageStructure,
  MessageCustom,
  MessageMap,
  GameTurnLength,
  ChannelTypes,
  PlatformTypeData,
  Role,
  ParticipantTypes,
  ParticipantChat,
  MessageUpdateMarker,
  MapAnnotationData,
  MessageStateOfWorld,
  WargameRevision,
  IconOption,
  AnnotationMarkerData
} from '@serge/custom-types'

import {
  ApiWargameDbObject,
  ApiWargameDb,
  ListenNewMessageType
} from './types.d'

import incrementGameTime from '../../Helpers/increment-game-time'
import DbProvider from '../db'
import handleStateOfWorldChanges from '../../ActionsAndReducers/playerUi/helpers/handleStateOfWorldChanges'

const wargameDbStore: ApiWargameDbObject[] = []

const rejectDefault = (err: string): any => {
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
  name = name.replace(hiddenPrefix, '')
  const dbObject = wargameDbStore.find((item) => item.name === name)
  if (dbObject === undefined) throw new Error(`wargame database with '${name}' not found`)
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

export const listenNewMessage = ({ db, dispatch }: ListenNewMessageType): void => {
  db.changes((msg) => {
    const doc = msg as Message
    if (doc === undefined) return
    if (doc.messageType === INFO_MESSAGE) {
      const infoM = doc as MessageInfoType
      dispatch(setCurrentWargame(doc as Wargame))
      dispatch(setLatestWargameMessage(clipInfoMEssage(infoM)))
      return
    }

    if (doc.messageType === FEEDBACK_MESSAGE) {
      const feedbackM = doc as MessageFeedback
      dispatch(setLatestFeedbackMessage(feedbackM))
    } else if (doc.messageType === COUNTER_MESSAGE) {
      // eslint-disable-next-line no-useless-return
      return
    } else {
      // @ts-ignore: TODO: check this case
      dispatch(setLatestWargameMessage(doc))
    }
  })
}

export const listenForWargameChanges = (name: string, dispatch: PlayerUiDispatch): void => {
  const wargame = getWargameDbByName(name)
  const db = wargame.db
  listenNewMessage({ db, name, dispatch })
}

export const pingServer = (activityDetails: { wargame: string, role: string }): Promise<any> => {
  const activityMissing = 'The player has not shown any activity yet'
  const activityTime = encodeURIComponent(expiredStorage.getItem(`${activityDetails.role}_${ACTIVITY_TIME}`) || activityMissing)
  const activityType = encodeURIComponent(expiredStorage.getItem(`${activityDetails.role}_${ACTIVITY_TYPE}`) || activityMissing)

  const activityUrl = `${activityDetails.wargame || 'missing'}/${activityDetails.role || 'missing'}/${activityTime}/${activityType}`

  return fetch(`${serverPath}healthcheck/${activityUrl}/healthcheck`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json'
    }
  })
    .then((response: Response): Promise<any> => response.json())
    .then((data: any) => {
      return data.status
    })
    .catch((err) => {
      console.log(err)
      return 'NOT_OK'
    })
}

export const getPlayerActivityLogs = () => {
  const url = `${serverPath}playerlog`

  return fetch(url, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json'
    }
  })
    .then((response: Response): Promise<any> => response.json())
    .then((data: any) => {
      return data
    })
    .catch((err) => {
      console.log(err)
    })
}

export const populateWargame = (): Promise<string | Wargame[]> => {
  return fetch(serverPath + allDbs).then(res => res.json()).then(res => (res.data || []) as string[]).then((dbs: string[]) => {
    const wargameNames: string[] = wargameDbStore.map((db) => db.name)
    const toCreateDiff: string[] = _.difference(dbs, wargameNames)
    const toCreate: string[] = _.pull(toCreateDiff, MSG_STORE, MSG_TYPE_STORE, SERGE_INFO, '_replicator', '_users')
    toCreate.forEach(name => {
      const db = new DbProvider(databasePath + name)
      wargameDbStore.unshift({ name, db })
    })

    const promises: (Promise<Wargame>)[] = wargameDbStore.map(({ name, db }) => {
      return getLatestWargameRevision(name).then((res) => {
        return ({
          name: db.name,
          title: res.wargameTitle,
          initiated: res.wargameInitiated,
          shortName: res.name
        })
      }).catch((err) => {
        console.log(err)
        return err
      })
    })
    return Promise.all(promises)
  }).catch((err: string) => {
    console.log(err)
    return err
  })
}

export const clearWargames = (): void => {
  fetch(serverPath + clearAll, { method: 'DELETE' }).then(() => {
    window.location.reload()
  })
}

export const downloadAllWargames = (): void => {
  window.open(serverPath + 'downloadAll')
}

export const getIpAddress = (): Promise<{ ip: string }> => {
  return fetch(serverPath + 'getIp').then<{ ip: string }>((res) => res.json())
}

// TODO: Need to check component 'ImageDropzone' it returns file with Any type
// @ts-ignore
export const saveIcon = (file) => {
  return fetch(serverPath + 'saveIcon', {
    method: 'POST',
    headers: {
      'Content-Type': 'image/png'
    },
    body: file
  }).then((res) => res.json())
}

export const createWargame = (): Promise<Wargame> => {
  const name: string = `wargame-${uniqid.time()}`
  const db = new DbProvider(databasePath + name)
  addWargameDbStore({ name: name, db })

  // TODo: update dbDefaultSettings to valid wargame json
  // @ts-ignore
  const settings: Wargame = { ...dbDefaultSettings, name: name, wargameTitle: name }

  return new Promise((resolve, reject) => {
    db.put(settings)
      .then(() => {
        db.get(dbDefaultSettings._id).then((res) => {
          // @ts-ignore
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
    let lastDate: number = 0
    let infoMessageIndex: number = -1
    for (let index = 0; index < messages.length; index++) {
      const message = messages[index]
      if (message.messageType === INFO_MESSAGE) {
        const realM = message as any
        const nextDate = +new Date(realM._id as string)
        if (nextDate > lastDate) {
          lastDate = nextDate
          infoMessageIndex = index
        }
      }
    }

    messages.filter(({ messageType }) => messageType === INFO_MESSAGE) as MessageInfoType[]
    if (infoMessageIndex !== -1) return messages[infoMessageIndex] as Wargame
    return getWargameLocalFromName(dbName)
  }).catch(err => err)
}

export const editWargame = (dbPath: string): Promise<Wargame> => (
  getLatestWargameRevision(getNameFromPath(dbPath))
)

export const exportWargame = (dbPath: string): Promise<Wargame> => {
  const dbName = getNameFromPath(dbPath)
  return getAllMessages(dbName).then((messages) => {
    return getLatestWargameRevision(dbName).then((game) => ({
      ...game, exportMessagelist: messages
    }))
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
    return db.put(initiatedWargame).then(() => initiatedWargame)
  }).then((wargame) => {
    const messageInfoType: MessageInfoType = {
      ...wargame,
      _rev: undefined,
      _id: new Date().toISOString(),
      messageType: INFO_MESSAGE,
      turnEndTime: moment().add(wargame.data.overview.realtimeTurnTime, 'ms').format(),
      gameTurn: 0,
      infoType: true // TODO: remove infoType
    }
    return db.put(messageInfoType).then(() => messageInfoType)
  }).catch((err) => {
    console.log(err)
    return err
  })
}

const updateWargame = (nextWargame: Wargame, dbName: string, revisionCheck: boolean = true): Promise<Wargame> => {
  const { db } = getWargameDbByName(dbName)
  return updateWargameByDb(nextWargame, dbName, revisionCheck, db)
}

const updateWargameByDb = (nextWargame: Wargame, dbName: string, revisionCheck: boolean = true, db: ApiWargameDb): Promise<Wargame> => {
  if (nextWargame.wargameInitiated && revisionCheck) {
    return createLatestWargameRevision(dbName, nextWargame)
  }

  // Latest wargame cannot be a MessageInfoType if wargameInitiated === false
  const infoTypeWargame = nextWargame as MessageInfoType
  if (infoTypeWargame.messageType === INFO_MESSAGE && revisionCheck) {
    console.warn('Saving wargame cannot be a MessageInfoType. Trying to save MessageInfoType as WargameSettings')
  }

  return db.put({
    ...nextWargame,
    _id: dbDefaultSettings._id,
    turnEndTime: moment().add(nextWargame.data.overview.realtimeTurnTime, 'ms').format()
  }).then(() => {
    return db.get(dbDefaultSettings._id) as Promise<Wargame>
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
    return updateWargame(wargame, dbName)
  })
}

export const deletePlatformType = (dbName: string, platformType: PlatformType): Promise<Wargame> => {
  return getLatestWargameRevision(dbName).then((res) => {
    const newDoc: Wargame = deepCopy(res)
    if (newDoc.data.platformTypes) {
      newDoc.data.platformTypes.platformTypes = newDoc.data.platformTypes.platformTypes.filter((platform: PlatformTypeData) => platform.name !== platformType.name)
    } else {
      console.warn('Trying to delete platform types, but structure is empty')
    }
    return updateWargame(newDoc, dbName)
  })
}

export const duplicatePlatformType = (dbName: string, currentPlatformType: PlatformType): Promise<Wargame> => {
  console.log('current', currentPlatformType)
  return getLatestWargameRevision(dbName).then((res) => {
    const newDoc: Wargame = deepCopy(res)
    const updatedData = newDoc.data
    if (updatedData.platformTypes) {
      const platformTypes = updatedData.platformTypes.platformTypes || []
      const platformTypeIndex = platformTypes.findIndex((platformType) => platformType.name === currentPlatformType.name)
      const duplicatedPlatformType = deepCopy(platformTypes[platformTypeIndex])
      const uniq = uniqid.time()

      duplicatedPlatformType.name = `${duplicatedPlatformType.name}-${uniq}`

      platformTypes.splice(platformTypeIndex, 0, duplicatedPlatformType)
      updatedData.platformTypes.platformTypes = platformTypes
      updatedData.platformTypes.selectedType = duplicatedPlatformType
    }

    return updateWargame({ ...res, data: updatedData }, dbName)
  })
}

export const savePlatformTypes = (dbName: string, data: PlatformType): Promise<Wargame> => {
  return getLatestWargameRevision(dbName).then((res) => {
    const newDoc: Wargame = deepCopy(res)
    newDoc.data.platformTypes = data
    return updateWargame(newDoc, dbName)
  })
}

export const saveAnnotation = (dbName: string, data: AnnotationMarkerData): Promise<Wargame> => {
  return getLatestWargameRevision(dbName).then((res) => {
    const newDoc: Wargame = deepCopy(res)
    newDoc.data.annotationIcons = data
    return updateWargame(newDoc, dbName)
  })
}

export const saveChannel = (dbName: string, newData: ChannelTypes): Promise<Wargame> => {
  return getLatestWargameRevision(dbName).then((res) => {
    const newDoc: Wargame = deepCopy(res)
    const updatedData = newDoc.data
    const channels = updatedData.channels.channels || []
    const channelNew = channels.every((channel: ChannelTypes) => channel.uniqid !== newData.uniqid)

    if (channelNew) {
      channels.unshift({ ...newData, name: newData.name })
    } else {
      const channelIndex = channels.findIndex((channel) => channel.uniqid === newData.uniqid)
      channels.splice(channelIndex, 1, { ...newData, name: newData.name })
    }

    updatedData.channels.channels = channels

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
    updatedData.channels.selectedChannel = duplicateChannel
    return updateWargame({ ...res, data: updatedData }, dbName)
  })
}

export const deleteChannel = (dbName: string, channelUniqid: string): Promise<Wargame> => {
  return getLatestWargameRevision(dbName).then((res) => {
    const newDoc: Wargame = deepCopy(res)
    const updatedData = newDoc.data
    const channels = updatedData.channels.channels || []
    updatedData.channels.channels = channels.filter((channel: ChannelTypes) => channel.uniqid != channelUniqid)
    return updateWargame({ ...res, data: updatedData }, dbName)
  })
}

export const saveForces = (dbName: string, newData: ForceData[]) => {
  return getLatestWargameRevision(dbName).then((res) => {
    const newDoc: Wargame = deepCopy(res)
    const updatedData = newDoc.data
    updatedData.forces.forces = newData
    return updateWargame({ ...res, data: updatedData }, dbName)
  })
}

export const saveForce = (dbName: string, newData: ForceData) => {
  return getLatestWargameRevision(dbName).then((res) => {
    const newDoc: Wargame = deepCopy(res)
    const updatedData = newDoc.data
    const forces = updatedData.forces.forces
    const forceNew = forces.every((force) => force.uniqid !== newData.uniqid)

    if (forceNew) {
      forces.unshift({ ...newData, name: newData.name })
    } else {
      const forceIndex = forces.findIndex((force) => force.uniqid === newData.uniqid)
      // forces.forceName = newName;
      forces.splice(forceIndex, 1, { ...newData, name: newData.name })
    }

    updatedData.forces.forces = forces

    // remove default before calc

    const forceCheck: ForceData[] = deepCopy(forces)
    const umpireIndex = forceCheck.findIndex((force) => force.umpire)
    forceCheck.splice(umpireIndex, 1)

    return updateWargame({ ...res, data: updatedData }, dbName)
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

export const deleteForce = (dbName: string, forceId: string): Promise<Wargame> => {
  return getLatestWargameRevision(dbName).then((res) => {
    const newDoc: Wargame = deepCopy(res)
    const updatedData = newDoc.data
    const forces = updatedData.forces.forces

    // remove the indicated force
    updatedData.forces.forces = forces.filter((force: ForceData) => force.uniqid !== forceId)

    // remove participations for this force
    updatedData.channels.channels.forEach((channel: ChannelTypes) => {
      // in the next time we're 'tricking' the compiler into accepting the
      // provided list.  We're not worried about the list being in the correct type
      // since all the entries came from that list
      const parts = channel.participants as ParticipantChat[]

      // drop participations for this force
      channel.participants = parts.filter((sub: ParticipantTypes) => sub.forceUniqid !== forceId)
    })

    // now delete channels with zero participations
    updatedData.channels.channels = updatedData.channels.channels.filter((channel: ChannelTypes) => channel.participants.length > 0)

    if (updatedData.forces.forces.length === 0) {
      updatedData.channels = {
        name: 'Channels',
        channels: [],
        selectedChannel: '',
        dirty: false
      }
    }
    return updateWargame({ ...res, data: updatedData }, dbName)
  })
}

export const duplicateForce = (dbName: string, currentForce: ForceData): Promise<Wargame> => {
  return getLatestWargameRevision(dbName).then((res) => {
    const newDoc: Wargame = deepCopy(res)
    const updatedData = newDoc.data
    const forces = updatedData.forces.forces || []
    const forceIndex = forces.findIndex((force) => force.uniqid === currentForce.uniqid)
    const duplicate = duplicateThisForce(forces[forceIndex])
    forces.splice(forceIndex, 0, duplicate)
    updatedData.forces.forces = forces
    updatedData.forces.selectedForce = duplicate as any

    return updateWargame({ ...res, data: updatedData }, dbName)
  })
}

export const deleteRolesParticipations = (dbName: string, roles: Role[], key: number): any => {
  return getLatestWargameRevision(dbName).then((res): any => {
    const processedData = deleteRoleAndParts(res.data, roles, key)
    if (_.isArray(processedData)) {
      updateWargame({ ...res, data: processedData[0] }, dbName)
      return processedData[1]
    }
    return updateWargame({ ...res, data: processedData }, dbName)
  })
}

export const cleanWargame = (dbPath: string): Promise<WargameRevision[]> => {
  const dbName = getNameFromPath(dbPath)
  const { db } = getWargameDbByName(dbName)
  const uniqId = uniqid.time()
  const newDbName = `wargame-${uniqId}`
  const newDb: ApiWargameDb = new DbProvider(databasePath + newDbName)
  return db.get(dbDefaultSettings._id).then((res) => {
    const wargame = res as Wargame
    return updateWargameByDb({
      ...wargame,
      _rev: undefined,
      name: newDbName,
      wargameTitle: `${wargame.wargameTitle}-${uniqId}`,
      wargameInitiated: false
    }, newDbName, undefined, newDb).then(() => {
      addWargameDbStore({ name: newDbName, db: newDb })
      return getAllWargames()
    }).catch(rejectDefault)
  })
}

export const duplicateWargame = (dbPath: string): Promise<WargameRevision[]> => {
  const dbName = getNameFromPath(dbPath)
  const { db } = getWargameDbByName(dbName)
  const uniqId = uniqid.time()
  const newDbName = `wargame-${uniqId}`
  const newDb: ApiWargameDb = new DbProvider(databasePath + newDbName)
  // @ts-ignore
  return db.replicate(newDb).then((): Promise<Wargame> => {
    addWargameDbStore({ name: newDbName, db: newDb })
    // get default wargame
    return getWargameLocalFromName(dbName)
  }).then((res) => {
    const wargame = {
      ...res,
      _rev: undefined,
      _id: dbDefaultSettings._id,
      name: newDbName,
      wargameTitle: `${res.wargameTitle}-${uniqId}`
    }
    return newDb.put(wargame).then(() => {
      if (wargame.wargameInitiated) {
        // if wargameInitiated get last infoType and modify name
        return getLatestWargameRevision(newDbName).then((lastWargame: Wargame) => {
          return newDb.put({
            ...lastWargame,
            name: newDbName,
            wargameTitle: `${res.wargameTitle}-${uniqId}`
          })
        }).then(() => getAllWargames())
      }
      return getAllWargames()
    }).catch(rejectDefault)
  }).catch(rejectDefault)
}

export const updateWargameVisible = async (dbPath: string): Promise<Wargame> => {
  const dbName = getNameFromPath(dbPath)
  const { db } = getWargameDbByName(dbName)
  return getLatestWargameRevision(dbName).then(async (wargame: Wargame) => {
    wargame.name = wargame.name.startsWith(hiddenPrefix) ? wargame.name.substr(hiddenPrefix.length) : `${hiddenPrefix}${wargame.name}`
    return db.put(wargame).catch(rejectDefault)
  })
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
    messageType: INFO_MESSAGE
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
        res.gameTurn += 1

        const gameDate: string = res.data.overview.gameDate
        const gameTurn: GameTurnLength = res.data.overview.gameTurnTime
        //        const twoM: MonthTurns = { unit: 'months', months: 2 }
        console.log('inc', gameDate, gameTurn)
        const newTime: number = incrementGameTime(gameDate, gameTurn)
        res.data.overview.gameDate = moment(newTime).format('YYYY-MM-DDTHH:mm')
        console.log('inc 2', newTime, res.data.overview.gameDate)
        res.turnEndTime = moment().add(res.data.overview.realtimeTurnTime, 'ms').format()
        break
    }
    return createLatestWargameRevision(dbName, res)
  })
    .catch(rejectDefault)
}

export const postFeedback = (dbName: string, fromDetails: MessageDetailsFrom, turnNumber: number, message: string): Promise<MessageFeedback> => {
  const { db } = getWargameDbByName(dbName)
  const feedback: MessageFeedback = {
    _id: new Date().toISOString(),
    details: {
      channel: 'Feedback',
      from: fromDetails,
      messageType: 'Chat',
      timestamp: new Date().toISOString(),
      turnNumber: turnNumber
    },
    message: {
      content: message
    },
    messageType: FEEDBACK_MESSAGE
  }
  return db.put(feedback).catch(rejectDefault)
}

const checkReference = (message: MessageCustom, db: ApiWargameDb, details: MessageDetails) => {
  // eslint-disable-next-line no-async-promise-executor
  return new Promise(async (resolve): Promise<void> => {
    if (message.details.messageType !== 'Chat') {
      // default value for message counter
      message.message.counter = 1

      const counterIdExist = await db.allDocs().then(res => {
        const counters = res.reduce((messages: number[], message) => {
          if (message.details.from.force === details.from.force && message.message.counter) messages.push(message.message.counter)
          return messages
        }, [])
        const existId = res.find(message => message._id === details.timestamp)

        return [Math.max(...counters), existId]
      })

      const [counter, existId] = counterIdExist

      // @ts-ignore
      const counterExist = existId ? existId.message.counter : message.message.counter

      counter as number >= message.message.counter && !existId ? message.message.counter += counter : message.message.counter = counterExist
      message.message.Reference = [message.details.from.force, message.message.counter].join('-')

      resolve(message)
    } else {
      resolve(message)
    }
  })
}

export const postNewMessage = async (dbName: string, details: MessageDetails, message: MessageStructure): Promise<MessageCustom> => {
  const { db } = getWargameDbByName(dbName)
  const id = details.timestamp ? details.timestamp : new Date().toISOString()
  const customMessage: MessageCustom = {
    _id: id,
    // defined constat for messages, it's not same as message.details.messageType,
    // ex for all template based messages will be used CUSTOM_MESSAGE Type
    messageType: CUSTOM_MESSAGE,
    details,
    message,
    isOpen: false,
    hasBeenRead: false
  }

  return checkReference(customMessage, db, details).then(messageUpdated => {
    // @ts-ignore
    return db.put(messageUpdated).catch(rejectDefault)
  })
}

// Copied from postNewMessage cgange and add new logic for Mapping
// console logs will not works there
// @ts-ignore
export const postNewMapMessage = (dbName, details, message: MessageMap) => {
  // first, send the message
  const { db } = getWargameDbByName(dbName)

  const customMessage: MessageCustom = {
    _id: new Date().toISOString(),
    // defined constat for messages, it's not same as message.details.messageType,
    // ex for all template based messages will be used CUSTOM_MESSAGE Type
    messageType: details.messageType,
    details,
    message,
    isOpen: false,
    hasBeenRead: false
  }
  db.put(customMessage).catch((err) => {
    console.log(err)
    return err
  })

  /**
   * annotations are optional. So, if they're unset, initialise them
   */
  const checkAnnotations = (annoData: MapAnnotationData | undefined): MapAnnotationData => {
    if (typeof annoData === 'undefined') {
      const newAnns: MapAnnotationData = {
        annotations: []
      }
      return newAnns
    } else {
      return annoData
    }
  }

  // also make the modification to the wargame
  return new Promise((resolve, reject) => {
    getLatestWargameRevision(dbName)
      .then((res) => {
        if (!res.data.platformTypes) {
          throw new Error('Cannot handle force delta without platform types')
        }

        // special handling for marker message
        if (message.messageType === UPDATE_MARKER) {
          // ok - marker update - not force. If admin changes markers during planning phase,
          // they get updated immediately, so we do that here.
          // initialise annotations, if necessary
          res.data.annotations = checkAnnotations(res.data.annotations)
          const validMessage: MessageUpdateMarker = message
          res.data.annotations.annotations = handleUpdateMarker(validMessage, res.data.annotations.annotations)
        } else if (message.messageType === STATE_OF_WORLD) {
          // ok, this needs to work on force AND info markers
          const validMessage: MessageStateOfWorld = message
          res.data.forces.forces = handleStateOfWorldChanges(validMessage, res.data.forces.forces)
          // initialise annotations, if necessary
          res.data.annotations = checkAnnotations(res.data.annotations)
          // we can just copy in the new markers
          res.data.annotations.annotations = validMessage.state.mapAnnotations
        } else {
          // apply the reducer to this wargame
          res.data.forces.forces = handleForceDelta(message, details, res.data.forces.forces, res.data.platformTypes.platformTypes)
        }

        // store the new verison
        return createLatestWargameRevision(dbName, res)
      }).then((res) => {
        resolve(res)
      }).catch((err) => {
        console.log(err)
        reject(err)
      })
  })
}

export const getAllMessages = (dbName: string): Promise<Message[]> => {
  const { db } = getWargameDbByName(dbName)
  return db.allDocs()
    .then((res): Message[] => res.reduce((messages: Message[], res): Message[] => {
      // @ts-ignore
      if (res && res.messageType !== COUNTER_MESSAGE) messages.push(res)
      return messages
    }, []))
    .catch(() => {
      throw new Error('Serge disconnected')
    })
}

export const getAllWargames = (): Promise<WargameRevision[]> => {
  const promises = wargameDbStore.map<Promise<WargameRevision>>((game) => {
    return getLatestWargameRevision(game.name)
      .then(({ wargameTitle, wargameInitiated, name }) => {
        return {
          name: game.db.name,
          title: wargameTitle,
          initiated: wargameInitiated,
          shortName: name
        }
      }).catch(rejectDefault)
  })
  return Promise.all<WargameRevision>(promises)
}

export const deleteAnnotation = (dbName: string, annotation: IconOption): Promise<Wargame> => {
  return getLatestWargameRevision(dbName).then((res) => {
    const newDoc: Wargame = deepCopy(res)

    if (newDoc.data.annotationIcons) {
      newDoc.data.annotationIcons.markers = newDoc.data.annotationIcons.markers.filter((annotationDelete) => annotationDelete.name !== annotation.name)
    } else {
      console.warn('Trying to delete platform types, but structure is empty')
    }
    return updateWargame(newDoc, dbName)
  })
}

export const duplicateAnnotation = (dbName: string, currentAnnation: IconOption) => {
  return getLatestWargameRevision(dbName).then((res) => {
    const newDoc = deepCopy(res)
    const updatedData = newDoc.data
    if (updatedData.annotations) {
      const annotation = updatedData.annotationIcons.markers || []
      const annotationIndex = annotation.findIndex((annotation: IconOption) => annotation.name === currentAnnation.name)
      const duplicatedAnnation = deepCopy(currentAnnation)
      const uniq = uniqid.time()

      duplicatedAnnation.name = `${duplicatedAnnation.name}-${uniq}`
      
      annotation.splice(annotationIndex, 0, duplicatedAnnation)
      updatedData.annotationIcons.markers = annotation
    }

    return updateWargame({ ...res, data: updatedData }, dbName)
  })
}
