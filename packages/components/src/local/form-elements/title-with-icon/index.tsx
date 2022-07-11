import { TextField } from '@material-ui/core'
import { makeStyles } from '@material-ui/styles'
import React from 'react'
import AssetIcon from '../../asset-icon'
/* Import Styles */
import styles from './styles.module.scss'
/* Import proptypes */
import PropTypes from './types/props'

const useStyles = makeStyles({
  underline: {
    '&&&:before': {
      borderBottom: '2px solid #fff;'
    },
    '&&:after': {
      borderBottom: '2px solid #fff;'
    }
  }
})

/* Render component */
export const TitleWithIcon: React.FC<PropTypes> = ({ children, forceColor, icon, onTitleChange }) => {
  const classes = useStyles()
  return (
    <div className={styles.main}>
      {
        onTitleChange
          ? <TextField value={children} className={styles.title} InputProps={{ className: classes.underline }} onInput={onTitleChange} />
          : <div className={styles.title}><div>{children}</div></div>
      }
      <div className={styles.icon}>
        <AssetIcon color={forceColor} isSelected={false} imageSrc={icon} />
      </div>
    </div>
  )
}
export default TitleWithIcon
