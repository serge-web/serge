import React, { useEffect } from 'react'

/* Import proptypes */
import PropTypes from './types/props'
import cn from 'classnames'

/* Import Styles */
import styles from './styles.module.scss'

/* Import icons */
import AddIcon from '@material-ui/icons/Add'
import RemoveIcon from '@material-ui/icons/Remove'

export const COLLASIBLE_DEFAULT_ICON = 'default'
export const COLLASIBLE_CHANNEL_ICON = 'channel-icon'

/* Render component */
export const CollapsibleHeader: React.FC<PropTypes> = (props) => {
  const { children, onClick, onExpand, iconType = COLLASIBLE_DEFAULT_ICON } = props
  const collapsed: boolean = typeof props.collapsed === 'undefined' ? true : props.collapsed
  const hasContent: boolean = typeof props.hasContent === 'undefined' ? false : props.hasContent
  const collapseOnDragHover: boolean = typeof props.collapseOnDragHover === 'undefined' ? false : props.collapseOnDragHover

  const handleClick = (e: React.MouseEvent<HTMLImageElement>): void => {
    if (typeof onClick === 'function') {
      onClick(e)
    }
  }

  const handleExpand = (): void => {
    if (typeof onExpand === 'function') {
      onExpand(!collapsed)
    }
  }

  const style = { fontSize: 14, color: '#000000' }

  if (iconType === COLLASIBLE_CHANNEL_ICON) {
    style.fontSize = 20
    style.color = 'rgb(24, 255, 255)'
  }

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
          if (collapsed) { handleExpand() }
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
  }, [collapsed])

  useEffect(() => {
    return (): void => {
      // unsubscribe event
      document.removeEventListener('dragenter', handleDragenter)
    }
  }, [])

  return (
    <div className={styles.main}>
      {hasContent && <div className={cn(styles.control, iconType === COLLASIBLE_CHANNEL_ICON && styles['control-channel'])} onClick={handleExpand}>
        {collapsed ? <AddIcon style={style}/> : <RemoveIcon style={style}/> }
      </div>}
      <div ref={handleRef} className={styles.content} onClick={handleClick}>{children}</div>
    </div>
  )
}

CollapsibleHeader.displayName = 'CollapsibleHeader'

export default CollapsibleHeader
