import React, { useState } from 'react'

import cx from 'classnames'

/* Import proptypes */
import PropTypes, { Item } from './types/props'

/* Import Styles */
import styles from './styles.module.scss'

/* Import Components */
import Button from '../../form-elements/button'
import TextField from '@material-ui/core/TextField'

/* Import Icons */
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCopy, faTrash } from '@fortawesome/free-solid-svg-icons'

/* Render component */
export const EditableList: React.FC<PropTypes> = ({ onClick, onChange, items, title = 'Add', onCreate, search }) => {
  const [active, setActive] = useState<string | number>('')
  const [searchValue, setSearchValue] = useState<string>('')

  const handleChange = (changedItems: Array<Item>): void => {
    if (typeof onChange === 'function') {
      onChange(changedItems)
    }
  }

  const handeClick = (e: any, item: Item, uniqid: string | number, key: number): void => {
    setActive(uniqid)
    if (typeof onClick === 'function') {
      onClick(item, key, e)
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
      {search && <div className={styles.section}>
        <TextField
          label='Search'
          type='search'
          variant='outlined'
          value={searchValue}
          size='small'
          onChange={(e): void => { setSearchValue(e.target.value || '') }}
        />
      </div>}
      <ul>
        {items.filter(item => item.name.match(searchValue)).map((item, key) => {
          const uniqid = item.uniqid || key
          return (
            <li key={uniqid} className={cx(active === uniqid && styles.active)} >
              <div className={styles.overlap} onClick={(e): void => { handeClick(e, item, uniqid, key) }} />
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

export { Item } from './types/props'

export default EditableList
