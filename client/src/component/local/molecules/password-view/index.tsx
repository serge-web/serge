import { faCircle, faKey } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useState } from 'react'
import TextInput from '../../atoms/text-input'
import styles from './styles.module.scss'
import PropTypes from './types/props'

export const PasswordView: React.FC<PropTypes> = ({ value, onChange }) => {
  const [edit, setEdit] = useState<boolean>(false)

  const makeEdit = () => {
    setEdit(!edit)
  }

  return (
    <div className={styles.main} title='Click to Edit'>
      {edit && <TextInput
        customColor="transparent"
        value={value || ''}
        updateState={(target: { value: string }): void => {
          onChange(target.value)
        }}
      />}
      {!edit && <section className={styles['password-mask']}>
        <div className={styles.dots}>
          {[...Array((value || '').length)].map((_e, i) => (
            <FontAwesomeIcon icon={faCircle} key={i} size='xs' />
          ))}
        </div>
      </section>}
      <div className={styles.key} onClick={makeEdit}>
        <FontAwesomeIcon icon={faKey}/>
      </div>
    </div>
  )
}

export default PasswordView
