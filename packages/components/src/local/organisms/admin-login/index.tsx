import React, { useState } from 'react'
import TextInput from '../../atoms/text-input'
import Button from '../../atoms/button'

/* Import Types */
import Props from './types/props'

import { DEFAULT_SERVER } from '@serge/config'

/* Import Stylesheet */
import styles from './styles.module.scss'

/* Render component */
export const AdminLogin: React.FC<Props> = ({ onSubmit }: Props) => {
  // (temporarily) put password in box, to make testing quicker in dev
  const providePassword = false
  const [password, setPassword] = useState(providePassword ? DEFAULT_SERVER : '')

  const setPasswordValue = (target: { value: string }): void => {
    setPassword(target.value)
  }
  const handleOnKeyPress = (evt: React.KeyboardEvent): void => {
    if (evt.key === 'Enter') {
      onSubmit && onSubmit(password)
    }
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
          onKeyPress={handleOnKeyPress}
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
