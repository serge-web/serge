import React, { useState } from 'react'

// import cx from 'classnames'
/* Import helpers */
import Collapsible from '../collapsible'
import CollapsibleHeader from '../collapsible/header'
import CollapsibleContent from '../collapsible/content'
import Dropzone from '../dropzone'

/* Import proptypes */
import PropTypes, { NodeType } from './types/props'
import { GroupItem } from 'src/custom-types'
import { DropItem } from '../dropzone/types/props'

/* Import Styles */
import styles from './styles.module.scss'
import { TASK_GROUP } from 'src/config'

const defaulRender = (item: GroupItem, depth: Array<GroupItem>): React.ReactElement => <>name: {item.name}<br />depth: {depth.length}</>

/* Render component */
export const Groups: React.FC<PropTypes> = (props) => {
  const { items = [], renderContent = defaulRender, onSet, onDeleteAsset, selectedAssetItem, setList } = props
  const maxDepth = typeof props.maxDepth === 'undefined' ? 3 : props.maxDepth
  const canOrganise: boolean = props.canOrganise || false

  const [dragItem, setDragItem] = useState<GroupItem>({ uniqid: -1 })
  const [hasParrent, setHasParrent] = useState<boolean>(false)

  const onStart = (i: DropItem, hasParrent: boolean): void => { setDragItem({ ...i }); setHasParrent(hasParrent) }
  const onEnd = (): void => { setDragItem({ uniqid: -1 }) }
  const handleSet = (items: Array<DropItem>, type: NodeType, depth: Array<GroupItem> = []): void => {
    if (onSet) onSet(items as Array<GroupItem>, type, depth)
  }

  const canCombineWithDefault = (_dragItem: GroupItem, _item: GroupItem, _parents: Array<GroupItem>, _type: NodeType): boolean => {
    return true
  }

  const { canCombineWith = canCombineWithDefault } = props

  const canHostDefault = (_dragItem: GroupItem, _item: GroupItem, _parents: Array<GroupItem>, _type: NodeType): boolean => {
    // first do the general checks (same force, same cell)
    const suitable = canCombineWith(_dragItem, _item, _parents, _type)

    // now stop task groups from hosting anything
    return suitable && _item.platformType !== TASK_GROUP
  }

  const checkdEmptyDropzone = (item: GroupItem, subitems: Array<GroupItem>, parents: Array<GroupItem>): boolean => {
    if (dragItem.uniqid === item.uniqid) return false
    if (parents.length >= maxDepth) return false
    if (subitems.find((i: GroupItem) => i.uniqId === dragItem.uniqid)) return false
    return !!(dragItem.uniqid && dragItem.uniqid !== -1)
  }

  const deleteAsset = (item: GroupItem): void => {
    if (onDeleteAsset && setList) onDeleteAsset(setList, item)
  }

  const renderGroupItem = (item: GroupItem, depth: Array<GroupItem> = []): React.ReactElement | null => {
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

    return (<Collapsible collapseOnDragHover={true}>
      <CollapsibleHeader>
        {depth.length >= maxDepth ? renderContent(item, depth) : <Dropzone
          item={item}
          disable={!canCombineWith(dragItem, item, depth, 'group')}
          disableDrag={!canOrganise}
          onStart={(i: DropItem): void => onStart(i, depth.length > 0)}
          onEnd={onEnd}
          active={dragItem.uniqid}
          type='group'
          group={props.group}
          onSet={(items: Array<DropItem>, type: NodeType): void => handleSet(items, type, depth)}
        >
          {renderContent(item, depth)}
        </Dropzone>}
      </CollapsibleHeader>
      <CollapsibleContent useIndent={40}>
        {checkdEmptyDropzone(item, subitems, depth) && <Dropzone
          disable={!canHostDefault(dragItem, item, depth, 'empty')}
          item={item}
          onEnd={onEnd}
          active={dragItem.uniqid}
          group={props.group}
          onSet={(items: Array<DropItem>, type: NodeType): void => handleSet(items, type, depth)}
        />}
        {subitems.length > 0 && <ul>{subitems.map(i => <li key={i.uniqid}>{renderGroupItem(i, [...depth, item])}</li>)}</ul>}
      </CollapsibleContent>
    </Collapsible>)
  }

  return (
    <div className={styles.main}>
      <ul>
        {items.map(i =>
          <li key={i.uniqid}>
            {renderGroupItem(i)}
            {onDeleteAsset && setList && <p className={styles['delete-asset']} style={{ color: selectedAssetItem?.uniqid === i.uniqid ? '#dfdfdf' : '#7a7a7a' }} onClick={(): void => deleteAsset(i)}>&#10006;</p>}
          </li>
        )}
      </ul>
      {dragItem.uniqid && dragItem.uniqid !== -1 && hasParrent && <Dropzone
        disable={!canCombineWith(dragItem, { uniqid: -1 }, [], 'empty')}
        item={{ uniqid: -1 }}
        onEnd={onEnd}
        active={dragItem.uniqid}
        type='group-out'
        group={props.group}
        onSet={(items: Array<DropItem>, type: NodeType): void => handleSet(items, type, [])}
      />}
    </div>
  )
}

Groups.displayName = 'Groups'

export default Groups
