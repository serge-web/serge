import React from 'react'
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles'
import MaterialButton from '@material-ui/core/Button'
import AddIcon from '@material-ui/icons/Add'
import SaveIcon from '@material-ui/icons/Save'
import DeleteIcon from '@material-ui/icons/Delete'
import EditIcon from '@material-ui/icons/Edit'
import CopyIcon from '@material-ui/icons/FileCopy'

/* Import Types */
import { Props } from './types/props'

/* Render component */
const useButtonStyle = makeStyles((theme: Theme) =>
  createStyles({
    root: ({ customColor }: Props) => ({
      ...customColor ? { backgroundColor: (theme.palette[customColor] || {}).main } : {},
      '& + .MuiButton-root': {
        marginLeft: theme.spacing(1)
      }
    })
  })
)

const iconsMap = {
  add: <AddIcon />,
  save: <SaveIcon />,
  delete: <DeleteIcon />,
  edit: <EditIcon />,
  copy: <CopyIcon />
}

export const Button: React.FC<Props> = ({ customColor, icon, children, ...props }: Props) => {
  const buttonStyles = useButtonStyle({ customColor })
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
