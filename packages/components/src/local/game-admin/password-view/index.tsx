import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faKey, faCircle } from '@fortawesome/free-solid-svg-icons'

/* Import proptypes */
import PropTypes from './types/props'

/* Import Styles */
import styles from './styles.module.scss'

/* Import Components */
import TransparentInput from '../../form-elements/transparent-input'

/* Render component */
export const PasswordView: React.FC<PropTypes> = ({ value, onChange }) => {
  return (
    <div className={styles.main} title='Click to Copy or Edit'>
      <TransparentInput value={value || ''} onChange={(val): void => { onChange(val) }} />
      <section>
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
