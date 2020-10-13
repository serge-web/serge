import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

/* Import Types */
import Props from './types/props'

/* Import Stylesheet */
import styles from './styles.module.scss'

/* Render component */
export const OptionMenu: React.FC<Props> = ({ menus, gameTitle }: Props) => {
  return (
    <div className={styles['wargame-option-menu']}>
      {menus.length && menus.map(menu => {
        return (
          <span onClick={(): void => menu.onClick(gameTitle)}>
            <FontAwesomeIcon icon={menu.icon} title={menu.title} />
            {menu.label}
          </span>
        )
      })}
    </div>
  )
}

export default OptionMenu
