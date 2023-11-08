import React from 'react'
import { makeStyles, createStyles, Theme, alpha } from '@material-ui/core/styles'
import Chip, { ChipProps } from '@material-ui/core/Chip'

/* Render component */
const useMessageLabelStyle = makeStyles((theme: Theme) =>
  createStyles({
    root: () => ({
      backgroundColor: alpha(theme.palette.common.white, 0.25),
      borderRadius: 2
    }),
    sizeSmall: {
      height: '18px',
      fontSize: '.75rem'
    },
    labelSmall: {
      paddingLeft: theme.spacing(0.5),
      paddingRight: theme.spacing(0.5)
    }
  })
)

export const MessageLabel: React.FC<ChipProps> = ({ color, label }: ChipProps) => {
  const badgeStyles = useMessageLabelStyle()
  return <Chip color={color} size="small" label={label} classes={badgeStyles} />
}

export default MessageLabel
