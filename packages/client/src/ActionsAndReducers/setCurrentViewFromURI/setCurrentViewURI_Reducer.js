import ActionConstant from '../ActionConstants';

export const currentViewURIReducer = (state = '/', action) => {

  let newState = state;

  switch (action.type) {
    case ActionConstant.SET_CURRENT_VIEW_FROM_URI:
      newState = action.payload;
      return newState;

    default:
      return newState;
  }
};