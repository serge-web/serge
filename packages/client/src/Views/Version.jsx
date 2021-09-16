import React, { useEffect, useState } from 'react'
import preval from 'preval.macro'
import { HeartbeatChecker } from '@serge/components'
import { connect } from 'react-redux'
import { addNotification, hideNotification } from '../ActionsAndReducers/Notification/Notification_ActionCreators'
import { UMPIRE_FORCE, SERVER_PING_INTERVAL } from '../consts'
import { pingServer as pingServerApi } from '../api/wargames_api'

const appBuildDate = preval`module.exports = new Date().toISOString().slice(0, 19).replace('T', ' ')`
// trim off the seconds
const trimmedAppBuildDate = appBuildDate.substring(0, appBuildDate.length-3)

const mapStateToProps = ({ notifications }) => ({ notifications })

const mapDispatchToProps = (dispatch) => ({
  showNotification: (message) => {
    dispatch(addNotification(message, 'warning', false, 'HeartbeatAlert'))
  },
  hideNotification: (id) => {
    dispatch(hideNotification(id))
  }
})

const Version = ({ showNotification, notifications, hideNotification }) => {
  const [toggleBeat, setToggleBeat] = useState(false)
  const [serverStatus, setServerStatus] = useState('')
  const [serverPingTime, setServerPingTime] = useState()
  const isUmpire = window.selectedChannel && window.selectedChannel === UMPIRE_FORCE

  useEffect(() => {
    // check for previous heartbeat notification
    const prevNotification = notifications.filter(i => i.subType === 'HeartbeatAlert')
    if (serverStatus === 'NOT_OK') {
      if (prevNotification.length === 0) {
        showNotification(isUmpire ? 'Server down' : 'Check connection - please check with admin')
      }
    } else {
      if (prevNotification.length > 0) {
        hideNotification(prevNotification[0])
      }
    }

    if (serverPingTime) {
      setToggleBeat(true)
    }
  }, [serverStatus, serverPingTime])

  const pingServer = () => {
    return pingServerApi().then(res => {
      setServerStatus(res)
      setServerPingTime(new Date().getTime())
      return res
    })
  }

  useEffect(() => {
    const timerId = setInterval(() => {
      pingServer()
    }, SERVER_PING_INTERVAL)

    return () => {
      clearInterval(timerId)
    }
  }, [])

  return (
    <ul className='version-container'>
      <li>
        <HeartbeatChecker
          enableHeartbeat={serverStatus === 'OK'}
          animate={toggleBeat} onAnimateComplete={() => setToggleBeat(false)}
          className="heartbeat-checker"
        />
      </li>
      <li>V:<span>{process.env.REACT_APP_VERSION}</span></li>
      <li><span>{trimmedAppBuildDate}</span></li>
    </ul>
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(Version)
