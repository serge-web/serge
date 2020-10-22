import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

/* Import Types */
import Props, { MenuItem } from './types/props'

/* Import Stylesheet */
import styles from './styles.module.scss'

/* Render component */
export const OptionMenu: React.FC<Props> = ({ menus, gameName, onHideMenu }: Props) => {
  const onMenuClick = (menu: MenuItem): void => {
    onHideMenu && onHideMenu()
    menu.onClick(gameName)
  }
  return (
    <div className={styles['wargame-option-menu']}>
      {menus.length > 0 && menus.map((menu, id) => {
        return (
          <span key={id} onClick={(): void => onMenuClick(menu)}>
            <FontAwesomeIcon icon={menu.icon} title={menu.title} />
            {menu.label}
          </span>
        )
      })}
    </div>
  )
}

export default OptionMenu
