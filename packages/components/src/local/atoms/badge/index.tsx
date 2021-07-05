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
const isHexLight = (color: string) => {
  const hex = color.replace('#', '')
  const red = parseInt(hex.substr(0, 2), 16)
  const green = parseInt(hex.substr(2, 2), 16)
  const blue = parseInt(hex.substr(4, 2), 16)
  const brightness = ((red * 299) + (green * 587) + (blue * 114)) / 1000
  return brightness > 155
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
    label: ({ customBackgroundColor }: Props) => {
      return {
        color: isHexLight(customBackgroundColor || '') ? '#000' : '#fff'
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
