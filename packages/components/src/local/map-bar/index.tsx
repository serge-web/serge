import React, { useState, useEffect, useContext } from 'react'
import cx from 'classnames'
import { ArrowRight } from '@material-ui/icons'
import assetDialogFor from './helpers/asset-dialog-for'

import collatePlanFormData from './helpers/collate-plan-form-data'
import collateAdjudicationFormData from './helpers/collate-adjudication-form-data'
import collatePerceptionFormData from './helpers/collate-perception-form-data'
import collatePlanningOrders from './helpers/collate-planning-orders'
import collateStateOfWorld from './helpers/collate-state-of-world'

import { findAsset, forceFor, visibleTo, deepCopy, findPlatformTypeFor } from '@serge/helpers'

/* import types */
import {
  PlanTurnFormData,
  SelectedAsset,
  Route,
  ForceData,
  Asset,
  MessageStateOfWorld,
  MessageSubmitPlans,
  MessageForceLaydown,
  MessageDeletePlatform,
  MapAnnotation,
  MessageUpdateMarker
} from '@serge/custom-types'
import { Phase, ADJUDICATION_PHASE, UMPIRE_FORCE, PLANNING_PHASE, DELETE_PLATFORM, SUBMIT_PLANS, STATE_OF_WORLD, LaydownPhases, FORCE_LAYDOWN, PlanningStates, UNKNOWN_TYPE } from '@serge/config'

/* Import Stylesheet */
import styles from './styles.module.scss'

import { WorldStatePanels } from '../world-state/helpers/enums'

/* Import child components */
import { MapContext } from '../mapping'
import WorldState from '../world-state'
import PerceptionForm from '../perception-form'
import AdjudicateTurnForm from '../adjudicate-turn-form'
import PlanTurnForm from '../plan-turn-form'
import AdjudicationManager from '../adjudicate-turn-form/helpers/adjudication-manager'
import { MapBarForms } from './helpers/enums'
import collateVisibilityFormData from './helpers/collate-visibility-form-data'
import collateForceLaydown from './helpers/collate-force-laydown'
import VisibilityAndConditionForm from '../visibility-condition-form'
import collateMarkerFormData from './helpers/collate-marker-form-data'
import MarkerForm from '../marker-form'

/* Render component */
export const MapBar: React.FC = () => {
  /* Set our intial states */
  const [currentForm, setCurrentForm] = useState<MapBarForms | undefined>(undefined)
  const [currentAssetName, setCurrentAssetName] = useState<string>('')
  const [worldStatePanel, setWorldStatePanel] = useState<WorldStatePanels>(WorldStatePanels.Control)

  const [stateFormTitle, setStateFormTitle] = useState<string>('')
  const [stateSubmitTitle, setStateSubmitTitle] = useState<string>('')
  const [secondaryStateTitle, setSecondaryStateTitle] = useState<string | undefined>(undefined)
  const [userIsUmpire, setUserIsUmpire] = useState<boolean | undefined>(undefined)

  const [adjudicationManager, setAdjudicationManager] = useState<AdjudicationManager | undefined>(undefined)

  /* Pull in the context from MappingContext */
  const props = useContext(MapContext).props
  if (typeof props === 'undefined') return null
  const {
    playerForce,
    canSubmitOrders,
    phase,
    platforms,
    forces,
    showMapBar,
    turnNumber,
    setShowMapBar,
    selectedAsset,
    selectedMarker,
    setSelectedAsset,
    setSelectedMarker,
    channelID,
    mapPostBack,
    routeStore,
    setRouteStore,
    turnPlanned,
    cancelRoutePlanning,
    hidePlanningForm,
    setHidePlanningForm,
    groupMoveToRoot,
    groupCreateNewGroup,
    groupHostPlatform,
    plansSubmitted,
    setPlansSubmitted,
    panTo,
    infoMarkers,
    markerIcons
  } = props

  // sort out the handler for State of World button
  useEffect(() => {
    setUserIsUmpire(playerForce === UMPIRE_FORCE)
  }, [playerForce])

  // sort out the handler for State of World button
  useEffect(() => {
    if (playerForce === UMPIRE_FORCE && phase === ADJUDICATION_PHASE && routeStore.selected && selectedAsset) {
      const closePlanningForm = (): void => {
        // @ts-ignore
        setSelectedAsset(undefined)
      }
      const formData = collateAdjudicationFormData(platforms, selectedAsset, forces)
      setAdjudicationManager(new AdjudicationManager(routeStore, platforms, selectedAsset.uniqid,
        selectedAsset.name, turnNumber, setRouteStore, turnPlanned,
        cancelRoutePlanning, closePlanningForm, formData))
    } else {
      setAdjudicationManager(undefined)
    }

    // Selects the current asset. Note: this was in a selectedAsset useEffect, but it's been put in here,
    // since the routeStore will update on a new selected asset
    if (selectedAsset && routeStore.selected) {
      // note: we don't show the planning form if this is a non-umpire in force-laydown phase
      if (playerForce === UMPIRE_FORCE || phase === Phase.Planning || turnNumber !== 0) {
        const newForm = assetDialogFor(playerForce, selectedAsset.forceId, selectedAsset.visibleTo,
          selectedAsset.controlledBy, phase, worldStatePanel, turnNumber, routeStore.selected.destroyed)
        // note: since the next call is async, we get a render before the new form
        // has been assigned. This caused troubles. So, while we set the new form here,
        // we do a "live-recalculation" in the render code
        setHidePlanningForm(false)
        setCurrentForm(newForm)
        setCurrentAssetName(selectedAsset.name)
      } else {
        setCurrentAssetName('Pending')
      }
    }
  }, [routeStore])

  // sort out the handler for State of World button
  useEffect(() => {
    if (playerForce === UMPIRE_FORCE && selectedMarker) {
      setCurrentForm(MapBarForms.Marker)
    }
  }, [selectedMarker])

  // sort out the handler for State of World button
  useEffect(() => {
    if (routeStore) {
      let formTitle = ''
      let submitTitle = ''
      let secondaryTitle = ''
      if (phase === ADJUDICATION_PHASE) {
        if (turnNumber === 0) {
          // see if player can submit orders
          if (canSubmitOrders) {
            // see if it has any forces that laydown
            const needsLaydown = routeStore.routes.find((route: Route) => {
              return route.underControl && (route.laydownPhase === LaydownPhases.Unmoved || route.laydownPhase === LaydownPhases.Moved)
            })
            formTitle = needsLaydown ? 'Force Laydown' : 'My Forces'
            submitTitle = needsLaydown ? 'Submit Force Laydown' : ''
          } else {
            formTitle = playerForce === UMPIRE_FORCE ? 'My Forces' : 'Force Laydown'
            submitTitle = 'Submit Force Laydown'
          }
        } else {
          formTitle = playerForce === UMPIRE_FORCE ? 'State of World' : 'My Forces'
          submitTitle = 'Submit new state'
          secondaryTitle = 'Accept all routes'
        }
      } else if (phase === PLANNING_PHASE) {
        formTitle = 'Orders'
        submitTitle = 'Submit routes'
      }
      if (submitTitle !== '' && submitTitle !== stateSubmitTitle) {
        setStateSubmitTitle(submitTitle)
      }
      if (formTitle !== '' && formTitle !== stateFormTitle) {
        setStateFormTitle(formTitle)
      }
      if (secondaryTitle !== '') {
        setSecondaryStateTitle(secondaryTitle)
      } else {
        setSecondaryStateTitle(undefined)
      }
    }
  }, [phase, playerForce, turnNumber, routeStore])

  const worldStateSubmitHandler = (): void => {
    if (phase === ADJUDICATION_PHASE && playerForce === UMPIRE_FORCE) {
      // Umpire has finshed adjudication phase, and is now ready
      // to submit new State of the World object
      const orders: MessageStateOfWorld = collateStateOfWorld(routeStore.routes, turnNumber, infoMarkers || [])
      mapPostBack(STATE_OF_WORLD, orders, channelID)
    } else if (phase === PLANNING_PHASE) {
      // Player has finished planning process, and now
      // wants to submit them
      const myRoutes: Array<Route> = routeStore.routes.filter(route => route.underControl)
      const orders: MessageSubmitPlans = collatePlanningOrders(myRoutes)
      mapPostBack(SUBMIT_PLANS, orders, channelID)
    } else if (turnNumber === 0) {
      // collate laydown data
      const orders: MessageForceLaydown = collateForceLaydown(routeStore.routes)
      mapPostBack(FORCE_LAYDOWN, orders, channelID)
      // send laydown
    }
    setPlansSubmitted(true)
  }

  // Toggles the map bar on and off
  const tabClickEvent = (nextPanel: WorldStatePanels): void => {
    // has the current panel been clicked on?
    if (nextPanel === worldStatePanel && showMapBar) {
      // ok, hide it
      setShowMapBar(false)
    } else {
      setWorldStatePanel(nextPanel)
      // check it's displayed
      if (!showMapBar) setShowMapBar(true)
    }
  }

  /** an asset has been selected from the list */
  const setSelectedAssetById = (id: string): void => {
    // is it a new id?
    if (selectedAsset && selectedAsset.uniqid === id) {
      // current clicked on, clear it
      // @ts-ignore
      setSelectedAsset(undefined)
    } else {
      const asset: Asset = findAsset(forces, id)
      const force: ForceData = forceFor(forces, id)
      const visibleToArr: string[] = visibleTo(asset.perceptions)
      const selected: SelectedAsset = {
        uniqid: asset.uniqid,
        name: asset.name,
        contactId: asset.contactId,
        typeId: asset.platformTypeId,
        forceId: force.uniqid,
        controlledBy: force.controlledBy,
        condition: asset.condition,
        visibleTo: visibleToArr,
        status: asset.status,
        locationPending: !!asset.locationPending,
        attributes: asset.attributeValues || []
      }
      // ok done, share the good news
      setSelectedAsset(selected)

      // and pan the map
      panTo && asset.position && panTo(asset.position)
    }
  }

  const localSetSelectedMarker = (id: string): void => {
    // is it a new id?
    if (selectedMarker && selectedMarker === id) {
      // current clicked on, clear it
      // @ts-ignore
      setSelectedMarker(undefined)
    } else {
      setSelectedMarker(id)

      // get the marker
      const marker = infoMarkers.find((item: MapAnnotation) => item.uniqid === id)

      // and pan the map
      panTo && marker && panTo(marker.location)
    }
  }

  const acceptAllRoutesCallback = (): void => {
    if (routeStore) {
      const newStore = deepCopy(routeStore)
      newStore.routes.forEach((route: Route) => {
        if (route.adjudicationState !== PlanningStates.Saved) {
          route.adjudicationState = PlanningStates.Saved
        }
      })
      setRouteStore(newStore)
    }
  }

  const deleteEmptyTaskGroup = (): void => {
    if (typeof selectedAsset === 'undefined') return
    const payload: MessageDeletePlatform = {
      messageType: DELETE_PLATFORM,
      assetId: selectedAsset.uniqid
    }
    // clear the selected asset
    // @ts-ignore
    setSelectedAsset(undefined)
    // now trigger the delete
    mapPostBack(DELETE_PLATFORM, payload, channelID)
  }

  const closeForm = (): void => {
    setSelectedMarker('')
  }

  const onMarkerPostback = (messageType: string, data: MessageUpdateMarker): void => {
    mapPostBack && mapPostBack(messageType, data, channelID)
    closeForm()
  }

  /* TODO: This should be refactored into a helper */
  const formSelector = (): React.ReactNode => {
    // do a fresh calculation on which form to display, to overcome
    // an async state update issue
    if (selectedAsset && selectedMarker) {
      // hmm, if both are selected we may be moving from one state to the other
      // provide null return, so we know which to use
      return <></>
    }
    if (typeof selectedAsset === 'undefined') {
      // see if we have a marker
      if (selectedMarker && userIsUmpire) {
        const marker = infoMarkers.find((item: MapAnnotation) => item.uniqid === selectedMarker)
        if (!marker) {
          // add new infomarker and drag it
          return <></>
        }
        const data = collateMarkerFormData(marker, markerIcons, forces)
        return <MarkerForm
          formData={data}
          mapPostBack={onMarkerPostback}
          closeForm={closeForm} />
      } else {
        // ok, return a marker form
        return <></>
      }
    }
    if (!routeStore || !routeStore.selected) {
      throw new Error('No route selected')
    }
    const form = assetDialogFor(playerForce, selectedAsset.forceId, selectedAsset.visibleTo,
      selectedAsset.controlledBy, phase, worldStatePanel, turnNumber, routeStore.selected.destroyed)
    const platformIcon = selectedAsset.typeId === UNKNOWN_TYPE ? 'unknown.svg' : findPlatformTypeFor(platforms, '', selectedAsset.typeId || '').icon
    const platformName = selectedAsset.typeId === UNKNOWN_TYPE ? 'Unknown' : findPlatformTypeFor(platforms, '', selectedAsset.typeId || '').name
    const iconData = {
      forceColor: selectedAsset.forceId,
      platformType: platformName,
      icon: platformIcon
    }
    switch (form) {
      case MapBarForms.Perception: {
        const data = collatePerceptionFormData(platforms, playerForce, selectedAsset, forces)
        return data && <PerceptionForm
          key={selectedAsset.uniqid}
          type={platformName}
          force={selectedAsset.forceId}
          formData={data}
          channelID={channelID}
          mapPostBack={mapPostBack} />
      }
      case MapBarForms.Adjudicaton: {
        return <AdjudicateTurnForm
          key={adjudicationManager && adjudicationManager.uniqid}
          manager={adjudicationManager}
          plansSubmitted={plansSubmitted}
          icon={iconData}
          canSubmitPlans={canSubmitOrders} />
      }
      case MapBarForms.Planning: {
        const canSubmit = canSubmitOrders && phase === PLANNING_PHASE
        const formData: PlanTurnFormData = collatePlanFormData(platforms, selectedAsset)
        const actualAsset = findAsset(forces, selectedAsset.uniqid)
        // is this an empty task group?
        const emptyVessel = !actualAsset || !actualAsset.comprising || actualAsset.comprising.length === 0
        const deleteHandler = (actualAsset.platformType === 'task-group' && emptyVessel)
          ? deleteEmptyTaskGroup : undefined
        return <PlanTurnForm
          icon={iconData}
          setHidePlanningForm={setHidePlanningForm}
          canSubmitPlans={canSubmit}
          plansSubmitted={plansSubmitted}
          key={selectedAsset.uniqid}
          formHeader={currentAssetName}
          formData={formData}
          channelID={channelID}
          deleteEmptyTaskGroup={deleteHandler}
          turnPlanned={turnPlanned} />
      }
      case MapBarForms.Visibility:
        return <VisibilityAndConditionForm
          icon={iconData}
          key={selectedAsset.uniqid}
          formHeader={'Set visibility'}
          formData={collateVisibilityFormData(platforms, selectedAsset, forces)}
          mapPostBack={mapPostBack}
          channelID={channelID} />
      default:
        console.warn('failed to create form for ', form)
        return <></>
    }
  }

  return (
    <div className={cx(styles['map-bar'], showMapBar && styles.open)}>
      <div
        className={cx(styles.toggle, styles.control, (worldStatePanel === WorldStatePanels.Control) && styles['toggle-active'])}
        onClick={(): void => { tabClickEvent(WorldStatePanels.Control) }}>
        <ArrowRight />
        <span className={cx(styles.rotated)}>Control</span>
      </div>
      <div
        className={cx(styles.toggle, styles.visibility, (worldStatePanel === WorldStatePanels.Visibility) && styles['toggle-active'])}
        onClick={(): void => { tabClickEvent(WorldStatePanels.Visibility) }}
        data-tour="visibility"
      >
        <ArrowRight />
        <span className={cx(styles.rotated)}>Visibility</span>
      </div>
      <div
        className={cx(styles.toggle, styles.markers, (worldStatePanel === WorldStatePanels.Markers) && styles['toggle-active'])}
        onClick={(): void => { tabClickEvent(WorldStatePanels.Markers) }}>
        <ArrowRight />
        <span className={cx(styles.rotated)}>Markers</span>
      </div>
      {
        // only show tab 3 if umpire is adjudicating
        userIsUmpire && phase === ADJUDICATION_PHASE &&
        <div
          className={cx(styles.toggle, styles.controlled, (worldStatePanel === WorldStatePanels.ControlledBy) && styles['toggle-active'])}
          onClick={(): void => { tabClickEvent(WorldStatePanels.ControlledBy) }}>
          <ArrowRight />
          <span className={cx(styles.rotated)}>My Assets</span>
        </div>
      }
      <div className={styles.inner}>
        <section>
          <WorldState
            name={stateFormTitle}
            phase={phase}
            isUmpire={playerForce === UMPIRE_FORCE}
            playerForce={playerForce}
            infoMarkers={infoMarkers}
            canSubmitOrders={canSubmitOrders}
            store={routeStore}
            platforms={platforms}
            panel={worldStatePanel}
            submitTitle={stateSubmitTitle}
            setSelectedAssetById={setSelectedAssetById}
            setSelectedMarkerById={localSetSelectedMarker}
            selectedMarker={selectedMarker}
            submitForm={worldStateSubmitHandler}
            groupMoveToRoot={groupMoveToRoot}
            groupCreateNewGroup={groupCreateNewGroup}
            groupHostPlatform={groupHostPlatform}
            plansSubmitted={plansSubmitted}
            setPlansSubmitted={setPlansSubmitted}
            turnNumber={turnNumber}
            secondaryButtonLabel={secondaryStateTitle}
            secondaryButtonCallback={acceptAllRoutesCallback} />
        </section>
      </div>
      {currentForm !== undefined && ((selectedAsset && routeStore.selected) || selectedMarker) && (currentForm !== MapBarForms.Planning || !hidePlanningForm) &&
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
