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
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown'
import Menu from '@material-ui/core/Menu'
import MenuItem from '@material-ui/core/MenuItem'

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

  const filterChannels = (item: Item, value: string): boolean => {
    return (item[filterKey] || item.name).toLowerCase().indexOf(value.toLowerCase()) > -1
  }

  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null)

  const handleButtonMenuOpen = (event: React.MouseEvent<HTMLButtonElement>): void => {
    setAnchorEl(event.currentTarget)
  }

  const handleButtonMenuClose = (): void => {
    setAnchorEl(null)
  }

  const handleButtonMenuItemClicked = (event: React.MouseEvent): void => {
    handleButtonMenuClose()
    handleCreate(event.currentTarget.textContent?.toString())
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
                      <Button
                        color="secondary"
                        size="large"
                        aria-controls="channel-add-menu"
                        aria-haspopup="true"
                        onClick={handleButtonMenuOpen}
                        data-qa-type={qaType}
                        endIcon={<ArrowDropDownIcon/>}
                      >
                        {title}
                      </Button>
                      <Menu
                        id="channel-add-menu"
                        anchorEl={anchorEl}
                        keepMounted
                        open={Boolean(anchorEl)}
                        onClose={handleButtonMenuClose}
                      >
                        <MenuItem onClick={handleButtonMenuItemClicked}>{CHANNEL_MAPPING}</MenuItem>
                        <MenuItem onClick={handleButtonMenuItemClicked}>{CHANNEL_RFI_STATUS}</MenuItem>
                        <MenuItem onClick={handleButtonMenuItemClicked}>Normal</MenuItem>
                      </Menu>
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
