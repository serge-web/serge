import React, { useState, useEffect, useContext } from 'react'
import cx from 'classnames'
import { ArrowRight } from '@material-ui/icons'
import assetDialogFor from './helpers/asset-dialog-for'
import { kebabCase } from 'lodash'

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
  const [currentForm, setCurrentForm] = useState('')
  const [currentAssetName, setCurrentAssetName] = useState('')

  const { playerForce, forces, platforms, phase, showMapBar, setShowMapBar, selectedAsset } = useContext(MapContext).props

  useEffect(() => {
    setCurrentForm(assetDialogFor(playerForce, selectedAsset.force, selectedAsset.controlledBy, phase))
    setCurrentAssetName(selectedAsset.name)
  }, [selectedAsset])

  const clickEvent = (): void => {
    showMapBar ? setShowMapBar(false) : setShowMapBar(true)
  }

  const availableForces = forces && forces.map((force: any) => {
    return {
      colour: force.color,
      name: force.name,
      selected: false
    }
  })

  const currentPlatform = platforms && platforms.find((platform: any) => kebabCase(platform.name) === selectedAsset.type)

  const perceptionFormData = {
    perceivedForce: [...availableForces, { name: 'Unknown', colour: '#ccc', selected: true }]
  }

  const planTurnFormData = {
    status: ['Moored', 'Transiting']
  }

  const AdjudicateTurnFormData = {
    status: currentPlatform && currentPlatform.states ? currentPlatform.states.map((s: any) => s.name) : [],
    speed: currentPlatform && currentPlatform.speedkts ? currentPlatform.speedKts.map((s: any) => s) : [],
    visibleTo: [
      {
        name: 'Blue Force',
        colour: '#69c',
        selected: true
      },
      {
        name: 'Red Force',
        colour: '#f00',
        selected: false
      },
      {
        name: 'White Force',
        colour: '#fff',
        selected: false
      }
    ],
    condition: currentPlatform && currentPlatform.conditions ? currentPlatform.conditions.map((c: any) => c) : []
  }

  const formSelector = (form: string): any => {
    let output = null
    switch (form) {
      case 'PerceivedAs':
        output = <PerceptionForm formHeader={currentAssetName} formData={perceptionFormData} />
        break
      case 'Adjudication':
        output = <AdjudicateTurnForm formHeader={currentAssetName} formData={AdjudicateTurnFormData} />
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
