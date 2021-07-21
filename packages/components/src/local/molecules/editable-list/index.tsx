import React from 'react'

/* Import proptypes */
import PropTypes, { Item } from './types/props'

/* Import Styles */
import styles from './styles.module.scss'

/* Import const */
import { CHANNEL_MAPPING, CHANNEL_RFI_STATUS } from '@serge/config'

/* Import Components */
import Button from '../../atoms/button'
import SearchList from '../search-list'
import MButton from '@material-ui/core/Button'
import ButtonGroup from '@material-ui/core/ButtonGroup'
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown'
import ClickAwayListener from '@material-ui/core/ClickAwayListener'
import Grow from '@material-ui/core/Grow'
import Paper from '@material-ui/core/Paper'
import Popper from '@material-ui/core/Popper'
import MenuItem from '@material-ui/core/MenuItem'
import MenuList from '@material-ui/core/MenuList'

/* Render component */
export const EditableList: React.FC<PropTypes> = ({
  onClick,
  items,
  title = 'Add',
  type = 'force',
  qaType = 'add',
  onCreate,
  onDuplicate,
  onDelete,
  selectedItem,
  filterKey = 'name',
  labelKey = 'name',
  searchLabel = 'Search',
  withSearch
}) => {
  const [open, setOpen] = React.useState(false)
  const anchorRef = React.useRef<HTMLDivElement>(null)
  const options = [CHANNEL_MAPPING, CHANNEL_RFI_STATUS]

  const handleClick = (item: Item): void => {
    if (typeof onClick === 'function') {
      onClick(item)
    }
  }

  const handleCreate = (buttonText?: string): void => {
    if (typeof onCreate === 'function') {
      onCreate(buttonText)
    }
  }

  const handleDuplicate = (item: Item): void => {
    if (typeof onDuplicate === 'function') {
      onDuplicate(item)
    }
  }

  const handleDelete = (item: Item): void => {
    if (typeof onDelete === 'function') {
      onDelete(item)
    }
  }

  const handleToggle = (): void => {
    setOpen((prevOpen) => !prevOpen)
  }

  const filterChannels = (item: Item, value: string): boolean => {
    return (item[filterKey] || item.name).toLowerCase().indexOf(value.toLowerCase()) > -1
  }

  const handleClose = (event: React.MouseEvent<Document, MouseEvent>): void => {
    if (anchorRef.current && anchorRef.current.contains(event.target as HTMLElement)) {
      return
    }

    setOpen(false)
  }

  const handleMenuItemClick = (
    event: any
  ): void => {
    handleCreate(event.currentTarget.textContent)
    setOpen(false)
  }

  return (
    <div className={styles.main}>
      {
        onCreate
          ? (
            <div className={styles.section}>
              {
                type === 'channel'
                  ? (
                    <div>
                      <ButtonGroup variant="contained" color="secondary" ref={anchorRef} aria-label="split button">
                        <MButton color="secondary" size={'large'} onClick={handleMenuItemClick}>{title}</MButton>
                        <MButton
                          color="secondary"
                          size="small"
                          aria-controls={'split-button-menu'}
                          aria-label="select merge strategy"
                          aria-haspopup="menu"
                          onClick={handleToggle}
                        >
                          <ArrowDropDownIcon />
                        </MButton>
                      </ButtonGroup>
                      <Popper open={open} anchorEl={anchorRef.current} transition className={styles.menu} disablePortal>
                        {({ TransitionProps }): any => (
                          <Grow
                            {...TransitionProps}
                          >
                            <Paper>
                              <ClickAwayListener onClickAway={handleClose}>
                                <MenuList id="split-button-menu">
                                  <MenuItem disabled={true} selected={false} key={'label'}>
                                    Special channels
                                  </MenuItem>
                                  {options.map((option) => (
                                    <MenuItem
                                      key={option}
                                      onClick={handleMenuItemClick}
                                    >
                                      {option}
                                    </MenuItem>
                                  ))}
                                </MenuList>
                              </ClickAwayListener>
                            </Paper>
                          </Grow>
                        )}
                      </Popper>
                    </div>
                  ) : (
                    <Button
                      color="secondary"
                      size="large"
                      aria-controls="channel-add-menu"
                      aria-haspopup="true"
                      onClick={(): void => handleCreate()}
                      data-qa-type={qaType}
                    >
                      {title}
                    </Button>
                  )
              }
            </div>
          ) : null
      }
      <SearchList
        listData={items}
        setSelected={handleClick}
        placeholder={searchLabel}
        activeRow={(item: Item): boolean => item[filterKey] === selectedItem}
        rowLabel={(item: Item): string => item[labelKey]}
        rowFilter={filterChannels}
        onDuplicate={onDuplicate ? handleDuplicate : undefined}
        onDelete={onDelete ? handleDelete : undefined}
        withSearch={withSearch === undefined ? true : withSearch}
      />
    </div>
  )
}

export { Item } from './types/props'

export default EditableList
