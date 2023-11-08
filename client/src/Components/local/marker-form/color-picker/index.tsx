import { Card, CardContent, CardHeader } from '@material-ui/core'
import IconButton from '@material-ui/core/IconButton'
import Popover from '@material-ui/core/Popover'
import CloseIcon from '@material-ui/icons/Close'
import React from 'react'
/* Import Stylesheet */
import styles from './styles.module.scss'
/* Import Types */
import PropTypes, { Color } from './types/props'

/* Render component */
export const ColorPicker: React.FC<PropTypes> = ({ anchorElm, onClose, switchColor }): React.ReactElement => {
  const open = Boolean(anchorElm)
  const forceColors: Color[] = [{ name: 'Red', color: '#f00' }, { name: 'Blue', color: '#0000ff' }, { name: 'Green', color: '#00ff02' }, { name: 'White', color: '#fff' }]
  const presets: Color[] = [{ color: '#f00' }, { color: '#ff9a01' }, { color: '#ffff02' }, { color: '#00ff02' }, { color: '#01ffff' }, { color: '#4b87e8' }, { color: '#0000ff' }, { color: '#9900ff' }, { color: '#fff' }, { color: '#000' }]

  return (
    <>
      <Popover open={open} anchorEl={anchorElm} onBackdropClick={onClose}>
        <Card className={styles['color-picker']}>
          <CardHeader
            action={
              <IconButton size="small" onClick={onClose}>
                <CloseIcon />
              </IconButton>
            }
            className={styles['picker-header']}
            title='Color Editor'
          />
          <CardContent className={styles.content}>
            <div className={styles['c-title']}>Forces Colors</div>
            <div className={styles.groups}>
              {forceColors.map((c, idx) => <span key={`${idx}-${c.color}`} className={styles['c-item']}><span className={styles['c-color']} style={{ backgroundColor: c.color }} onClick={(): void => switchColor(c.color)} /><span className={styles['c-label']}>{c.name}</span></span>)}
            </div>
            <div className={styles['c-title']}>Presets</div>
            <div className={styles.groups}>
              {presets.map((c, idx) => <span key={`${idx}-${c.color}`} className={styles['c-preset']}><span className={styles['c-color']} style={{ backgroundColor: c.color }} onClick={(): void => switchColor(c.color)} /></span>)}
            </div>
          </CardContent>
        </Card>
      </Popover>
    </>
  )
}

export default ColorPicker
