import ActionConstant from './ActionConstants';
import copyState from "../Helpers/copyStateHelper";

var initialState = {
  loadingMessageTypes: true,
  loadingWargames: true,
};

export const loadingDbReducer = (state = initialState, action) => {

  var newState = copyState(state);

  switch (action.type) {

    case ActionConstant.POPULATE_MESSAGE_TYPES_DB:
      newState.loadingMessageTypes = action.isLoading;
      return newState;

    case ActionConstant.POPULATE_WARGAMES_DB:
      newState.loadingWargames = action.isLoading;
      return newState;

    default:
      return newState;
  }
};
