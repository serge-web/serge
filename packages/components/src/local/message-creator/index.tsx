import React from 'react'

/* Import Types */
// import Props from './types/props'

/* Import Stylesheet */
// import styles from './styles.module.scss'
import InputContainer from '../input-container'
import { TextField, Button } from '@material-ui/core'


/* Render component */
export const MessageCreator: React.FC = () =>
  <div>
    <InputContainer>
      <TextField multiline rows={2} />
      <Button>Send</Button>
    </InputContainer>
  </div>

export default MessageCreator
