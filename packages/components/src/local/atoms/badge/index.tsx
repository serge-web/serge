import React from 'react'
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles'
import Chip from '@material-ui/core/Chip'

/* Import Types */
import Props, { CustomSize } from './types/props'

/* Render component */
const customSizeStyle = (size: CustomSize): object => {
  switch (size) {
    case 'large':
      return {
        height: '40px',
        borderRadius: '5px',
        fontSize: '1rem'
      }
    default:
      return {}
  }
}
const useBadgeStyle = makeStyles((theme: Theme) =>
  createStyles({
    root: ({ type, allCaps, customSize, customBackgroundColor }: Props) => ({
      marginLeft: theme.spacing(1),
      fontWeight: 700,
      paddingTop: theme.spacing(0.25),
      paddingBottom: theme.spacing(0.25),
      ...type ? { backgroundColor: (theme.palette[type] || {}).main } : {},
      ...allCaps ? { textTransform: 'uppercase' } : {},
      ...customSize ? customSizeStyle(customSize) : {},
      ...customBackgroundColor ? { backgroundColor: customBackgroundColor } : {}
    }),
    sizeSmall: {
      height: '15px',
      fontSize: '.65rem'
    },
    label: ({ type, customColor }: Props) => {
      const lightBg = type && ['warning'].includes(type)
      const defaultColor = theme.palette.common[lightBg ? 'black' : 'white']
      return {
        color: customColor || defaultColor
      }
    }
  })
)

export const Badge: React.FC<Props> = ({ color, size, label, type, allCaps, customSize, customBackgroundColor, customColor }: Props) => {
  const badgeStyles = useBadgeStyle({ type, allCaps, customSize, customBackgroundColor, customColor })
  return <Chip color={color} size={size} label={label} classes={badgeStyles} />
}

Badge.defaultProps = {
  allCaps: true
}

export default Badge
