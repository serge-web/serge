import React, { useState } from 'react'
import { createStyles, Theme, withStyles, WithStyles } from '@material-ui/core/styles'
import Button from '@material-ui/core/Button'
import Dialog from '@material-ui/core/Dialog'
import MuiDialogTitle from '@material-ui/core/DialogTitle'
import MuiDialogContent from '@material-ui/core/DialogContent'
import MuiDialogActions from '@material-ui/core/DialogActions'
import IconButton from '@material-ui/core/IconButton'
import CloseIcon from '@material-ui/icons/Close'
import Typography from '@material-ui/core/Typography'

/* Import Types */
import { Props } from './types/props'
import { StyleRules } from '@material-ui/styles'
import Textarea from '../textarea'

const styles = (theme: Theme): StyleRules =>
  createStyles({
    root: {
      margin: 0,
      padding: theme.spacing(2),
      backgroundColor: theme.palette.secondary.main,
      color: 'white'
    },
    closeButton: {
      position: 'absolute',
      right: theme.spacing(1),
      top: theme.spacing(1)
    }
  })

export interface DialogTitleProps extends WithStyles<typeof styles> {
  id: string
  children: React.ReactNode
  onClose: () => void
}

const DialogTitle = withStyles(styles)((props: DialogTitleProps) => {
  const { children, classes, onClose, ...other } = props
  return (
    <MuiDialogTitle disableTypography className={classes.root} {...other}>
      <Typography variant="h6">{children}</Typography>
      {onClose ? (
        <IconButton aria-label="close" className={classes.closeButton} onClick={onClose}>
          <CloseIcon />
        </IconButton>
      ) : null}
    </MuiDialogTitle>
  )
})

const DialogContent = withStyles((theme: Theme) => ({
  root: {
    padding: theme.spacing(2)
  }
}))(MuiDialogContent)

const DialogActions = withStyles((theme: Theme) => ({
  root: {
    margin: 0,
    padding: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main
  }
}))(MuiDialogActions)

/* Render component */
export const DialogModal: React.FC<Props> = ({ title, value = '', open, onSave, onClose, onValueChange, placeholder }: Props) => {
  const [text, setText] = useState<string>(value)
  const handleClose = (): void => {
    setText('')
    onClose && onClose()
  }

  const handleSave = (): void => {
    onSave && onSave(text)
  }

  const onTextChange = (data: string): void => {
    setText(data)
    onValueChange && onValueChange(data)
  }

  return (
    <div>
      <Dialog maxWidth={'xs'} fullWidth={true} onClose={handleClose} aria-labelledby="customized-dialog-title" open={open}>
        <DialogTitle id="customized-dialog-title" onClose={handleClose}>
          {title}
        </DialogTitle>
        <DialogContent dividers>
          <Textarea value={text} onChange={onTextChange} placeholder={placeholder} />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} style={{ color: 'white' }}>
            Cancel
          </Button>
          <Button autoFocus onClick={handleSave} style={{ color: 'white' }}>
            Send
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  )
}

export default DialogModal
