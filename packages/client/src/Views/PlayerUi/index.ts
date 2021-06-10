import { Dispatch } from 'react'
import PlayerUi from './PlayerUi'
import { connect } from 'react-redux'
import { addNotification } from '../../ActionsAndReducers/Notification/Notification_ActionCreators'
import { populateWargameStore, pingServerWithInterval } from '../../ActionsAndReducers/dbWargames/wargames_ActionCreators'
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
  showNotification: (message: string): void => {
    dispatch(addNotification(message, 'warning', false))
  },
  loadData: (): void => {
    dispatch(populateMessageTypesDb())
    dispatch(populateWargameStore())
    dispatch(getSergeGameInformation())
    dispatch(pingServerWithInterval())
  }
})

// @ts-ignore
export default connect(mapStateToProps, mapDispatchToProps)(PlayerUi)
