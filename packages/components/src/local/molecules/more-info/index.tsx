import { Card, CardContent, CardHeader } from '@material-ui/core'
import IconButton from '@material-ui/core/IconButton'
import Popover from '@material-ui/core/Popover'
import { Close } from '@material-ui/icons'
import Info from '@material-ui/icons/Info'
import React, { useEffect, useState } from 'react'
import styles from './styles.module.scss'
import MoreInfoProps from './types/props'

const MAX_INFO_LENGTH = 100

const MoreInfo: React.FC<MoreInfoProps> = ({ description, children }) => {
  const [anchorElm, setAnchorElm] = useState<HTMLElement | null>(null)
  const [isDisplayFull, setDisplayFullMode] = useState<boolean>(false)
  const [displayInfo, setDisplayInfo] = useState<string>('')

  const showMoreInfo = (e: React.MouseEvent<HTMLDivElement>): void => {
    setAnchorElm(e.currentTarget)
  }

  const closeInfoCard = (): void => {
    setAnchorElm(null)
    showLess()
  }

  const showFull = (): void => {
    setDisplayInfo(description)
    setDisplayFullMode(true)
  }

  const showLess = (): void => {
    setDisplayInfo(description.substring(0, MAX_INFO_LENGTH))
    setDisplayFullMode(false)
  }

  const open = Boolean(anchorElm)

  useEffect(() => {
    if (description.length >= MAX_INFO_LENGTH) {
      showLess()
    }
  }, [description])

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
            {displayInfo}
            {!isDisplayFull && <span onClick={showFull}>...show more</span>}
          </CardContent>
        </Card>
      </Popover>
      <div onClick={showMoreInfo} className={styles.childNode}>
        {children}
      </div>
    </>
  )
}

export default React.memo(MoreInfo)
