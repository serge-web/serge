import React, { useEffect, useState } from 'react'
import preval from 'preval.macro'
import { HeartbeatChecker } from '@serge/components'
import { connect } from 'react-redux'
import { addNotification } from '../ActionsAndReducers/Notification/Notification_ActionCreators'
import { usePlayerUiState } from '../Store/PlayerUi'
import { UMPIRE_FORCE } from '../consts'

const appBuildDate = preval`module.exports = new Date().toISOString().slice(0, 19).replace('T', ' ')`

const mapStateToProps = ({ dbLoading }) => ({ dbLoading })

const mapDispatchToProps = (dispatch) => ({
  showNotification: (message) => {
    dispatch(addNotification(message, 'warning', false))
  }
})

const Version = ({ dbLoading, showNotification }) => {
  const [toggleBeat, setToggleBeat] = useState(false)
  const {
    selectedForce
  } = usePlayerUiState()
  const isUmpire = selectedForce && selectedForce.uniqid === UMPIRE_FORCE

  useEffect(() => {
    if (dbLoading.serverStatus === 'NOT_OK') {
      showNotification(isUmpire ? 'Server down' : 'Check connection - please check with admin')
    }

    if (dbLoading.serverPingTime) {
      setToggleBeat(true)
    }
  }, [dbLoading.serverStatus, dbLoading.serverPingTime])

  return (
    <ul className='version-container'>
      <li>
        <HeartbeatChecker
          enableHeartbeat={dbLoading.serverStatus === 'OK'}
          animate={toggleBeat} onAnimateComplete={() => setToggleBeat(false)}
          className="heartbeat-checker"
        />
      </li>
      <li>App:<span>{process.env.REACT_APP_NAME}</span></li>
      <li>Version:<span>{process.env.REACT_APP_VERSION}</span></li>
      <li>Build:<span>{appBuildDate}</span></li>
    </ul>
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(Version)
