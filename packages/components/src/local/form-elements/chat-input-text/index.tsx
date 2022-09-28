import { Divider, IconButton, InputAdornment } from '@material-ui/core'
import { Delete, SendOutlined } from '@material-ui/icons'
import { UNSENT_CHAT_MESSAGE_TYPE } from '@serge/config'
import React, { useEffect, useImperativeHandle, useState } from 'react'
import TextInput from './../../atoms/text-input'
import styles from './styles.module.scss'
import Props from './types/props'

/* Render component */
export const ChatInputText: React.FC<Props> = React.forwardRef(({ placeholder, postBack, onMessageChange, chatInputvalue, onCancel }: Props, ref) => {
  const [formState, setFormState] = useState('')

  const changeHandler = (e: any): void => {
    setFormState(e.value)
    onMessageChange && onMessageChange(e.value, UNSENT_CHAT_MESSAGE_TYPE)
  }

  useEffect(() => {
    const value = chatInputvalue(UNSENT_CHAT_MESSAGE_TYPE)
    onMessageChange && onMessageChange(value, UNSENT_CHAT_MESSAGE_TYPE)
    setFormState(value)
  }, [])

  const submitForm = (): void => {
    postBack && postBack(UNSENT_CHAT_MESSAGE_TYPE)
    setFormState('')
  }

  useImperativeHandle(ref, () => ({
    setFormState: (text: string): void => {
      setFormState(text)
    },
    clear: (): void => {
      setFormState('')
    }
  }))

  const keyDownHandler = (e: any): void => {
    if (e.keyCode === 13 && (e.ctrlKey || e.metaKey)) {
      submitForm()
    }
  }

  return (
    <div className={styles.main}>
      <TextInput
        fullWidth
        multiline
        minRows={2}
        maxRows={3}
        variant="filled"
        updateState={changeHandler}
        value={formState}
        placeholder={placeholder}
        onKeyDown={keyDownHandler}
        endAdornment={
          <InputAdornment position="end" className={styles.action}>
            <IconButton onClick={submitForm}>
              <SendOutlined fontSize="small" className={styles['icon-send']} />
            </IconButton>
            <Divider className={styles.divider} />
            <IconButton onClick={onCancel}>
              <Delete fontSize="medium" className={styles['icon-cancel']} />
            </IconButton>
          </InputAdornment>
        }
      />
    </div>
  )
})

export default ChatInputText
