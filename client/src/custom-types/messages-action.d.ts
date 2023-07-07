import { Dispatch } from 'react'
import { 
    ADD_NOTIFICATION,
    DB_MESSAGES_GET,
    DB_MESSAGE_CREATION_LOADING,
    DB_MESSAGE_SAVED,
    DB_MESSAGE_STATUS,
    DB_RETURNED_MESSAGE,
    RESET_MESSAGE_PREVIEW,
    SET_CURRENT_VIEW_FROM_URI
 } from "@serge/config"
import { MessageFeedback } from './message'

interface DBMessageSaveStatus {
    type: typeof DB_MESSAGE_STATUS,
    payload: string
}

interface DbMessagesSaved {
    type: typeof DB_MESSAGE_SAVED,
    payload: []
}

interface DBSaveMessagePreview {
    type: typeof DB_RETURNED_MESSAGE,
    payload: MessageFeedback
}

interface LoadingDBMessage {
    type: typeof DB_MESSAGE_CREATION_LOADING | typeof DB_MESSAGES_GET,
    isLoading: boolean
}

interface resetMessagePreview {
    type: typeof RESET_MESSAGE_PREVIEW
}

interface AddNotification {
    type: typeof ADD_NOTIFICATION
}

export interface SetCurrentViewFromURI {
    type: typeof SET_CURRENT_VIEW_FROM_URI,
    payload: string
}

export type MessagesActionTypes = DBMessageSaveStatus |
DbMessagesSaved |
DBSaveMessagePreview |
LoadingDBMessage |
resetMessagePreview |
AddNotification |
SetCurrentViewFromURI

export type MessagesDispatch = Dispatch<MessagesActionTypes>
