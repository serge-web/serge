import React from 'react'
import cx from 'classnames'
import { ArrowRight } from '@material-ui/icons'

/* Import Stylesheet */
import styles from './styles.module.scss'
import { MapContext } from '../mapping'

/* Render component */
export const MapBar: React.FunctionComponent = ({ children }) =>
  <MapContext.Consumer>
    {
      (context): React.ReactNode => {

        
        const { showDialogue, setShowDialogue } = context.props

        const clickEvent = (): void => showDialogue ? setShowDialogue(false) : setShowDialogue(true)

        return (
          <div className={cx(styles['map-bar'], showDialogue && styles['open'])}>
            <div className={styles.toggle} onClick={clickEvent}><ArrowRight /></div>
            {children}
          </div>
        )
      }
    }
  </MapContext.Consumer>
  

export default MapBar
