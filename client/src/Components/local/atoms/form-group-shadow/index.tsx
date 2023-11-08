import React from 'react'

/* Import proptypes */
import PropTypes from './types/props'

import MoreInfo from '../../molecules/more-info'

/* Import styles */
import styles from './styles.module.scss'

/* Render component */
export const FormGroupShadow: React.FC<PropTypes> = ({ placeholder, description, children }) => (
  <div className={styles.main}>
    { description
      ? <div className={styles.placeholder}><MoreInfo description={description}>{placeholder}</MoreInfo></div>
      : <div className={styles.placeholder}>{placeholder}</div>
    }
    <div className={styles.content}>{children}</div>
  </div>
)

export default FormGroupShadow
