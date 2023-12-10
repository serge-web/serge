import { PanelResizeHandle } from 'react-resizable-panels'
import styles from '../styles.module.scss'
import React from 'react'
import cx from 'classnames'

type ResizeHandleProps = {
  direction?: 'vertical' | 'horizontal'
  className?: string
}

const ResizeHandle: React.FC<ResizeHandleProps> = ({ direction = 'vertical', className }): React.ReactElement => {
  return <PanelResizeHandle className={styles['resize-handle-outer']}>
    <div className={cx(styles['resize-handle-inner'], className)}>
      <svg className={cx({ [styles['icon']]: true, [styles['resize-handle-horizontal']]: direction === 'horizontal' })} viewBox="0 0 24 24">
        <path
          fill="currentColor"
          d="M8,18H11V15H2V13H22V15H13V18H16L12,22L8,18M12,2L8,6H11V9H2V11H22V9H13V6H16L12,2Z"
        />
      </svg>
    </div>
  </PanelResizeHandle>
}

export default ResizeHandle
