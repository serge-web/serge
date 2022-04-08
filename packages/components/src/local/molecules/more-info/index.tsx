import { Card, CardContent, CardHeader } from '@material-ui/core'
import IconButton from '@material-ui/core/IconButton'
import Popover from '@material-ui/core/Popover'
import CloseIcon from '@material-ui/icons/Close'
import Info from '@material-ui/icons/Info'
import InfoOutlined from '@material-ui/icons/InfoOutlined'
import React, { useState } from 'react'
import styles from './styles.module.scss'
import MoreInfoProps from './types/props'

const MoreInfo: React.FC<MoreInfoProps> = ({ title, description, children, color, container, customChipStyle }) => {
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
      <Popover container={container || document.body} open={open} onClose={closeInfoCard} anchorEl={anchorElm}>
        <Card className={styles.infocard}>
          <CardHeader
            avatar={<Info />}
            action={
              <IconButton size="small" onClick={closeInfoCard}>
                <CloseIcon />
              </IconButton>
            }
            className={styles.header}
            title={title}
          />
          <CardContent className={styles.content}>
            {description}
          </CardContent>
        </Card>
      </Popover>
      <div className={styles.childnode}>
        {children}
        <div onClick={showMoreInfo} className={styles.icon}><InfoOutlined style={customChipStyle} htmlColor={color || '#f00'} /></div>
      </div>
    </>
  )
}

export default React.memo(MoreInfo)
