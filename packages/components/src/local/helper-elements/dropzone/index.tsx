import React from 'react'

import { ReactSortable } from 'react-sortablejs'

// import cx from 'classnames'
/* Import proptypes */
import PropTypes, { Item } from './types/props'

/* Import Styles */
import styles from './styles.module.scss'

/* Render component */
export const Dropzones: React.FC<PropTypes> = ({ children, item, type = 'empty' }) => {

  console.log(type);

  const handeListChange = (newList: Array<Item>) => {
    console.log(newList);
  }

  return (
    <div className={styles.main}>
      <div className={styles.holder}>
        <ReactSortable
          group="groupName"
          animation={200}
          delay={2}
          list={[{id: item.uniqid, ...item}]}
          setList={handeListChange}
        >
          <div className={styles.dropzone}>
          {children}
          </div>
        </ReactSortable>
      </div>
    </div>
  )
}

Dropzones.displayName = 'Dropzones'

export default Dropzones
