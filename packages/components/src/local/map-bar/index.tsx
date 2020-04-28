import React, { useState, useEffect, useContext } from 'react'
import cx from 'classnames'
import { ArrowRight } from '@material-ui/icons'
import assetDialogFor from './helpers/asset-dialog-for'

/* Import Stylesheet */
import styles from './styles.module.scss'
import { MapContext } from '../mapping'

/* Import child components */
import WorldState from '../world-state'
import Form from '../form'

/* Render component */
export const MapBar: React.FC = () => {
  const [currentForm, setCurrentForm] = useState('')
  const [currentAssetName, setCurrentAssetName] = useState('')

  const { playerForce, phase, showMapBar, setShowMapBar, selectedAsset } = useContext(MapContext).props

  useEffect(() => {
    setCurrentForm(assetDialogFor(playerForce, selectedAsset.force, selectedAsset.controlledBy, phase))
    setCurrentAssetName(selectedAsset.id)
  }, [selectedAsset])

  const clickEvent = (): void => {
    showMapBar ? setShowMapBar(false) : setShowMapBar(true)
  }

  return (
    <div className={cx(styles['map-bar'], showMapBar && styles.open)}>
      <div className={styles.toggle} onClick={clickEvent}><ArrowRight /></div>
      <section>
        <WorldState name="World State"></WorldState>
      </section>
      <section>
        {currentForm !== '' && <Form type={currentForm} headerText={currentForm + ' for ' + currentAssetName} /> }
      </section>
    </div>
  )
}

export default MapBar
