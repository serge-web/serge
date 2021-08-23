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
  assign,
  claim,
  submitForReview,
  CRCPassign,
  CRCPclaim,
  CRCPsubmit,
  CRRMClose,
  CRRMRelease,
  CRRMRequestChanges
} from './helpers/changers'
import {
  ColEditPendingReview,
  ColEditDocumentPending,
  ColEditDocumentBeingEdited,
  ColRespRelManReview,
  ColRespResponsePending,
  ColRespDocumentBeingEdited
} from './helpers/visibility'
import { CollaborativeMessageStates } from '@serge/config'

const labelFactory = (id: string, label: string): React.ReactNode => (
  <label htmlFor={id}><FontAwesomeIcon size='1x' icon={faUserSecret} /> {label}</label>
)

type PendingFncExecution = typeof endorse | typeof requestChanges

/* Render component */
export const ChannelCoaMessageDetail: React.FC<Props> = ({ message, onChange, isUmpire, channel, canCollaborate, canReleaseMessages }) => {
  const [value, setValue] = useState(message.message.Request || '[message empty]')
  const [answer, setAnswer] = useState((message.details.collaboration && message.details.collaboration.response) || '')
  const [privateMessage, setPrivateMessage] = useState<string>(message.details.privateMessage || '')
  const [open, setOpenDialog] = useState<boolean>(false)
  const { collaboration } = message.details
  let pendingFncExecution: PendingFncExecution

  const handleFinalized = (): void => {
    onChange && onChange(finalize(message))
  }

  const handleClosed = (): void => {
    onChange && onChange(close(message))
  }

  const handleRequestChanges = (): void => {
    setOpenDialog(true)
    pendingFncExecution = requestChanges
  }

  const handleEndors = (): void => {
    setOpenDialog(true)
    pendingFncExecution = endorse
  }

  const handleAssign = (): void => {
    // TODO: - produce ForceRole for selected user, pass to assign
    onChange && onChange(assign(message))
  }

  const handleClaim = (): void => {
    // TODO: - produce ForceRole for current user, pass to claim
    onChange && onChange(claim(message))
  }

  const handleEditingSubmit = (): void => {
    onChange && onChange(submitForReview(message))
  }

  const handleCRCPassign = (): void => {
    // TODO: - produce ForceRole for selected user, pass to assign
    onChange && onChange(CRCPassign(message))
  }

  const handleCRCPclaim = (): void => {
    // TODO: - produce ForceRole for current user, pass to claim
    onChange && onChange(CRCPclaim(message))
  }

  const handleCRCPsubmit = (): void => {
    onChange && onChange(CRCPsubmit(message))
  }

  const handleCRRMClose = (): void => {
    onChange && onChange(CRRMClose(message))
  }

  const handleCRRMRelease = (): void => {
    onChange && onChange(CRRMRelease(message))
  }

  const handleCRRMRequestChanges = (): void => {
    onChange && onChange(CRRMRequestChanges(message))
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
    const { from } = message.details
    message.feedback = !!feedback
    message.message.feedback = {
      fromId: from.roleId,
      fromName: from.roleName,
      date: new Date().toISOString(),
      feedback
    }

    onChange && pendingFncExecution && onChange(pendingFncExecution(message))
    setOpenDialog(false)
  }

  const assignLabel = collaboration && (collaboration.status === CollaborativeMessageStates.Released ? 'Released' : collaboration.owner ? collaboration.owner.roleName : 'Not assigned')
  return (
    <div className={styles.main}>
      <DialogModal
        title="Feedback"
        value={message.message.feedback && message.message.feedback[0].feedback}
        open={open}
        onClose={onModalClose}
        onSave={onModalSave}
      />
      {collaboration && isUmpire && <div className={styles.assigned}>
        <span className={styles.inset}>
          <AssignmentInd color="action" fontSize="large" /><Badge size="medium" type="charcoal" label={assignLabel} />
        </span>
      </div>}
      <Textarea id={`question_${message._id}`} value={value} onChange={(nextValue): void => setValue(nextValue)} theme='dark' disabled label="Request" />
      { // TODO: only show next fields if collaboration details known
        isUmpire &&
        <>
          <Textarea id={`answer_${message._id}`} value={answer} onChange={(nextValue): void => onAnswerChange(nextValue)} theme='dark' label="Answer" />
          <Textarea id={`private_message_${message._id}`} value={privateMessage} onChange={(nextValue): void => onPrivateMsgChange(nextValue)} theme='dark' label='Private Message' labelFactory={labelFactory} />
        </>
      }
      { // TODO: show answer in read-only form if message released
        !isUmpire && collaboration && collaboration.status === CollaborativeMessageStates.Released &&
        <>
          <Textarea id={`answer_${message._id}`} value={answer} onChange={(nextValue): void => setAnswer(nextValue)} theme='dark' label="Answer" />
        </>
      }
      <div className={styles.actions}>
        {
          ColEditPendingReview(message, channel, canReleaseMessages) &&
          <>
            <Button customVariant="form-action" size="small" type="button" onClick={handleClosed}>Close</Button>
            <Button customVariant="form-action" size="small" type="button" onClick={handleFinalized}>Finalise</Button>
            <Button customVariant="form-action" size="small" type="button" onClick={handleRequestChanges}>Request Changes</Button>
            <Button customVariant="form-action" size="small" type="button" onClick={handleEndors}>Endorse</Button>
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
          ColEditDocumentBeingEdited(message, channel, canCollaborate) &&
          <Button customVariant="form-action" size="small" type="button" onClick={handleEditingSubmit}>Submit</Button>
        }

        {
          ColRespRelManReview(message, channel, canReleaseMessages) &&
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
            <Button customVariant="form-action" size="small" type="button" onClick={handleCRCPassign}>Assign</Button>
            <Button customVariant="form-action" size="small" type="button" onClick={handleCRCPclaim}>Claim</Button>
          </>
        }
        {
          ColRespDocumentBeingEdited(message, channel, canCollaborate) &&
          <Button customVariant="form-action" size="small" type="button" onClick={handleCRCPsubmit}>Submit</Button>
        }
      </div>
    </div>
  )
}

export default ChannelCoaMessageDetail
