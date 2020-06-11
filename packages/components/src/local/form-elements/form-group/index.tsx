import React from 'react'
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';

import cx from 'classnames'

/* Import proptypes */
import PropTypes from './types/props'

/* Import Styles */
import styles from './styles.module.scss'

/* Render component */
export const FormGroup: React.FC<PropTypes> = ({ children, title, disableOffsets, align }) => {

  const theme = createMuiTheme({
    palette: {
      type: 'dark',
    },
  });

  return (
    <div className={styles.group}>
      {title && <div className={cx(styles.container, styles.title)}>{title}</div>}
      <div className={cx(
        styles.container,
        styles['main-container'],
        disableOffsets && styles['disable-offsets'],
        align && styles['align-' + align]
      )}>
        <ThemeProvider theme={theme}>{children}</ThemeProvider>
      </div>
    </div>
  )
}

export default FormGroup
