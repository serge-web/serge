import React, { ReactNodeArray, useState } from 'react'

/* Import proptypes */
import PropTypes, { ChildInt } from './types/props'

/* Import Styles */
import styles from './styles.module.scss'

const isType = (childs: ReactNodeArray, type: string, hasContent = false): boolean => {
  return childs.findIndex((ch) => {
    if (typeof ch === 'object') {
      const chEl = ch as ChildInt
      const res = chEl.type.displayName === type
      if (hasContent) {
        let arrChekck = true
        const chChildren = chEl.props.children
        if (Array.isArray(chChildren)) {
          arrChekck = chChildren.length > 0 && chChildren.filter(f => !f).length !== chChildren.length
        }
        return res && chEl.props.children && arrChekck
      }
      return res
    }
    return false
  }) !== -1
}

/* Render component */
export const Collapsible: React.FC<PropTypes> = ({ children, onClick }) => {
  const [collapse, setCollapse] = useState(false)

  if (!children.length || children.length < 2) return null
  if (!isType(children, 'CollapsibleHeader')) return null
  if (!isType(children, 'CollapsibleContent')) return null

  const handeClick = (e: any): void => {
    if (typeof onClick === 'function') {
      onClick(e)
    }
  }

  const hasContent = isType(children, 'CollapsibleContent', true)

  const handeCollapse = (status: boolean): void => {
    setCollapse(status)
  }

  return (
    <div onClick={handeClick} className={styles.main} >
      {React.Children.map(children, (child) => {
        const ch = child as ChildInt

        if (ch.type.displayName === 'CollapsibleHeader') {
          return React.cloneElement(child as React.ReactElement, {
            collapse,
            hasContent,
            onCollapse: handeCollapse
          })
        } else {
          return React.cloneElement(child as React.ReactElement, {
            collapse
          })
        }
      })}
    </div>
  )
}

Collapsible.displayName = 'Collapsible'

export default Collapsible
