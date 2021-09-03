import React, { useState } from 'react'
import moment from 'moment'
/* Import Types */
import Props from './types/props'

/* Import Stylesheet */
import styles from './styles.module.scss'

/* Import Components */
import Textarea from '../../atoms/textarea'
import Button from '../../atoms/button'
import DialogModal from '../../atoms/dialog'
import SplitButton from '../../atoms/split-button'

/* Import Icons */
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserSecret } from '@fortawesome/free-solid-svg-icons'

/* Import Helpers */
import {
  editFinalise,
  close,
  requestChanges,
  assign,
  editSubmit,
  responseSubmit,
  responseRelease
} from './helpers/changers'
import {
  ColEditPendingReview,
  ColEditDocumentPending,
  ColEditDocumentBeingEdited,
  ColRespPendingReview,
  ColRespResponsePending,
  ColRespDocumentBeingEdited,
  ColResponseClosed,
  ColEditClosed,
  formEditable
} from './helpers/visibility'
import { CollaborativeMessageStates, SpecialChannelTypes } from '@serge/config'
import JsonEditor from '../json-editor'
import { FeedbackItem, ForceRole, MessageCustom } from '@serge/custom-types'
import Collapsible from '../../helper-elements/collapsible'

const labelFactory = (id: string, label: string): React.ReactNode => (
  <label htmlFor={id}><FontAwesomeIcon size='1x' icon={faUserSecret} /> {label}</label>
)

/** for the specified channel, provide a list of people who
 * can have documents assigned to them
 */
const getCandidates = (assignees: ForceRole[]): string[] => {
  return assignees.map((assignee: ForceRole) =>
    `${assignee.forceName} - ${assignee.roleName}`
  )
}

/** from the provided force & role, produce a ForceRole object */
const roleFromName = (force: string, rolename: string, assignees: ForceRole[]): ForceRole => {
  const match = assignees.find((role: ForceRole) => {
    return role.forceName === force && role.roleName === rolename
  })
  if (match) {
    return match
  }
  throw new Error('Failed to find role for force:' + force + ' role:' + rolename)
}

/* Render component */
export const ChannelCoaMessageDetail: React.FC<Props> = ({ templates, message, onChange, isUmpire, role, channel, canCollaborate, canReleaseMessages, assignees = [] }) => {
  const [answer, setAnswer] = useState((message.details.collaboration && message.details.collaboration.response) || '')
  const [newMsg, setNewMsg] = useState<{ [property: string]: any }>({})
  const [privateMessage, setPrivateMessage] = useState<string>(message.details.privateMessage || '')
  const [open, setOpenDialog] = useState<boolean>(false)
  const [dialogTitle, setDialogTitle] = useState<string>('Feedback')
  const [placeHolder, setPlaceHolder] = useState<string>('')
  const [assignBtnLabel] = useState<string>('Assign to')

  const editDoc = ColEditDocumentBeingEdited(message, channel, canCollaborate, role)
  const editResponse = ColRespDocumentBeingEdited(message, channel, canCollaborate, role)

  const isEditor = formEditable(message, role)

  const { collaboration } = message.details
  const responseIsReleased = collaboration && collaboration.status === CollaborativeMessageStates.Released

  const candidates = getCandidates(assignees)

  const getJsonEditorValue = (val: { [property: string]: any }): void => {
    setNewMsg(val)
  }

  /** local change handler. Updates `lastUpdated` value
   * in message
   */
  const handleChange = (msg: MessageCustom): void => {
    onChange && onChange(msg)
  }

  const handleEditFinalise = (): void => {
    handleChange(editFinalise(message))
  }

  const handleEditClose = (): void => {
    handleChange(close(message))
  }

  const handleRequestChanges = (name: string): void => {
    setDialogTitle(name)
    setPlaceHolder(name + '...')
    setOpenDialog(true)
  }

  const handleReopen = (): void => {
    setDialogTitle('Reopen document')
    setPlaceHolder('Reason for reopening')
    setOpenDialog(true)
  }

  const handleClaim = (): void => {
    handleChange(assign(message, role))
  }

  const handleEditingSubmit = (): void => {
    handleChange(editSubmit(message, newMsg, privateMessage))
  }

  const handleAssign = (selection: string): void => {
    // unpack the fields
    const fields = selection.split(' - ')
    // find the matching role
    const assignee = roleFromName(fields[0], fields[1], assignees)
    handleChange(assign(message, assignee))
  }

  const handleResponseSubmit = (): void => {
    handleChange(responseSubmit(message, answer, privateMessage))
  }

  const handleResponseReopen = (): void => {
    setDialogTitle('Reopen response')
    setPlaceHolder('Reason for reopening')
    setOpenDialog(true)
  }

  const handleResponseClose = (): void => {
    handleChange(close(message))
  }

  const handleResponseRelease = (): void => {
    handleChange(responseRelease(message))
  }

  const handleResponseRequestChanges = (): void => {
    setDialogTitle('Request changes in response')
    setPlaceHolder('Enter requested changes...')
    setOpenDialog(true)
  }

  const onAnswerChange = (answer: string): void => {
    setAnswer(answer)
    // the reply needs to be stored temporarily in the message object to avoid being lost on rerendering
    if (message.details.collaboration) {
      message.details.collaboration.response = answer
    }
  }

  const onPrivateMsgChange = (privateMsg: string): void => {
    setPrivateMessage(privateMsg)
    // the private msg needs to be stored temporarily in the message object to avoid being lost on rerendering
    message.details.privateMessage = privateMsg
  }

  const onModalClose = (): void => {
    setOpenDialog(false)
  }

  const onModalSave = (feedback: string): void => {
    // put message into feedback item
    const feedbackItem: FeedbackItem =
    {
      fromId: role.roleId,
      fromName: role.roleName,
      date: new Date().toISOString(),
      feedback
    }
    if (message.details.collaboration) {
      if (!message.details.collaboration.feedback) {
        // create empty array, if necessary
        message.details.collaboration.feedback = []
      }
      message.details.collaboration.feedback.push(feedbackItem)
    }

    handleChange(requestChanges(message))
    setOpenDialog(false)
  }

  const formatFeedback = (feedback: FeedbackItem): string => {
    return moment(feedback.date).format('YYYY-MM-DD HH:mm') +
      ' [' + feedback.fromName + '] ' +
      feedback.feedback
  }

  const CollapsibleHeader = ({ onExpand, collapsed, feedback }: any): React.ReactElement => {
    const multipleFeedback = feedback.length > 1
    const handleOnExpand = (): void => {
      multipleFeedback && onExpand(!collapsed)
    }
    return (
      <div className={styles['feedback-header']} onClick={handleOnExpand}>
        <span className={styles['feedback-icon']}>{multipleFeedback && (collapsed ? '+' : '-')}</span>
        {formatFeedback(feedback[feedback.length - 1])}
      </div>
    )
  }

  const CollapsibleContent = ({ collapsed, feedback }: any): React.ReactElement => {
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

  /** value of owner, of `unassigned` */
  const feedback = message.details.collaboration?.feedback

  const feedbackVerbs: string[] = (channel.collabOptions && [...channel.collabOptions.returnVerbs]) || []
  feedbackVerbs.push('Request changes')
  console.log('verbs', feedbackVerbs)

  // create a single feedback block - we use it in either message type
  const feedbackBlock = (canCollaborate || canReleaseMessages || isUmpire) && feedback && feedback.length > 0 && (
    <div>
      <div className={styles['feedback-title']}>Feedback</div>
      <div className={styles['feedback-item']}>
        <Collapsible
          header={<CollapsibleHeader feedback={feedback} />}
          content={<CollapsibleContent feedback={feedback} />}
        />
      </div>
    </div>)

  return (
    <div className={styles.main}>
      <DialogModal
        title={dialogTitle}
        value={''}
        open={open}
        onClose={onModalClose}
        onSave={onModalSave}
        placeholder={placeHolder}
      />
      {channel.format === SpecialChannelTypes.CHANNEL_COLLAB_EDIT ? (
        <>
          <div className={styles.actions}>
            {
              ColEditPendingReview(message, channel, canReleaseMessages) &&
              <>
                <Button customVariant="form-action" size="small" type="button" onClick={handleEditClose}>Close</Button>
                <Button customVariant="form-action" size="small" type="button" onClick={handleEditFinalise}>Finalise</Button>
                {
                  feedbackVerbs.map((item:string) => {
                    return <Button customVariant="form-action" size="small" type="button" onClick={(): void => handleRequestChanges(item)}>{item}</Button>
                  })
                }
              </>
            }
            {
              ColEditDocumentPending(message, channel, canCollaborate) &&
              <>
                <SplitButton
                  label={assignBtnLabel}
                  options={[...candidates]}
                  onClick={handleAssign} />
                <Button customVariant="form-action" size="small" type="button" onClick={handleClaim}>Claim</Button>
              </>
            }
            {
              ColEditClosed(message, channel, canReleaseMessages) &&
              <>
                <Button customVariant="form-action" size="small" type="button" onClick={handleReopen}>Reopen</Button>
              </>
            }
          </div>
          {
            feedbackBlock
          }
          <JsonEditor
            messageTemplates={templates}
            message={message}
            getJsonEditorValue={getJsonEditorValue}
            disabled={!editDoc}
          />
          {
            isUmpire && (privateMessage || editDoc) &&
              <Textarea disabled={!editDoc} id={`private_message_${message._id}`} value={privateMessage} onChange={(nextValue): void => onPrivateMsgChange(nextValue)} theme='dark' label='Private Message' labelFactory={labelFactory}/>
          }
          <div className={styles.actions}>
            {
              editDoc &&
              <Button customVariant="form-action" size="small" type="button" onClick={handleEditingSubmit}>Submit</Button>
            }
          </div>        </>
      ) : (
        <>
          <div className={styles.actions}>
            {
              ColResponseClosed(message, channel, canReleaseMessages) &&
              <>
                <Button customVariant="form-action" size="small" type="button" onClick={handleResponseReopen}>Reopen</Button>
              </>
            }
            {
              ColRespPendingReview(message, channel, canReleaseMessages) &&
              <>
                <Button customVariant="form-action" size="small" type="button" onClick={handleResponseRelease}>Release</Button>
                <Button customVariant="form-action" size="small" type="button" onClick={handleResponseClose}>Close</Button>
                <Button customVariant="form-action" size="small" type="button" onClick={handleResponseRequestChanges}>Request Changes</Button>
              </>
            }
            {
              ColRespResponsePending(message, channel, canCollaborate) &&
              <>
                <SplitButton
                  label={assignBtnLabel}
                  options={[...candidates]}
                  onClick={handleAssign}
                />
                <Button customVariant="form-action" size="small" type="button" onClick={handleClaim}>Claim</Button>
              </>
            }
          </div>
          {
            feedbackBlock
          }
          <JsonEditor
            messageTemplates={templates}
            message={message}
            getJsonEditorValue={getJsonEditorValue}
            disabled={true}
          />
          {
            responseIsReleased
              ? <Textarea id={`answer_${message._id}`} value={answer} disabled theme='dark' label="Answer"/>
              : (canCollaborate || canReleaseMessages || isUmpire) &&
              <Textarea id={`answer_${message._id}`} value={answer} onChange={(nextValue): void => onAnswerChange(nextValue)} disabled={!isEditor} theme='dark' label="Answer"/>
          }
          { // only show private field for umpire force(s)
            isUmpire && (privateMessage || editResponse) &&
              <Textarea id={`private_message_${message._id}`} value={privateMessage} onChange={(nextValue): void => onPrivateMsgChange(nextValue)} disabled={!editResponse} theme='dark' label='Private Message' labelFactory={labelFactory}/>
          }
          <div className={styles.actions}>
            {
              editResponse &&
              <Button customVariant="form-action" size="small" type="button" onClick={handleResponseSubmit}>Submit</Button>
            }
          </div>
        </>
      )}
    </div>
  )
}

export default ChannelCoaMessageDetail
