import HeartbeatChecker from '../Components/local/atoms/heartbeat-checker'
import { ActivityLogsInterface, Wargame } from 'src/custom-types'
// import preval from 'preval.macro'
import React, { useEffect, useState } from 'react'
import { expiredStorage, SERVER_PING_INTERVAL, UMPIRE_FORCE } from 'src/config'
import { useDispatch, useSelector } from 'react-redux'
import { addNotification, hideNotification } from '../ActionsAndReducers/Notification/Notification_ActionCreators'
import { pingServer2 as pingServerApi } from '../api/wargames_api'

export type Notification = {
  message: string
  type: string
  id: number
  autoHide: boolean
  subType: string
}

type VersionProps = {
  notifications: Notification[]
  playerLog: ActivityLogsInterface
  wargame: Wargame
}

// const appBuildDate = preval`module.exports = new Date().toISOString().slice(0, 19).replace('T', ' ')`
// trim off the seconds
// const trimmedAppBuildDate = appBuildDate.substring(0, appBuildDate.length - 3)

const Version: React.FC<VersionProps> = () => {
  const dispatch = useDispatch()
  const { notifications, playerLog, wargame }: VersionProps = useSelector(({ notifications, playerLog, wargame }: VersionProps) => ({ notifications, playerLog, wargame }))
  const [toggleBeat, setToggleBeat] = useState(false)
  const [serverStatus, setServerStatus] = useState('')
  const [serverPingTime, setServerPingTime] = useState<number>(0)
  const isUmpire = (window as any).selectedChannel && (window as any).selectedChannel === UMPIRE_FORCE
  
  const logPlayerActivity = wargame && wargame.data.overview.logPlayerActivity

  useEffect(() => {
    // check for previous heartbeat notification
    const prevNotification = notifications.filter(i => i.subType === 'HeartbeatAlert')
    if (serverStatus === 'NOT_OK') {
      if (prevNotification.length === 0) {
        const message = isUmpire ? 'Server down' : 'Check connection - please check with admin'
        dispatch(addNotification(message, 'warning', false, 'HeartbeatAlert'))
      }
    } else {
      if (prevNotification.length > 0) {
        dispatch(hideNotification(prevNotification[0]))
      }
    }

    if (serverPingTime) {
      setToggleBeat(true)
    }
    // server status commented out in next line, since ping time always updates
  }, [/* serverStatus, */serverPingTime])
  
  const pingServer = () => {
    // send list of activities to server
    return pingServerApi(playerLog, logPlayerActivity).then(res => {
      // flush the log
      playerLog.items = []
      setServerStatus(res)
      setServerPingTime(new Date().getTime())
      return res
    })
  }

  useEffect(() => {
    const timerId = setInterval(() => {
      // remove all expired items from localStorage
      expiredStorage.clearExpired()
      pingServer() 
    }, SERVER_PING_INTERVAL)

    return () => {
      clearInterval(timerId)
    }
  }, [playerLog])

  return (
    <ul className='version-container'>
      <li>
        <HeartbeatChecker
          enableHeartbeat={serverStatus === 'OK'}
          animate={toggleBeat}
          onAnimateComplete={() => setToggleBeat(false)}
          className='heartbeat-checker'
        />
      </li>
      <li>V:<span>{process.env.REACT_APP_VERSION}</span></li>
      {/* <li><span>{trimmedAppBuildDate}</span></li> */}
    </ul>
  )
}

export default React.memo(Version)
