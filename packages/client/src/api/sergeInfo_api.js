import {
  databasePath,
  SERGE_INFO,
  defaultGameInfo, serverPath
} from '../consts'
import { fetch } from 'whatwg-fetch'
import DbProvider from './db'

const LOCAL_DOC = '_local/settings'

var sergeInfoDb = new DbProvider(databasePath + SERGE_INFO)

sergeInfoDb.get(LOCAL_DOC)
  .then((data) => {
    if (!data.status) {
      return {}
    } else {
      return LOCAL_DOC.put({
        _id: LOCAL_DOC,
        ...defaultGameInfo
      })
    }
  })

export const getGameInformation = () => {
  return LOCAL_DOC.get(LOCAL_DOC)
    .then((res) => {
      delete res._id
      delete res._rev
      return res
    })
}

export const saveGameInformation = ({ title, description, imageUrl }) => {
  return new Promise((resolve, reject) => {
    LOCAL_DOC.get(LOCAL_DOC)
      .then((res) => {
        return LOCAL_DOC.put({
          _id: res._id,
          _rev: res._rev,
          title: title !== undefined ? title : res.title,
          description: description !== undefined ? description : res.description,
          imageUrl: imageUrl !== undefined ? new URL(imageUrl).pathname : res.imageUrl
        })
      })
      .then(() => {
        return LOCAL_DOC.get(LOCAL_DOC)
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
