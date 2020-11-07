import React, { useState, ReactNode } from 'react'
// import cx from 'classnames'

/* Import proptypes */
import PropTypes, { Item } from './types/props'

/* Import Styles */
import styles from './styles.module.scss'

/* Import Components */
import Select from '@material-ui/core/Select'
import MenuItem from '@material-ui/core/MenuItem'
import FormControl from '@material-ui/core/FormControl'
import Chip from '@material-ui/core/Chip'
import InputLabel from '@material-ui/core/InputLabel'
import IconButton from '@material-ui/core/IconButton'

/* Import Icons */
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUndoAlt, faCheck, faTrash, faPencilAlt } from '@fortawesome/free-solid-svg-icons'

/* Render component */
export const EditableRow: React.FC<PropTypes> = ({ items, onChange, actions, onSave, defaultMode, onRemove, noSwitchOnReset }) => {
  const [backup, setBacup] = useState(items)
  const [itemsLocal, setItemsLocal] = useState(items)
  const [mode, setMode] = useState(defaultMode)

  const handleChange = (item: Item, target: any, itemKey: number): void => {
    let newActive: Array<number> = []
    if (item.multiple) {
      newActive = target.value.map((val: any) => parseInt(val))
    } else {
      newActive = [parseInt(target.value)]
    }
    const newItem: Item = {
      ...item,
      active: newActive
    }
    const newItems: Array<Item> = [...itemsLocal]
    newItems[itemKey] = newItem
    setItemsLocal(onChange(newItems, itemKey))
  }

  const switchMode = (): void => {
    setMode(mode === 'view' ? 'edit' : 'view')
  }

  const handleUndo = (): void => {
    setItemsLocal(onChange(backup, -1))
    if (!noSwitchOnReset) switchMode()
  }
  const handleApply = (): void => {
    if (onSave) onSave(itemsLocal)
    setBacup(itemsLocal)
    switchMode()
  }

  return (
    <tr>
      {itemsLocal.map((item, itemKey) => {
        const value: Array<number> = item.active || []

        return (
          <td key={item.uniqid} className={styles.td}>
            {mode === 'edit' ? <>
              <div className={styles['input-box']}>
                <FormControl>
                  {item.title && <InputLabel id={item.uniqid}>{item.title}</InputLabel>}
                  <Select
                    name={item.uniqid}
                    value={value}
                    multiple={item.multiple}
                    displayEmpty
                    onChange={(e): void => { handleChange(item, e.target, itemKey) }}
                    renderValue={item.multiple ? (selected): ReactNode => {
                      const selectedKeys = (selected || []) as Array<number>
                      if (selectedKeys.length === 0) return <div>{item.emptyTitle}</div>

                      return <div className={styles.clips}>
                        {selectedKeys.map(activeKey => (
                          <div className={styles.clip} key={activeKey}>
                            <Chip
                              size="small"
                              label={item.options[activeKey].name}
                              onDelete={(): void => {
                                handleChange(item, {
                                  value: value.filter(ait => ait !== activeKey)
                                }, itemKey)
                              }}
                            />
                          </div>
                        ))}
                      </div>
                    } : undefined}
                  >
                    {item.options.map((option, key) => {
                      return <MenuItem key={key} value={key}>{option.name}</MenuItem>
                    })}
                  </Select>
                </FormControl>
              </div>
            </> : <>
              <div className={styles['input-box']}>
                {value.length
                  ? value.map(itemKey => item.options[itemKey].name).join(', ')
                  : item.emptyTitle
                }
              </div>
            </>}
          </td>
        )
      })}
      {actions && <td align='right' className={styles.td}>
        {mode === 'edit' ? <>
          <IconButton size='small' onClick={handleUndo} aria-label="upload picture" component="span">
            <FontAwesomeIcon icon={faUndoAlt} />
          </IconButton>
          <IconButton size='small' onClick={handleApply} aria-label="upload picture" component="span">
            <FontAwesomeIcon icon={faCheck} size='sm' />
          </IconButton>

        </> : <>
          <IconButton size='small' onClick={switchMode} aria-label="upload picture" component="span">
            <FontAwesomeIcon icon={faPencilAlt} size='sm' />
          </IconButton>
          {onRemove && <IconButton size='small' onClick={onRemove} aria-label="upload picture" component="span">
            <FontAwesomeIcon icon={faTrash} size='sm' />
          </IconButton>}
        </>}

      </td>}
    </tr>
  )
}

export default EditableRow

export { Item, Option } from './types/props'
