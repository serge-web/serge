import React, { useState } from 'react'
/* Import Types */
import Props from './types/props'

/* Import Stylesheet */
import styles from './styles.module.scss'

/* Import Components */
import Textarea from '../../atoms/textarea'
import Button from '../../atoms/button'
import Badge from '../../atoms/badge'
import AssignMessage from '../../atoms/assign-message'
import DialogModal from '../../atoms/dialog'

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
  formEditable,
  ColEditPendingReview,
  ColEditDocumentPending,
  ColEditDocumentBeingEdited,
  ColRespPendingReview,
  ColRespResponsePending,
  ColRespDocumentBeingEdited,
  userCanSeeCollab
} from './helpers/visibility'
import { CollaborativeMessageStates, SpecialChannelTypes } from '@serge/config'
import { FeedbackItem } from '@serge/custom-types'

const labelFactory = (id: string, label: string): React.ReactNode => (
  <label htmlFor={id}><FontAwesomeIcon size='1x' icon={faUserSecret} /> {label}</label>
)

type ActionType = 'edit-endorse' | 'edit-requestChanges' | 'respond-requestChanges'

/* Render component */
export const ChannelCoaMessageDetail: React.FC<Props> = ({ message, onChange, isUmpire, role, channel, canCollaborate, canReleaseMessages }) => {
  const [value, setValue] = useState(message.message.Request || '[message empty]')
  const [answer, setAnswer] = useState((message.details.collaboration && message.details.collaboration.response) || '')
  const [privateMessage, setPrivateMessage] = useState<string>(message.details.privateMessage || '')
  const [open, setOpenDialog] = useState<boolean>(false)
  const [dialogTitle, setDialogTitle] = useState<string>('Feedback')
  const [placeHolder, setPlaceHolder] = useState<string>('')

  const [actionType, setActionType] = useState<ActionType>('edit-endorse')

  const { collaboration } = message.details
  // const [candidate, setCandidate] = useState<string>('')

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

  const handleAssign = (): void => {
    // TODO: - produce ForceRole for selected user, pass to assign
    onChange && onChange(collabEditAssign(message, role))
  }

  const handleClaim = (): void => {
    onChange && onChange(collabEditAssign(message, role))
  }

  const handleEditingSubmit = (): void => {
    onChange && onChange(submitForReview(message, privateMessage))
  }

  const handleCRCPassign = (roleItem: string): void => {
    // TODO: - produce ForceRole for selected user, pass to assign
    onChange && onChange(collabResponseAssign(message, role))
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

  const editingResponse = channel.format === SpecialChannelTypes.CHANNEL_COLLAB_RESPONSE

  /** can this role see the collaborative working details? */
  const roleCanSeeCollab = userCanSeeCollab(channel, role)

  /** can this role edit the collaborative data */
  const formIsEditable = roleCanSeeCollab && formEditable(message, role)

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
      {collaboration && roleCanSeeCollab && <div className={styles.assigned}>
        <span className={styles.inset}>
          <AssignmentInd color="action" fontSize="large" /><Badge size="medium" type="charcoal" label={assignLabel} />
        </span>
      </div>}
      {editingResponse
        ? <>
          <Textarea id={`question_${message._id}`} value={value} onChange={(nextValue): void => setValue(nextValue)} theme='dark'
            disabled label={'Request'} />
          {roleCanSeeCollab &&
            <Textarea id={`answer_${message._id}`} value={answer} onChange={(nextValue): void => onAnswerChange(nextValue)} disabled={!formIsEditable} theme='dark' label="Answer" />
          }
        </> : <Textarea id={`question_${message._id}`} value={value} onChange={(nextValue): void => setValue(nextValue)} theme='dark'
          disabled={!formIsEditable} label={'Message'} />
      }
      {
        isUmpire &&
        <Textarea id={`private_message_${message._id}`} value={privateMessage} onChange={(nextValue): void => onPrivateMsgChange(nextValue)} disabled={!formIsEditable} theme='dark' label='Private Message' labelFactory={labelFactory} />
      }
      {!isUmpire && collaboration && collaboration.status === CollaborativeMessageStates.Released &&
        <>
          <Textarea id={`answer_${message._id}`} value={answer} disabled theme='dark' label="Answer" />
        </>
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
          // TODO: replace assign button with Split Button https://material-ui.com/components/button-group/#split-button
          ColEditDocumentPending(message, channel, canCollaborate) &&
          <>
            <Button customVariant="form-action" size="small" type="button" onClick={handleAssign}>Assign</Button>
            <Button customVariant="form-action" size="small" type="button" onClick={handleClaim}>Claim</Button>
          </>
        }
        {
          formIsEditable && ColEditDocumentBeingEdited(message, channel, canCollaborate) &&
          <Button customVariant="form-action" size="small" type="button" onClick={handleEditingSubmit}>Submit</Button>
        }

        {
          ColRespPendingReview(message, channel, canReleaseMessages) &&
          <>
            <Button customVariant="form-action" size="small" type="button" onClick={handleCRRMRelease}>Release</Button>
            <Button customVariant="form-action" size="small" type="button" onClick={handleCRRMClose}>Close</Button>
            <Button customVariant="form-action" size="small" type="button" onClick={handleCRRMRequestChanges}>Request Changes</Button>
          </>
        }
        {
          // TODO: replace assign button with Split Button https://material-ui.com/components/button-group/#split-button
          ColRespResponsePending(message, channel, canCollaborate) &&
          <>
            {/* <Button customVariant="form-action" size="small" type="button" onClick={handleCRCPassign}>Assign</Button> */}
            <AssignMessage
              options={['Game Control', 'CO', 'Blue 1']}
              onClick={handleCRCPassign}
            />
            <Button customVariant="form-action" size="small" type="button" onClick={handleCRCPclaim}>Claim</Button>
          </>
        }
        {
          formIsEditable && ColRespDocumentBeingEdited(message, channel, canCollaborate) &&
          <Button customVariant="form-action" size="small" type="button" onClick={handleCRCPsubmit}>Submit</Button>
        }
      </div>
    </div>
  )
}

export default ChannelCoaMessageDetail
