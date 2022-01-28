import { Checkbox, Divider, FormControlLabel, Menu, MenuItem } from '@material-ui/core'
import React from 'react'
import { uniq } from 'lodash'
import { makeStyles, createStyles } from '@material-ui/core/styles'

export interface ColFilterProps {
  open: boolean
  onClose: ((event: {}, reason: 'backdropClick' | 'escapeKeyDown') => void) | undefined
  anchorEl: HTMLElement | null
  filters: string[]
}

const useStyles = makeStyles(() =>
  createStyles({
    menuItem: () => ({
      paddingTop: 0,
      paddingBottom: 0
    })
  })
)

const ColFilter: React.FC<ColFilterProps> = (props) => {
  const { onClose, open, anchorEl, filters } = props
  const { menuItem } = useStyles()

  const onChange = (e: any): void => {
    console.log('=> on changed', e.target.value)
  }

  return (
    <Menu
      anchorEl={anchorEl}
      open={open}
      onClose={onClose}
      style={{ marginTop: '50px' }}
    >
      <MenuItem className={menuItem}>
        <FormControlLabel
          label='Select All'
          control={
            <Checkbox
              value="all"
              onChange={onChange}
              checked={false}
            />
          }
        />
        <Divider />
      </MenuItem>
      <Divider />
      {uniq(filters).map((filter, idx) =>
        <div>
          <MenuItem key={idx} className={menuItem}>
            <FormControlLabel
              label={filter}
              control={
                <Checkbox
                  value={filter}
                  onChange={onChange}
                  checked={false}
                />
              }
            />
          </MenuItem>
          <Divider />
        </div>
      )}
    </Menu>
  )
}

export default ColFilter
