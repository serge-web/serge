import React, { useState, useEffect, useContext } from 'react'
import cx from 'classnames'
import { ArrowRight } from '@material-ui/icons'
import assetDialogFor from './helpers/asset-dialog-for'

/* Import Stylesheet */
import styles from './styles.module.scss'
import { MapContext } from '../mapping'

/* Import child components */
import WorldState from '../world-state'
import PerceptionForm from '../perception-form'
import AdjudicateTurnForm from '../adjudicate-turn-form'
import PlanTurnForm from '../plan-turn-form'

/* Render component */
export const MapBar: React.FC = () => {

  /* Set our intial states */
  const [currentForm, setCurrentForm] = useState('')
  const [currentAssetName, setCurrentAssetName] = useState('')

  /* Pull in the context from MappingContext */
  const { 
    playerForce, 
    phase, 
    showMapBar, 
    setShowMapBar, 
    selectedAsset, 
    perceptionFormData,
    planTurnFormData,
    adjudicateTurnFormData,
    // setPlanTurnFormData,
    // setPerceptionFormData,
    // setAdjudicateTurnFormData 
  } = useContext(MapContext).props

  // Selects the current asset
  useEffect(() => {
    setCurrentForm(assetDialogFor(playerForce, selectedAsset.force, selectedAsset.controlledBy, phase))
    setCurrentAssetName(selectedAsset.name)
  }, [selectedAsset])

  // Toggles the map bar on and off
  const clickEvent = (): void => {
    showMapBar ? setShowMapBar(false) : setShowMapBar(true)
  }

  /* TODO: This should be refactored into a helper */
  const formSelector = (form: string): any => {
    let output = null
    switch (form) {
      case 'PerceivedAs':
        output = <PerceptionForm formHeader={currentAssetName} formData={perceptionFormData} />
        break
      case 'Adjudication':
        output = <AdjudicateTurnForm formHeader={currentAssetName} formData={adjudicateTurnFormData} />
        break
      case 'Planning':
        output = <PlanTurnForm formHeader={currentAssetName} formData={planTurnFormData} />
        break
    }
    return output
  }

  return (
    <div className={cx(styles['map-bar'], showMapBar && styles.open)}>
      <div className={styles.toggle} onClick={clickEvent}><ArrowRight /></div>
      <div className={styles.inner}>
        <section>
          <WorldState name="World State"></WorldState>
        </section>
        <section>
          {currentForm !== '' && currentAssetName !== '' && formSelector(currentForm)}
        </section>
      </div>
    </div>
  )
}

export default MapBar
