import {
  faEye, faEyeSlash
} from '@fortawesome/free-solid-svg-icons'
import React, { useState } from 'react'
import TextInput from '../../atoms/text-input'
import { RenderContent } from './helpers/renderContent'

/* Import Types */
import Props from './types/props'

/* Import Stylesheet */
import { hiddenPrefix } from 'src/config'
import ScrollArea from 'react-scrollbar'
import { MenuItem } from '../../molecules/option-menu/types/props'
import styles from './styles.module.scss'

/* Render component */
export const WargameList: React.FC<Props> = ({ wargames, menuConfig, onGameClick, toggleAction, useCustomScroll = false }: Props) => {
  const [wargameQuery, setWargameQuery] = useState('')
  const [wargameMenuOpen, setWargameMenuOpen] = useState('')
  const [scrollPos, setScrollPos] = useState<any>({})

  const searchByQuery = (listItem: { title: string }): boolean => {
    const { title } = listItem
    if (title && wargameQuery) {
      return title.toLowerCase().includes(wargameQuery.toLowerCase())
    } else {
      // note: diagnostics, to help understand which one is failing
      if (!title) {
        console.warn('WARNING: title field is missing in searchByQuery')
      }
      // Note: workaround for runtime crash, whether either title or wargameQuery is undefined
      // If the query object is empty, then there isn't a query.
      // If the game has an empty title, we need to display it, so the player can open it, to set a title.
      return true
    }
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
