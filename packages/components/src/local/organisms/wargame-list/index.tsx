import React, { useState } from 'react'
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

  const renderContent = (): React.ReactNode => wargames.filter(searchByQuery).map((game, id) => {
    const gameTitleProps = {
      ...game,
      onClick: onGameClick
    }
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
          onClick={(): void => setWargameMenuOpen(game.title)}
        />
        {
          wargameMenuOpen === game.title && (
            <div className={styles['contain-option-menu']}>
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
<<<<<<< HEAD
      {useCustomScroll ? <ScrollArea
=======
        {useCustomScroll ? <ScrollArea
>>>>>>> ffeaee1ee15bfe1a68accae5585e06395a2a7d1d
          verticalContainerStyle={{ borderRadius: '6px' }}
          verticalScrollbarStyle={{ borderRadius: '6px' }}
        >
          {renderContent()}
<<<<<<< HEAD
        </ScrollArea> : <div>{renderContent()}</div>}
=======
        </ScrollArea> : <div>{renderContent()}</div>}
>>>>>>> ffeaee1ee15bfe1a68accae5585e06395a2a7d1d
      </div>
    </div>
  )
}

export default WargameList
