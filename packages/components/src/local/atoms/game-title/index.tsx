import React from 'react'

/* Import Types */
import Props from './types/props'

/* Import Stylesheet */
import styles from './styles.module.scss'

/* Render component */
export const GameTitle: React.FC<Props> = React.forwardRef(({ initiated, title, name, onClick }: Props, ref) => {
  const handleOnClick = (): void => {
    onClick && onClick(name)
  }

  return (
    <span className={styles['wargame-title']} onClick={handleOnClick} ref={ref}>
      {initiated
        ? <span className={styles['wargame-started-highlight']}>&nbsp;</span>
        : <span className={styles['wargame-unstarted-highlight']}>&nbsp;</span>
      }
      <span title={name}>{title}</span>
    </span>
  )
})

export default GameTitle
