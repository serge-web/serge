import React, { FC, useRef } from 'react'

/* Import Types */
import { ContentProps } from './types/props'

/* Import Stylesheet */
import styles from '../styles.module.scss'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEllipsisH } from '@fortawesome/free-solid-svg-icons'
import GameTitle from '../../../atoms/game-title'
import OptionMenu from '../../../molecules/option-menu'

export const RenderContent: FC<ContentProps> = ({ setWargameMenuOpen, scrollPos, game, onGameClick, wargameMenuOpen, menuConfig }): React.ReactElement => {
  const optionMenuRef = useRef(null)
  const gameTitleRef = useRef(null)

  const gameTitleProps = {
    ...game,
    onClick: onGameClick
  }

  const openWargameMenu = async (name: string, menuRef: any, gameTitleRef: any): Promise<void> => {
    await setWargameMenuOpen(name)
    const menuEl = menuRef.current
    const gameTitleEl = (gameTitleRef || {}).current
    const parentEl = menuEl.parentElement
    const scrollEl = document.querySelector('.scrollarea-content')
    const { scrollHeight, offsetTop } = menuEl
    const { offsetTop: parentElOffsetTop } = parentEl
    const {
      height: scrollElHeight = '0',
      paddingBottom: parentElPaddingBottom = '0'
    } = scrollEl ? window.getComputedStyle(scrollEl) : {}
    const containerHeight = parseFloat(scrollElHeight) - parseFloat(parentElPaddingBottom)
    const menuElLeft = gameTitleEl.getBoundingClientRect().width + 40
    const totalHeight = parseInt(parentEl.getBoundingClientRect().y + parentEl.getBoundingClientRect().height)
    const totalHeightWithScroll = parseInt(scrollPos.containerHeight + scrollEl?.getBoundingClientRect().y + (scrollPos.topPosition || 0))
    const menuPlacementDiff = totalHeight - totalHeightWithScroll

    if (scrollHeight + offsetTop + parentElOffsetTop > containerHeight) {
      menuEl.style.top = 'auto'
      menuEl.style.bottom = (menuPlacementDiff < 0 ? 0 : menuPlacementDiff) + 'px'
    }
    menuEl.style.left = menuElLeft + 'px'
  }

  return (
    <div className={styles['searchlist-title']}>
      <GameTitle {...gameTitleProps} ref={gameTitleRef} />
      <FontAwesomeIcon
        icon={faEllipsisH}
        className={styles['wargame-option-menu-btn']}
        title="Wargame menu"
        onClick={async (): Promise<void> => await openWargameMenu(game.name, optionMenuRef, gameTitleRef)}
      />
      {
        wargameMenuOpen === game.name && (
          <div ref={optionMenuRef} className={styles['contain-option-menu']}>
            <div
              className={styles['wargame-option-menu-bg']}
              onClick={(): void => setWargameMenuOpen('')}
            >&nbsp;</div>
            <OptionMenu
              menus={menuConfig}
              gameName={game.name}
              onHideMenu={(): void => setWargameMenuOpen('')}
            />
          </div>
        )
      }
    </div>
  )
}

export default RenderContent
