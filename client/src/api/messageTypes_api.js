import {
  databasePath,
  MSG_TYPE_STORE
} from 'src/config'
import uniqid from 'uniqid'

import chat from '../Schemas/chat.json'
import dailyIntentions from '../Schemas/DailyIntentions.json'
import link from '../Schemas/link.json'
import machineryFailure from '../Schemas/machinery_failure.json'
import message from '../Schemas/message.json'
import pg19WeeklyOrders from '../Schemas/PG19_WeeklyOrders.json'
import rfi from '../Schemas/rfi.json'
import rfs from '../Schemas/rfs.json'
import stateofworld from '../Schemas/StateOfWorld.json'
import weatherForecast from '../Schemas/weather_forecase.json'
import DbProvider from './db'

const db = new DbProvider(databasePath + MSG_TYPE_STORE)

// Populate the database with initial data
export const populateDb = () => {
  const promises = []

  return new Promise((resolve, reject) => {
    db.allDocs().then(entries => {
      if (entries.length === 0) {
        const machine = {
          _id: uniqid.time(),
          lastUpdated: new Date().toISOString(),
          title: 'Machinery failure',
          details: machineryFailure,
          completed: false
        }

        promises.push(db.put(machine))

        const weather = {
          _id: uniqid.time(),
          lastUpdated: new Date().toISOString(),
          title: 'Weather forecast',
          details: weatherForecast,
          completed: false
        }

        promises.push(db.put(weather))

        const messageInput = {
          _id: uniqid.time(),
          lastUpdated: new Date().toISOString(),
          title: 'Message',
          details: message,
          completed: false
        }
        promises.push(db.put(messageInput))

        const rfiInput = {
          _id: uniqid.time(),
          lastUpdated: new Date().toISOString(),
          title: 'Request for Information',
          details: rfi,
          completed: false
        }
        promises.push(db.put(rfiInput))

        const rfsInput = {
          _id: uniqid.time(),
          lastUpdated: new Date().toISOString(),
          title: 'Request for Support',
          details: rfs,
          completed: false
        }
        promises.push(db.put(rfsInput))

        const chatInput = {
          _id: uniqid.time(),
          lastUpdated: new Date().toISOString(),
          title: 'Chat',
          details: chat,
          completed: false
        }

        promises.push(db.put(chatInput))

        const linkInput = {
          _id: uniqid.time(),
          lastUpdated: new Date().toISOString(),
          title: 'Link',
          details: link,
          completed: false
        }

        promises.push(db.put(linkInput))

        const dailyInput = {
          _id: uniqid.time(),
          lastUpdated: new Date().toISOString(),
          title: 'Daily intentions',
          details: dailyIntentions,
          completed: false
        }

        promises.push(db.put(dailyInput))

        const pg19WeeklyInput = {
          _id: uniqid.time(),
          lastUpdated: new Date().toISOString(),
          title: 'PG19 Weekly Orders',
          details: pg19WeeklyOrders,
          completed: false
        }

        promises.push(db.put(pg19WeeklyInput))

        const sowInput = {
          _id: uniqid.time(),
          lastUpdated: new Date().toISOString(),
          title: 'State of World',
          details: stateofworld,
          completed: false
        }
        promises.push(db.put(sowInput))

        Promise.all(promises).then(() => {
          resolve(true)
        })
      } else {
        resolve(false)
      }
    })
  })
}

// // +
// // Function to post a new message type (schema) to the database
// export const postNewMessageTypeToDb = (schema) => {
//   return new Promise((resolve, reject) => {
//     (async () => {
//       // Get all existing message types from the database
//       // +
//       const allMessages = await getAllMessagesFromDb()

//       // Check if the message type title is already used
//       const matchedName = allMessages.find((messageType) => messageType.title && schema.title && messageType.title.toLowerCase() === schema.title.toLowerCase())
  
//       if (matchedName) {
//         reject('Message title already used')
//         return
//       }

//       const time = new Date().toISOString()
      
//       // Create a new schema object and add it to the database
//       const schemaObj = {
//         _id: time,
//         lastUpdated: time,
//         title: schema.title,
//         details: schema,
//         completed: false
//       }
    
//       return db.put(schemaObj)
//         .then(function (result) {
//           resolve(result)
//         })
//         .catch(function (err) {
//           console.log(err)
//           reject(false)
//         })
//     })()
//   })
// }

// Duplicate a message type in the database
// export const duplicateMessageInDb = (id) => {
//   const time = new Date().toISOString()

//   return new Promise((resolve, reject) => {
//     db.get(id)
//       .then(function (doc) {
//         // var updatedMessage = doc.details;

//         doc.details.title = `${doc.details.title} Copy-${uniqid.time()}`

//         return db.put({
//           _id: time,
//           lastUpdated: time,
//           title: doc.details.title,
//           details: doc.details
//         })
//       })
//       .then(function () {
//         resolve(true)
//       })
//       .catch(function (err) {
//         console.log(err)
//         reject(false)
//       })
//   })
// }

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

// // Delete a message type from the database
// export const deleteMessageFromDb = (id) => {
//   return new Promise((resolve, reject) => {
//     db.get(id)
//       .then(function (doc) {
//         return db.remove(doc)
//       })
//       .then(function (result) {
//         resolve(result)
//       })
//       .catch(function (err) {
//         console.log(err)
//         reject(false)
//       })
//   })
// }

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
