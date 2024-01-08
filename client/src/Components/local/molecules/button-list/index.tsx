import React from 'react'
import Button from '../../atoms/button'

/* Import Types */
import cx from 'classnames'
import styles from './styles.module.scss'
import { Props } from './types/props'

/* Render component */
export const ButtonList: React.FC<Props> = ({ buttons }: Props) => {
  const hasFullWidth = buttons.some(button => button.fullWidth)

  return (
    <div className={cx(styles['button-list'], `${hasFullWidth ? 'button-list-fullwidth' : ''}`)}>
      {
        buttons.map((buttonProps, id) => (
          <Button {...buttonProps} key={id} />
        ))
      }
    </div>
  )
}

export default ButtonList
