import React from 'react'

export default interface PropTypes {
  onClick?: (e: React.MouseEvent<HTMLImageElement>) => void
  useIndent?: boolean | number
  collapsed?: boolean
}
