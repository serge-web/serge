import React from 'react'
import ReactModal from 'react-modal'

export default interface Props {
  title?: string
  /** text to display in popup */
  description: string
  children?: React.ReactNode
  /** (optional) color for icon */
  color?: string
  container?: ReactModal | HTMLElement | null
  customChipStyle?: React.CSSProperties
}
