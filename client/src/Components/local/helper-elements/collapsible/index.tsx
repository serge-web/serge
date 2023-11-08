import React, { useState } from 'react'

/* Import proptypes */
import PropTypes, { ChildInt } from './types/props'

/* Import Styles */
import styles from './styles.module.scss'

const isType = (childs: React.ReactNodeArray | undefined, type: string, hasContent = false): boolean => {
  return (childs || []).findIndex((ch) => {
    if (typeof ch === 'object') {
      const chEl = ch as ChildInt
      const res = chEl.type.displayName === type
      if (hasContent) {
        let arrCheck = true
        const chChildren = chEl.props.children
        if (Array.isArray(chChildren)) {
          arrCheck = chChildren.length > 0 && chChildren.filter(f => !f).length !== chChildren.length
        }
        return res && chEl.props.children && arrCheck
      }
      return res
    }
    return false
  }) !== -1
}

/* Render component */
export const Collapsible: React.FC<PropTypes> = ({
  children,
  onClick,
  openByDefault = false,
  collapseOnDragHover = false,
  header = null,
  content = null,
  iconType,
  onChange
}) => {
  const [collapsed, setCollapse] = useState(!openByDefault)
  const customStructure = (header && content)
  const shouldRender = (
    children &&
      children.length &&
      children.length > 1 &&
      isType(children, 'CollapsibleHeader') &&
      isType(children, 'CollapsibleContent')
  ) || customStructure
  if (!shouldRender) return null

  const handleClick = (e: React.MouseEvent<HTMLImageElement>): void => {
    if (typeof onClick === 'function') {
      onClick(e)
    }
  }

  const hasContent = isType(children, 'CollapsibleContent', true)

  const handleExpand = (status: boolean): void => {
    setCollapse(status)
    if (onChange) onChange(status)
  }

  const renderStructures = (child: any, key: number): React.ReactElement => {
    const ch = child as ChildInt

    if (
      ch.type.displayName === 'CollapsibleHeader' ||
      ch === header
    ) {
      return React.cloneElement(child as React.ReactElement, {
        key: key,
        collapsed,
        hasContent,
        collapseOnDragHover,
        iconType,
        onExpand: handleExpand
      })
    } else {
      return React.cloneElement(child as React.ReactElement, {
        key: key,
        collapsed
      })
    }
  }

  return (
    <div onClick={handleClick} className={styles.main} >
      {
        customStructure
          ? [header, content].map(renderStructures)
          : React.Children.map(children, renderStructures)
      }
    </div>
  )
}

Collapsible.displayName = 'Collapsible'

export default Collapsible
