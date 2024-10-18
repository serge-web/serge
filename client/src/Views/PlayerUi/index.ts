import { Dispatch } from 'react'
import PlayerUi from './PlayerUi'
import { connect } from 'react-redux'
import { addNotification } from '../../ActionsAndReducers/Notification/Notification_ActionCreators'
import { populateWargameList } from '../../ActionsAndReducers/dbWargames/wargames_ActionCreators'
import { getSergeGameInformation } from '../../ActionsAndReducers/sergeInfo/sergeInfo_ActionCreators'
import { StateProps } from './types'

const mapStateToProps = ({ wargame, gameInfo, dbLoading }: StateProps) => ({
  wargame,
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
    dispatch(populateWargameList())
    dispatch(getSergeGameInformation())
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(PlayerUi)
