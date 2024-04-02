import * as ActionConstant from 'src/config'
import 'whatwg-fetch'
// // @ts-ignore
// import check from 'check-types'

import * as messageTypesApi from '../../api/messageTypes_api'

// import { setCurrentViewFromURI } from '../setCurrentViewFromURI/setCurrentViewURI_ActionCreators'
// import { addNotification } from '../Notification/Notification_ActionCreators'
import { MessageTypesActionTypes, MessageTypesDispatch, TemplateBody } from 'src/custom-types'

// const DBMessageSaveStatus = (status: boolean): MessageTypesActionTypes => ({
//   type: ActionConstant.DB_MESSAGE_STATUS,
//   payload: status
// })

const DBSaveMessageArray = (messages: TemplateBody[]): MessageTypesActionTypes => ({
  type: ActionConstant.DB_MESSAGE_TYPES_SAVED,
  payload: messages
})

// const loadingDBMessageCreate = (isLoading: boolean): MessageTypesActionTypes => ({
//   type: ActionConstant.DB_MESSAGE_CREATION_LOADING,
//   payload: isLoading
// })

// const loadingDBMessageGet = (isLoading: boolean): MessageTypesActionTypes => ({
//   type: ActionConstant.DB_MESSAGE_TYPES_GET,
//   payload: isLoading
// })

const populatingDb = (isLoading: boolean): MessageTypesActionTypes => ({
  type: ActionConstant.POPULATE_MESSAGE_TYPES_DB,
  payload: isLoading
})

export const populateMessageTypesDb = () => {
  return async (dispatch: MessageTypesDispatch) => {
    dispatch(populatingDb(true))

    await messageTypesApi.populateDb()
    
    const messages = await messageTypesApi.getAllMessagesFromDb()
    dispatch(DBSaveMessageArray(messages))

    dispatch(populatingDb(false))
  }
}

// // +
// // @ts-ignore
// export const createMessageType = (schema) => {
//   if (!check.object(schema)) throw Error(`createMessageType() requires schema object & NOT. ${schema}`)

//   return async (dispatch: MessageTypesDispatch) => {
//     dispatch(loadingDBMessageCreate(true))

//     try {
//       const result = await messageTypesApi.postNewMessageTypeToDb(schema)

//       if (result.err) {
//         // @ts-ignore
//         dispatch(addNotification(result.err))
//         dispatch(loadingDBMessageCreate(false))
//       }

//       if (result.ok) {
//         dispatch(DBMessageSaveStatus(result))
//         const messages = await messageTypesApi.getAllMessagesFromDb()
//         dispatch(DBSaveMessageArray(messages))

//         dispatch(loadingDBMessageCreate(false))
//         // @ts-ignore
//         dispatch(setCurrentViewFromURI(ActionConstant.MESSAGE_TEMPLATE_ROUTE))
//       }
//     } catch (err) {
//       console.error(err)
//     }
//   }
// }

// export const duplicateMessageType = (id: string) => {
//   if (!check.string(id)) throw Error(`duplicateTemplate() requires a string Not. ${id}`)

//   return async (dispatch: MessageTypesDispatch) => {
//     dispatch(loadingDBMessageCreate(true))

//     const result = await messageTypesApi.duplicateMessageInDb(id)

//     if (result) {
//       dispatch(DBMessageSaveStatus(true))
//       const messages = await messageTypesApi.getAllMessagesFromDb()
//       dispatch(DBSaveMessageArray(messages))
//     }
//     dispatch(loadingDBMessageCreate(false))
//   }
// }

// // @ts-ignore
// export const updateMessageType = (schema, id: string) => {
//   if (!check.object(schema)) throw Error(`updateMessageType() requires schema & not ${schema}`)

//   return async (dispatch: MessageTypesDispatch) => {
//     // +
//     dispatch(loadingDBMessageCreate(true))

//     try {
//       const result = await messageTypesApi.updateMessageInDb(schema, id)
//       // +
//       if (result.err) {
//         // @ts-ignore
//         dispatch(addNotification(result.err))
//         dispatch(loadingDBMessageCreate(false))
//       }

//       if (result.ok) {
//         dispatch(DBMessageSaveStatus(result.ok))
//         // +
//         const allMessages = await messageTypesApi.getAllMessagesFromDb()
//         // +
//         dispatch(DBSaveMessageArray(allMessages))
//         // +
//         dispatch(loadingDBMessageCreate(false))
//         // @ts-ignore
//         dispatch(setCurrentViewFromURI(ActionConstant.MESSAGE_TEMPLATE_ROUTE))
//       }
//     } catch (e) {
//       // CREATE ERROR WARNING MESSAGE
//       dispatch(loadingDBMessageCreate(false))
//       alert(e)
//     }
//   }
// }

// export const deleteMessageType = (messageId: string) => {
//   if (!check.string(messageId)) throw Error(`deleteMessage() requires a string of id not. ${messageId}`)

//   return async (dispatch: MessageTypesDispatch) => {
//     dispatch(loadingDBMessageCreate(true))
//     // +
//     const result = await messageTypesApi.deleteMessageFromDb(messageId)

//     if (result) {
//       const messages = await messageTypesApi.getAllMessagesFromDb()
//       dispatch(DBSaveMessageArray(messages))
//     } else {
//       // error action
//     }

//     dispatch(loadingDBMessageCreate(false))
//   }
// }

// export const getAllMessageTypes = () => {
//   return async (dispatch: MessageTypesDispatch) => {
//     dispatch(loadingDBMessageGet(true))

//     const result = await messageTypesApi.getAllMessagesFromDb()

//     dispatch(DBSaveMessageArray(result))
//     dispatch(loadingDBMessageGet(false))
//   }
// }
