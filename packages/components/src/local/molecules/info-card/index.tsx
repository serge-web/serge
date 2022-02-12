import { Card, CardContent, CardHeader } from '@material-ui/core'
import IconButton from '@material-ui/core/IconButton'
import Popover from '@material-ui/core/Popover'
import { Close } from '@material-ui/icons'
import Info from '@material-ui/icons/Info'
import React, { useEffect, useState } from 'react'
import styles from './styles.module.scss'
import InforCardProps from './types/props'

const MAX_INFO_LENGTH = 100

const InfoCard: React.FC<InforCardProps> = ({ content, title }) => {
  const [anchorElm, setAnchorElm] = useState<HTMLButtonElement | null>(null)
  const [moreInfo, setMoreInfo] = useState<boolean>(false)
  const [displayInfo, setDisplayInfo] = useState<string>('')

  const openInfoCard = (e: React.MouseEvent<HTMLButtonElement>): void => {
    setAnchorElm(e.currentTarget)
  }

  const closeInfoCard = (): void => {
    setAnchorElm(null)
  }

  const showMoreInfo = (): void => {
    setDisplayInfo(content)
    setMoreInfo(false)
  }

  const showLessInfo = (): void => {
    setDisplayInfo(content.substring(0, MAX_INFO_LENGTH))
    setMoreInfo(true)
  }

  const open = Boolean(anchorElm)

  useEffect(() => {
    if (content.length >= MAX_INFO_LENGTH) {
      showLessInfo()
    }
  }, [content])

  return (
    <>
      <IconButton size="small" onClick={openInfoCard} title={title}>
        <Info />
      </IconButton>

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
            {moreInfo
              ? <span onClick={showMoreInfo} className={styles.toggleDisplayMode}>...more info</span>
              : <span onClick={showLessInfo} className={styles.toggleDisplayMode}>...less info</span>}
          </CardContent>
        </Card>
      </Popover>
    </>
  )
}

export default React.memo(InfoCard)
