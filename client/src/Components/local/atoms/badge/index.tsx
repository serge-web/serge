import React from 'react'
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles'
import Chip from '@material-ui/core/Chip'
import { isHexLight } from 'src/Helpers'
/* Import Types */
import Props, { CustomSize } from './types/props'

/* Render component */
const customSizeStyle = (size: CustomSize): any => {
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
      borderRadius: '5px',
      paddingTop: theme.spacing(0.25),
      paddingBottom: theme.spacing(0.25),
      backgroundColor: type ? (theme.palette[type] || {}).main : {},
      textTransform: allCaps ? 'uppercase' : {},
      ...customSizeStyle(customSize || 'large'),
      background: customBackgroundColor || {}
    }),
    sizeSmall: {
      height: '15px',
      fontSize: '.65rem'
    },
    label: ({ customBackgroundColor, outline, customColor }: Props) => {
      const useDark = outline || isHexLight(customBackgroundColor || '')
      return {
        color: customColor || (useDark ? '#000' : '#fff')
      }
    }
  })
)

export const Badge: React.FC<Props> = ({ color, size, label, type, allCaps, customSize, customBackgroundColor, customColor, title, outline }: Props) => {
  const badgeStyles = useBadgeStyle({ type, allCaps, customSize, customBackgroundColor, customColor, outline })
  return <Chip title={title} color={color} size={size} label={label} classes={badgeStyles} variant={outline ? 'outlined' : 'default'} />
}

Badge.defaultProps = {
  allCaps: true
}

export default Badge
