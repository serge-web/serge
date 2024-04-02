/* eslint-disable @typescript-eslint/ban-types */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import * as ActionConstant from 'src/config'
import 'whatwg-fetch'
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import check from 'check-types'

import * as messagesApi from '../../api/messages_api'

import { addNotification } from '../Notification/Notification_ActionCreators'
// import { MessageFeedback, MessagesActionTypes, MessagesDispatch, RequestForInformation } from 'src/custom-types'
import { MessageFeedback, MessagesActionTypes, MessagesDispatch, RequestForInformation } from 'src/custom-types'

const DBMessageSaveStatus = (status: string): MessagesActionTypes => ({
  type: ActionConstant.DB_MESSAGE_STATUS,
  payload: status
})

const DBSaveMessageArray = (messages: []): MessagesActionTypes => ({
  type: ActionConstant.DB_MESSAGE_SAVED,
  payload: messages
})

const DBSaveMessagePreview = (message: MessageFeedback): MessagesActionTypes => ({
  type: ActionConstant.DB_RETURNED_MESSAGE,
  payload: message
})

const loadingDBMessageCreate = (isLoading: boolean): MessagesActionTypes => ({
  type: ActionConstant.DB_MESSAGE_CREATION_LOADING,
  isLoading
})

const loadingDBMessageGet = (isLoading: boolean): MessagesActionTypes => ({
  type: ActionConstant.DB_MESSAGES_GET,
  isLoading
})

// export const resetMessagePreview = (): MessagesActionTypes => ({
//   type: ActionConstant.RESET_MESSAGE_PREVIEW
// })

// export const createMessage = (message: RequestForInformation, schema: {}) => {
//   if (!check.object(message)) throw Error(`createMessageType() requires object with message, from & to NOT. ${message}`)

//   return async (dispatch: MessagesDispatch) => {
//     dispatch(loadingDBMessageCreate(true))

//     try {
//       const result = await messagesApi.addMessage(message, schema)

//       if (result.err) {
//         dispatch(addNotification(result.err, 'warning'))
//       }

//       if (result.ok) {
//         dispatch(DBMessageSaveStatus(result))
//         const messages = await messagesApi.getAllMessagesFromDb()
//         dispatch(DBSaveMessageArray(messages))
//         dispatch(loadingDBMessageCreate(false))
//       }
//     } catch (e) {
//       dispatch(loadingDBMessageCreate(false))
//       alert(e)
//     }
//   }
// }

export const duplicateMessage = (messageId: string) => {
  if (!check.string(messageId)) throw Error(`duplicateMessage() requires a string Not. ${messageId}`)

  return async (dispatch: MessagesDispatch) => {
    dispatch(loadingDBMessageCreate(true))

    const result = await messagesApi.duplicateMessageInDb(messageId)

    if (result) {
      dispatch(DBMessageSaveStatus(result))
      const messages = await messagesApi.getAllMessagesFromDb()
      dispatch(DBSaveMessageArray(messages))
    }
    dispatch(loadingDBMessageCreate(false))
  }
}

export const updateMessage = (message: RequestForInformation, id: string) => {
  if (!check.object(message)) throw Error(`updateMessage() requires object with message, from & to NOT. ${message}`)

  return async (dispatch: MessagesDispatch) => {
    dispatch(loadingDBMessageCreate(true))

    try {
      const result = await messagesApi.updateMessageInDb(id, message)

      if (result.err) {
        dispatch(addNotification(result.err, 'warning'))
      }

      if (result.ok) {
        dispatch(DBMessageSaveStatus(result))

        const responses = await Promise.all([messagesApi.getAllMessagesFromDb(), messagesApi.getMessage(result.id)])
        const [messages, message] = [...responses]

        dispatch(DBSaveMessagePreview(message))
        dispatch(DBSaveMessageArray(messages))
        dispatch(loadingDBMessageCreate(false))
      }
    } catch (e) {
      // CREATE ERROR WARNING MESSAGE
      dispatch(loadingDBMessageCreate(false))
      alert(e)
    }
  }
}

// export const deleteMessage = (messageId: string) => {
//   if (!check.string(messageId)) throw Error(`duplicateMessage() requires a string Not. ${messageId}`)

//   return async (dispatch: MessagesDispatch) => {
//     dispatch(loadingDBMessageCreate(true))
    
//     // +
//     const result = await messagesApi.deleteMessageFromDb(messageId)

//     if (result) {
//       const messages = await messagesApi.getAllMessagesFromDb()
//       dispatch(DBSaveMessageArray(messages))
//       dispatch(resetMessagePreview())
//     } else {
//       // error action
//     }

//     dispatch(loadingDBMessageCreate(false))
//   }
// }

export const getSingleMessage = (id: string) => {
  if (!check.string(id)) throw Error('duplicateMessage() requires a string id..')

  return async (dispatch: MessagesDispatch) => {
    dispatch(loadingDBMessageGet(true))

    const result = await messagesApi.getMessage(id)

    dispatch(DBSaveMessagePreview(result))
    dispatch(loadingDBMessageGet(false))
  }
}

export const getAllMessages = () => {
  return async (dispatch: MessagesDispatch) => {
    dispatch(loadingDBMessageGet(true))

    const result = await messagesApi.getAllMessagesFromDb()

    dispatch(DBSaveMessageArray(result))
    dispatch(loadingDBMessageGet(false))
  }
}
