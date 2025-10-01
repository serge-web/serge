/* eslint-disable no-mixed-operators */
import React from 'react'
import { ForceData, PlayerLogEntry, PlayerMessage, PlayerMessageLog, Role } from 'src/custom-types'
import { uniq } from 'lodash'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import moment from 'moment'
import { faEnvelopeOpen, faEnvelope } from '@fortawesome/free-solid-svg-icons'

import { PlayerLogModal } from '../types/props'
const AGE_FOR_ACTIVE_MILLIS = 60000

const buildRoleData = (force: ForceData, role: Role, activityLogs: PlayerLogEntry[], messageLog: PlayerMessageLog): PlayerLogModal => {
  const thisRoleActivities = filterActivitiesByRole(activityLogs, role.roleId)
  const lastActivity = getLastActivity(thisRoleActivities)
  const lastMessage = messageLog[role.roleId]
  const { readIcon } = getMessageReadInfo(lastMessage)
  const message = getMessageContent(lastMessage, readIcon)
  const messageTime = lastMessage && lastMessage.lastMessageTime
  const activityTime = (lastActivity && lastActivity.activityTime) || ''

  return {
    forceName: force.name,
    forceColor: force.color,
    roleName: role.name,
    message,
    lastMessage: messageTime,
    lastActive: activityTime,
    lastActivity: lastActivity ? lastActivity.activityType.aType : 'N/A',
    active: activityTime && (moment().diff(moment(activityTime))) < AGE_FOR_ACTIVE_MILLIS || false
  }
}

const filterActivitiesByRole = (activityLogs: PlayerLogEntry[], roleId: string): PlayerLogEntry[] => {
  return activityLogs.filter((value: PlayerLogEntry) => value.role === roleId)
}

const getLastActivity = (activities: PlayerLogEntry[]): PlayerLogEntry | undefined => {
  return activities.length > 0 ? activities[activities.length - 1] : undefined
}

const getMessageReadInfo = (message: PlayerMessage | undefined): { activatyhasBennRead: boolean | undefined, readIcon: JSX.Element } => {
  const activatyhasBennRead = (message && message.hasBeenRead) || undefined
  const readIcon = <FontAwesomeIcon color={activatyhasBennRead ? '#838585' : '#69c'} icon={activatyhasBennRead ? faEnvelopeOpen : faEnvelope} />
  return { activatyhasBennRead, readIcon }
}

const getMessageContent = (message: PlayerMessage | undefined, readIcon: JSX.Element): JSX.Element => {
  return (message && <>{message.lastMessageTitle} {readIcon}</>) || <>N/A</>
}

export const getUniqueRoles = (activityLogs: PlayerLogEntry[], messageLog: PlayerMessageLog): string[] => {
  const allActivityRoles = activityLogs.map((value: PlayerLogEntry) => value.role)
  const messageRoles = Object.values(messageLog).map((value: PlayerMessage) => value.roleId)
  const knownRoles = allActivityRoles.concat(messageRoles)
  return uniq(knownRoles)
}

const buildLogData = (allForces: ForceData[], onlyActivePlayers: boolean, activityLogs: PlayerLogEntry[], messageLog: PlayerMessageLog, uniqueRoles: string[]): PlayerLogModal[] => {
  const logData: PlayerLogModal[] = []

  allForces.forEach((force: ForceData) => {
    force.roles.forEach((role: Role) => {
      if (!onlyActivePlayers || uniqueRoles.includes(role.roleId)) {
        const roleData = buildRoleData(force, role, activityLogs, messageLog)
        logData.push(roleData)
      }
    })
  })

  return logData
}

export default buildLogData
