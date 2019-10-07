import ActionConstant from '../ActionConstants';
import 'whatwg-fetch';
import check from 'check-types';

import * as messageTypesApi from "../../api/messageTypes_api";

import {setCurrentViewFromURI} from "../setCurrentViewFromURI/setCurrentViewURI_ActionCreators";
import {addNotification} from "../Notification/Notification_ActionCreators";
import {MESSAGE_TEMPLATE_ROUTE} from "../../consts";

const DBMessageSaveStatus = (status) => ({
  type: ActionConstant.DB_MESSAGE_STATUS,
  payload: status
});

const DBSaveMessageArray = (messages) => ({
  type: ActionConstant.DB_MESSAGE_TYPES_SAVED,
  payload: messages
});

const loadingDBMessageCreate = (isLoading) => ({
  type: ActionConstant.DB_MESSAGE_CREATION_LOADING,
  isLoading
});

const loadingDBMessageGet = (isLoading) => ({
  type: ActionConstant.DB_MESSAGE_TYPES_GET,
  isLoading
});

const populatingDb = (isLoading) => ({
  type: ActionConstant.POPULATE_MESSAGE_TYPES_DB,
  isLoading
});


export const populateMessageTypesDb = () => {

  return async (dispatch) => {
    dispatch(populatingDb(true));

    await messageTypesApi.populateDb();

    let messages = await messageTypesApi.getAllMessagesFromDb();

    dispatch(DBSaveMessageArray(messages));

    dispatch(populatingDb(false));
  }
};


export const createMessageType = (schema) => {

  if (!check.object(schema)) throw Error(`createMessageType() requires schema object & NOT. ${schema}`);

  return async (dispatch) => {

    dispatch(loadingDBMessageCreate(true));

    try {

      var result = await messageTypesApi.postNewMessage(schema);

      if (result.err) {
        dispatch(addNotification(result.err));
        dispatch(loadingDBMessageCreate(false));
      }

      if (result.ok) {
        dispatch(DBMessageSaveStatus(result));
        let messages = await messageTypesApi.getAllMessagesFromDb();
        dispatch(DBSaveMessageArray(messages));

        dispatch(loadingDBMessageCreate(false));
        dispatch(setCurrentViewFromURI(MESSAGE_TEMPLATE_ROUTE));
      }

    } catch (err) {
      console.log(err);
    }
  }
};


export const duplicateMessageType = (id) => {

  if (!check.string(id)) throw Error(`duplicateTemplate() requires a string Not. ${id}`);

  return async (dispatch) => {
    dispatch(loadingDBMessageCreate(true));

    var result = await messageTypesApi.duplicateMessageInDb(id);

    if (result) {
      dispatch(DBMessageSaveStatus(true));
      let messages = await messageTypesApi.getAllMessagesFromDb();
      dispatch(DBSaveMessageArray(messages));
    }
    dispatch(loadingDBMessageCreate(false));
  }
};

export const updateMessageType = (schema, id) => {

  if (!check.object(schema)) throw Error(`updateMessageType() requires schema & not ${schema}`);

  return async (dispatch) => {
    dispatch(loadingDBMessageCreate(true));

    try {
      const result = await messageTypesApi.updateMessageInDb(schema, id);

      if (result.err) {
        dispatch(addNotification(result.err));
        dispatch(loadingDBMessageCreate(false));
      }

      if (result.ok) {
        dispatch(DBMessageSaveStatus(result.ok));

        let allMessages = await messageTypesApi.getAllMessagesFromDb();

        dispatch(DBSaveMessageArray(allMessages));
        dispatch(loadingDBMessageCreate(false));
        dispatch(setCurrentViewFromURI(MESSAGE_TEMPLATE_ROUTE));

      }
    } catch (e) {
      // CREATE ERROR WARNING MESSAGE
      dispatch(loadingDBMessageCreate(false));
      alert(e);
    }
  }
};


export const deleteMessageType = (messageId) => {

  if (!check.string(messageId)) throw Error(`deleteMessage() requires a string of id not. ${messageId}`);

  return async (dispatch) => {
    dispatch(loadingDBMessageCreate(true));

    var result = await messageTypesApi.deleteMessageFromDb(messageId);

    if (result) {
      let messages = await messageTypesApi.getAllMessagesFromDb();
      dispatch(DBSaveMessageArray(messages));
    } else {
      // error action
    }

    dispatch(loadingDBMessageCreate(false));
  }
};


export const getAllMessageTypes = () => {
  return async (dispatch) => {
    dispatch(loadingDBMessageGet(true));

    let result = await messageTypesApi.getAllMessagesFromDb();

    dispatch(DBSaveMessageArray(result));
    dispatch(loadingDBMessageGet(false));
  }
};
