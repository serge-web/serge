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
  formEditable,
  ColEditRelManDocPend,
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

/* Render component */ // onChange,
export const ChannelCoaMessageDetail: React.FC<Props> = ({ message, role, isUmpire, isRFIManager, channels, canCollaborate, canReleaseMessages }) => {
  const [value, setValue] = useState(message.message.Request || '[message empty]')
  const [answer, setAnswer] = useState((message.details.collaboration && message.details.collaboration.response) || '')
  const [privateMessage, setPrivateMessage] = useState<string>(message.details.privateMessage || '')
  const { collaboration } = message.details

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
        {
          ColEditRelManDocPend(message, channels, canReleaseMessages) &&
          <>
            <Button customVariant="form-action" size="small" type="button" onClick={() => console.log('Request Changes')}>Request Changes</Button>
            <Button customVariant="form-action" size="small" type="button" onClick={() => console.log('Endors')}>Endors</Button>
          </>
        }
        {
          ColEditRelManReview(message, channels, canReleaseMessages) &&
          <>
            <Button customVariant="form-action" size="small" type="button" onClick={() => console.log('Close')}>Close</Button>
            <Button customVariant="form-action" size="small" type="button" onClick={() => console.log('Finalise')}>Finalise</Button>
            <Button customVariant="form-action" size="small" type="button" onClick={() => console.log('Request Changes')}>Request Changes</Button>
            <Button customVariant="form-action" size="small" type="button" onClick={() => console.log('Endors')}>Endors</Button>
          </>
        }
        {
          ColEditCollPartAssClaim(message, channels, canCollaborate) &&
          <>
            <Button customVariant="form-action" size="small" type="button" onClick={() => console.log('Assign')}>Assign</Button>
            <Button customVariant="form-action" size="small" type="button" onClick={() => console.log('Claim')}>Claim</Button>
          </>
        }
        {
          ColEditCollPartEditDoc(message, channels, canCollaborate) &&
          <Button customVariant="form-action" size="small" type="button" onClick={() => console.log('Submit')}>Submit</Button>
        }

        {
          ColRespRelManReview(message, channels, canReleaseMessages) &&
          <>
            <Button customVariant="form-action" size="small" type="button" onClick={() => console.log('Release')}>Release</Button>
            <Button customVariant="form-action" size="small" type="button" onClick={() => console.log('Close')}>Close</Button>
            <Button customVariant="form-action" size="small" type="button" onClick={() => console.log('Request Changes')}>Request Changes</Button>
          </>
        }
        {
          ColRespRelManRespPen(message, channels, canCollaborate) &&
          <>
            <Button customVariant="form-action" size="small" type="button" onClick={() => console.log('Assign')}>Assign</Button>
            <Button customVariant="form-action" size="small" type="button" onClick={() => console.log('Claim')}>Claim</Button>
          </>
        }
        {
          ColRespRelManEditResp(message, channels, canCollaborate) &&
          <Button customVariant="form-action" size="small" type="button" onClick={() => console.log('Submit')}>Submit</Button>
        }
      </div>
    </div>
  )
}

export default ChannelCoaMessageDetail
