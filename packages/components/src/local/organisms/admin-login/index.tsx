import React, { useState } from 'react'
import TextInput from '../../atoms/text-input'
import Button from '../../atoms/button'

/* Import Types */
import Props from './types/props'

/* Import Stylesheet */
import styles from './styles.module.scss'

/* Render component */
export const AdminLogin: React.FC<Props> = ({ onSubmit }: Props) => {
  const [password, setPassword] = useState('')
  const setPasswordValue = (target: { value: string }): void => {
    setPassword(target.value)
  }

  return (
    <>
      <h2 className={styles['login-form-head']}>Password</h2>
      <div style={{ marginBottom: 16 }}>
        <TextInput
          label="Password"
          labelColor="common.white"
          value={password}
          type="password"
          variant="filled"
          updateState={setPasswordValue}
          fullWidth
        />
      </div>
      <Button color="secondary" onClick={(): void => onSubmit(password)}>
        Enter
      </Button>
    </>
  )
}

export default AdminLogin
