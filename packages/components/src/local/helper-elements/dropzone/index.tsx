import React, { useState, useEffect, useRef } from 'react'

import { ReactSortable } from 'react-sortablejs'

import cx from 'classnames'
/* Import proptypes */
import PropTypes, { Item } from './types/props'

/* Import Icons */
import DoubleArrowIcon from '@material-ui/icons/DoubleArrow'
import AddToPhotosIcon from '@material-ui/icons/AddToPhotos'

/* Import Styles */
import styles from './styles.module.scss'
const itemH = 44

/* Render component */
export const Dropzones: React.FC<PropTypes> = ({ children, item, type = 'empty', active, onStart, onEnd, onSet }) => {

  const innerRef = useRef(null);
  const [loading, setLoading] = useState<boolean>(false)
  const [showEmpty, setShowEmpty] = useState<boolean>(false)
  const [commingDrop, setCommingDrop] = useState<boolean>(false)

  let holderElement: HTMLDivElement;

  let activeDropzone = false;
  let typeEmpty = false;
  let typeGroup = false;
  let typeOut = false;

  switch (type) {
    case 'group':   typeGroup = true; activeDropzone = !!active;  break
    case 'empty':   typeEmpty = true; activeDropzone = showEmpty; break
    case 'group-out': typeOut = true; activeDropzone = showEmpty; break
  }

  // const currActive: boolean = active === item.uniqid
  // const dropActive: boolean = !currActive && !!active

  const mouseMove = (e: MouseEvent) => {
    if (holderElement) {
      let offsets: DOMRect = holderElement.getBoundingClientRect() as DOMRect;
      // TODO: fix clientX always 0 on firefox
      if (offsets && offsets.x <= e.clientX && e.clientX <= offsets.x + offsets.width) {
        if (offsets.y - itemH <= e.clientY && e.clientY <= offsets.y) {
          if (!showEmpty) setShowEmpty(true)
          if (!commingDrop) setCommingDrop(true)
        } else if (showEmpty && (offsets.y - itemH > e.clientY || e.clientY > offsets.y + itemH)) {
          setShowEmpty(false)
          if (commingDrop) { setCommingDrop(false) }
        } else if (commingDrop) { setCommingDrop(false) }
      }
      else {
        if (commingDrop) { setCommingDrop(false) }
        if (showEmpty) setShowEmpty(false)
      }
    }
  }

  useEffect(() => {
    // subscribe event
    document.addEventListener('drag', mouseMove);
    return () => {
      // unsubscribe event
      document.removeEventListener("drag", mouseMove);
    };
  }, [showEmpty, innerRef, commingDrop]);

  // const showDropzone = false
  // const currLoading = false
  // console.log(loading,  'test3');
  // console.log(mouse, active);

  const handeListChange = (newList: Array<Item>) => {
    if (newList.length === 0) {
      if (!typeEmpty) setLoading(true)
    } else if (newList.length > 1) {
      const dragged = newList.find(it => it.uniqid !== item.uniqid)
      if (onSet && dragged) onSet([dragged, item], type)
    }
  }
  const handleStart = () => {
    if (onStart) onStart(item)
  }
  const handleEnd = () => {
    if (onEnd) onEnd(item)
  }

  const handleRef = (ref: HTMLDivElement):void => {
    if (ref) { holderElement = ref }
  }

  const renderEmpty = () => (
    <div> <DoubleArrowIcon fontSize='small'/><span>Move in to {item.name}</span> </div>
  )

  const renderGroup = () => (
    <div className={cx(styles.switchitem, commingDrop && styles.switch)}> <AddToPhotosIcon fontSize='small'/><span>Group with {item.name}</span> </div>
  )
  const renderGroupOut = () => (
    <div> <DoubleArrowIcon fontSize='small'/><span>Drop to root</span> </div>
  )

  const renderDropzone = () => (
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
          delay={.5}
          list={[{id: `${item.uniqid}-${type}`, ...item}]}
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

Dropzones.displayName = 'Dropzones'

export default Dropzones
