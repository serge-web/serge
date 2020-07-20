import React, { useState, ReactText } from 'react'

// import cx from 'classnames'
/* Import helpers */
import Collapsible from '../collapsible'
import CollapsibleHeader from '../collapsible/header'
import CollapsibleContent from '../collapsible/content'
import Dropzone from '../dropzone'

/* Import proptypes */
import PropTypes, { Item, type } from './types/props'
import { Item as DropzoneItem } from '../dropzone/types/props'

/* Import Styles */
import styles from './styles.module.scss'

const defaulRender = (item: Item, depth: Array<Item>): JSX.Element => <>name: {item.name}<br/>depth: {depth.length}</>

/* Render component */
export const Groups: React.FC<PropTypes> = (props) => {
  const { items = [], renderContent = defaulRender, onSet } = props
  const maxDepth = typeof props.maxDepth === 'undefined' ? 3 : props.maxDepth

  const [dragItem, setDragItem] = useState<ReactText>('')
  const [hasParrent, setHasParrent] = useState<boolean>(false)

  const onStart = (i: DropzoneItem, hasParrent: boolean): void => { setDragItem(i.uniqid); setHasParrent(hasParrent) }
  const onEnd = (): void => { setDragItem('') }
  const handleSet = (items: Array<DropzoneItem>, type: type, depth: Array<Item> = []): void => {
    if (onSet) onSet(items as Array<Item>, type, depth)
  }

  const checkdEmptyDropzone = (item: Item, subitems: Array<Item>, parents: Array<Item>): boolean => {
    if (dragItem === item.uniqid) return false
    if (parents.length >= maxDepth) return false
    if (subitems.find((i: Item) => i.uniqId === dragItem)) return false
    return !!dragItem
  }

  const renderGroupItem = (item: Item, depth: Array<Item> = []): JSX.Element | null => {
    // const itemInsideOf: Item | undefined = items.find(i => Array.isArray(i.comprising) && i.comprising.find(({ uniqid }) => uniqid === item.uniqid))

    // on first level not render items inside of comprising
    if (depth.length === 0) {
      const isItemIncludes = items.findIndex(i => (
        Array.isArray(i.comprising) &&
        !!i.comprising.find(({ uniqid }) => uniqid === item.uniqid)
      ))
      if (isItemIncludes > -1) return null
    }

    // get subitems
    const subitems = [...(item.comprising || []), ...(item.hosting || [])]

    return (<Collapsible openByDefault={!subitems.length}>
      <CollapsibleHeader>
        {depth.length >= maxDepth ? renderContent(item, depth) : <Dropzone
          item={item}
          onStart={(i: DropzoneItem) => onStart(i, depth.length > 0)}
          onEnd={onEnd}
          active={dragItem}
          type='group'
          onSet={(items: Array<DropzoneItem>, type: type) => handleSet(items, type, depth) }
        >
          {renderContent(item, depth)}
        </Dropzone>}
      </CollapsibleHeader>
      <CollapsibleContent useIndent={40}>
        {checkdEmptyDropzone(item, subitems, depth) && <Dropzone
          item={item}
          onEnd={onEnd}
          active={dragItem}
          onSet={(items: Array<DropzoneItem>, type: type): void => handleSet(items, type, depth) }
        />}
        {subitems.length > 0 && <ul>{subitems.map(i => <li key={i.uniqid}>{ renderGroupItem(i, [...depth, item]) }</li>) }</ul>}
      </CollapsibleContent>
    </Collapsible>)
  }

  return (
    <div className={styles.main}>
      <ul>{ items.map(i => <li key={i.uniqid}>{ renderGroupItem(i) }</li>) }</ul>
      {dragItem && hasParrent && <Dropzone
        item={{ uniqid: -1 }}
        onEnd={onEnd}
        active={dragItem}
        type='group-out'
        onSet={(items: Array<DropzoneItem>, type: type): void => handleSet(items, type, []) }
      />}
    </div>
  )
}

Groups.displayName = 'Groups'

export default Groups
