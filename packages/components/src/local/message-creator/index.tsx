import React, { useState } from 'react'
import { Button } from '@material-ui/core'
import { CUSTOM_MESSAGE } from '@serge/config'
// TODO: change it to @serge/config
/* Import Types */
import Props from './types/props'

/* Import Stylesheet */
// import styles from './styles.module.scss'

/* Import components */
import { TextInput } from '../atoms/text-input'
import { MessageCustom } from '@serge/custom-types'

/* Render component */
export const MessageCreator: React.FC<Props> = ({ from, channel, role, roleName, postBack, turnNumber }) => {
  const [formState, setFormState] = useState('')

  const timestamp = new Date().toISOString()

  const changeHandler = (e: any): void => setFormState(e.value)
  const submitForm = (): void => {
    const post: MessageCustom = {
      messageType: CUSTOM_MESSAGE,
      details: {
        channel: channel,
        from: {
          force: from.name,
          forceColor: from.color,
          roleId: role,
          roleName: roleName,
          iconURL: from.iconURL || (from.icon || '')
        },
        messageType: 'Chat',
        timestamp: timestamp,
        turnNumber: turnNumber
      },
      message: {
        content: formState
      },
      _id: timestamp,
      hasBeenRead: [],
      isOpen: false
    }
    postBack && postBack(post)
    setFormState('')
  }

  return <div>
    <TextInput label="Post message" name="Message" multiline rowsMax={4} updateState={changeHandler} value={formState} />
    <Button onClick={submitForm}>Send</Button>
  </div>
}

export default MessageCreator
