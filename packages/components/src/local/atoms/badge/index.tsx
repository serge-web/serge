import React from 'react'
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles'
import Chip from '@material-ui/core/Chip'

/* Import Types */
import Props from './types/props'

/* Render component */
const useBadgeStyle = makeStyles((theme: Theme) =>
  createStyles({
    root: ({ type }: Props) => ({
      marginLeft: theme.spacing(1),
      textTransform: 'uppercase',
      fontWeight: 700,
      paddingTop: theme.spacing(0.25),
      paddingBottom: theme.spacing(0.25),
      ...type ? { backgroundColor: (theme.palette[type] || {}).main } : {}
    }),
    sizeSmall: {
      height: '15px',
      fontSize: '.65rem'
    },
    label: ({ type }: Props) => {
      const lightBg = type && ['warning'].includes(type)
      return {
        color: theme.palette.common[lightBg ? 'black' : 'white']
      }
    }
  })
)

export const Badge: React.FC<Props> = ({ color, size, label, type }: Props) => {
  const badgeStyles = useBadgeStyle({ type })
  return <Chip color={color} size={size} label={label} classes={badgeStyles} />
}

export default Badge
