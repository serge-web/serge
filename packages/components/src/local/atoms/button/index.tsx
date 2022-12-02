import MaterialButton from '@material-ui/core/Button'
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles'
import AddIcon from '@material-ui/icons/Add'
import DeleteIcon from '@material-ui/icons/Delete'
import EditIcon from '@material-ui/icons/Edit'
import CopyIcon from '@material-ui/icons/FileCopy'
import FunctionsIcon from '@material-ui/icons/Functions'
import SaveIcon from '@material-ui/icons/Save'
import React from 'react'


/* Import Types */
import { Props } from './types/props'

/* Render component */
const useButtonStyle = makeStyles((theme: Theme) =>
  createStyles({
    root: ({ customColor, customVariant }: Props) => {
      const variants = {
        'form-action': {
          backgroundColor: theme.palette.secondary.main,
          border: `1px solid ${theme.palette[`${'primaryAccent'}`]?.main}`,

          '&:hover': {
            backgroundColor: theme.palette.primary.main
          },

          '&.MuiButton-sizeSmall': {
            minWidth: '100px',
            fontSize: '12px',
            fontWeight: '600',
            borderRadius: '5px'
          }
        }
      }
      return {
        ...customColor ? { backgroundColor: (theme.palette[customColor] || {}).main } : {},
        ...customVariant ? variants[customVariant] : {},
        '& + .MuiButton-root': {
          marginLeft: theme.spacing(1),

          '.button-list-fullwidth &': {
            marginLeft: 0,
            marginTop: theme.spacing(1)
          }
        }
      }
    },
    contained: ({ customColor }: Props) => {
      const lightColors = ['swissCoffee']
      const baseColor = 'base'
      return {
        ...lightColors.includes(customColor as string) ? { color: (theme.palette[baseColor] || {}).main } : {}
      }
    }
  })
)

const iconsMap = {
  add: <AddIcon />,
  save: <SaveIcon />,
  delete: <DeleteIcon />,
  edit: <EditIcon />,
  copy: <CopyIcon />,
  functions: <FunctionsIcon/>
}

export const Button: React.FC<Props> = ({ customColor, icon, children, customVariant, ...props }: Props) => {
  const buttonStyles = customColor && customVariant ? useButtonStyle({ customColor, customVariant }) : {}
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
