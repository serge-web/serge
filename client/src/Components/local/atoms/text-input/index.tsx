import React, { useState, useRef, useEffect } from 'react'
import { kebabCase } from 'lodash'
import { FilledInputProps, TextField, alpha } from '@material-ui/core'
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles'
import InputContainer from '../input-container'

/* Import proptypes */
import { PropTypes } from './types/props'

const useFilledStyle = makeStyles<Theme>((theme) =>
  createStyles({
    root: {
      backgroundColor: theme.palette.common.white,
      borderRadius: '8px',
      '&.Mui-focused': {
        backgroundColor: alpha(theme.palette.common.white, 0.75)
      },
      '&:hover': {
        backgroundColor: alpha(theme.palette.common.white, 0.75)
      },
      '&:focus': {
        backgroundColor: alpha(theme.palette.common.white, 0.95)
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
    root: ({ customColor, titleInput }: PropTypes) => {
      const inputColor = customColor === 'transparent' ? 'secondary.main' : customColor
      const colorProps = customColor ? { color: generateColor(String(inputColor)) } : {}
      const sizeProps = titleInput ? { fontSize: '1.85em' } : {}
      return {
        ...colorProps,
        ...sizeProps
      }
    },
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
  maxRows,
  updateState,
  className,
  placeholder,
  fullWidth,
  titleInput,
  endAdornment,
  isPrivate,
  ...inputProps
}) => {
  const containerRef = useRef<HTMLElement>(null)
  const [inputValue, setInputValue] = useState(value)
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setInputValue(event.target.value)
    updateState(event.target)
  }
  const handleFocus = (): void => {
    containerRef.current && containerRef.current.classList.add('input-container--focused')
  }
  const handleBlur = (): void => {
    containerRef.current && containerRef.current.classList.remove('input-container--focused')
  }
  const inputName = name || kebabCase(label)
  const isFilled = variant === 'filled'
  const filledClasses = useFilledStyle()
  const baseClasses = useBaseStyle({ customColor, titleInput })

  useEffect(() => {
    setInputValue(value)
  }, [value])

  return (
    <InputContainer
      label={label}
      labelColor={labelColor}
      labelSize={labelSize}
      className={className}
      disableOffset={true}
      ref={containerRef}
      fullWidth={fullWidth}
      isPrivate={isPrivate}
    >
      <TextField
        InputProps={{
          classes: isFilled ? filledClasses : baseClasses,
          disableUnderline: isFilled,
          endAdornment: endAdornment
        } as Partial<FilledInputProps>}
        {...{
          multiline,
          rows,
          maxRows,
          name: inputName,
          value: inputValue,
          onChange: handleChange,
          onFocus: handleFocus,
          onBlur: handleBlur,
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
