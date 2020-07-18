import React from 'react'

/* Import proptypes */
import PropTypes from './types/props'

/* Import Styles */
import styles from './styles.module.scss'

/* Import icons */
import AddIcon from '@material-ui/icons/Add'
import RemoveIcon from '@material-ui/icons/Remove'

/* Render component */
export const CollapsibleHeader: React.FC<PropTypes> = (props) => {
  const { children, onClick, onCollapse } = props
  const collapse: boolean = typeof props.collapse === 'undefined' ? true : props.collapse
  const hasContent: boolean = typeof props.hasContent === 'undefined' ? false : props.hasContent

  const handeClick = (e: any): void => {
    if (typeof onClick === 'function') {
      onClick(e)
    }
  }

  const style = { fontSize: 14, color: '#000000' }

  return (
    <div className={styles.main}>
      {hasContent && <div className={styles.control} onClick={(): void => { onCollapse && onCollapse(!collapse) }}>
        {collapse ? <RemoveIcon style={style}/> : <AddIcon style={style}/> }
      </div>}
      <div className={styles.content} onClick={handeClick}>{children}</div>
    </div>
  )
}

CollapsibleHeader.displayName = 'CollapsibleHeader'

export default CollapsibleHeader
