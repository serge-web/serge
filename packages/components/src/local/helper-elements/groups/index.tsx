import React, { useState, ReactText } from 'react'

// import cx from 'classnames'
/* Import helpers */
import Collapsible from '../collapsible'
import CollapsibleHeader from '../collapsible/header'
import CollapsibleContent from '../collapsible/content'
import Dropzone from '../dropzone'

/* Import proptypes */
import PropTypes, { GroupItem, NodeType } from './types/props'
import { DropItem } from '../dropzone/types/props'

/* Import Styles */
import styles from './styles.module.scss'

const defaulRender = (item: GroupItem, depth: Array<GroupItem>): JSX.Element => <>name: {item.name}<br/>depth: {depth.length}</>

/* Render component */
export const Groups: React.FC<PropTypes> = (props) => {
  const { items = [], renderContent = defaulRender, onSet } = props
  const maxDepth = typeof props.maxDepth === 'undefined' ? 3 : props.maxDepth

  const [dragItem, setDragItem] = useState<ReactText>('')
  const [hasParrent, setHasParrent] = useState<boolean>(false)

  const onStart = (i: DropItem, hasParrent: boolean): void => { setDragItem(i.uniqid); setHasParrent(hasParrent) }
  const onEnd = (): void => { setDragItem('') }
  const handleSet = (items: Array<DropItem>, type: NodeType, depth: Array<GroupItem> = []): void => {
    if (onSet) onSet(items as Array<GroupItem>, type, depth)
  }

  const checkdEmptyDropzone = (item: GroupItem, subitems: Array<GroupItem>, parents: Array<GroupItem>): boolean => {
    if (dragItem === item.uniqid) return false
    if (parents.length >= maxDepth) return false
    if (subitems.find((i: GroupItem) => i.uniqId === dragItem)) return false
    return !!dragItem
  }

  const renderGroupItem = (item: GroupItem, depth: Array<GroupItem> = []): JSX.Element | null => {
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
          onStart={(i: DropItem): void => onStart(i, depth.length > 0)}
          onEnd={onEnd}
          active={dragItem}
          type='group'
          onSet={(items: Array<DropItem>, type: NodeType): void => handleSet(items, type, depth) }
        >
          {renderContent(item, depth)}
        </Dropzone>}
      </CollapsibleHeader>
      <CollapsibleContent useIndent={40}>
        {checkdEmptyDropzone(item, subitems, depth) && <Dropzone
          item={item}
          onEnd={onEnd}
          active={dragItem}
          onSet={(items: Array<DropItem>, type: NodeType): void => handleSet(items, type, depth) }
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
        onSet={(items: Array<DropItem>, type: NodeType): void => handleSet(items, type, []) }
      />}
    </div>
  )
}

Groups.displayName = 'Groups'

export default Groups
