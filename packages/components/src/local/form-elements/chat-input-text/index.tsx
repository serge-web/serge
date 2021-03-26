import React, { useState } from 'react'
import { IconButton, InputAdornment } from '@material-ui/core'
import { SendOutlined } from '@material-ui/icons'

/* Import Types */
import Props from './types/props'

/* Import Stylesheet */
import styles from './styles.module.scss'

/* Import Component */
import TextInput from './../../atoms/text-input'

/* Render component */
export const ChatInputText: React.FC<Props> = ({ placeholder, postBack }: Props) => {
  const [formState, setFormState] = useState('')

  const changeHandler = (e: any): void => setFormState(e.value)
  const submitForm = (): void => {
    postBack && postBack(formState)
    setFormState('')
  }

  return (
    <TextInput
      fullWidth
      multiline
      rows={2}
      rowsMax={3}
      variant="filled"
      updateState={changeHandler}
      value={formState}
      placeholder={placeholder}
      endAdornment={
        <InputAdornment position="end">
          <IconButton onClick={submitForm}>
            <SendOutlined fontSize="small" className={styles['icon-send']} />
          </IconButton>
        </InputAdornment>
      }
    />
  )
}

export default ChatInputText
