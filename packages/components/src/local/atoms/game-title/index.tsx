import React from 'react'

/* Import Types */
import Props from './types/props'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons'
import { hiddenPrefix } from '@serge/config'

/* Import Stylesheet */
import styles from './styles.module.scss'

/* Render component */
export const GameTitle: React.FC<Props> = React.forwardRef(({ initiated, title, name, shortName, onClick }: Props, ref) => {
  const handleOnClick = (): void => {
    onClick && onClick(name)
  }

  return (
    <div className={styles['wargame-row']}>
      <FontAwesomeIcon
        icon={shortName.startsWith(hiddenPrefix) ? faEyeSlash : faEye}
        className={styles['wargame-icon']}
      />
      <span className={styles['wargame-title']} onClick={handleOnClick} ref={ref}>
        {initiated
          ? <span className={styles['wargame-started-highlight']}>&nbsp;</span>
          : <span className={styles['wargame-unstarted-highlight']}>&nbsp;</span>
        }
        <span title={name}>{title}</span>
      </span>
    </div>
  )
})

export default GameTitle
