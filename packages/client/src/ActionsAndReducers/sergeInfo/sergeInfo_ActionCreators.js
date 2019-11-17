import * as sergeInfoApi from '../../api/sergeInfo_api'
import ActionConstant from '../ActionConstants'

export const sergeInfo = (info) => ({
  type: ActionConstant.LOAD_SERGE_GAME_INFO,
  payload: info
})

export const getSergeGameInformation = () => {
  return async (dispatch) => {
    const gameInfo = await sergeInfoApi.getGameInformation()
    dispatch(sergeInfo(gameInfo))
  }
}

export const saveSergeGameInformation = (info) => {
  return async (dispatch) => {
    const gameInfo = await sergeInfoApi.saveGameInformation(info)

    dispatch(sergeInfo(gameInfo))
  }
}

export const saveSergeLogo = (file) => {
  return async (dispatch) => {
    const image = await sergeInfoApi.saveLogo(file)

    const imageUrl = image.path.replace(/^\./g, '')

    dispatch(sergeInfo({ imageUrl }))
  }
}
