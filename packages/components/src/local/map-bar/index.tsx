import React, { useState, useEffect, useContext } from 'react'
import cx from 'classnames'
import { ArrowRight } from '@material-ui/icons'
import assetDialogFor from './helpers/asset-dialog-for'

import collatePlanFormData from './helpers/collate-plan-form-data'
import collateAdjudicationFormData from './helpers/collate-adjudication-form-data'
import collatePerceptionFormData from './helpers/collate-perception-form-data'

import { findAsset, forceFor, visibleTo } from '@serge/helpers'

/* import types */
import { SelectedAsset } from '@serge/custom-types'

/* Import Stylesheet */
import styles from './styles.module.scss'

/* Import child components */
import { MapContext } from '../mapping'
import WorldState from '../world-state'
import PerceptionForm from '../perception-form'
import AdjudicateTurnForm from '../adjudicate-turn-form'
import PlanTurnForm from '../plan-turn-form'
import { ADJUDICATION_PHASE, UMPIRE_FORCE, PLANNING_PHASE } from '@serge/config'

/* Render component */
export const MapBar: React.FC = () => {
  /* Set our intial states */
  const [currentForm, setCurrentForm] = useState('')
  const [currentAssetName, setCurrentAssetName] = useState('')

  const [stateFormTitle, setStateFormTitle] = useState<string>('')
  const [stateSubmitTitle, setStateSubmitTitle] = useState<string>('')
  // handler for the State of World form
  const [stateSubmitHandler, setStateSubmitHandler] = useState<{(): void} | undefined>(undefined)

  /* Pull in the context from MappingContext */
  const {
    playerForce,
    phase,
    platforms,
    forces,
    showMapBar,
    setShowMapBar,
    selectedAsset,
    setSelectedAsset,
    channelID,
    postBack,
    routeStore,
    turnPlanned
  } = useContext(MapContext).props

  // sort out the handler for State of World button
  useEffect(() => {
    let handler
    let formTitle = ''
    let submitTitle = ''
    if (phase === ADJUDICATION_PHASE && playerForce === UMPIRE_FORCE) {
      formTitle = 'State of World'
      handler = (): any => {
        console.log('Submitting State of World')
      }
      submitTitle = 'Submit state of world'
    } else if (phase === PLANNING_PHASE) {
      formTitle = 'My Forces'
      handler = (): any => {
        console.log('Submitting my forces')
      }
      submitTitle = 'Submit routes'
    }
    if (submitTitle) {
      console.log('map-bar', submitTitle, handler)
      setStateSubmitHandler(handler)
      setStateSubmitTitle(submitTitle)
    }
    if (formTitle !== '') {
      setStateFormTitle(formTitle)
    }
  }, [phase, playerForce])

  // Selects the current asset
  useEffect(() => {
    setCurrentForm(assetDialogFor(playerForce, selectedAsset.force, selectedAsset.controlledBy, phase))
    setCurrentAssetName(selectedAsset.name)
  }, [selectedAsset])

  // Toggles the map bar on and off
  const clickEvent = (): void => {
    showMapBar ? setShowMapBar(false) : setShowMapBar(true)
  }

  /** an asset has been selected from the list */
  const setSelectedAssetById = (id: string): void => {
    const asset: any = findAsset(forces, id)
    const force: any = forceFor(forces, id)
    const visibleToArr: string[] = visibleTo(asset.perceptions)
    const selected: SelectedAsset = {
      uniqid: asset.uniqid,
      name: asset.name,
      type: asset.platformType,
      force: force.uniqid,
      controlledBy: force.controlledBy,
      condition: asset.condition,
      visibleTo: visibleToArr,
      status: asset.status
    }
    // ok done, share the good news
    setSelectedAsset(selected)
  }

  /* TODO: This should be refactored into a helper */
  const formSelector = (form: string): any => {
    let output = null
    switch (form) {
      case 'PerceivedAs':
        output = <PerceptionForm
          key={selectedAsset.uniqid}
          formData={collatePerceptionFormData(platforms, selectedAsset, forces)}
          channelID={channelID}
          postBack={postBack} />
        break
      case 'Adjudication':
        output = <AdjudicateTurnForm
          key={selectedAsset.uniqid}
          formHeader={currentAssetName}
          formData={collateAdjudicationFormData(platforms, selectedAsset, forces)}
          channelID={channelID}
          postBack={postBack} />
        break
      case 'Planning':
        if (phase === ADJUDICATION_PHASE && playerForce === UMPIRE_FORCE) {

        }
        output = <PlanTurnForm
          key={selectedAsset.uniqid}
          formHeader={currentAssetName}
          formData={collatePlanFormData(platforms, selectedAsset)}
          channelID={channelID}
          turnPlanned={turnPlanned}/>
        break
      default:
        output = null
        break
    }
    return output
  }

  return (
    <div className={cx(styles['map-bar'], showMapBar && styles.open)}>
      <div className={styles.toggle} onClick={clickEvent}><ArrowRight /></div>
      <div className={styles.inner}>
        <section>
          <WorldState
            name={stateFormTitle}
            phase={phase}
            store={routeStore}
            submitTitle = {stateSubmitTitle}
            setSelectedAsset={setSelectedAssetById}
            submitForm={stateSubmitHandler} ></WorldState>
        </section>
        <section>
          {currentForm !== '' && selectedAsset.uniqid !== '' && formSelector(currentForm)}
        </section>
      </div>
    </div>
  )
}

export default MapBar
