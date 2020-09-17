import React, { useState } from 'react'

/* Import Types */
import Props from './types/props'

/* Import Stylesheet */
import styles from './styles.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCommentAlt } from '@fortawesome/free-solid-svg-icons'
import { Box } from '@material-ui/core'
import TextInput from '../../atoms/text-input'

/* Render component */
export const InsightForm: React.FC<Props> = ({ onCancel, onSend }: Props) => {
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
    <div className={styles['lessons-modal']}>
      <div className={styles.title}>
        <FontAwesomeIcon icon={faCommentAlt} size="2x"/><h3>Insights</h3>
      </div>
      <p>Use this form to give private feedback on the game itself.</p>
      <p>Comments are only visible to the Game Controller. No other player has access to the comments you post here.</p>
      <Box display="flex" flexDirection="column">
        <TextInput
          multiline
          rows={4}
          label="Message"
          updateState={setMessage}
          value={inputValues.message}
        />
      </Box>
      <Box display="flex" flexDirection="column">
        <div className="row">
          <div className="col-md-6">
            <TextInput
              className="material-input"
              label="Name: optional"
              updateState={setName}
              value={inputValues.name}
            />
          </div>
        </div>
      </Box>
      <Box mt={2}>
        <button name="cancel" className="btn btn-action btn-action--secondary" onClick={onCancel}>Cancel</button>
        <button name="continue" className="btn btn-action btn-action--primary" onClick={onSend}>Send</button>
      </Box>
    </div>
  )
}

export default InsightForm
