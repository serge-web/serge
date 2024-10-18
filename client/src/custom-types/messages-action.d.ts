import { ADD_NOTIFICATION, SET_CURRENT_VIEW_FROM_URI } from 'src/config'

interface AddNotification {
    type: typeof ADD_NOTIFICATION
}

export interface SetCurrentViewFromURI {
    type: typeof SET_CURRENT_VIEW_FROM_URI
    payload: string
}

export type AddNotification = AddNotification |
SetCurrentViewFromURI
