import React from 'react'
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles'
import MaterialButton from '@material-ui/core/Button'
import AddIcon from '@material-ui/icons/Add'
import SaveIcon from '@material-ui/icons/Save'

/* Import Types */
import Props from './types/props'

/* Render component */
const useButtonStyle = makeStyles((theme: Theme) =>
  createStyles({
    root: ({ type }: Props) => ({
      ...type ? { backgroundColor: (theme.palette[type] || {}).main } : {},
      '& + .MuiButton-root': {
        marginLeft: theme.spacing(1)
      }
    })
  })
)

const iconsMap = {
  add: <AddIcon />,
  save: <SaveIcon />
}

export const Button: React.FC<Props> = ({ type, icon, children, ...props }: Props) => {
  const buttonStyles = useButtonStyle({ type })
  return (
    <MaterialButton
      classes={buttonStyles}
      variant="contained"
      {...props}
      {...icon && { startIcon: iconsMap[icon] }}
    >
      { children }
    </MaterialButton>
  )
}

export default Button
