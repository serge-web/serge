import React from 'react'
import Modal from 'react-modal'
import { Button } from '@material-ui/core'
import { Props } from './types/props'
import styles from './styles.module.scss'

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    width: '30%',
    height: '20%',
    minHeight: '140px',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)'
  }
}

/* Render component */
export const Confirm: React.FC<Props> = ({ isOpen, message, onCancel, onConfirm }: Props) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onCancel}
      style={customStyles}
    >
      <div>{message}</div>
      <div className={styles.action}>
        <Button onClick={onConfirm}>Yes</Button>
        <Button onClick={onCancel}>No</Button>
      </div>
    </Modal>
  )
}

export default Confirm
