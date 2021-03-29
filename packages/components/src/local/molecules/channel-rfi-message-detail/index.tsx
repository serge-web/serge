import React, { useState } from 'react'
/* Import Types */
import Props from './types/props'
import { CollaborativeMessageStates } from '@serge/config'

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
import { showSendForReview, showTakeOwnership, showReject, showRelease, showSaveDraft } from './helpers/visibility'

const labelFactory = (id: string, label: string): React.ReactNode => (
  <label htmlFor={id}><FontAwesomeIcon size='1x' icon={faUserSecret}/> {label}</label>
)

/* Render component */
export const ChannelMessageDetail: React.FC<Props> = ({ message, onChange, role, isUmpire }) => {

  const [value, setValue] = useState('')
  const [answer, setAnswer] = useState('test')
  const [privateMessage, setPrivateMessage] = useState<string>(message.details.privateMessage || '')
  const { collaboration } = message.details

  const handleSendForReview = (): void => {
    onChange(sendForReview(message, role, isUmpire))
  }

  const handleTakeOwnership = (): void => {
    onChange(takeOwnership(message, role, isUmpire))
  }

  const handleRelease = (): void => {
    onChange(release(message, role, isUmpire, answer))
  }

  const handleReject = (): void => {
    onChange(reject(message, role, isUmpire))
  }

  const handleSaveDraft = (): void => {
    onChange(saveDraft(message, role, isUmpire))
  }

  return (
    <div className={styles.main}>
      {collaboration && collaboration.status === CollaborativeMessageStates.PendingReview && <div className={styles.assigned}>
        <AssignmentInd fontSize="large"/><Badge size="small" type="charcoal" label={collaboration.owner}/>
      </div>}
      <Textarea id={`question_${message._id}`} rows={4} value={value} onChange={nextValue => setValue(nextValue)} theme='dark' disabled/>
      <Textarea id={`answer_${message._id}`} rows={4} value={answer} onChange={nextValue => setAnswer(nextValue)} theme='dark' label="Answer"/>
      <Textarea id={`private_message_${message._id}`} rows={4} value={privateMessage} onChange={nextValue => setPrivateMessage(nextValue)} theme='dark' label='Private Message' labelFactory={labelFactory}/>
      <div className={styles.actions}>
        {showTakeOwnership(message, role, isUmpire) && <Button customVariant="form-action" size="small" type="button" onClick={handleTakeOwnership}>Take Ownership</Button>}
        {showSendForReview(message, role, isUmpire) && <Button customVariant="form-action" size="small" type="button" onClick={handleSendForReview}>Send For Review</Button>}
        {showReject(message, role, isUmpire) && <Button customVariant="form-action" size="small" type="button" onClick={handleReject}>Reject</Button>}
        {showRelease(message, role, isUmpire) && <Button customVariant="form-action" size="small" type="button" onClick={handleRelease}>Release</Button>}
        {showSaveDraft(message, role, isUmpire) && <Button customVariant="form-action" size="small" type="button" onClick={handleSaveDraft}>Save Draft</Button>}
      </div>
    </div>
  )
}

export default ChannelMessageDetail
