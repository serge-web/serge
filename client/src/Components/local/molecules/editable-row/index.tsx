import { faCheck, faPencilAlt, faTrash, faUndoAlt } from '@fortawesome/free-solid-svg-icons'
/* Import Icons */
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { FormGroup, FormLabel, Switch } from '@material-ui/core'
import Chip from '@material-ui/core/Chip'
import FormControl from '@material-ui/core/FormControl'
import IconButton from '@material-ui/core/IconButton'
import InputLabel from '@material-ui/core/InputLabel'
import MenuItem from '@material-ui/core/MenuItem'
/* Import Components */
import Select from '@material-ui/core/Select'
import { createStyles, makeStyles } from '@material-ui/styles'
import cx from 'classnames'
import React, { ReactNode, useEffect, useState } from 'react'
/* Import Styles */
import styles from './styles.module.scss'
// import cx from 'classnames'
/* Import proptypes */
import PropTypes, { Item, SelectItem, SwitchItem } from './types/props'

export const EDITABLE_SELECT_ITEM = 'select'
export const EDITABLE_SWITCH_ITEM = 'switch'

/* Render component */
export const EditableRow: React.FC<PropTypes> = ({
  items,
  onChange,
  actions,
  onSave,
  defaultMode,
  onRemove,
  noSwitchOnReset,
  isGenerator,
  participantKey = -1,
  presentAsList
}) => {
  const [backup, setBackup] = useState(items)
  const [itemsLocal, setItemsLocal] = useState(items)
  const [mode, setMode] = useState(defaultMode)

  useEffect(() => {
    setItemsLocal(onChange(items, 0))
  }, [items])

  const switchMode = (): void => {
    setMode(mode === 'view' ? 'edit' : 'view')
  }

  const handleUndo = (): void => {
    setItemsLocal(onChange(backup, -1))
    if (!noSwitchOnReset) switchMode()
  }

  const handleApply = (): void => {
    if (onSave) onSave(itemsLocal, participantKey)
    if (isGenerator) return
    setBackup(itemsLocal)
    switchMode()
  }

  const renderSelectItem = (item: SelectItem, itemKey: number): React.ReactNode => {
    const handleChange = (target: any): void => {
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

    const value: Array<number> = item.active || []

    // we need a more robust way of collating read-only list, to handle some `undefined` fields
    // note: we appear to get the undefined fields because in the rendering process
    // a custom channel is being rendered as a collab one.  This isn't apparent to the user
    const readValues = value.length ? value.map((itemKey, idx) => {
      if (itemKey !== undefined) {
        if (presentAsList) {
          return <div key={`${itemKey}-${idx}`}>{item.options[itemKey].name}</div>
        }
        return item.options[itemKey].name
      }
      return ''
    }) : item.emptyTitle

    return mode === 'edit' ? <>
      <div className={cx(styles['input-box'], styles.cells)}>
        <FormControl>
          {item.title && <InputLabel id={item.uniqid}>{item.title}</InputLabel>}
          <Select
            name={item.uniqid}
            value={value}
            multiple={item.multiple}
            displayEmpty
            onChange={(e): void => { handleChange(e.target) }}
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
                        handleChange({
                          value: value.filter(ait => ait !== activeKey)
                        })
                      }}
                      onMouseDown={(e): void => e.stopPropagation()}
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
      <div className={cx(styles['input-box'], styles.cells, presentAsList && styles.list)}>
        {readValues}
      </div>
    </>
  }

  const renderSwitchItem = (item: SwitchItem, itemKey: number): React.ReactNode => {
    const isEditMode = mode === 'edit'

    const useStyles = makeStyles(() => createStyles({
      root: {
        '&.MuiSwitch-root': {
          filter: `opacity(${isEditMode ? 1 : 0.7})`
        }
      }
    }))

    const classes = useStyles()

    const toggleChecked = (): void => {
      if (!isEditMode) return
      const newItem: Item = {
        ...item,
        active: !item.active
      }

      const newItems: Array<Item> = [...itemsLocal]
      newItems[itemKey] = newItem
      setItemsLocal(onChange(newItems, itemKey))
    }

    return <div className={cx(styles['input-box'], styles.cells)}>
      <FormControl>
        {item.title && <FormLabel id={item.uniqid}>{item.title}</FormLabel>}
        <FormGroup>
          <Switch className={classes.root} checked={item.active || false} onChange={toggleChecked} />
        </FormGroup>
      </FormControl>
    </div>
  }

  return (
    <tr>
      {itemsLocal.map((item, itemKey) => {
        return (
          <td key={item.uniqid} className={styles.td}>
            {item.type === EDITABLE_SELECT_ITEM && renderSelectItem(item, itemKey)}
            {item.type === EDITABLE_SWITCH_ITEM && renderSwitchItem(item, itemKey)}
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
          {onRemove && <IconButton size='small' onClick={(): void => onRemove(participantKey)} aria-label="upload picture" component="span">
            <FontAwesomeIcon icon={faTrash} size='sm' />
          </IconButton>}
        </>}

      </td>}
    </tr>
  )
}

export default EditableRow

export type { Item, Option } from './types/props'
