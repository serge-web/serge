import React from 'react'
import { kebabCase } from 'lodash'

import InputContainer from '../../input-container'
import { FilledInputProps, TextField, fade } from '@material-ui/core'
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles'

/* Import proptypes */
import PropTypes from './types/props'

const useFilledStyle = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      backgroundColor: theme.palette.common.white,
      borderRadius: '8px',
      '&:hover': {
        backgroundColor: fade(theme.palette.common.white, 0.75)
      },
      '&:focus': {
        backgroundColor: fade(theme.palette.common.white, 0.95)
      }
    },
    input: {
      padding: theme.spacing(2),
      height: 'auto'
    }
  })
)

/* Render component */
export const TextInput: React.FC<PropTypes> = ({ label, name, variant, value, multiline, rows, rowsMax, updateState, className, placeholder, fullWidth }) => {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    updateState(event.target)
  }

  const inputName = name || kebabCase(label)
  const isFilled = variant === 'filled'
  const filledClasses = useFilledStyle()

  return (
    <InputContainer label={label} className={className}>
      <TextField
        InputProps={{
          classes: isFilled ? filledClasses : {},
          disableUnderline: isFilled
        } as Partial<FilledInputProps>}
        {...{
          multiline,
          rows,
          rowsMax,
          name: inputName,
          value,
          onChange: handleChange,
          placeholder,
          fullWidth,
          variant
        }}
      />
    </InputContainer>
  )
}

export default TextInput
