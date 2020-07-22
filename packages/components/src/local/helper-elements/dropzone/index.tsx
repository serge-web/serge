import React, { useState, useEffect, useRef } from 'react'

import { ReactSortable } from 'react-sortablejs'

import cx from 'classnames'
/* Import proptypes */
import PropTypes, { DropItem } from './types/props'

/* Import Icons */
import DoubleArrowIcon from '@material-ui/icons/DoubleArrow'
import AddToPhotosIcon from '@material-ui/icons/AddToPhotos'

/* Import Styles */
import styles from './styles.module.scss'
const itemH = 44

/* Render component */
export const Dropzone: React.FC<PropTypes> = ({ children, item, type = 'empty', active, onStart, onEnd, onSet }) => {
  const innerRef = useRef(null)
  const [loading, setLoading] = useState<boolean>(false)
  const [showEmpty, setShowEmpty] = useState<boolean>(false)
  const [commingDrop, setCommingDrop] = useState<boolean>(false)

  let holderElement: HTMLDivElement

  let activeDropzone = false
  let typeEmpty = false
  let typeGroup = false
  let typeOut = false

  switch (type) {
    case 'group': typeGroup = true; activeDropzone = !!active; break
    case 'empty': typeEmpty = true; activeDropzone = showEmpty; break
    case 'group_out': typeOut = true; activeDropzone = showEmpty; break
  }

  const mouseMove = (e: MouseEvent): void => {
    if (holderElement) {
      const offsets: DOMRect = holderElement.getBoundingClientRect() as DOMRect
      const x = e.clientX
      const y = e.clientY

      if (offsets && offsets.x <= x && x <= offsets.x + offsets.width) {
        if (offsets.y - itemH <= y && y <= offsets.y) {
          if (!showEmpty) setShowEmpty(true)
          if (!commingDrop) setCommingDrop(true)
        } else if (showEmpty && (offsets.y - itemH > y || y > offsets.y + itemH)) {
          setShowEmpty(false)
          if (commingDrop) { setCommingDrop(false) }
        } else if (commingDrop) { setCommingDrop(false) }
      } else {
        if (commingDrop) { setCommingDrop(false) }
        if (showEmpty) setShowEmpty(false)
      }
    }
  }

  useEffect(() => {
    // subscribe event
    document.addEventListener('dragenter', mouseMove)
    return (): void => {
      // unsubscribe event
      document.removeEventListener('dragenter', mouseMove)
    }
  }, [showEmpty, innerRef, commingDrop])

  const handeListChange = (newList: Array<DropItem>): void => {
    if (newList.length === 0) {
      if (!typeEmpty) setLoading(true)
    } else if (newList.length > 1) {
      const dragged = newList.find(it => it.uniqid !== item.uniqid)
      if (onSet && dragged) onSet([dragged, item], type)
    }
  }
  const handleStart = (): void => {
    if (onStart) onStart(item)
  }
  const handleEnd = (): void => {
    if (onEnd) onEnd(item)
  }

  const handleRef = (ref: HTMLDivElement): void => {
    if (ref) { holderElement = ref }
  }

  const renderEmpty = (): JSX.Element => (
    <div> <DoubleArrowIcon fontSize='small'/><span>Move in to {item.name}</span> </div>
  )

  const renderGroup = (): JSX.Element => (
    <div className={cx(styles.switchitem, commingDrop && styles.switch)}> <AddToPhotosIcon fontSize='small'/><span>Group with {item.name}</span> </div>
  )
  const renderGroupOut = (): JSX.Element => (
    <div> <DoubleArrowIcon fontSize='small'/><span>Drop to root</span> </div>
  )

  const renderDropzone = (): JSX.Element => (
    <div className={cx(styles.dropzone)}>
      <div className={cx(styles.content, styles[`content-${type}`])}>
        {typeEmpty && renderEmpty()}
        {typeOut && renderGroupOut()}
        {/* TODO: Add overlap for group label */}
        {typeGroup && renderGroup()}
      </div>
    </div>
  )

  return (
    <div ref={innerRef} className={cx(
      styles.main,
      styles[`main-${type}`],
      activeDropzone && styles[`${type}-active`]
    )}>
      <div className={cx(styles.holder, loading && styles.loading)} ref={handleRef}>
        { renderDropzone() }
        <ReactSortable
          group="groupName"
          animation={0}
          delay={0.5}
          list={[{ id: `${item.uniqid}-${type}`, ...item }]}
          setList={handeListChange}
          onStart={handleStart}
          onEnd={handleEnd}
        >
          <div className={cx(styles.item, typeOut && styles['item-hide'])}>
            {children}
          </div>
        </ReactSortable>
      </div>
    </div>
  )
}

Dropzone.displayName = 'Dropzone'

export default Dropzone
