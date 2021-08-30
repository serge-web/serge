import React, { useState } from 'react'
/* Import Types */
import Props from './types/props'

/* Import Stylesheet */
import styles from './styles.module.scss'

/* Import Components */
import Textarea from '../../atoms/textarea'
import Button from '../../atoms/button'
import Badge from '../../atoms/badge'
import DialogModal from '../../atoms/dialog'
import SplitButton from '../../atoms/split-button'

/* Import Icons */
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserSecret } from '@fortawesome/free-solid-svg-icons'
import AssignmentInd from '@material-ui/icons/AssignmentInd'

/* Import Helpers */
import {
  editFinalise,
  close,
  editRequestChanges,
  editAssign,
  editSubmit,
  responseAssign,
  responseSubmit,
  responseRelease,
  responseRequestChanges
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
import { FeedbackItem, ForceRole } from '@serge/custom-types'

const labelFactory = (id: string, label: string): React.ReactNode => (
  <label htmlFor={id}><FontAwesomeIcon size='1x' icon={faUserSecret} /> {label}</label>
)

enum DialogStates {
  editEndorse,
  editRequestChanges,
  editReopen,
  responseRequestChanges,
  responseReopen
}

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
  const [newMsg, setNewMsg] = useState<{[property: string]: any}>({})
  const [privateMessage, setPrivateMessage] = useState<string>(message.details.privateMessage || '')
  const [open, setOpenDialog] = useState<boolean>(false)
  const [dialogTitle, setDialogTitle] = useState<string>('Feedback')
  const [placeHolder, setPlaceHolder] = useState<string>('')
  const [assignBtnLabel] = useState<string>('Assign to')

  const [actionType, setActionType] = useState<DialogStates>(DialogStates.editEndorse)

  const editDoc = ColEditDocumentBeingEdited(message, channel, canCollaborate, role)
  const editResponse = ColRespDocumentBeingEdited(message, channel, canCollaborate, role)

  const isEditor = formEditable(message, role)

  const { collaboration } = message.details
  const responseIsReleased = collaboration && collaboration.status === CollaborativeMessageStates.Released

  const candidates = getCandidates(assignees)

  const getJsonEditorValue = (val: {[property: string]: any}) => {
    setNewMsg(val)
  }

  const handleEditFinalise = (): void => {
    onChange && onChange(editFinalise(message))
  }

  const handleEditClose = (): void => {
    onChange && onChange(close(message))
  }

  const handleRequestChanges = (): void => {
    setDialogTitle('Request changes to document')
    setActionType(DialogStates.editRequestChanges)
    setPlaceHolder('Enter requested changes...')
    setOpenDialog(true)
  }

  const handleEndorse = (): void => {
    setDialogTitle('Endorse document')
    setActionType(DialogStates.editEndorse)
    setPlaceHolder('Endorsement comment (optional)')
    setOpenDialog(true)
  }

  const handleReopen = (): void => {
    setDialogTitle('Reopen document')
    setActionType(DialogStates.editReopen)
    setPlaceHolder('Reason for reopening')
    setOpenDialog(true)
  }

  const handleAssign = (selection: string): void => {
    // unpack the fields
    const fields = selection.split(' - ')
    // find the matching role
    const assignee = roleFromName(fields[0], fields[1], assignees)
    onChange && onChange(editAssign(message, assignee))
  }

  const handleClaim = (): void => {
    onChange && onChange(editAssign(message, role))
  }

  const handleEditingSubmit = (): void => {
    onChange && onChange(editSubmit(message, newMsg, privateMessage))
  }

  const handleResponseAssign = (selection: string): void => {
    // unpack the fields
    const fields = selection.split(' - ')
    // find the matching role
    const assignee = roleFromName(fields[0], fields[1], assignees)
    onChange && onChange(responseAssign(message, assignee))
  }

  const handleResponseClaim = (): void => {
    onChange && onChange(responseAssign(message, role))
  }

  const handleResponseSubmit = (): void => {
    onChange && onChange(responseSubmit(message, answer, privateMessage))
  }

  const handleResponseReopen = (): void => {
    setDialogTitle('Reopen response')
    setActionType(DialogStates.responseReopen)
    setPlaceHolder('Reason for reopening')
    setOpenDialog(true)
  }

  const handleResponseClose = (): void => {
    onChange && onChange(close(message))
  }

  const handleResponseRelease = (): void => {
    onChange && onChange(responseRelease(message))
  }

  const handleResponseRequestChanges = (): void => {
    setDialogTitle('Request changes in response')
    setActionType(DialogStates.responseRequestChanges)
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
    // sort out which handler to call
    let func
    switch (actionType) {
      case DialogStates.editEndorse:
        func = editRequestChanges
        break
      case DialogStates.editRequestChanges:
        func = editRequestChanges
        break
      case DialogStates.responseRequestChanges:
        func = responseRequestChanges
        break
      case DialogStates.editReopen:
        func = editRequestChanges
        break
      case DialogStates.responseReopen:
        func = responseRequestChanges
        break
    }
    onChange && func && onChange(func(message))
    setOpenDialog(false)
  }

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
              ColEditPendingReview(message, channel, canReleaseMessages) &&
              <>
                <Button customVariant="form-action" size="small" type="button" onClick={handleEditClose}>Close</Button>
                <Button customVariant="form-action" size="small" type="button" onClick={handleEditFinalise}>Finalise</Button>
                <Button customVariant="form-action" size="small" type="button" onClick={handleRequestChanges}>Request Changes</Button>
                <Button customVariant="form-action" size="small" type="button" onClick={handleEndorse}>Endorse</Button>
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
              editDoc &&
              <Button customVariant="form-action" size="small" type="button" onClick={handleEditingSubmit}>Submit</Button>
            }
            {
              ColEditClosed(message, channel, canReleaseMessages) &&
              <>
                <Button customVariant="form-action" size="small" type="button" onClick={handleReopen}>Reopen</Button>
              </>
            }
          </div>
        </>
      ) : (
        <>
          <JsonEditor
            messageTemplates={templates}
            message={message}
            getJsonEditorValue={getJsonEditorValue}
            disabled={true}
          />
          {
            responseIsReleased
              ? <Textarea id={`answer_${message._id}`} value={answer} disabled theme='dark' label="Answer"/>
              : (canCollaborate || canReleaseMessages) &&
              <Textarea id={`answer_${message._id}`} value={answer} onChange={(nextValue): void => onAnswerChange(nextValue)} disabled={!isEditor} theme='dark' label="Answer"/>
          }
          { // only show private field for umpire force(s)
            isUmpire && (privateMessage || editResponse) &&
              <Textarea id={`private_message_${message._id}`} value={privateMessage} onChange={(nextValue): void => onPrivateMsgChange(nextValue)} disabled={!editResponse} theme='dark' label='Private Message' labelFactory={labelFactory}/>
          }
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
                  onClick={handleResponseAssign}
                />
                <Button customVariant="form-action" size="small" type="button" onClick={handleResponseClaim}>Claim</Button>
              </>
            }
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
