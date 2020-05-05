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
// import AdjudicateTurnForm from '../adjudicate-turn-form'
// import PlanTurnForm from '../plan-turn-form'

/* Render component */
export const MapBar: React.FC = () => {
  const [currentForm, setCurrentForm] = useState('')
  const [currentAssetName, setCurrentAssetName] = useState('')

  const { playerForce, forces, phase, showMapBar, setShowMapBar, selectedAsset } = useContext(MapContext).props

  useEffect(() => {
    setCurrentForm(assetDialogFor(playerForce, selectedAsset.force, selectedAsset.controlledBy, phase))
    setCurrentAssetName(selectedAsset.id)
  }, [selectedAsset])

  const clickEvent = (): void => {
    showMapBar ? setShowMapBar(false) : setShowMapBar(true)
  }

  const availableForces = forces.map((force: any) => {
    return {
      colour: force.color, 
      name: force.name,
      selected: false
    }
  })

  const perceptionFormData = {
    perceivedForce: [...availableForces, { name: "Unknown", colour: "#ccc", selected: true}]
  }

  // const formSelector = form => {
  //   let output = null
  //   switch (form) {
  //     case 'PerceivedAs':
  //       output = <PerceptionForm formHeader={currentAssetName} formData={perceptionFormData} />
  //       break;

  //   }
  //   return output
  // }

  return (
    <div className={cx(styles['map-bar'], showMapBar && styles.open)}>
      <div className={styles.toggle} onClick={clickEvent}><ArrowRight /></div>
      <div className={styles['inner']}>
        <section>
          <WorldState name="World State"></WorldState>
        </section>
        <section>
          {currentForm !== '' && <PerceptionForm formHeader={currentAssetName} formData={perceptionFormData} />}
        </section>
      </div>
    </div>
  )
}

export default MapBar
