import { PanelResizeHandle } from 'react-resizable-panels'
import styles from '../styles.module.scss'
import React from 'react'
import cx from 'classnames'

type ResizeHandleProps = {
  direction?: 'vertical' | 'horizontal'
  className?: string
  disabled?: boolean
}

const ResizeHandle: React.FC<ResizeHandleProps> = ({ direction = 'vertical', className, disabled }): React.ReactElement => {
  return <PanelResizeHandle className={cx({ [styles['resize-handle-outer']]: true, [styles.disabled]: disabled })}>
    <div className={cx(styles['resize-handle-inner'], className)}>
      <svg className={cx({ [styles['icon']]: true, [styles['resize-handle-horizontal']]: direction !== 'horizontal' })} viewBox="0 0 24 24">
        <path d="M15 4a2 2 0 1 0 0 4 2 2 0 0 0 0-4ZM15 10a2 2 0 1 0 0 4 2 2 0 0 0 0-4ZM15 16a2 2 0 1 0 0 4 2 2 0 0 0 0-4ZM9 10a2 2 0 1 0 0 4 2 2 0 0 0 0-4ZM9 16a2 2 0 1 0 0 4 2 2 0 0 0 0-4ZM9 4a2 2 0 1 0 0 4 2 2 0 0 0 0-4Z" fill="#000000"/>
      </svg>
    </div>
  </PanelResizeHandle>
}

export default ResizeHandle
