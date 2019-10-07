import ActionConstant from '../ActionConstants';
import copyState from "../../Helpers/copyStateHelper";

export const exportItems = (state = [], action) => {
  let newState = copyState(state);

  switch (action.type) {
    case ActionConstant.CREATE_EXPORT_ITEM:
      newState.push(action.payload);
      return newState;
    default:
      return newState;
  }
};
