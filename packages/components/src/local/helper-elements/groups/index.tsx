import React from 'react'

// import cx from 'classnames'
/* Import helpers */
import Collapsible from '../collapsible'
import CollapsibleHeader from '../collapsible/header'
import CollapsibleContent from '../collapsible/content'
import Dropzone from '../dropzone'

/* Import proptypes */
import PropTypes, { Item } from './types/props'

/* Import Styles */
// import styles from './styles.module.scss'

/* Render component */
export const Groups: React.FC<PropTypes> = ({ items = [], maxDepth = 3, renderContent = () => '' }) => {

  const showDropZone = true;

  const renderGroupItem = (item: Item, depth: Array<Item> = []) => {
    // const itemInsideOf: Item | undefined = items.find(i => Array.isArray(i.comprising) && i.comprising.find(({ uniqid }) => uniqid === item.uniqid))
    console.log(maxDepth);


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
      <CollapsibleHeader><Dropzone item={item}>{renderContent(item, depth)}</Dropzone></CollapsibleHeader>
      <CollapsibleContent>
        {showDropZone && <Dropzone item={item}/>}
        {subitems.length > 0 && <ul>{ subitems.map(item => <li>{ renderGroupItem(item, [item, ...depth]) }</li>) }</ul>}
      </CollapsibleContent>
    </Collapsible>)
  }

  return (
    <ul>{ items.map(item => <li>{ renderGroupItem(item) }</li>) }</ul>
  )
}

Groups.displayName = 'Groups'

export default Groups
