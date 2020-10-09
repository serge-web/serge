import React, { useState } from 'react'
import { Button } from '@material-ui/core'

/* Import Types */
import Props from './types/props'

/* Import Stylesheet */
// import styles from './styles.module.scss'

/* Import components */
import { TextInput } from '../atoms/text-input'

/* Render component */
export const MessageCreator: React.FC<Props> = ({ from, channel, role, postBack }) => {
  const [formState, setFormState] = useState('')

  const timestamp = new Date().toISOString()

  const changeHandler = (e: any): void => setFormState(e.value)
  const submitForm = (): void => {
    postBack && postBack({
      details: {
        channel: channel,
        from: {
          force: from.name,
          forceColor: from.color,
          role: role,
          icon: from.icon ? from.icon : ''
        },
        messageType: 'Chat',
        timestamp: timestamp
      },
      message: {
        content: formState
      },
      _id: timestamp,
      hasBeenRead: false,
      isOpen: false,
      open: false
    })
    setFormState('')
  }

  return <div>
    <TextInput label="Post message" name="Message" multiline rowsMax={4} updateState={changeHandler} value={formState}/>
    <Button onClick={submitForm}>Send</Button>
  </div>
}

export default MessageCreator
