import React, { useState } from 'react'

import cx from 'classnames'

/* Import proptypes */
import PropTypes, { Item } from './types/props'

/* Import Styles */
import styles from './styles.module.scss'

/* Import Components */
import Button from '../../form-elements/button'

/* Import Icons */
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCopy, faTrash } from '@fortawesome/free-solid-svg-icons'

/* Render component */
export const EditableList: React.FC<PropTypes> = ({ onClick, onChange, items, title = 'Add', onCreate }) => {
  const [active, setActive] = useState<string | number>('')

  const handleChange = (changedItems: Array<Item>): void => {
    if (typeof onChange === 'function') {
      onChange(changedItems)
    }
  }

  const handeClick = (e: any, item: Item, uniqid: string | number): void => {
    setActive(uniqid)
    if (typeof onClick === 'function') {
      onClick(item, e)
    }
  }

  const handeCreate = (): void => {
    if (typeof onCreate === 'function') {
      onCreate()
    }
  }

  const handeCopy = (item: Item, key: number): void => {
    const newItems = [...items]
    newItems.splice(key, 0, item)
    handleChange(newItems)
  }

  const handeRemove = (key: number): void => {
    const newItems = [...items]
    newItems.splice(key, 1)
    handleChange(newItems)
  }

  return (
    <div className={styles.main}>
      <div className={styles.section}>
        <Button onClick={handeCreate}>{title}</Button>
      </div>
      <ul>
        {items.map((item, key) => {
          const uniqid = item.uniqid || key
          return (
            <li key={uniqid} className={cx(active === uniqid && styles.active)} >
              <div className={styles.overlap} onClick={(e): void => { handeClick(e, item, uniqid) }} />
              <div className={styles.section}>
                <div>{item.name}</div>
                <span>
                  <div onClick={(): void => { handeCopy(item, key) }}>
                    <FontAwesomeIcon icon={faCopy} />
                  </div>
                  <div onClick={(): void => { handeRemove(key) }}>
                    <FontAwesomeIcon icon={faTrash} />
                  </div>
                </span>
              </div>
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default EditableList
