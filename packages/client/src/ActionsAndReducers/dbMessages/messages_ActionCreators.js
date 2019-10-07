import ActionConstant from '../ActionConstants';
import 'whatwg-fetch';
import check from 'check-types';

import * as messagesApi from "../../api/messages_api";

import { addNotification } from "../Notification/Notification_ActionCreators";
import {setCurrentViewFromURI} from "../setCurrentViewFromURI/setCurrentViewURI_ActionCreators";
import {MESSAGE_LIBRARY_ROUTE} from "../../consts";

const DBMessageSaveStatus = (status) => ({
  type: ActionConstant.DB_MESSAGE_STATUS,
  payload: status
});

const DBSaveMessageArray = (messages) => ({
  type: ActionConstant.DB_MESSAGE_SAVED,
  payload: messages
});

const DBSaveMessagePreview = (message) => ({
  type: ActionConstant.DB_RETURNED_MESSAGE,
  payload: message
});

const loadingDBMessageCreate = (isLoading) => ({
  type: ActionConstant.DB_MESSAGE_CREATION_LOADING,
  isLoading
});

const loadingDBMessageGet = (isLoading) => ({
  type: ActionConstant.DB_MESSAGES_GET,
  isLoading
});

export const resetMessagePreview = () => ({
  type: ActionConstant.RESET_MESSAGE_PREVIEW,
});


export const createMessage = (message, schema) => {

  if (!check.object(message)) throw Error(`createMessageType() requires object with message, from & to NOT. ${message}`);

  return async (dispatch) => {
    dispatch(loadingDBMessageCreate(true));

    try {
      var result = await messagesApi.addMessage(message, schema);

      if (result.err) {
        dispatch(addNotification(result.err));
      }

      if (result.ok) {
        dispatch(DBMessageSaveStatus(result));
        let messages = await messagesApi.getAllMessagesFromDb();
        dispatch(DBSaveMessageArray(messages));
        dispatch(loadingDBMessageCreate(false));
        dispatch(setCurrentViewFromURI(MESSAGE_LIBRARY_ROUTE));
      }
    } catch(e) {
      dispatch(loadingDBMessageCreate(false));
      alert(e);
    }
  }
};



export const duplicateMessage = (messageId) => {

  if (!check.string(messageId)) throw Error(`duplicateMessage() requires a string Not. ${messageId}`);

  return async (dispatch) => {
    dispatch(loadingDBMessageCreate(true));

    var result = await messagesApi.duplicateMessageInDb(messageId);

    if (result) {
      dispatch(DBMessageSaveStatus(result));
      let messages = await messagesApi.getAllMessagesFromDb();
      dispatch(DBSaveMessageArray(messages));
    }
    dispatch(loadingDBMessageCreate(false));
  }
};


export const updateMessage = (message, id) => {

  if (!check.object(message)) throw Error(`updateMessage() requires object with message, from & to NOT. ${message}`);

  return async (dispatch) => {
    dispatch(loadingDBMessageCreate(true));

    try {
      const result = await messagesApi.updateMessageInDb(id, message);

      if (result.err) {
        dispatch(addNotification(result.err));
      }

      if (result.ok) {
        dispatch(DBMessageSaveStatus(result));

        let responses = await Promise.all([messagesApi.getAllMessagesFromDb(), messagesApi.getMessage(result.id)]);
        let [messages, message] = [...responses];

        dispatch(DBSaveMessagePreview(message));
        dispatch(DBSaveMessageArray(messages));
        dispatch(loadingDBMessageCreate(false));
        dispatch(setCurrentViewFromURI(MESSAGE_LIBRARY_ROUTE));

      }
    } catch (e) {
      // CREATE ERROR WARNING MESSAGE
      dispatch(loadingDBMessageCreate(false));
      alert(e);
    }
  }
};


export const deleteMessage = (messageId) => {

  if (!check.string(messageId)) throw Error(`duplicateMessage() requires a string Not. ${messageId}`);

  return async (dispatch) => {
    dispatch(loadingDBMessageCreate(true));

    var result = await messagesApi.deleteMessageFromDb(messageId);

    if (result) {
      let messages = await messagesApi.getAllMessagesFromDb();
      dispatch(DBSaveMessageArray(messages));
      dispatch(resetMessagePreview());
    } else {
      // error action
    }

    dispatch(loadingDBMessageCreate(false));
  }
};


export const getSingleMessage = (id) => {

  if (!check.string(id)) throw Error(`duplicateMessage() requires a string id..`);

  return async (dispatch) => {
    dispatch(loadingDBMessageGet(true));

    let result = await messagesApi.getMessage(id);

    dispatch(DBSaveMessagePreview(result));
    dispatch(loadingDBMessageGet(false));
  }
};

export const getAllMessages = () => {
  return async (dispatch) => {
    dispatch(loadingDBMessageGet(true));

    let result = await messagesApi.getAllMessagesFromDb();

    dispatch(DBSaveMessageArray(result));
    dispatch(loadingDBMessageGet(false));
  }
};
