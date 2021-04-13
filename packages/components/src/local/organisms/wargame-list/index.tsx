import React, { useState, useRef } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEllipsisH } from '@fortawesome/free-solid-svg-icons'
import TextInput from '../../atoms/text-input'
import GameTitle from '../../atoms/game-title'
import OptionMenu from '../../molecules/option-menu'

/* Import Types */
import Props from './types/props'

/* Import Stylesheet */
import styles from './styles.module.scss'

const ScrollArea = require('react-scrollbar').default

/* Render component */
export const WargameList: React.FC<Props> = ({ wargames, menuConfig, onGameClick, useCustomScroll = false }: Props) => {
  const [wargameQuery, setWargameQuery] = useState('')
  const [wargameMenuOpen, setWargameMenuOpen] = useState('')
  const [scrollPos, setScrollPos] = useState<any>({})
  const searchByQuery = (listItem: { title: string }): boolean => {
    const { title } = listItem
    return title === '' || title.toLowerCase().includes(wargameQuery.toLowerCase())
  }
  const setQuery = (target: { value: string }): any => {
    setWargameQuery(target.value)
  }

  const openWargameMenu = async (title: string, menuRef: any, gameTitleRef: any): Promise<void> => {
    await setWargameMenuOpen(title)
    const menuEl = menuRef.current
    const gameTitleEl = (gameTitleRef || {}).current
    const parentEl = menuEl.parentElement
    const scrollEl = document.querySelector('.scrollarea-content')
    const { scrollHeight, offsetTop } = menuEl || {}
    const { offsetTop: parentElOffsetTop } = parentEl || {}
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

  const renderContent = (): React.ReactNode => wargames.filter(searchByQuery).map((game, id) => {
    const gameTitleProps = {
      ...game,
      onClick: onGameClick
    }
    const optionMenuRef = useRef(null)
    const gameTitleRef = useRef(null)
    return (
      <div
        className={styles['searchlist-title']}
        key={id}
      >
        <GameTitle {...gameTitleProps} ref={gameTitleRef} />
        <FontAwesomeIcon
          icon={faEllipsisH}
          className={styles['wargame-option-menu-btn']}
          title="Wargame menu"
          onClick={async (): Promise<void> => await openWargameMenu(game.title, optionMenuRef, gameTitleRef)}
        />
        {
          wargameMenuOpen === game.title && (
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
  })

  return (
    <div className={styles['wargame-searchlist']}>
      <TextInput
        fullWidth
        placeholder="Search games"
        updateState={setQuery}
        value={wargameQuery}
        variant="filled"
      />
      <div className={styles['searchlist-list']}>
        {useCustomScroll ? <ScrollArea
          className={'wargame-list__scrollbar'}
          verticalContainerStyle={{ borderRadius: '6px', opacity: 1, backgroundColor: 'transparent' }}
          verticalScrollbarStyle={{ borderRadius: '6px', backgroundColor: '#d3d3d3', opacity: 1 }}
          contentStyle={{ paddingRight: '15px' }}
          onScroll={setScrollPos}
        >
          {renderContent()}
        </ScrollArea> : <div>{renderContent()}</div>}
      </div>
    </div>
  )
}

export default WargameList
