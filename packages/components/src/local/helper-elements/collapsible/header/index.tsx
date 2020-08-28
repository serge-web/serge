import React, { useEffect } from 'react'

/* Import proptypes */
import PropTypes from './types/props'

/* Import Styles */
import styles from './styles.module.scss'

/* Import icons */
import AddIcon from '@material-ui/icons/Add'
import RemoveIcon from '@material-ui/icons/Remove'

/* Render component */
export const CollapsibleHeader: React.FC<PropTypes> = (props) => {
  const { children, onClick, onCollapse } = props
  const collapse: boolean = typeof props.collapse === 'undefined' ? true : props.collapse
  const hasContent: boolean = typeof props.hasContent === 'undefined' ? false : props.hasContent
  const collapseOnDragHover: boolean = typeof props.collapseOnDragHover === 'undefined' ? false : props.collapseOnDragHover

  const handeClick = (e: any): void => {
    if (typeof onClick === 'function') {
      onClick(e)
    }
  }

  const handeCollapse = (): void => {
    if (typeof onCollapse === 'function') {
      onCollapse(!collapse)
    }
  }

  const style = { fontSize: 14, color: '#000000' }

  let holderElement: HTMLDivElement

  const handleRef = (ref: HTMLDivElement): void => {
    if (ref) { holderElement = ref }
  }

  const handleDragenter = (e: MouseEvent): void => {
    if (holderElement) {
      const offsets: DOMRect = holderElement.getBoundingClientRect() as DOMRect
      const x = e.clientX
      const y = e.clientY

      if (offsets && offsets.x <= x && x <= offsets.x + offsets.width) {
        if (offsets.y <= y && y <= offsets.y + offsets.height) {
          if (!collapse) { handeCollapse() }
        }
      }
    }
  }

  useEffect(() => {
    // subscribe event
    if (collapseOnDragHover) {
      document.addEventListener('dragenter', handleDragenter)
    }
    return (): void => {
      // unsubscribe event
      if (collapseOnDragHover) {
        document.removeEventListener('dragenter', handleDragenter)
      }
    }
  }, [collapse])

  return (
    <div className={styles.main}>
      {hasContent && <div className={styles.control} onClick={handeCollapse}>
        {collapse ? <RemoveIcon style={style}/> : <AddIcon style={style}/> }
      </div>}
      <div ref={handleRef} className={styles.content} onClick={handeClick}>{children}</div>
    </div>
  )
}

CollapsibleHeader.displayName = 'CollapsibleHeader'

export default CollapsibleHeader
