import ActionConstant from '../ActionConstants.js';
import copyState from "../../Helpers/copyStateHelper.js";

const initialState = {
  open: false,
  modal: "",
  data: null,
};

export const currentModal = (state = initialState, action) => {

    let newState = copyState(state);

    switch (action.type) {
      case ActionConstant.OPEN_MODAL:
          newState = action.payload;
          return newState;
        case ActionConstant.CLOSE_MODAL:
          newState = action.payload;
          return newState;
        default:
          return newState;
    }
};
