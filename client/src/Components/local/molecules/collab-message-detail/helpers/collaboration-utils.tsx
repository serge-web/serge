import React from 'react'
import { ForceRole, FeedbackItem, MessageCustom, ChannelCollab } from 'src/custom-types'

/* Import Icons */
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserSecret } from '@fortawesome/free-solid-svg-icons'
import { DialogModalStatus } from '../types/props'
import { expiredStorage } from 'src/config'
import { formatFullDate } from 'src/Helpers'
/* Import Stylesheet */
import styles from '../styles.module.scss'

export type ModalHandlerFn = (message: MessageCustom) => void

export const labelFactory = (id: string, label: string): React.ReactNode => (
  <label htmlFor={id}><FontAwesomeIcon size='1x' icon={faUserSecret} /> {label}</label>
)

/** for the specified channel, provide a list of people who
 * can have documents assigned to them
 */
export const getCandidates = (assignees: ForceRole[]): string[] => {
  return assignees.map((assignee: ForceRole) =>
      `${assignee.forceName} - ${assignee.roleName}`
  )
}

export const getTemplateId = (
  isResponse: boolean,
  canSeeResponse: boolean,
  channelCollab: ChannelCollab
): string | undefined => {
  if (isResponse) {
    return canSeeResponse
      ? channelCollab.responseTemplate?._id
      : channelCollab.newMessageTemplate?._id
  } else {
    return channelCollab.newMessageTemplate?._id
  }
}

/** from the provided force & role, produce a ForceRole object */
export const roleFromName = (selection: string, assignees: ForceRole[]): ForceRole => {
  // unpack the fields
  const fields = selection.split(' - ')
  const force = fields[0]
  const rolename = fields[1]
  const match = assignees.find((role: ForceRole) => {
    return role.forceName === force && role.roleName === rolename
  })
  if (match) {
    return match
  }
  throw new Error('Failed to find role for force:' + force + ' role:' + rolename)
}

export const getOpenModalStatus = (key: string): DialogModalStatus => {
  return JSON.parse(expiredStorage.getItem(key) || '{}')
}
  
export const formatFeedback = (feedback: FeedbackItem): string => {
  return formatFullDate(feedback.date) +
      ' [' + feedback.fromForce + '-' + feedback.fromName + '] ' +
      feedback.feedback
}

export const ExpandedFeedbackList = ({ collapsed, feedback }: {collapsed?: any, feedback: FeedbackItem[]}): React.ReactElement => {
  // put in reverse chronological order
  const descending = feedback.slice().reverse()
  return (
    <div className={styles['feedback-content']}>
      {!collapsed && descending.map((item: FeedbackItem, key: number) => {
        if (key > 0) return (<div key={key}>{formatFeedback(item)}</div>)
        else return null
      })}
    </div>
  )
}

export const CollapsedFeedbackList = ({ onExpand, collapsed, feedback }: {onExpand?: any, collapsed?: any, feedback: FeedbackItem[] }): React.ReactElement => {
  const multipleFeedback = feedback.length > 1
  const handleOnExpand = (): void => {
    multipleFeedback && onExpand(!collapsed)
  }
  
  const renderReadIcon = (): React.ReactNode => {
    return <>
      {multipleFeedback && (collapsed ? '+' : '-')}
    </>
  }
  return (
    <div className={styles['feedback-header']} onClick={handleOnExpand}>
      <span className={styles['feedback-icon']}>{renderReadIcon()}</span>
      {formatFeedback(feedback[feedback.length - 1])}
    </div>
  )
}

export const injectFeedback = (message: MessageCustom, verb: string, feedback: string, role: ForceRole): MessageCustom => {
  const verbStr = '[' + verb + '] '
  const withFeedback = verbStr + (feedback || '')
  // put message into feedback item
  const feedbackItem: FeedbackItem =
    {
      fromId: role.roleId,
      fromName: role.roleName,
      fromForce: role.forceName,
      date: new Date().toISOString(),
      feedback: withFeedback
    }
  if (message.details.collaboration) {
    if (!message.details.collaboration.feedback) {
      // create empty array, if necessary
      message.details.collaboration.feedback = []
    }
    message.details.collaboration.feedback.push(feedbackItem)
  }
  return message
}
