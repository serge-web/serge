import ActionConstant from '../constants'

import {
  getGameInformation,
  saveGameInformation,
  saveLogo
} from '../api/serge-info'

export const sergeInfo = (info) => ({
  type: ActionConstant.LOAD_SERGE_GAME_INFO,
  payload: info
})

export const getSergeGameInformation = () => {
  return async (dispatch) => {
    const gameInfo = await getGameInformation()
    dispatch(sergeInfo(gameInfo))
  }
}

export const saveSergeGameInformation = (info) => {
  return async (dispatch) => {
    const gameInfo = await saveGameInformation(info)

    dispatch(sergeInfo(gameInfo))
  }
}

export const saveSergeLogo = (file) => {
  return async (dispatch) => {
    const image = await saveLogo(file)

    const imageUrl = image.path.replace(/^\./g, '')

    dispatch(sergeInfo({ imageUrl }))
  }
}
