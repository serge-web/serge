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
  finalize,
  close,
  requestChanges,
  endorse,
  collabEditAssign,
  submitForReview,
  collabResponseAssign,
  CRCPsubmit,
  CRRMRelease,
  CRRMRequestChanges
} from './helpers/changers'
import {
  ColEditPendingReview,
  ColEditDocumentPending,
  ColEditDocumentBeingEdited,
  ColRespPendingReview,
  ColRespResponsePending,
  ColRespDocumentBeingEdited
} from './helpers/visibility'
import { CollaborativeMessageStates, SpecialChannelTypes } from '@serge/config'
import { MessageTemplatesMock } from '@serge/mocks'
import JsonEditor from '../json-editor'
import { Participant, FeedbackItem, ForceRole, ChannelData } from '@serge/custom-types'

const labelFactory = (id: string, label: string): React.ReactNode => (
  <label htmlFor={id}><FontAwesomeIcon size='1x' icon={faUserSecret} /> {label}</label>
)

type ActionType = 'edit-endorse' | 'edit-requestChanges' | 'respond-requestChanges'

/** for the specified channel, provide a list of people who
 * can have documents assigned to them
 */
const getCandidates = (channel: ChannelData, assignees: ForceRole[]): string[] => {
  const { participants } = channel
  return participants.reduce((candidates: string[], participant: Participant): any => {
    if (participant.canCollaborate) {
      const { force, roles } = participant
      if (!roles.length) {
        // add the force name and all roles of that force
        assignees.forEach((assignee: ForceRole) => {
          const { forceName, roleName } = assignee
          candidates.push(`${forceName} - ${roleName}`)
        })
      } else {
        // add force name and role item in roles array
        roles.forEach((role: string) => {
          candidates.push(`${force} - ${role}`)
        })
      }
    }
    return candidates
  }, [])
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
export const ChannelCoaMessageDetail: React.FC<Props> = ({ message, onChange, isUmpire, role, channel, canCollaborate, canReleaseMessages, assignees = [] }) => {
  const [value, setValue] = useState(message.message.Request || '[message empty]')
  const [answer, setAnswer] = useState((message.details.collaboration && message.details.collaboration.response) || '')
  const [newMsg, setNewMsg] = useState<{[property: string]: any}>({})
  const [privateMessage, setPrivateMessage] = useState<string>(message.details.privateMessage || '')
  const [open, setOpenDialog] = useState<boolean>(false)
  const [dialogTitle, setDialogTitle] = useState<string>('Feedback')
  const [placeHolder, setPlaceHolder] = useState<string>('')
  const [assignBtnLabel] = useState<string>('Assign to')

  const [actionType, setActionType] = useState<ActionType>('edit-endorse')

  const { collaboration } = message.details
  const editDoc = (typeof collaboration !== 'undefined' && collaboration.status === CollaborativeMessageStates.EditDocument && ColEditDocumentBeingEdited(message, channel, canCollaborate))
  const collRespPendingDisable = channel.format === SpecialChannelTypes.CHANNEL_COLLAB_RESPONSE && message.details.collaboration?.status === CollaborativeMessageStates.EditResponse

  const getJsonEditorValue = (val: {[property: string]: any}) => {
    setNewMsg(val)
  }

  const handleFinalized = (): void => {
    onChange && onChange(finalize(message))
  }

  const handleClosed = (): void => {
    onChange && onChange(close(message))
  }

  const handleRequestChanges = (): void => {
    setDialogTitle('Request Changes')
    setActionType('edit-requestChanges')
    setPlaceHolder('Enter requested changes...')
    setOpenDialog(true)
  }

  const handleEndorse = (): void => {
    setDialogTitle('Endorse document')
    setActionType('edit-endorse')
    setPlaceHolder('Endorsement comment (optional)')
    setOpenDialog(true)
  }

  const handleAssign = (selection: string): void => {
    // unpack the fields
    const fields = selection.split(' - ')
    // find the matching role
    const assignee = roleFromName(fields[0], fields[1], assignees)
    onChange && onChange(collabEditAssign(message, assignee))
  }

  const handleClaim = (): void => {
    onChange && onChange(collabEditAssign(message, role))
  }

  const handleEditingSubmit = (): void => {
    onChange && onChange(submitForReview(message, newMsg, privateMessage))
  }

  const handleCRCPassign = (selection: string): void => {
    // unpack the fields
    const fields = selection.split(' - ')
    // find the matching role
    const assignee = roleFromName(fields[0], fields[1], assignees)
    onChange && onChange(collabResponseAssign(message, assignee))
  }

  const handleCRCPclaim = (): void => {
    onChange && onChange(collabResponseAssign(message, role))
  }

  const handleCRCPsubmit = (): void => {
    onChange && onChange(CRCPsubmit(message, answer, privateMessage))
  }

  const handleCRRMClose = (): void => {
    onChange && onChange(close(message))
  }

  const handleCRRMRelease = (): void => {
    onChange && onChange(CRRMRelease(message))
  }

  const handleCRRMRequestChanges = (): void => {
    setDialogTitle('Request Changes')
    setActionType('respond-requestChanges')
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
      case 'edit-endorse':
        func = endorse
        break
      case 'edit-requestChanges':
        func = requestChanges
        break
      case 'respond-requestChanges':
        func = CRRMRequestChanges
        break
    }
    onChange && func && onChange(func(message))
    setOpenDialog(false)
  }

  /** value of owner, of `unassigned` */
  const assignLabel = collaboration && (collaboration.status === CollaborativeMessageStates.Released ? 'Released' : collaboration.owner ? collaboration.owner.roleName : 'Not assigned')

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
            messageTemplates={MessageTemplatesMock}
            message={message}
            getJsonEditorValue={getJsonEditorValue}
            disabled={!editDoc}
          />
          {
            isUmpire &&
              <Textarea disabled={!editDoc} id={`private_message_${message._id}`} value={privateMessage} onChange={(nextValue): void => onPrivateMsgChange(nextValue)} theme='dark' label='Private Message' labelFactory={labelFactory}/>
          }
          <div className={styles.actions}>
            {
              ColEditPendingReview(message, channel, canReleaseMessages) &&
              <>
                <Button customVariant="form-action" size="small" type="button" onClick={handleClosed}>Close</Button>
                <Button customVariant="form-action" size="small" type="button" onClick={handleFinalized}>Finalise</Button>
                <Button customVariant="form-action" size="small" type="button" onClick={handleRequestChanges}>Request Changes</Button>
                <Button customVariant="form-action" size="small" type="button" onClick={handleEndorse}>Endorse</Button>
              </>
            }
            {
              ColEditDocumentPending(message, channel, canCollaborate) &&
              <>
                <SplitButton
                  label={assignBtnLabel}
                  options={[...getCandidates(channel, assignees)]}
                  onClick={handleAssign} />
                <Button customVariant="form-action" size="small" type="button" onClick={handleClaim}>Claim</Button>
              </>
            }
            {
              ColEditDocumentBeingEdited(message, channel, canCollaborate) &&
              <Button customVariant="form-action" size="small" type="button" onClick={handleEditingSubmit}>Submit</Button>
            }
          </div>
        </>
      ) : (
        <>
          {
            collaboration && isUmpire && <div className={styles.assigned}>
              <span className={styles.inset}>
                <AssignmentInd color="action" fontSize="large"/><Badge size="medium" type="charcoal" label={assignLabel}/>
              </span>
            </div>
          }
          {
            channel.format === SpecialChannelTypes.CHANNEL_COLLAB_RESPONSE
              ? <Textarea id={`question_${message._id}`} value={value} onChange={(nextValue): void => setValue(nextValue)} theme='dark' disabled label="Request"/>
              : <Textarea id={`question_${message._id}`} value={value} onChange={(nextValue): void => setValue(nextValue)} theme='dark' label="Request"/>
          }
          { // only show next fields if collaboration details known
            isUmpire && channel.format === SpecialChannelTypes.CHANNEL_COLLAB_RESPONSE
              ? <>
                <Textarea id={`answer_${message._id}`} value={answer} onChange={(nextValue): void => onAnswerChange(nextValue)} disabled={!collRespPendingDisable} theme='dark' label="Answer"/>
                <Textarea id={`private_message_${message._id}`} value={privateMessage} onChange={(nextValue): void => onPrivateMsgChange(nextValue)} disabled={!(canCollaborate && collRespPendingDisable)} theme='dark' label='Private Message' labelFactory={labelFactory}/>
              </>
              : <>
                <Textarea id={`answer_${message._id}`} value={answer} onChange={(nextValue): void => onAnswerChange(nextValue)} theme='dark' label="Answer"/>
                <Textarea id={`private_message_${message._id}`} value={privateMessage} onChange={(nextValue): void => onPrivateMsgChange(nextValue)} theme='dark' label='Private Message' labelFactory={labelFactory}/>
              </>
          }
          { // TODO: show answer in read-only form if message released
            !isUmpire && collaboration && collaboration.status === CollaborativeMessageStates.Released &&
            <>
              <Textarea id={`answer_${message._id}`} value={answer} onChange={(nextValue): void => setAnswer(nextValue)} theme='dark' label="Answer"/>
            </>
          }
          <div className={styles.actions}>
            {
              ColRespPendingReview(message, channel, canReleaseMessages) &&
              <>
                <Button customVariant="form-action" size="small" type="button" onClick={handleCRRMRelease}>Release</Button>
                <Button customVariant="form-action" size="small" type="button" onClick={handleCRRMClose}>Close</Button>
                <Button customVariant="form-action" size="small" type="button" onClick={handleCRRMRequestChanges}>Request Changes</Button>
              </>
            }
            {
              ColRespResponsePending(message, channel, canCollaborate) &&
              <>
                <SplitButton
                  label={assignBtnLabel}
                  options={[...getCandidates(channel, assignees)]}
                  onClick={handleCRCPassign}
                />
                <Button customVariant="form-action" size="small" type="button" onClick={handleCRCPclaim}>Claim</Button>
              </>
            }
            {
              ColRespDocumentBeingEdited(message, channel, canCollaborate) &&
              <Button customVariant="form-action" size="small" type="button" onClick={handleCRCPsubmit}>Submit</Button>
            }
          </div>
        </>
      )}
    </div>
  )
}

export default ChannelCoaMessageDetail
