import { Dispatch } from 'react'
import PlayerUi from './PlayerUi'
import { connect } from 'react-redux'
import { addNotification } from '../../ActionsAndReducers/Notification/Notification_ActionCreators'
import { populateWargameStore } from '../../ActionsAndReducers/dbWargames/wargames_ActionCreators'
import { getSergeGameInformation } from '../../ActionsAndReducers/sergeInfo/sergeInfo_ActionCreators'
import { populateMessageTypesDb } from '../../ActionsAndReducers/dbMessageTypes/messageTypes_ActionCreators'
const mapStateToProps = ({ wargame, messageTypes, gameInfo, dbLoading }: any) => ({
  wargame,
  messageTypes,
  gameInfo,
  dbLoading
})

// TODO: change Dispatch type
const mapDispatchToProps = (dispatch: Dispatch<any>) => ({
  checkPasswordFail: ():void => {
    dispatch(addNotification('Access code incorrect', 'warning'))
  },
  wargameIsInvalid: (): void => {
    dispatch(addNotification('Hidden wargame should not be available. Not opening', 'error'))
  },
  loadData: (): void => {
    dispatch(populateMessageTypesDb())
    dispatch(populateWargameStore())
    dispatch(getSergeGameInformation())
  }
})

// @ts-ignore
export default connect(mapStateToProps, mapDispatchToProps)(PlayerUi)
