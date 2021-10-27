import { CUSTOM_MESSAGE, COUNTER_MESSAGE } from "@serge/config";
import { MessageCounter, Message, MessageCustom } from "@serge/custom-types";
import { ApiWargameDb } from "./wargames_api/types";

// error codes when we need to retry
const retryOn: number[] = [409]

export const checkReference = (message: MessageCustom, db: ApiWargameDb): Promise<MessageCustom> => {
  return new Promise((resolve): void => {
    // if message have Reference provider
    if (message.messageType === CUSTOM_MESSAGE && message.message.Reference === '') {
      // get force Name
      const forceName = message.details.from.force
      // get updated Counter message
      getCounterDoc(forceName, db).then(doc => {
        // insert valid Reference from last updated doc
        message.message.Reference = [doc.force, doc.counter].join('-')
        // return message with changed Reference
        resolve(message)
      })
    } else {
      // if message have no reference we will return as is
      resolve(message)
    }
  })
}

// get counter document and check last counter value
export const getCounterDoc = (forceName: string, db: ApiWargameDb): Promise<MessageCounter> => {
  // create new promise
  return new Promise<MessageCounter>((resolve) => {
    // try to get counter document by id based on force name
    db.get(getCounterMessageId(forceName)).then((doc) => {
      // counter doc found. let's check type to be sure that was a MessageCounter
      const message = doc as Message
      if (message.messageType === COUNTER_MESSAGE) {
        // counter doc found, so need to update counter
        const nextDoc: MessageCounter = {
          ...message,
          counter: message.counter + 1
        }
        // try to save it
        db.put(nextDoc)
          // all ok returning saved doc 
          .then(() => { resolve(nextDoc) })
          // something went wrong
          .catch((error) => {
            const { status } = error
            // 409 (conflict) someone already saved before us, try again
            if (typeof status === 'number' && retryOn.includes(status)) {
              setTimeout(() => {
                resolve(getCounterDoc(forceName, db))
              }, 1000)
            } else {
              console.log(error)
            }
          })
      } else {
        // wrong doc type
        console.error('Wrong type message', doc)
      }
    })
    // there can be some error or document not exists
    .catch((error) => {
      // if document not found we need to create it 
      if (error.status === 404) {
        // if error status === 404 that means it's first message! need to create a new counter document
        resolve(createNewCounterMessage(forceName, db))
      } else {
        // oh no! there are some error
        console.log(error)
      }
    })
  })
}

// we need to create a new CounterMessage, save it and return saved doc
export const createNewCounterMessage = (forceName: string, db: ApiWargameDb): Promise<MessageCounter> => {

  // generateing new CounterMessage object for selected force 
  const newDoc: MessageCounter = {
    _id: getCounterMessageId(forceName),
    force: forceName,
    counter: 1,
    messageType: COUNTER_MESSAGE
  }

  return new Promise ((resolve) => {
    // try to save a new CounterMessage
    db.put(newDoc).then(() => {
      resolve(newDoc)
    }).catch((error) => {
      const { status } = error
      // 409 (conflict) someone already saved before us, try again
      if (typeof status === 'number' && retryOn.includes(status)) {
        setTimeout(() => {
          resolve(getCounterDoc(forceName, db))
        }, 1000)
      } else {
        console.log(error)
      }
    })
  })
}

// generate doc id for CounterMessage
export const getCounterMessageId = (forceName: string): string => {
  return `counter_${forceName}`
}