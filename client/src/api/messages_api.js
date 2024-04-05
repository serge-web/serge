import uniqid from 'uniqid'
import {
  databasePath,
  MSG_STORE
} from 'src/config'
import DbProvider from './db'

const db = new DbProvider(databasePath + MSG_STORE)

export const duplicateMessageInDb = (id) => {
  const time = new Date().toISOString()

  return new Promise((resolve, reject) => {
    db.get(id)
      .then(function (doc) {
        const updatedMessage = doc.details

        updatedMessage.title = `${updatedMessage.title} Copy-${uniqid.time()}`

        return db.put({
          _id: time,
          lastUpdated: time,
          details: updatedMessage,
          schema: doc.schema
        })
      })
      .then(function () {
        resolve(true)
      })
      .catch(function (err) {
        console.log(err)
        reject(false)
      })
  })
}

export const getAllMessagesFromDb = () => {
  return new Promise((resolve, reject) => {
    db.allDocs()
      .then((res) => resolve(res))
      .catch((err) => {
        reject(err)
      })
  })
}

export const updateMessageInDb = (id, message) => {
  return new Promise((resolve, reject) => {
    (async () => {
      const allMessages = await getAllMessagesFromDb()
      const matchedName = allMessages.find((el) => el.details.title === message.title && el._id !== id)

      if (matchedName) {
        reject('Message title already used')
        return
      }

      db.get(id)
        .then(function (doc) {
          return db.put({
            _id: id,
            lastUpdated: new Date().toISOString(),
            _rev: doc._rev,
            details: message,
            schema: doc.schema
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

export const getMessage = (id) => {
  return new Promise((resolve, reject) => {
    db.get(id, { include_docs: true }, function (err, doc) {
      if (err) reject('something went wrong')
      resolve(doc)
    })
  })
}

export const deleteMessageFromDb = (id) => {
  return new Promise((resolve, reject) => {
    db.get(id)
      .then(function (doc) {
        return db.remove(doc)
      })
      .then(function (result) {
        resolve(result)
      })
      .catch(function (err) {
        console.log(err)
        reject(false)
      })
  })
}
