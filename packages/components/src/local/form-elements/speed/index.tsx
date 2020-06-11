import React from 'react'

import cx from 'classnames'

/* Import proptypes */
import PropTypes from './types/props'

/* Import Styles */
import styles from './styles.module.scss'

/* Render component */
export const Speed: React.FC<PropTypes> = ({ onClick, value, colCount, options }) => {

  // create array with keys based on colCount or options length
  const columns = Array.from(Array(colCount || options.length || 6).keys())
  // get max value from options
  const maxOptionsValue: number = Math.max.apply(0, options)
  // get min value from options
  const minOptionsValue: number = Math.min.apply(0, options)
  // get middle speed change step
  const step = Math.ceil(options.reduce((a, b) => a + b - minOptionsValue, 1) / (options.length - 1))
  // get max value based on col count
  let maxValue: number = maxOptionsValue
  if (colCount && colCount > options.length) {
    maxValue = maxOptionsValue + (colCount - options.length) * step
  }

  const renderItem = (key: number): JSX.Element => {
    let itemSize = 0
    let activeItem = false
    let selectedItem = false

    if (typeof options[key] !== 'undefined') {
      activeItem = true
      if (options[key] === value) {
        selectedItem = true
      }

      if (options[key] - minOptionsValue > 0) {
        itemSize = Math.ceil(100 * (options[key] - minOptionsValue) / (maxValue - minOptionsValue))
      }
    } else {
      itemSize = Math.ceil(100 * (maxOptionsValue + (step * (key - options.length))) / (maxValue - minOptionsValue))
    }

    // if it's not first item, calculate how far across to use
    // if it is first item, decide if it's the only item, in which
    // case, put it in the middle
    const left = key ? Math.ceil(key * 100 / (columns.length - 1)) : options.length === 1 ? 50 : 0

    const style = { height: `${itemSize}%`, left: `${left}%` }

    const handleClick = (e: any): void => {
      if (typeof onClick === 'function') {
        onClick(options[key], e)
      }
    }

    return (
      <div
        key={key}
        onClick={handleClick}
        className={cx(
          styles['speed-item'],
          activeItem && styles['speed-active'],
          selectedItem && styles['speed-selected']
        )}
        style={style}
      />
    )
  }

  return (
    <div
      onClick={handeClick}
      className={styles.main}
    >
      <div className={styles.speed}>
        <div className={styles['speed-inner']}>
          <div className={styles['speed-items']}>
            {columns.map(key => renderItem(key))}
          </div>
        </div>
      </div>
      <div className={styles.result}>
        <h2>{value}</h2>
        <p>KTS</p>
      </div>
    </div>
  )
}

export default Speed
