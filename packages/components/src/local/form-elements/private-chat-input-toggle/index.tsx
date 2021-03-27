import React, { useState, useImperativeHandle } from 'react'
import { Box } from '@material-ui/core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPaperclip, faUserSecret } from '@fortawesome/free-solid-svg-icons'

/* Import Types */
import Props from './types/props'

/* Import Stylesheet */
import styles from './styles.module.scss'

/* Import Component */
import TextInput from '../../atoms/text-input'

/* Render component */
export const PrivateChatInputToggle: React.FC<Props> = React.forwardRef(({ placeholder, postBack }: Props, ref) => {
  const [formState, setFormState] = useState('')
  const [collapsed, setCollapsed] = useState(true)

  useImperativeHandle(ref, () => ({
    setFormState (text: string) {
      setFormState(text)
    },
    clear () {
      setFormState('')
    }
  }))

  const changeHandler = (e: any): void => {
    setFormState(e.value)
    postBack && postBack(e.value)
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
          rows={2}
          rowsMax={3}
          variant="filled"
          updateState={changeHandler}
          value={formState}
          placeholder={placeholder}
        />
      </Box>
    </React.Fragment>
  )
})

export default PrivateChatInputToggle
