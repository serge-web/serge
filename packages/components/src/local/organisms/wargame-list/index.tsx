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
  const searchByQuery = (listItem: { title: string }): boolean => {
    const { title } = listItem
    return title === '' || title.toLowerCase().includes(wargameQuery.toLowerCase())
  }
  const setQuery = (target: { value: string }): any => {
    setWargameQuery(target.value)
  }

  const openWargameMenu = async (title: string, menuRef: any): Promise<void> => {
    await setWargameMenuOpen(title)
    const menuEl = (menuRef || {}).current
    const parentEl = (menuEl || {}).parentElement
    const scrollEl = document.querySelector('.wargame-list__scrollbar')
    const { scrollHeight, offsetTop } = menuEl || {}
    const { offsetTop: parentElOffsetTop } = parentEl || {}
    const {
      height: scrollElHeight = '0',
      paddingBottom: parentElPaddingBottom = '0'
    } = scrollEl ? window.getComputedStyle(scrollEl) : {}
    const containerHeight = parseFloat(scrollElHeight) - parseFloat(parentElPaddingBottom)
    if (menuEl &&
      parentEl &&
      scrollHeight + offsetTop + parentElOffsetTop > containerHeight
    ) {
      menuEl.style.top = 'auto'
      menuEl.style.bottom = 0
    }
  }

  const renderContent = (): React.ReactNode => wargames.filter(searchByQuery).map((game, id) => {
    const gameTitleProps = {
      ...game,
      onClick: onGameClick
    }
    const optionMenuRef = useRef(null)
    return (
      <div
        className={styles['searchlist-title']}
        key={id}
      >
        <GameTitle {...gameTitleProps} />
        <FontAwesomeIcon
          icon={faEllipsisH}
          className={styles['wargame-option-menu-btn']}
          title="Wargame menu"
          onClick={async (): Promise<void> => await openWargameMenu(game.title, optionMenuRef)}
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
          className="wargame-list__scrollbar"
          verticalContainerStyle={{ borderRadius: '6px' }}
          verticalScrollbarStyle={{ borderRadius: '6px' }}
        >
          {renderContent()}
        </ScrollArea> : <div>{renderContent()}</div>}
      </div>
    </div>
  )
}

export default WargameList
