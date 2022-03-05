import React from 'react'

export default interface Props {
  /** text to display in popup */
  description: string
  children: React.ReactNode
  /** (optional) color for icon */
  color?: string
  container: ReactModal | HTMLElement | null
};
