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
import { sendForReview, takeOwnership, reject, release, saveDraft } from './helpers/changers'
import { showSendForReview, showTakeOwnership, showReject, showRelease, showSaveDraft, formEditable } from './helpers/visibility'
import { CollaborativeMessageStates } from '@serge/config'

const labelFactory = (id: string, label: string): React.ReactNode => (
  <label htmlFor={id}><FontAwesomeIcon size='1x' icon={faUserSecret}/> {label}</label>
)

/* Render component */
export const ChannelCollabMessageDetail: React.FC<Props> = ({ message, onChange, role, isUmpire, isRFIManager }) => {
  const [value, setValue] = useState(message.message.Request || '[message empty]')
  const [answer, setAnswer] = useState((message.details.collaboration && message.details.collaboration.response) || '')
  const [privateMessage, setPrivateMessage] = useState<string>(message.details.privateMessage || '')
  const { collaboration } = message.details

  const handleSendForReview = (): void => {
    onChange && onChange(sendForReview(message, role, privateMessage, answer))
  }

  const handleTakeOwnership = (): void => {
    onChange && onChange(takeOwnership(message, role))
  }

  const handleRelease = (): void => {
    onChange && onChange(release(message, role))
  }

  const handleReject = (): void => {
    onChange && onChange(reject(message, role))
  }

  const handleSaveDraft = (): void => {
    onChange && onChange(saveDraft(message, role, privateMessage, answer))
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

  const formDisabled = !formEditable(message, role, isUmpire, isRFIManager)
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
          <Textarea id={`answer_${message._id}`} disabled={formDisabled} value={answer} onChange={(nextValue): void => onAnswerChange(nextValue)} theme='dark' label="Answer"/>
          <Textarea id={`private_message_${message._id}`} disabled={formDisabled} value={privateMessage} onChange={(nextValue): void => onPrivateMsgChange(nextValue)} theme='dark' label='Private Message' labelFactory={labelFactory}/>
        </>
      }
      { // show answer in read-only form if message released
        !isUmpire && collaboration && collaboration.status === CollaborativeMessageStates.Released &&
        <>
          <Textarea id={`answer_${message._id}`} disabled={formDisabled} value={answer} onChange={(nextValue): void => setAnswer(nextValue)} theme='dark' label="Answer"/>
        </>
      }
      <div className={styles.actions}>
        {showTakeOwnership(message, role, isUmpire, isRFIManager) && <Button customVariant="form-action" size="small" type="button" onClick={handleTakeOwnership}>Take Ownership</Button>}
        {showSendForReview(message, role, isUmpire, isRFIManager) && <Button customVariant="form-action" size="small" type="button" onClick={handleSendForReview}>Send For Review</Button>}
        {showReject(message, role, isUmpire, isRFIManager) && <Button customVariant="form-action" size="small" type="button" onClick={handleReject}>Reject</Button>}
        {showRelease(message, role, isUmpire, isRFIManager) && <Button customVariant="form-action" size="small" type="button" onClick={handleRelease}>Release</Button>}
        {showSaveDraft(message, role, isUmpire, isRFIManager) && <Button customVariant="form-action" size="small" type="button" onClick={handleSaveDraft}>Save Draft</Button>}
      </div>
    </div>
  )
}

export default ChannelCollabMessageDetail
