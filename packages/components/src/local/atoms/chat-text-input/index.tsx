import React, { useState } from 'react'
import { FilledInputProps, TextField, fade } from '@material-ui/core'
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles'
import InputContainer from '../input-container'

/* Import proptypes */
import PropTypes from './types/props'

const useFilledStyle = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      backgroundColor: 'rgba(255, 255, 255, 0.85)',
      borderRadius: '8px',
      '&.Mui-focused': {
        backgroundColor: fade(theme.palette.common.white, 0.75)
      },
      '&:hover': {
        backgroundColor: fade(theme.palette.common.white, 0.75)
      },
      '&:focus': {
        backgroundColor: fade(theme.palette.common.white, 0.95)
      }
    },
    input: {
      padding: theme.spacing(1.5),
      height: 'auto'
    },
    multiline: {
      padding: 0
    }
  })
)

/* Render component */
export const ChatTextInput: React.FC<PropTypes> = ({
  multiline,
  rows,
  rowsMax,
  variant,
  value,
  updateState,
  className,
  placeholder,
  fullWidth
}) => {
  const [inputValue, setInputValue] = useState(value)
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setInputValue(event.target.value)
    updateState(event.target)
  }
  const isFilled = variant === 'filled'
  const filledClasses = useFilledStyle()

  return (
    <InputContainer
      className={className}
      disableOffset={true}
    >
      <TextField
        InputProps={{
          classes: isFilled ? filledClasses : {},
          disableUnderline: isFilled
        } as Partial<FilledInputProps>}
        {...{
          multiline,
          rows,
          rowsMax,
          value: inputValue,
          onChange: handleChange,
          placeholder,
          fullWidth,
          variant
        }}
      />
    </InputContainer>
  )
}

export default ChatTextInput
