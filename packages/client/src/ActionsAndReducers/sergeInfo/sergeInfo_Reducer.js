import ActionConstant from '../ActionConstants';
import copyState from "../../Helpers/copyStateHelper";
import {defaultGameInfo, serverPath} from "../../consts";
import _ from "lodash";

let initialState = defaultGameInfo;

export const gameInfo = (state = initialState, action) => {

  let newState = copyState(state);

  switch (action.type) {

    case ActionConstant.LOAD_SERGE_GAME_INFO:

      let payload = action.payload;
      if (!!payload.imageUrl) {
        payload.imageUrl = serverPath + payload.imageUrl.slice(1);
      }

      newState = _.defaults(payload, newState);

      break;


    default:
      return newState;
  }

  return newState;
};
