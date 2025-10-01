import React, { ReactElement, useState, useRef } from 'react'
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import Button from '@material-ui/core/Button'
import ButtonGroup from '@material-ui/core/ButtonGroup'
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown'
import ClickAwayListener from '@material-ui/core/ClickAwayListener'
import Grow from '@material-ui/core/Grow'
import Paper from '@material-ui/core/Paper'
import Popper from '@material-ui/core/Popper'
import MenuItem from '@material-ui/core/MenuItem'
import MenuList from '@material-ui/core/MenuList'

/* Import Types */
import { Props } from './types/props'

/* Import Stylesheet */
import styles from './styles.module.scss'

/* Render component */
const useButtonStyle = makeStyles((theme: Theme) =>
  createStyles({
    gridStyle: {
      borderColor: 'white',
      width: 'fit-content',
      marginRight: theme.spacing(1)
    },
    buttonGroup: {
      border: `1px solid ${theme.palette[`${'primaryAccent'}`]?.main}`
    }
  })
)

export const SplitButton: React.FC<Props> = ({ label, options = [], onClick }: Props) => {
  const gridStyles = useButtonStyle()
  const [open, setOpen] = useState<boolean>(false)
  const anchorRef = useRef<any>(null)
  const [selectedIndex, setSelectedIndex] = useState<number>(-1)

  const handleClick = (): void => {
    if (selectedIndex === -1) {
      return
    }
    onClick && onClick(options[selectedIndex])
  }

  const handleMenuItemClick = (index: number): void => {
    setSelectedIndex(index)
    setOpen(false)
    onClick && onClick(options[index])
  }

  const handleToggle = (): void => {
    setOpen((prevOpen) => !prevOpen)
  }

  const handleClose = (event: { target: any }): void => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return
    }

    setOpen(false)
  }

  return (
    <Grid container direction="column" alignItems="center" className={gridStyles.gridStyle}>
      <Grid item xs={12}>
        <ButtonGroup
          className={gridStyles.buttonGroup}
          variant="contained"
          color="secondary"
          ref={anchorRef}
          aria-label="split button"
        >
          <Button onClick={handleClick}>{label} { selectedIndex >= 0 ? options[selectedIndex] : '...'}</Button>
          <Button
            color="primary"
            size="small"
            aria-controls={open ? 'split-button-menu' : undefined}
            aria-expanded={open ? 'true' : undefined}
            aria-label="select merge strategy"
            aria-haspopup="menu"
            onClick={handleToggle}
          >
            <ArrowDropDownIcon />
          </Button>
        </ButtonGroup>
        <Popper open={open} anchorEl={anchorRef.current} role={undefined} transition disablePortal className={styles.popper}>
          {({ TransitionProps, placement }): ReactElement => (
            <Grow
              {...TransitionProps}
              style={{
                transformOrigin: placement === 'bottom' ? 'center top' : 'center bottom'
              }}
            >
              <Paper>
                <ClickAwayListener onClickAway={handleClose}>
                  <MenuList>
                    {options.map((option, index) => (
                      <MenuItem
                        key={option}
                        selected={index === selectedIndex}
                        onClick={(): void => handleMenuItemClick(index)}
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
      </Grid>
    </Grid>
  )
}

export default SplitButton
