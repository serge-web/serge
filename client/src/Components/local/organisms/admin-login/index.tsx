import { DEFAULT_SERVER, serverPath } from 'src/config'
import { RootState } from 'src/custom-types'
import React, { useCallback, useMemo, useState } from 'react'
import { useSelector } from 'react-redux'
import Button from '../../atoms/button'
import TextInput from '../../atoms/text-input'
/* Import Stylesheet */
import styles from './styles.module.scss'
/* Import Types */
import Props from './types/props'

/* Render component */
export const AdminLogin: React.FC<Props> = ({ onSubmit }: Props) => {
  // (temporarily) put password in box, to make testing quicker in dev
  const providePassword = true
  const [password, setPassword] = useState(providePassword ? DEFAULT_SERVER : '')
  const gameInfo = useSelector((state: RootState) => state.gameInfo)

  const setPasswordValue = useCallback((target: { value: string }): void => {
    setPassword(target.value)
  }, [])

  const handleOnKeyPress = useCallback((evt: React.KeyboardEvent): void => {
    if (evt.key === 'Enter') {
      onSubmit && onSubmit(password)
    }
  }, [password])

  const logoPath = useMemo(() => {
    if (gameInfo.imageUrl) {
      return `${serverPath.substring(0, serverPath.length - 1)}${gameInfo.imageUrl}`
    }
    return ''
  }, [gameInfo.imageUrl])

  return (
    <>
      <div className={styles.container}>
        <span className={styles.logo}>
          <img src={logoPath} />
          <p>Serge</p>
          <p>Admin Page</p>
        </span>

        <div className={styles.password}>
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
        <Button color="primary" onClick={(): void => onSubmit(password)}>
        Enter
        </Button>
      </div>
    </>
  )
}

export default AdminLogin
