import { Card, CardContent, CardHeader } from '@material-ui/core'
import IconButton from '@material-ui/core/IconButton'
import Popover from '@material-ui/core/Popover'
import { Close } from '@material-ui/icons'
import Info from '@material-ui/icons/Info'
import React, { useState } from 'react'
import styles from './styles.module.scss'
import MoreInfoProps from './types/props'

const MoreInfo: React.FC<MoreInfoProps> = ({ description, children }) => {
  const [anchorElm, setAnchorElm] = useState<HTMLElement | null>(null)

  const showMoreInfo = (e: React.MouseEvent<HTMLDivElement>): void => {
    setAnchorElm(e.currentTarget)
  }

  const closeInfoCard = (): void => {
    setAnchorElm(null)
  }

  const open = Boolean(anchorElm)

  return (
    <>
      <Popover open={open} onClose={closeInfoCard} anchorEl={anchorElm}>
        <Card className={styles.infoCard}>
          <CardHeader
            avatar={<Info />}
            action={
              <IconButton size="small" onClick={closeInfoCard}>
                <Close></Close>
              </IconButton>
            }
            className={styles.header}
          ></CardHeader>
          <CardContent className={styles.content}>
            {description}
          </CardContent>
        </Card>
      </Popover>
      <div className={styles.child-node}>
        {children}
        <div onClick={showMoreInfo} className={styles.icon}><Info /></div>
      </div>
    </>
  )
}

export default React.memo(MoreInfo)
