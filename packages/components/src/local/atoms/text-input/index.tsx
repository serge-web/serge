import React, { useState } from 'react'
import { kebabCase } from 'lodash'
import { FilledInputProps, TextField, fade } from '@material-ui/core'
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles'
import InputContainer from '../input-container'

/* Import proptypes */
import { PropTypes } from './types/props'

const useFilledStyle = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      backgroundColor: theme.palette.common.white,
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

const useBaseStyle = makeStyles((theme: Theme) => {
  const generateColor = (color: string): string => {
    return color.split('.').reduce((o: any, i: string | number) => o[i], theme.palette)
  }
  return createStyles({
    root: ({ customColor }: PropTypes) => customColor ? { color: generateColor(customColor) } : {},
    underline: ({ customColor }: PropTypes) => customColor ? {
      '&:after': {
        borderBottomColor: generateColor(customColor)
      },
      '&:before': {
        borderBottomColor: generateColor(customColor)
      },
      '&:hover:not(.Mui-disabled):before': {
        borderBottomColor: generateColor(customColor)
      }
    } : {}
  })
})

/* Render component */
export const TextInput: React.FC<PropTypes> = ({
  label,
  labelSize,
  labelColor,
  customColor,
  name,
  variant,
  value,
  multiline,
  rows,
  rowsMax,
  updateState,
  className,
  placeholder,
  fullWidth,
  ...inputProps
}) => {
  const [inputValue, setInputValue] = useState(value)
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setInputValue(event.target.value)
    updateState(event.target)
  }
  const inputName = name || kebabCase(label)
  const isFilled = variant === 'filled'
  const filledClasses = useFilledStyle()
  const baseClasses = useBaseStyle({ customColor })

  return (
    <InputContainer
      label={label}
      labelColor={labelColor}
      labelSize={labelSize}
      className={className}
      disableOffset={true}
    >
      <TextField
        InputProps={{
          classes: isFilled ? filledClasses : baseClasses,
          disableUnderline: isFilled
        } as Partial<FilledInputProps>}
        {...{
          multiline,
          rows,
          rowsMax,
          name: inputName,
          value: inputValue,
          onChange: handleChange,
          placeholder,
          fullWidth,
          variant
        }}
        {...inputProps}
      />
    </InputContainer>
  )
}

export default TextInput
