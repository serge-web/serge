import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faKey, faCircle } from '@fortawesome/free-solid-svg-icons'

/* Import proptypes */
import PropTypes from './types/props'

/* Import Styles */
import styles from './styles.module.scss'

/* Import Components */
import TextInput from '../../atoms/text-input'

/* Render component */
export const PasswordView: React.FC<PropTypes> = ({ value, onChange }) => {
  return (
    <div className={styles.main} title='Click to Copy or Edit'>
      <TextInput
        customColor="transparent"
        value={value || ''}
        updateState={(target: {value: string}): void => {
          onChange(target.value)
        }}
      />
      <section className={styles['password-mask']}>
        <div className={styles.dots}>
          {[...Array((value || '').length)].map((_e, i) => (
            <FontAwesomeIcon icon={faCircle} key={i} size='xs' />
          ))}
        </div>
      </section>
      <div className={styles.key}>
        <FontAwesomeIcon icon={faKey} />
      </div>
    </div>
  )
}

export default PasswordView
