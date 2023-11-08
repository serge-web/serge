import React, { useState } from 'react'

import cx from 'classnames'

/* Import proptypes */
import PropTypes, { Item, ItemObject, SortableItem } from './types/props'

/* Import Styles */
import styles from './styles.module.scss'

/* Import Components */
import { ReactSortable } from 'react-sortablejs'

/* Import Icons */
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCopy, faTrash, faGripVertical } from '@fortawesome/free-solid-svg-icons'

/* Render component */
export const SortableList: React.FC<PropTypes> = React.forwardRef(({
  onClick,
  onChange,
  items,
  title = 'Add',
  onCreate,
  copy = false,
  sortable = 'manual',
  renderItemSection,
  required = false,
  valueOnEmpty,
  remove,
  customDeleteHandler,
  viewDirection = 'vertical',
  disableButtonAdd
}, modalRef) => {
  const [active, setActive] = useState<string | number>('')
  const [selectAllText, setSelectAllText] = useState<boolean>(false)
  const [inputActive, setInputActive] = useState<boolean>(false)

  const handleChange = (changedItems: Array<Item>): void => {
    if (typeof onChange === 'function') {
      onChange(changedItems)
    }
  }

  const handleClick = (e: any, item: Item, uniqid: string | number, key: number): void => {
    setActive(uniqid)
    setInputActive(true)
    setSelectAllText(true)
    if (typeof onClick === 'function') {
      onClick(item, key, e)
    }
  }

  const handleBlur = (): void => {
    setActive('')
    setInputActive(false)
    setSelectAllText(false)
  }

  const handleCreate = (): void => {
    if (typeof onCreate === 'function') {
      onCreate()
    }
  }

  const handleCopy = (item: Item, key: number): void => {
    const newItems = [...items]
    newItems.splice(key, 0, item)
    handleChange(newItems)
  }

  const handleRemove = (key: number): void => {
    if (customDeleteHandler) {
      customDeleteHandler(items, key, handleChange)
    } else {
      const newItems = [...items]
      newItems.splice(key, 1)
      handleChange(newItems)
    }
  }

  const sortableItems: Array<SortableItem> = items.map((item: Item, key: number) => {
    const sItem: SortableItem = {
      id: key,
      item: item
    }
    return sItem
  })

  const handleSetList = (list: Array<SortableItem>): void => {
    const changedListItems = list.map(sItem => sItem.item)
    if (JSON.stringify(items) !== JSON.stringify(changedListItems)) {
      handleChange(changedListItems)
    }
  }

  const getValue = (item: Item): React.ReactText => {
    let value = item
    if (typeof item === 'object') {
      value = item.name
    }
    return value as React.ReactText
  }

  const renderItems = items.map((item, key) => {
    let uniqid: React.ReactText = key
    let value = item
    const isNumber = typeof item === 'number'
    if (typeof item === 'object') {
      value = item.name
      if (item.uniqid) { uniqid = item.uniqid }
    }

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
      let newValue = isNumber ? parseInt(e.target.value) : e.target.value
      const newValueFilled: boolean = `${newValue}`.length > 0
      if (required) {
        if (!newValueFilled) {
          if (valueOnEmpty !== null && valueOnEmpty !== undefined) {
            newValue = valueOnEmpty
          } else {
            newValue = getValue(items[key])
            setSelectAllText(true)
          }
        }
      }

      const newItems: Array<Item> = [...items]
      if (typeof item === 'object') {
        if (newItems[key]) {
          newItems[key] = { ...item as ItemObject, name: newValue } as ItemObject
        }
      } else {
        newItems[key] = newValue
      }
      handleChange(newItems)
    }

    return (
      viewDirection === 'horizontal'
        ? <span key={key} className={styles.horizontallist}>
          <span>{value}</span>
          {key < items.length - 1 && <span>-</span>}
        </span>
        : <li key={uniqid} className={cx(styles.li, active === uniqid && styles.active)}>
          {sortable === 'manual' && <div className={styles.drag}>
            <span>
              <div onClick={(): void => { handleRemove(key) }}>
                <FontAwesomeIcon icon={faGripVertical} />
              </div>
            </span>
          </div>}
          <div className={styles.presection}>
            <section className={styles.section}>
              {
                inputActive
                  ? <input
                    className={styles['value-label']}
                    type={isNumber ? 'number' : 'text'}
                    onChange={handleInputChange}
                    value={`${value}`}
                    ref={(input): void => {
                      if (selectAllText && input && uniqid === active) {
                        input.select()
                        setSelectAllText(false)
                      }
                    }}
                    onBlur={handleBlur}
                  />
                  : <div className={styles['value-label']}>
                    <div ref={key === items.length - 1 ? modalRef : null} onClick={(e): void => { handleClick(e, item, uniqid, key) }}>
                      {value}
                    </div>
                  </div>
              }
              <span>
                {remove && <div className={styles['trash-icon']} onClick={(): void => { handleRemove(key) }}>
                  <FontAwesomeIcon icon={faTrash} />
                </div>}
              </span>
              {renderItemSection && renderItemSection(item, key)}
              <span>
                {copy && <div onClick={(): void => { handleCopy(item, key) }}>
                  <FontAwesomeIcon icon={faCopy} />
                </div>}
              </span>
            </section>
          </div >
        </li >
    )
  })

  return (
    <div className={styles.main}>
      {sortable === 'manual'
        ? <ReactSortable tag='ul' list={sortableItems} setList={handleSetList}>
          {renderItems}
        </ReactSortable>
        : <ul className={cx({ [styles.horizontal]: viewDirection === 'horizontal', [styles.main]: true })}>{renderItems}</ul>
      }
      {!disableButtonAdd && <div className={styles['add-section']}>
        <button className={styles.button} onClick={handleCreate}>{title}</button>
      </div>}
    </div>
  )
})

export type { Item } from './types/props'

export default SortableList
