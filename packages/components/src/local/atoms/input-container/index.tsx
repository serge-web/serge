import React from 'react'
import cx from 'classnames'
import { Box } from '@material-ui/core'

/* Import Stylesheet */
import styles from './styles.module.scss'

/* Import proptypes */
import PropTypes from './types/props'

/* Render component */
export const InputContainer: React.FunctionComponent<PropTypes> = ({
  children,
  label,
  labelColor,
  labelSize,
  disableOffset,
  className
}) =>
  <section className={
    cx(styles['input-container'],
      disableOffset && styles['disable-offset'],
      className)}
  >
    {
      label && (
        <Box
          fontSize={labelSize || '1rem'}
          color={labelColor || 'text.primary'}
          className={styles['input-label']}
          mb={1}
        >
          {label}
        </Box>
      )
    }
    {children}
  </section>

export default InputContainer
