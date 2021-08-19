import React, { useState } from 'react'
/* Import Types */
import Props from './types/props'

/* Import Stylesheet */
import styles from './styles.module.scss'

/* Import Components */
import Textarea from '../../atoms/textarea'
import Button from '../../atoms/button'
import Badge from '../../atoms/badge'

/* Import Icons */
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserSecret } from '@fortawesome/free-solid-svg-icons'
import AssignmentInd from '@material-ui/icons/AssignmentInd'

/* Import Helpers */
import {
  finalize,
  closed,
  requestChanges,
  endors,
  assign,
  claim,
  editingSubmit,
  CRCPassign,
  CRCPclaim,
  CRCPsubmit,
  CRRMClose,
  CRRMRelease,
  CRRMResponsePending
} from './helpers/changers'
import {
  ColEditRelManReview,
  ColEditCollPartAssClaim,
  ColEditCollPartEditDoc,
  ColRespRelManReview,
  ColRespRelManRespPen,
  ColRespRelManEditResp
} from './helpers/visibility'
import { CollaborativeMessageStates } from '@serge/config'

const labelFactory = (id: string, label: string): React.ReactNode => (
  <label htmlFor={id}><FontAwesomeIcon size='1x' icon={faUserSecret}/> {label}</label>
)

/* Render component */
export const ChannelCoaMessageDetail: React.FC<Props> = ({ message, onChange, isUmpire, channel, canCollaborate, canReleaseMessages }) => {
  const [value, setValue] = useState(message.message.Request || '[message empty]')
  const [answer, setAnswer] = useState((message.details.collaboration && message.details.collaboration.response) || '')
  const [privateMessage, setPrivateMessage] = useState<string>(message.details.privateMessage || '')
  const { collaboration } = message.details

  const handleFinalized = (): void => {
    onChange && onChange(finalize(message))
  }

  const handleClosed = (): void => {
    onChange && onChange(closed(message))
  }

  const handleRequestChanges = (): void => {
    onChange && onChange(requestChanges(message))
  }

  const handleEndors = (): void => {
    onChange && onChange(endors(message))
  }

  const handleAssign = (): void => {
    onChange && onChange(assign(message))
  }

  const handleClaim = (): void => {
    onChange && onChange(claim(message))
  }

  const handleEditingSubmit = (): void => {
    onChange && onChange(editingSubmit(message))
  }

  const handleCRCPassign = (): void => {
    onChange && onChange(CRCPassign(message))
  }

  const handleCRCPclaim = (): void => {
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

  const handleCRRMResponsePending = (): void => {
    onChange && onChange(CRRMResponsePending(message))
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

  const assignLabel = collaboration && (collaboration.status === CollaborativeMessageStates.Released ? 'Released' : collaboration.owner ? collaboration.owner.roleName : 'Not assigned')
  return (
    <div className={styles.main}>
      {collaboration && isUmpire && <div className={styles.assigned}>
        <span className={styles.inset}>
          <AssignmentInd color="action" fontSize="large"/><Badge size="medium" type="charcoal" label={assignLabel}/>
        </span>
      </div>}
      <Textarea id={`question_${message._id}`} value={value} onChange={(nextValue): void => setValue(nextValue)} theme='dark' disabled label="Request"/>
      { // only show next fields if collaboration details known
        isUmpire &&
        <>
          <Textarea id={`answer_${message._id}`} value={answer} onChange={(nextValue): void => onAnswerChange(nextValue)} theme='dark' label="Answer"/>
          <Textarea id={`private_message_${message._id}`} value={privateMessage} onChange={(nextValue): void => onPrivateMsgChange(nextValue)} theme='dark' label='Private Message' labelFactory={labelFactory}/>
        </>
      }
      { // show answer in read-only form if message released
        !isUmpire && collaboration && collaboration.status === CollaborativeMessageStates.Released &&
        <>
          <Textarea id={`answer_${message._id}`} value={answer} onChange={(nextValue): void => setAnswer(nextValue)} theme='dark' label="Answer"/>
        </>
      }
      <div className={styles.actions}>
        {
          ColEditRelManReview(message, channel, canReleaseMessages) &&
          <>
            <Button customVariant="form-action" size="small" type="button" onClick={handleClosed}>Close</Button>
            <Button customVariant="form-action" size="small" type="button" onClick={handleFinalized}>Finalise</Button>
            <Button customVariant="form-action" size="small" type="button" onClick={handleRequestChanges}>Request Changes</Button>
            <Button customVariant="form-action" size="small" type="button" onClick={handleEndors}>Endorse</Button>
          </>
        }
        {
          ColEditCollPartAssClaim(message, channel, canCollaborate) &&
          <>
            <Button customVariant="form-action" size="small" type="button" onClick={handleAssign}>Assign</Button>
            <Button customVariant="form-action" size="small" type="button" onClick={handleClaim}>Claim</Button>
          </>
        }
        {
          ColEditCollPartEditDoc(message, channel, canCollaborate) &&
          <Button customVariant="form-action" size="small" type="button" onClick={handleEditingSubmit}>Submit</Button>
        }

        {
          ColRespRelManReview(message, channel, canReleaseMessages) &&
          <>
            <Button customVariant="form-action" size="small" type="button" onClick={handleCRRMRelease}>Release</Button>
            <Button customVariant="form-action" size="small" type="button" onClick={handleCRRMClose}>Close</Button>
            <Button customVariant="form-action" size="small" type="button" onClick={handleCRRMResponsePending}>Request Changes</Button>
          </>
        }
        {
          ColRespRelManRespPen(message, channel, canCollaborate) &&
          <>
            <Button customVariant="form-action" size="small" type="button" onClick={handleCRCPassign}>Assign</Button>
            <Button customVariant="form-action" size="small" type="button" onClick={handleCRCPclaim}>Claim</Button>
          </>
        }
        {
          ColRespRelManEditResp(message, channel, canCollaborate) &&
          <Button customVariant="form-action" size="small" type="button" onClick={handleCRCPsubmit}>Submit</Button>
        }
      </div>
    </div>
  )
}

export default ChannelCoaMessageDetail
