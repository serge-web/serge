import React from 'react'
import cx from 'classnames'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserSecret } from '@fortawesome/free-solid-svg-icons'
import { Box } from '@material-ui/core'

/* Import Stylesheet */
import styles from './styles.module.scss'

/* Import proptypes */
import PropTypes from './types/props'

/* Render component */
export const InputContainer: React.FunctionComponent<PropTypes> = React.forwardRef(({
  children,
  label,
  labelColor,
  labelSize,
  disableOffset,
  fullWidth,
  className,
  isPrivate
}, ref) =>
  <section ref={ref} className={
    cx(styles['input-container'],
      disableOffset && styles['disable-offset'],
      fullWidth && styles.fullwidth,
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
          {
            isPrivate
              ? (
                <Box className={styles['private-input__label']}>
                  <FontAwesomeIcon icon={faUserSecret} />
                  <span>{ label }</span>
                </Box>
              )
              : label
          }
        </Box>
      )
    }
    {children}
  </section>)

export default InputContainer
