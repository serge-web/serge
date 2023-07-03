import React from 'react'
import { createTheme } from '@material-ui/core/styles'
import { ThemeProvider } from '@material-ui/styles'

import cx from 'classnames'

/* Import proptypes */
import PropTypes from './types/props'

/* Import Styles */
import styles from './styles.module.scss'

export const clInput: string = styles.input
export const clSelect: string = styles.select

/* Render component */
export const FormGroup: React.FC<PropTypes> = ({ children, title, disableOffsets, align, titlePosition }) => {
  const theme = createTheme({
    palette: {
      type: 'dark',
      secondary: {
        main: '#394959'
      },
      grey: {
        300: '#6c757d'
      }
    }
  })

  return (
    <div className={cx(styles.group)}>
      {title && <div className={cx(
        styles.container,
        styles.title,
        titlePosition === 'absolute' && styles['title-absolute'])
      }>{title}</div>}
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
