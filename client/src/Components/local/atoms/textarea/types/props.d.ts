import React from 'react'
import { TEXTAREA_DARK, TEXTAREA_LIGHT } from '../'

export default interface PropTypes {
  fitContent?: boolean
  value: string
  onChange?: (nextValue: string) => void
  label?: string
  disabled?: boolean
  theme?: typeof TEXTAREA_DARK | typeof TEXTAREA_LIGHT
  labelFactory?: (inputid: string, label: string) => React.ReactNode
  rows?: number
  id?: string
  placeholder?: string
}
