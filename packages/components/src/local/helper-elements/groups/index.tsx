import React, { useState } from 'react'

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
// import styles from './styles.module.scss'

/* Render component */
export const Groups: React.FC<PropTypes> = ({ items = [],  renderContent = () => '', maxDepth = 3, onSet }) => {

  const [dragItem, setDragItem] = useState<string | number>('')

  const onStart = (i: DropzoneItem):void => { setDragItem(i.uniqid) }
  const onEnd = ():void => { setDragItem('') }
  const handleSet = (items: Array<DropzoneItem>, type: type) => {
    if(onSet) onSet(items as Array<Item>, type)
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
          onStart={onStart}
          onEnd={onEnd}
          active={dragItem}
          type='group'
          onSet={handleSet}
        >
          {renderContent(item, depth)}
        </Dropzone>}
      </CollapsibleHeader>
      <CollapsibleContent useIndent={40}>
        {dragItem && dragItem !== item.uniqid && <Dropzone
          item={item}
          onStart={onStart}
          onEnd={onEnd}
          active={dragItem}
          onSet={handleSet}
        />}
        {subitems.length > 0 && <ul>{ subitems.map(item => <li key={item.uniqid}>{ renderGroupItem(item, [item, ...depth]) }</li>) }</ul>}
      </CollapsibleContent>
    </Collapsible>)
  }

  return (
    <ul>{ items.map(item => <li>{ renderGroupItem(item) }</li>) }</ul>
  )
}

Groups.displayName = 'Groups'

export default Groups
