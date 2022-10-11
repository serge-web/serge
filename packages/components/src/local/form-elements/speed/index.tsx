import React from 'react'
import cx from 'classnames'
import PropTypes from './types/props'
import styles from './styles.module.scss'

/* Render component */
export const Speed: React.FC<PropTypes> = ({ onClick, value, colCount, options, disabled }) => {
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

  const handleClick = (e: any): void => {
    if (typeof onClick === 'function' && !disabled) {
      onClick(e)
    }
  }

  const renderItem = (key: number): React.ReactElement => {
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
    const width = options.length === 1 ? 10 : 100 / columns.length

    const left = key ? key * width : options.length === 1 ? 50 : 0

    const style = { height: `${itemSize}%`, left: `${left}%`, width: `${width}%` }

    const handleStickClick = (e: any): void => {
      if (typeof onClick === 'function' && !disabled) {
        onClick(options[key], e)
      }
    }

    return (
      <div
        key={key}
        onClick={handleStickClick}
        className={cx(
          styles['speed-item'],
          !disabled && styles['speed-enabled'],
          activeItem && styles['speed-active'],
          selectedItem && styles['speed-selected']
        )}
        style={style}
      >
        <div className={styles['speed-item__label']}>{options[key]}</div>
      </div>
    )
  }

  return (
    <div
      onClick={handleClick}
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
