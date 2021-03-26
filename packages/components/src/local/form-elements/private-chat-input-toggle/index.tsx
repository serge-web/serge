import React, { useState } from 'react'
import { Box } from '@material-ui/core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPaperclip, faUserSecret } from '@fortawesome/free-solid-svg-icons'

/* Import Types */
import Props from './types/props'

/* Import Stylesheet */
import styles from './styles.module.scss'

/* Import Component */
import Collapsible from '../../helper-elements/collapsible'
import TextInput from '../../atoms/text-input'

/* Render component */
export const PrivateChatInputToggle: React.FC<Props> = ({ placeholder, postBack }: Props) => {

  const [formState, setFormState] = useState('')

  const changeHandler = (e: any): void => {
    setFormState(e.value);
    postBack && postBack(e.value);
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

  const CollapsibleHeader = ({ onExpand, collapsed }: any): React.ReactElement => {
    const handleOnExpand = (): void => {
      onExpand(!collapsed)
    }
    return (
      <Box onClick={handleOnExpand}>
        <PrivateBadge />
      </Box>
    )
  }

  const CollapsibleContent = ({ collapsed }: any): React.ReactElement => {
    return (
      <Box mt={1}>
        {
          !collapsed &&
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
        }
      </Box>
    )
  }

  return (
    <Collapsible
      header={<CollapsibleHeader />}
      content={<CollapsibleContent />}
    />
  )
}

export default PrivateChatInputToggle
