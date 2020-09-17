import React, { useState } from 'react'
import { Box, IconButton, Button } from '@material-ui/core'
import { SendOutlined } from '@material-ui/icons'

/* Import Types */
import Props from './types/props'

/* Import Stylesheet */
import styles from './styles.module.scss'

/* Import components */
import { TextInput } from '../../atoms/text-input'

/* Render component */
export const AdminMessageCreator: React.FC<Props> = ({ from, channel, role, postBack }) => {
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

  return (
    <Box className={styles['message-creator__wrap']}>
      <Box flexGrow={1}>
        <TextInput
          name="Message"
          multiline
          rowsMax={4}
          updateState={changeHandler}
          value={formState}
          fullWidth
        />
      </Box>
      <Box>
        <Button
          className={styles['btn-send']}
          variant="contained"
          color="secondary"
          onClick={submitForm}
          size="small"
        >
          <IconButton component="span" aria-label="Send">
            <SendOutlined fontSize="small" />
          </IconButton>
        </Button>
      </Box>
    </Box>
  )
}

export default AdminMessageCreator
