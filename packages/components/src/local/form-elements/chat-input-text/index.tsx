import React, { useState, useImperativeHandle, useEffect } from 'react'
import { IconButton, InputAdornment } from '@material-ui/core'
import { SendOutlined } from '@material-ui/icons'

/* Import Types */
import Props from './types/props'

/* Import Stylesheet */
import styles from './styles.module.scss'

/* Import Component */
import TextInput from './../../atoms/text-input'

const UNSENT_MESSAGE_TYPE = 'chat'
/* Render component */
export const ChatInputText: React.FC<Props> = React.forwardRef(({ placeholder, postBack, onMessageChange, chatInputvalue, onCancel }: Props, ref) => {
  const [formState, setFormState] = useState('')

  const changeHandler = (e: any): void => {
    setFormState(e.value)
    onMessageChange && onMessageChange(e.value, UNSENT_MESSAGE_TYPE)
  }

  useEffect(() => {
    const value = chatInputvalue(UNSENT_MESSAGE_TYPE)
    onMessageChange && onMessageChange(value, UNSENT_MESSAGE_TYPE)
    setFormState(value)
  }, [])

  const submitForm = (): void => {
    postBack && postBack(UNSENT_MESSAGE_TYPE)
    setFormState('')
  }

  useImperativeHandle(ref, () => ({
    setFormState(text: string): void {
      setFormState(text)
    },
    clear(): void {
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
      <div className={styles.cancel} onClick={onCancel}>X</div>
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
          <InputAdornment position="end">
            <IconButton onClick={submitForm}>
              <SendOutlined fontSize="small" className={styles['icon-send']} />
            </IconButton>
          </InputAdornment>
        }
      />
    </div>
  )
})

export default ChatInputText
