import ActionConstant from '../ActionConstants.js';
import copyState from "../../Helpers/copyStateHelper.js";

const initialState = [];

export const notificationReducer = (state = initialState, action) => {

    let newState = copyState(state);

    switch (action.type) {
      case ActionConstant.ADD_NOTIFICATION:
        newState.push(action.payload);
        return newState;

      case ActionConstant.HIDE_NOTIFICATION:

        let index = newState.findIndex((item) => item.id === action.id);
        newState.splice(index, 1);
        return newState;

      default:
        return newState;
    }
};
