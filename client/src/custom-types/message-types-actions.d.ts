// import { } from './export-items'

import {
  DB_MESSAGE_STATUS,
  DB_MESSAGE_TYPES_SAVED,
  DB_MESSAGE_CREATION_LOADING,
  // DB_MESSAGE_TYPES_GET,
  POPULATE_MESSAGE_TYPES_DB
} from 'src/config'

import { Dispatch } from 'react'
import { TemplateBody } from './template'

interface DBMessageSaveStatusAction {
  type: typeof DB_MESSAGE_STATUS
  payload: boolean
}

interface DBSaveMessageArrayAction {
  type: typeof DB_MESSAGE_TYPES_SAVED
  payload: TemplateBody[]
}

interface LoadingDBMessageCreateAction {
  type: typeof DB_MESSAGE_CREATION_LOADING
  payload: boolean
}

// interface LoadingDBMessageGetAction {
//   type: typeof DB_MESSAGE_TYPES_GET
//   payload: boolean
// }

interface PopulatingDbAction {
  type: typeof POPULATE_MESSAGE_TYPES_DB
  payload: boolean
}

export type MessageTypesActionTypes = 
  DBMessageSaveStatusAction |
  DBSaveMessageArrayAction |
  LoadingDBMessageCreateAction |
  // LoadingDBMessageGetAction |
  PopulatingDbAction

export type MessageTypesDispatch = Dispatch<MessageTypesActionTypes>
