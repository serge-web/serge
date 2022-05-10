import React from 'react'

/* Import Types */
import Props from './types/props'

/* Import Stylesheet */
import styles from './styles.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClone, faTrash } from '@fortawesome/free-solid-svg-icons'

/* Render component */
export const SearchListRow: React.FC<Props> = ({
  active,
  onClick,
  onDuplicate,
  onDelete,
  children
}: Props) => {
  const activeClass = active ? 'active' : null

  return (
    <span
      className={
        `${styles['searchlist-row']} ${activeClass ? styles.active : ''}`
      }
      onClick={onClick}
    >
      <span>
        {children}
      </span>
      <div className={styles['searchlist-menu']}>
        {onDuplicate && <FontAwesomeIcon className={styles['searchlist-icon']} icon={faClone} title="Duplicate channel" onClick={onDuplicate} />}
        {onDelete && <FontAwesomeIcon className={styles['searchlist-icon']} icon={faTrash} title="Delete channel" onClick={onDelete} />}
      </div>
    </span>
  )
}

export default SearchListRow
