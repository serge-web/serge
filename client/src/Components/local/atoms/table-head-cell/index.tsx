import React, { useRef, useState, ReactElement } from 'react'

/* Import Types */
import Props, { ContentFilterType } from './types/props'

import { makeStyles, Theme } from '@material-ui/core/styles'
import Button from '@material-ui/core/Button'
import MenuList from '@material-ui/core/MenuList'
import Popper from '@material-ui/core/Popper'
import Grow from '@material-ui/core/Grow'
import Paper from '@material-ui/core/Paper'
import ClickAwayListener from '@material-ui/core/ClickAwayListener'
import MenuItem from '@material-ui/core/MenuItem'
import CheckIcon from '@material-ui/icons/Check'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSortUp, faSortDown } from '@fortawesome/free-solid-svg-icons'
import { SortDirection } from '@material-ui/core'

/* Render component */
const useStyles = makeStyles((theme: Theme) => ({
  button: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: '1em',
    textTransform: 'none',
    width: '100%',
    justifyContent: 'space-between',

    '& svg': {
      width: '16px'
    }
  },
  menuItem: {
    '& svg': {
      display: 'inline-block',
      width: '16px',
      marginLeft: '10px',
      color: theme.palette[`${'primary'}`]?.main
    }
  },
  sortIconUp: {
    position: 'absolute',
    color: 'white',
    marginLeft: '5px',
    marginTop: '7px',
    cursor: 'pointer'
  },
  sortIconDown: {
    color: 'white',
    marginLeft: '5px',
    marginTop: '7px',
    cursor: 'pointer'
  },
  headerSort: {
    display: 'inline-flex'
  }
}))
const FilterIcon = (): React.ReactElement => (
  <svg width="28" height="30" viewBox="0 0 28 30" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M26.2096 0H1.29056C0.145551 0 -0.432218 1.51559 0.379086 2.40064L10.3125 13.2387V25.3125C10.3125 25.7713 10.5177 26.2014 10.8623 26.4646L15.1592 29.7446C16.0069 30.392 17.1875 29.7359 17.1875 28.5926V13.2387L27.1212 2.40064C27.9308 1.51734 27.357 0 26.2096 0Z" fill="white" />
  </svg>
)
export const TableHeadCell = (props: Props): (React.ReactElement | null) => {
  const [open, setOpen] = useState<boolean>(false)
  const buttonRef = useRef(null)
  const { content, id, filters, onFilter, sort, onSort, sortingColId, sortDirection = 'asc' } = props
  const contentFilter = content as ContentFilterType
  const classes = useStyles()

  const onToggle = (): void => {
    setOpen(!open)
  }

  const handleOnFilter = (filter: string): void => {
    onToggle()
    onFilter(id, filter)
  }

  const toggleSort = (columnId: number, sortDirection: SortDirection): void => {
    onSort && onSort(columnId, sortDirection)
  }

  switch (true) {
    case typeof content === 'string':
      return (
        <span className={classes.headerSort}>
          {content}
          {sort && ['ID', 'Updated'].includes(`${content}`) &&
            <span onClick={(): void => toggleSort(id, sortDirection)}>
              <FontAwesomeIcon
                className={classes.sortIconUp}
                style={{ color: (sortDirection === 'asc' && sortingColId === id) ? 'white' : 'grey' }}
                icon={faSortUp}
              />
              <FontAwesomeIcon
                className={classes.sortIconDown}
                style={{ color: (sortDirection === 'desc' && sortingColId === id) ? 'white' : 'grey' }}
                icon={faSortDown}
              />
            </span>
          }
        </span>
      )
    // just show label if there are zero or one filters.  No
    // need to filter if there is only one item :-)
    case contentFilter.filters && contentFilter.filters.length <= 1:
      return <span>{contentFilter.label}</span>
    case contentFilter.filters.length > 1:
      return (
        <>
          <Button
            ref={buttonRef}
            className={classes.button}
            onClick={onToggle}
            endIcon={<FilterIcon />}
            size="small"
          >
            {contentFilter.label}
          </Button>
          <Popper open={open} anchorEl={buttonRef.current} role={undefined} transition disablePortal>
            {({ TransitionProps, placement }): ReactElement => (
              <Grow
                {...TransitionProps}
                style={{ transformOrigin: placement === 'bottom' ? 'center top' : 'center bottom' }}
              >
                <Paper>
                  <ClickAwayListener onClickAway={onToggle}>
                    <MenuList autoFocusItem={open} id="menu-list-grow">
                      {
                        contentFilter.filters.map((filter: string) => (
                          <MenuItem
                            className={classes.menuItem}
                            key={filter}
                            onClick={(): void => handleOnFilter(filter)}
                          >
                            <span>{filter}</span>
                            {
                              filters.includes(filter)
                                ? <CheckIcon />
                                : null
                            }
                          </MenuItem>
                        ))
                      }
                    </MenuList>
                  </ClickAwayListener>
                </Paper>
              </Grow>
            )}
          </Popper>
        </>
      )
    default:
      return null
  }
}

export default TableHeadCell
