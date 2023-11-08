import React from 'react'
import Button from '../../atoms/button'

/* Import Types */
import { Props } from './types/props'

/* Render component */
export const ButtonList: React.FC<Props> = ({ buttons }: Props) => {
  const hasFullWidth = buttons.some(button => button.fullWidth)

  return (
    <div className={`${hasFullWidth ? 'button-list-fullwidth' : ''}`}>
      {
        buttons.map((buttonProps, id) => (
          <Button {...buttonProps} key={id} />
        ))
      }
    </div>
  )
}

export default ButtonList
