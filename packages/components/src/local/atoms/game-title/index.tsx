import React from 'react'

/* Import Types */
import Props from './types/props'

/* Import Stylesheet */
import styles from './styles.module.scss'

/* Render component */
export const GameTitle: React.FC<Props> = ({ initiated, title, onClick }: Props) => {
  const handleOnClick = (): void => {
    onClick && onClick(title)
  }

  return (
    <span className={styles['wargame-title']}>
      {initiated
        ? <span className={styles['wargame-started-highlight']}>&nbsp;</span>
        : <span className={styles['wargame-unstarted-highlight']}>&nbsp;</span>
      }
      <span title={title} onClick={handleOnClick}>{title}</span>
    </span>
  )
}

export default GameTitle
