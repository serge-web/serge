import React, { useState } from 'react'
import moment from 'moment'
/* Import Types */
import Props, { DialogModalStatus } from './types/props'

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
import { CollaborativeMessageStates, SpecialChannelTypes, expiredStorage } from '@serge/config'
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

const getOpenModalStatus = (key: string): DialogModalStatus => {
  return JSON.parse(expiredStorage.getItem(key) || '{}')
}

/* Render component */
export const ChannelCoaMessageDetail: React.FC<Props> = ({ parentRef, templates, message, onChange, isUmpire, role, channel, canCollaborate, canReleaseMessages, assignees = [], collapseMe }) => {
  const [answer, setAnswer] = useState((message.details.collaboration && message.details.collaboration.response) || '')
  const [newMsg, setNewMsg] = useState<{ [property: string]: any }>({})
  const [privateMessage, setPrivateMessage] = useState<string>(message.details.privateMessage || '')
  const [assignBtnLabel] = useState<string>('Assign to')

  const dialogOpenStatusKey = `${message._id}-${role.forceId}-${role.roleId}`
  const dialogModalStatus = getOpenModalStatus(dialogOpenStatusKey)

  const [open, setOpenDialog] = useState<boolean>(dialogModalStatus.open || false)
  const [dialogTitle, setDialogTitle] = useState<string>(dialogModalStatus.title || '')
  const [placeHolder, setPlaceHolder] = useState<string>(dialogModalStatus.placeHolder || '')
  const [content, setModalContent] = useState<string>(dialogModalStatus.content || '')

  const editDoc = ColEditDocumentBeingEdited(message, channel, canCollaborate, role)
  const editResponse = ColRespDocumentBeingEdited(message, channel, canCollaborate, role)

  const isEditor = formEditable(message, role)

  const { collaboration } = message.details
  const responseIsReleased = collaboration && collaboration.status === CollaborativeMessageStates.Released

  const candidates = getCandidates(assignees)

  // collate list of verbs used for providing feedback
  const feedbackVerbs: string[] = (channel.collabOptions && [...channel.collabOptions.returnVerbs]) || []
  feedbackVerbs.push('Request changes')

  if (
    parentRef &&
    parentRef.current &&
    parentRef.current.scrollTop !== 0
  ) {
    expiredStorage.setItem('scrollPosition', `${parentRef.current.scrollTop}`)
  }

  const setOpenModalStatus = ({ open, title, content = '', placeHolder }: DialogModalStatus): void => {
    // store to local storage for using in case the site is reload while modal is opening
    const currentModalStatus = getOpenModalStatus(dialogOpenStatusKey)

    currentModalStatus.open = open
    setOpenDialog(open)

    if (title) {
      currentModalStatus.title = title
      setDialogTitle(title)
    }

    if (placeHolder) {
      currentModalStatus.placeHolder = placeHolder
      setPlaceHolder(placeHolder)
    }

    currentModalStatus.content = content
    setModalContent(content)

    expiredStorage.setItem(dialogOpenStatusKey, JSON.stringify(currentModalStatus))
  }

  const getJsonEditorValue = (val: { [property: string]: any }): void => {
    setNewMsg(val)
  }

  /** local change handler. Updates `lastUpdated` value
   * in message
   */
  const handleChange = (msg: MessageCustom, collapse: boolean): void => {
    // collapse message, if necessary
    collapse && collapseMe && collapseMe()
    // fire update
    onChange && onChange(msg)
  }

  const handleEditFinalise = (): void => {
    handleChange(editFinalise(message), true)
  }

  const handleEditClose = (): void => {
    handleChange(close(message), true)
  }

  const handleRequestChanges = (name: string): void => {
    setOpenModalStatus({
      open: true,
      title: name,
      placeHolder: `${name}...`
    })
  }

  const handleReopen = (): void => {
    setOpenModalStatus({
      open: true,
      title: 'Reopen document',
      placeHolder: 'Reason for reopening'
    })
  }

  const handleClaim = (): void => {
    handleChange(assign(message, role), false)
  }

  const handleEditingSubmit = (): void => {
    handleChange(editSubmit(message, newMsg, privateMessage), true)
  }

  const handleAssign = (selection: string): void => {
    // unpack the fields
    const fields = selection.split(' - ')
    // find the matching role
    const assignee = roleFromName(fields[0], fields[1], assignees)
    handleChange(assign(message, assignee), true)
  }

  const handleResponseSubmit = (): void => {
    handleChange(responseSubmit(message, answer, privateMessage), true)
  }

  const handleResponseReopen = (): void => {
    setOpenModalStatus({
      open: true,
      title: 'Reopen response',
      placeHolder: 'Reason for reopening'
    })
  }

  const handleResponseClose = (): void => {
    handleChange(close(message), true)
  }

  const handleResponseRelease = (): void => {
    handleChange(responseRelease(message), true)
  }

  const handleResponseRequestChanges = (): void => {
    setOpenModalStatus({
      open: true,
      title: 'Request changes in response',
      placeHolder: 'Enter requested changes...'
    })
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

  const onModalValueChange = (content: string): void => {
    setOpenModalStatus({
      open: true,
      content
    })
  }

  const onModalClose = (): void => {
    setOpenDialog(false)
    expiredStorage.removeItem(dialogOpenStatusKey)
  }

  const onModalSave = (feedback: string): void => {
    const newFeedback: string = feedbackVerbs.length > 1 ? '[' + dialogTitle + '] - ' + feedback : feedback
    // put message into feedback item
    const feedbackItem: FeedbackItem =
    {
      fromId: role.roleId,
      fromName: role.roleName,
      date: new Date().toISOString(),
      feedback: newFeedback
    }
    if (message.details.collaboration) {
      if (!message.details.collaboration.feedback) {
        // create empty array, if necessary
        message.details.collaboration.feedback = []
      }
      message.details.collaboration.feedback.push(feedbackItem)
    }

    handleChange(requestChanges(message), true)
    setOpenDialog(false)
    expiredStorage.removeItem(dialogOpenStatusKey)
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
        value={content}
        open={open}
        onClose={onModalClose}
        onSave={onModalSave}
        onValueChange={onModalValueChange}
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
                  feedbackVerbs.map((item: string) => {
                    return <Button key={item} customVariant="form-action" size="small" type="button" onClick={(): void => handleRequestChanges(item)}>{item}</Button>
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
            <Textarea disabled={!editDoc} id={`private_message_${message._id}`} value={privateMessage} onChange={(nextValue): void => onPrivateMsgChange(nextValue)} theme='dark' label='Private Message' labelFactory={labelFactory} />
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
              ? <Textarea fitContent={true} id={`answer_${message._id}`} value={answer} disabled theme='dark' label="Answer" />
              : (canCollaborate || canReleaseMessages || isUmpire) &&
              <Textarea fitContent={true} id={`answer_${message._id}`} value={answer} onChange={(nextValue): void => onAnswerChange(nextValue)} disabled={!isEditor} theme='dark' label="Answer" />
          }
          { // only show private field for umpire force(s)
            isUmpire && (privateMessage || editResponse) &&
            <Textarea id={`private_message_${message._id}`} value={privateMessage} onChange={(nextValue): void => onPrivateMsgChange(nextValue)} disabled={!editResponse} theme='dark' label='Private Message' labelFactory={labelFactory} />
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
