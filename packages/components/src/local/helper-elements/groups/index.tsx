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

/* Render component */
export const Groups: React.FC<PropTypes> = ({ items = [],  renderContent = () => '', maxDepth = 3, onSet }) => {

  const [dragItem, setDragItem] = useState<ReactText>('')
  const [hasParrent, setHasParrent] = useState<boolean>(false)

  const onStart = (i: DropzoneItem, hasParrent: boolean):void => { setDragItem(i.uniqid); setHasParrent(hasParrent) }
  const onEnd = ():void => { setDragItem('') }
  const handleSet = (items: Array<DropzoneItem>, type: type, depth: Array<Item> = []) => {
    if(onSet) onSet(items as Array<Item>, type, depth)
  }

  const checkdEmptyDropzone = (item: Item, subitems: Array<Item>): boolean => {
    if (dragItem && dragItem !== item.uniqid) {
      return !subitems.find((i: Item) => i.uniqId !== dragItem)
    }
    return false
  }

  const renderGroupItem = (item: Item, depth: Array<Item> = []) => {
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
        {checkdEmptyDropzone(item, subitems) && <Dropzone
          item={item}
          onEnd={onEnd}
          active={dragItem}
          onSet={(items: Array<DropzoneItem>, type: type) => handleSet(items, type, depth) }
        />}
        {subitems.length > 0 && <ul>{ subitems.map(item => <li key={item.uniqid}>{ renderGroupItem(item, [...depth, item]) }</li>) }</ul>}
      </CollapsibleContent>
    </Collapsible>)
  }

  return (
    <div className={styles.main}>
      <ul>{ items.map(item => <li key={item.uniqid}>{ renderGroupItem(item) }</li>) }</ul>
      {dragItem && hasParrent && <Dropzone
        item={{ uniqid: -1 }}
        onEnd={onEnd}
        active={dragItem}
        type='group-out'
        onSet={(items: Array<DropzoneItem>, type: type) => handleSet(items, type, []) }
      />}
    </div>
  )
}

Groups.displayName = 'Groups'

export default Groups
