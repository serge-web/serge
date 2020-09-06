import React from 'react'

/* Import proptypes */
import PropTypes from './types/props'

/* Import styles */
import styles from './styles.module.scss'

/* Render component */
export const TransparentInput: React.FC<PropTypes> = ({ value, placeholder, onChange }) => {

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    if (typeof onChange === 'function') {
      onChange(e.target.value)
    }
  }

  return <input className={styles.main} value={value} placeholder={placeholder} onChange={handleChange} />
}

export default TransparentInput
