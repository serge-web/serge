import React, { useState, useEffect, useRef } from 'react'

import { ReactSortable } from 'react-sortablejs'

import cx from 'classnames'
/* Import proptypes */
import PropTypes, { Item } from './types/props'

/* Import Styles */
import styles from './styles.module.scss'
const itemH = 44

/* Render component */
export const Dropzones: React.FC<PropTypes> = ({ children, item, type = 'empty', active, onStart, onEnd }) => {

  const innerRef = useRef(null);
  const [loading, setLoading] = useState(false)
  const [showEmpty, setShowEmpty] = useState(false)

  let holderElement: HTMLDivElement;
  const currActive: boolean = active === item.uniqid
  const dropActive: boolean = !currActive && !!active

  const mouseMove = (e: MouseEvent) => {
    if (holderElement) {
      let offsets: DOMRect = holderElement.getBoundingClientRect() as DOMRect;

      if (offsets && offsets.x <= e.clientX && e.clientX <= offsets.x + offsets.width) {
        if (offsets.y - itemH <= e.clientY && e.clientY <= offsets.y) {
          if (!showEmpty) setShowEmpty(true)
        } else if (showEmpty && (offsets.y - itemH > e.clientY || e.clientY > offsets.y + itemH)) {
          setShowEmpty(false)
        }
      }
      else if (showEmpty) setShowEmpty(false)
    }
  }

  useEffect(() => {
    // subscribe event
    document.addEventListener('drag', mouseMove);
    return () => {
      // unsubscribe event
      document.removeEventListener("drag", mouseMove);
    };
  }, [showEmpty, innerRef]);

  // const showDropzone = false
  // const currLoading = false
  // console.log(loading,  'test3');
  // console.log(mouse, active);

  const handeListChange = (newList: Array<Item>) => {
    console.log(newList);
  }
  const handleStart = () => {
    setLoading(true)
    if (onStart) onStart(item)
  }
  const handleEnd = () => {
    setLoading(false)
    if (onEnd) onEnd(item)
  }

  const handleRef = (ref: HTMLDivElement):void => {
    if (ref) { holderElement = ref }
  }

  return (
    <div ref={innerRef} className={cx(
      styles.main,
      styles[`main-${type}`],
      type === 'empty' ? showEmpty && styles['empty-active'] : active && styles['main-active']
    )}>
      <div className={cx(styles.holder, loading && styles.loading)} ref={handleRef}>
        <ReactSortable
          group="groupName"
          animation={200}
          delay={2}
          list={[{id: item.uniqid, ...item}]}
          setList={handeListChange}
          onStart={handleStart}
          onEnd={handleEnd}
        >
          <div className={styles.item}>
            <div className={cx(styles.dropzone, dropActive && styles['dropzone-active'])}>
            </div>
            {children}
          </div>
        </ReactSortable>
      </div>
    </div>
  )
}

Dropzones.displayName = 'Dropzones'

export default Dropzones
