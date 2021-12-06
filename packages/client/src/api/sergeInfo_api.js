import {
  databasePath,
  SERGE_INFO,
  defaultGameInfo, serverPath
} from '../consts'
import { fetch } from 'whatwg-fetch'
import DbProvider from './db'
import { localSettings } from '@serge/config'

export const sergeInfoDb = new DbProvider(databasePath + SERGE_INFO)

sergeInfoDb.get(localSettings)
  .then((data) => {
    if (!data.status) {
      return {}
    } else {
      return sergeInfoDb.put({
        _id: localSettings,
        ...defaultGameInfo
      })
    }
  })

export const getGameInformation = () => {
  return sergeInfoDb.get(localSettings)
    .then((res) => {
      delete res._id
      delete res._rev
      return res
    })
}

export const saveGameInformation = ({ title, description, imageUrl }) => {
  return new Promise((resolve, reject) => {
    sergeInfoDb.get(localSettings)
      .then((res) => {
        return sergeInfoDb.put({
          _id: res._id,
          _rev: res._rev,
          title: title !== undefined ? title : res.title,
          description: description !== undefined ? description : res.description,
          imageUrl: imageUrl !== undefined ? new URL(imageUrl).pathname : res.imageUrl
        })
      })
      .then(() => {
        return sergeInfoDb.get(localSettings)
      })
      .then((res) => {
        delete res._id
        delete res._rev
        resolve(res)
      })
      .catch((err) => {
        console.log(err)
        reject(err)
      })
  })
}

export const saveLogo = (file) => {
  return fetch(serverPath + 'saveLogo', {
    method: 'POST',
    'Content-Type': 'image/png',
    body: file
  }).then((res) => res.json())
}
