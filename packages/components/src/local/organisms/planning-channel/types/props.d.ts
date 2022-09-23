import { PlayerUi, PlayerUiActionTypes } from "@serge/custom-types";
import React, { Dispatch } from "react";

export default interface PropTypes {
  state: PlayerUi
  channelId: string
  dispatch: React.Dispatch<PlayerUiActionTypes>
  reduxDispatch: Dispatch<any>
  getAllWargameMessages: (dbName: string) => Function
  markUnread: (channel: string, message: MessageChannel | ChatMessage) => PlayerUiActionTypes
  markAllAsRead: (channel: string) => PlayerUiActionTypes
  saveNewActivityTimeMessage: (role: string, activity: PlainInteraction, dbName: string) => Function
  openMessage: (channel: string, message: MessageChannel) => PlayerUiActionTypes
  saveMessage: (dbName: string, details: MessageDetails, message: object) => Function
}
