import {
  databasePath,
  MSG_TYPE_STORE
} from 'src/config'

import DbProvider from './db'

const db = new DbProvider(databasePath + MSG_TYPE_STORE)

// Update a message type in the database
export const updateMessageInDb = (schema, id) => {
  return new Promise((resolve, reject) => {
    (async () => {
      const allMessages = await getAllMessagesFromDb()

      const matchedName = allMessages.find((messageType) => messageType.title.toLowerCase() === schema.title.toLowerCase())

      if (matchedName) {
        reject('Message title already used')
        return
      }

      db.get(id)
        .then(function (doc) {
          return db.put({
            _id: doc._id,
            lastUpdated: new Date().toISOString(),
            _rev: doc._rev,
            title: schema.title,
            details: schema
          })
        })
        .then(function (result) {
          resolve(result)
        })
        .catch(function (err) {
          console.log(err)
          reject(false)
        })
    })()
  })
}

// Get all message from the database
export const getAllMessagesFromDb = () => {
  return new Promise((resolve, reject) => {
    db.allDocs()
      .then((res) => {
        resolve(res)
      })
      .catch((err) => {
        reject(err)
      })
  })
}
