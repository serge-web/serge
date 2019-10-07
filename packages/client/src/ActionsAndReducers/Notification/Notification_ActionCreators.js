import ActionConstant from '../ActionConstants.js';
import uniqid from "uniqid";

export const addNotification = (message, type) => ({
  type: ActionConstant.ADD_NOTIFICATION,
  payload: {
    message: message,
    type: type,
    id: uniqid.time(),
  },
});

export const hide = (id) => ({
  type: ActionConstant.HIDE_NOTIFICATION,
  id
});


export const hideNotification = (id) => {
  return (dispatch) => {

    dispatch(hide(id));

  };
};
