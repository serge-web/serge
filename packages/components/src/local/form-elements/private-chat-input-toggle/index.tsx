import { faPaperclip, faUserSecret } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Box } from '@material-ui/core'
import React, { useImperativeHandle, useState } from 'react'
import TextInput from '../../atoms/text-input'
import styles from './styles.module.scss'
import Props from './types/props'

export const PrivateChatInputToggle: React.FC<Props> = React.forwardRef(({ placeholder, postBack, sendMessage }: Props, ref) => {
  const [formState, setFormState] = useState('')
  const [collapsed, setCollapsed] = useState(false)

  useImperativeHandle(ref, () => ({
    setFormState (text: string): void {
      setFormState(text)
    },
    clear (): void {
      setFormState('')
    }
  }))

  const changeHandler = (e: any): void => {
    setFormState(e.value)
    postBack && postBack(e.value)
  }

  const keyDownHandler = (e: any): void => {
    if (e.keyCode === 13 && (e.ctrlKey || e.metaKey)) {
      sendMessage && sendMessage()
    }
  }

  const PrivateBadge = (): React.ReactElement => (
    <span className={styles['private-badge-wrapper']}>
      <span>
        <FontAwesomeIcon size='sm' icon={faPaperclip} />
      </span>
      <span className={styles['icon-private']}>
        <FontAwesomeIcon size='sm' icon={faUserSecret} />
      </span>
      <span className={styles['label-private']}>
        Private message
      </span>
    </span>
  )

  const handleOnExpand = (): void => {
    setCollapsed(prev => !prev)
  }

  return (
    <React.Fragment>
      <Box onClick={handleOnExpand}>
        <PrivateBadge />
      </Box>
      <Box mt={1} className={
        `${styles['wrap-detail']} ${!collapsed ? styles['wrap-detail-opened'] : ''}`
      }>
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
        />
      </Box>
    </React.Fragment>
  )
})

export default PrivateChatInputToggle
