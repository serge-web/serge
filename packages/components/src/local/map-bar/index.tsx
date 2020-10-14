import React, { useState, useEffect, useContext } from 'react'
import cx from 'classnames'
import { ArrowRight } from '@material-ui/icons'
import assetDialogFor from './helpers/asset-dialog-for'

import collatePlanFormData from './helpers/collate-plan-form-data'
import collateAdjudicationFormData from './helpers/collate-adjudication-form-data'
import collatePerceptionFormData from './helpers/collate-perception-form-data'
import collatePlanningOrders from './helpers/collate-planning-orders'
import collateStateOfWorld from './helpers/collate-state-of-world'

import { findAsset, forceFor, visibleTo } from '@serge/helpers'

/* import types */
import { PlanTurnFormValues, Postback, SelectedAsset, RouteStore, Route, SergeHex, SergeGrid } from '@serge/custom-types'
import { Phase, ADJUDICATION_PHASE, UMPIRE_FORCE, PLANNING_PHASE, SUBMIT_PLANS, STATE_OF_WORLD } from '@serge/config'

/* Import Stylesheet */
import styles from './styles.module.scss'

/* Import child components */
import { MapContext } from '../mapping'
import WorldState from '../world-state'
import PerceptionForm from '../perception-form'
import AdjudicateTurnForm from '../adjudicate-turn-form'
import PlanTurnForm from '../plan-turn-form'

/* Render component */
export const MapBar: React.FC = () => {
  /* Set our intial states */
  const [currentForm, setCurrentForm] = useState<string>('')
  const [currentAssetName, setCurrentAssetName] = useState<string>('')
  const [showOtherPlatforms, setShowOtherPlatforms] = useState<boolean>(false)

  const [stateFormTitle, setStateFormTitle] = useState<string>('')
  const [stateSubmitTitle, setStateSubmitTitle] = useState<string>('')
  const [userIsUmpire, setUserIsUmpire] = useState<boolean | undefined>(undefined)

  /* Pull in the context from MappingContext */
  const {
    gridCells,
    playerForce,
    canSubmitOrders,
    phase,
    platforms,
    forces,
    showMapBar,
    turnNumber,
    setShowMapBar,
    selectedAsset,
    setSelectedAsset,
    channelID,
    postBack,
    routeStore,
    turnPlanned,
    hidePlanningForm,
    setHidePlanningForm,
    groupMoveToRoot,
    groupCreateNewGroup,
    groupHostPlatform,
    plansSubmitted,
    setPlansSubmitted
  }: {
    gridCells: SergeGrid<SergeHex<{}>> | undefined
    playerForce: any
    canSubmitOrders: boolean
    phase: Phase
    platforms: any
    forces: any
    showMapBar: boolean
    turnNumber: number
    setShowMapBar: React.Dispatch<React.SetStateAction<boolean>>
    selectedAsset: SelectedAsset
    setSelectedAsset: React.Dispatch<React.SetStateAction<SelectedAsset | undefined>>
    channelID: string | number
    postBack: Postback
    routeStore: RouteStore
    turnPlanned: {(turn: PlanTurnFormValues): void}
    hidePlanningForm: boolean
    setHidePlanningForm: React.Dispatch<React.SetStateAction<boolean>>
    groupMoveToRoot?: {(uniqid: string): void}
    groupCreateNewGroup?: {(dragged: string, target: string): void}
    groupHostPlatform?: {(dragged: string, target: string): void}
    plansSubmitted: boolean
    setPlansSubmitted: React.Dispatch<React.SetStateAction<boolean>>
  } = useContext(MapContext).props

  // sort out the handler for State of World button
  useEffect(() => {
    setUserIsUmpire(playerForce === UMPIRE_FORCE)
  }, [playerForce])

  // sort out the handler for State of World button
  useEffect(() => {
    let formTitle = ''
    let submitTitle = ''
    if (phase === ADJUDICATION_PHASE) {
      formTitle = playerForce === UMPIRE_FORCE ? 'State of World' : 'My Forces'
      submitTitle = 'Submit state of world'
    } else if (phase === PLANNING_PHASE) {
      formTitle = 'Orders'
      submitTitle = 'Submit routes'
    }
    if (submitTitle !== '') {
      setStateSubmitTitle(submitTitle)
    }
    if (formTitle !== '') {
      setStateFormTitle(formTitle)
    }
  }, [phase, playerForce])

  const worldStateSubmitHandler = (): void => {
    if (phase === ADJUDICATION_PHASE && playerForce === UMPIRE_FORCE) {
      // Umpire has finshed adjudication phase, and is now ready
      // to submit new State of the World object
      const orders = collateStateOfWorld(routeStore.routes, turnNumber)
      postBack(STATE_OF_WORLD, orders, channelID)
    } else if (phase === PLANNING_PHASE) {
      // Player has finished planning process, and now
      // wants to submit them
      const myRoutes: Array<Route> = routeStore.routes.filter(route => route.underControl)
      const orders = collatePlanningOrders(myRoutes, playerForce, turnNumber)
      postBack(SUBMIT_PLANS, orders, channelID)
    }
    setPlansSubmitted(true)
  }

  // Selects the current asset
  useEffect(() => {
    if (selectedAsset) {
      const newForm = assetDialogFor(playerForce, selectedAsset.force, selectedAsset.visibleTo, selectedAsset.controlledBy, phase)
      // note: since the next call is async, we get a render before the new form
      // has been assigned. This caused troubles. So, while we set the new form here,
      // we do a "live-recalculation" in the render code
      setHidePlanningForm(false)
      setCurrentForm(newForm)
      setCurrentAssetName(selectedAsset.name)
    } else {
      setCurrentAssetName('Pending')
    }
  }, [selectedAsset])

  // Toggles the map bar on and off
  const clickEvent = (nextShowOtherPlatforms: boolean): void => {
    if (nextShowOtherPlatforms === showOtherPlatforms) {
      setShowMapBar(!showMapBar)
    } else {
      setShowOtherPlatforms(nextShowOtherPlatforms)
      if (!showMapBar) setShowMapBar(!showMapBar)
    }
  }

  /** an asset has been selected from the list */
  const setSelectedAssetById = (id: string): void => {
    // is it a new id?
    if (selectedAsset && selectedAsset.uniqid === id) {
      // current clicked on, clear it
      setSelectedAsset(undefined)
    } else {
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
  }

  /* TODO: This should be refactored into a helper */
  const formSelector = (): any => {
    let output = null
    // do a fresh calculation on which form to display, to overcome
    // an async state update issue
    const form = assetDialogFor(playerForce, selectedAsset.force, selectedAsset.visibleTo, selectedAsset.controlledBy, phase)
    const icondData = {
      forceColor: selectedAsset.force,
      platformType: selectedAsset.type
    }
    switch (form) {
      case 'PerceivedAs':
        output = <PerceptionForm
          key={selectedAsset.uniqid}
          type={selectedAsset.type}
          force={selectedAsset.force}
          formData={collatePerceptionFormData(platforms, playerForce, selectedAsset, forces, userIsUmpire || false)}
          channelID={channelID}
          postBack={postBack} />
        break
      case 'Adjudication':
        output = <AdjudicateTurnForm
          key={selectedAsset.uniqid}
          plansSubmitted={plansSubmitted}
          formHeader={currentAssetName}
          formData={collateAdjudicationFormData(platforms, selectedAsset, forces)}
          channelID={channelID}
          icon={icondData}
          postBack={postBack} />
        break
      case 'Planning':
        output = <PlanTurnForm
          icon={icondData}
          setHidePlanningForm={setHidePlanningForm}
          plansSubmitted={plansSubmitted}
          key={selectedAsset.uniqid}
          formHeader={currentAssetName}
          formData={collatePlanFormData(platforms, selectedAsset)}
          channelID={channelID}
          turnPlanned={turnPlanned} />
        break
      default:
        output = null
        break
    }
    return output
  }

  return (
    <div className={cx(styles['map-bar'], showMapBar && styles.open)}>
      <div
        className={cx(styles.toggle, (!showOtherPlatforms || !showMapBar) && styles['toggle-active'])}
        onClick={(): void => { clickEvent(false) }}>
        <ArrowRight />
      </div>
      <div
        className={cx(styles.toggle, (showOtherPlatforms || !showMapBar) && styles['toggle-active'])}
        onClick={(): void => { clickEvent(true) }}>
        <ArrowRight />
      </div>
      <div className={styles.inner}>
        <section>
          <WorldState
            name={stateFormTitle}
            phase={phase}
            isUmpire={playerForce === UMPIRE_FORCE}
            canSubmitOrders={canSubmitOrders}
            store={routeStore}
            showOtherPlatforms={showOtherPlatforms}
            submitTitle = {stateSubmitTitle}
            setSelectedAsset={setSelectedAssetById}
            submitForm={worldStateSubmitHandler}
            groupMoveToRoot={groupMoveToRoot}
            groupCreateNewGroup={groupCreateNewGroup}
            groupHostPlatform={groupHostPlatform}
            plansSubmitted={plansSubmitted}
            setPlansSubmitted={setPlansSubmitted}
            gridCells={gridCells} ></WorldState>
        </section>
      </div>
      {currentForm !== '' && selectedAsset && (currentForm !== 'Planning' || !hidePlanningForm) &&
        <div className={styles['form-inner']}>
          <section>
            {formSelector()}
          </section>
        </div>
      }
    </div>
  )
}

export default MapBar
