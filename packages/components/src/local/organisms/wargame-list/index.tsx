import React, { useState } from 'react'
import TextInput from '../../atoms/text-input'
import { RenderContent } from './helpers/renderContent'

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

  const renderContent = (): React.ReactNode => wargames.filter(searchByQuery).map((game, id) => {
    return <RenderContent
      key={id}
      id={id}
      game={game}
      menuConfig={menuConfig}
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
