import React from 'react'

/* Import Types */
import Props from './types/props'

/* Import Stylesheet */
import styles from './styles.module.scss'
import cx from 'classnames'

/* Render component */
export const ProgressIndicator: React.FC<Props> = ({ list }: Props) =>
  <div className={styles['progress-box']}>
    <div className={styles.progress}>
      {
        list.map((entry, key) => (
          <div key={key} className={cx(
            styles['progress-indicator'],
            entry.active && styles['progress-indicator-active']
          )} />
        ))
      }
    </div>
  </div>

export default ProgressIndicator
