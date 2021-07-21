import React from 'react'
import Button from '@material-ui/core/Button'

/* Import Types */
import Props from './types/props'

/* Import Stylesheet */
import styles from './styles.module.scss'
import { createStyles, makeStyles } from '@material-ui/core/styles'

/* Render component */
const useButtonStyle = makeStyles(() =>
  createStyles({
    root: {
      color: '#3EF1E9',

      '&:hover': {
        color: '#FFFFFF'
      }
    }
  })
)

export const ForcesInChannel: React.FC<Props> = ({ icons, colors, onMarkAllAsRead }: Props) => {
  const buttonStyles = useButtonStyle()
  return (
    <div className={styles['forces-in-channel']}>
      {icons &&
        icons.map((url, i) => {
          return <img
            key={`indicator${i}`}
            className={`${styles['force-indicator']} ${styles['role-icon']}`}
            style={{
              ...(colors[i] && { borderColor: colors[i], backgroundColor: colors[i] })
            }}
            src={url} alt=""
          />
        })
      }
      {
        onMarkAllAsRead &&
        <Button color="secondary" onClick={onMarkAllAsRead} classes={buttonStyles}>
          Mark all read
        </Button>
      }
    </div>
  )
}

export default ForcesInChannel
