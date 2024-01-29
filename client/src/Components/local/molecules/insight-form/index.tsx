import React, { useState } from 'react'

/* Import Types */
import Props from './types/props'

/* Import Stylesheet */
import styles from './styles.module.scss'
import { Box, Button } from '@material-ui/core'
import { ModeComment } from '@material-ui/icons'
import TextInput from '../../atoms/text-input'

/* Render component */
export const InsightForm: React.FC<Props> = ({ onCancel, onSend, darkMode }: Props) => {
  const [inputValues, setInputValues] = useState({
    message: '',
    name: ''
  })
  const setMessage = (target: { value: string }): any => {
    setInputValues({
      ...inputValues,
      message: target.value
    })
  }
  
  const setName = (target: { value: string }): any => {
    setInputValues({
      ...inputValues,
      name: target.value
    })
  }

  return (
    <div className={styles['insight-form']}>
      <div className={styles['insight-title']}>
        <ModeComment fontSize="large" />
        <h3>Feedback</h3>
      </div>
      <p>Use this form to give private feedback on the game itself.</p>
      <p>Comments are only visible to the Game Controller. No other player has access to the comments you post here.</p>
      <Box display="flex" flexDirection="column" mb={4}>
        <TextInput
          multiline
          fullWidth
          rows={4}
          label="Message"
          labelSize={12}
          labelColor={darkMode ? 'common.white' : 'common.black'}
          updateState={setMessage}
          value={inputValues.message}
          variant={darkMode ? 'filled' : 'outlined'}
        />
      </Box>
      <Box display="flex" flexDirection="column" mb={4}>
        <Box width="50%">
          <TextInput
            fullWidth
            label="Name: optional"
            labelSize={12}
            labelColor={darkMode ? 'common.white' : 'common.black'}
            updateState={setName}
            value={inputValues.name}
            variant={darkMode ? 'filled' : 'outlined'}
          />
        </Box>
      </Box>
      <Box mt={2} display="flex" justifyContent="flex-end">
        <Button className={styles['btn-cancel']} onClick={(): void => onCancel()}>Cancel</Button>
        <Box ml={2}>
          <Button variant="contained" color="primary" onClick={(): void => onSend(inputValues)}>Send</Button>
        </Box>
      </Box>
    </div>
  )
}

export default InsightForm
