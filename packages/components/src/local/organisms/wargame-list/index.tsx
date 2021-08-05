import React, { useState } from 'react'
import TextInput from '../../atoms/text-input'
import { RenderContent } from './helpers/renderContent'
import {
  faEyeSlash,
  faEye
} from '@fortawesome/free-solid-svg-icons'

/* Import Types */
import Props from './types/props'

/* Import Stylesheet */
import styles from './styles.module.scss'
import { MenuItem } from 'src/local/molecules/option-menu/types/props'
import { hiddenPrefix } from '@serge/config'

const ScrollArea = require('react-scrollbar').default

/* Render component */
export const WargameList: React.FC<Props> = ({ wargames, menuConfig, onGameClick, toggleAction, useCustomScroll = false }: Props) => {
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

  const appendMenuConfig = (game: any): MenuItem[] => {
    const showHideMenu: any = {}
    const hideMode = game.shortName && game.shortName.startsWith(hiddenPrefix)
    showHideMenu.title = hideMode ? 'Visible' : 'Hidden'
    showHideMenu.label = hideMode ? 'Show wargame' : 'Hide wargame'
    showHideMenu.icon = hideMode ? faEye : faEyeSlash
    showHideMenu.onClick = toggleAction
    const cloneMenu = menuConfig.slice()
    cloneMenu.push(showHideMenu)
    return cloneMenu
  }

  const renderContent = (): React.ReactNode => wargames.filter(searchByQuery).map((game, id) => {
    const menu = appendMenuConfig(game)
    return <RenderContent
      key={id}
      id={id}
      game={game}
      menuConfig={menu}
      wargameMenuOpen={wargameMenuOpen}
      onGameClick={onGameClick}
      setWargameMenuOpen={setWargameMenuOpen}
      scrollPos={scrollPos}
    />
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
