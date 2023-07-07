import CheckCircleIcon from '@material-ui/icons/CheckCircle'
import { Confirm } from '@serge/components'
import { ADJUDICATION_PHASE, LaydownPhases, Phase, PlanningStates, PLANNING_PHASE, UNKNOWN_TYPE } from '@serge/config'
import { GroupItem, PlatformTypeData, Route, MapAnnotation, MapAnnotations, IconOption } from 'src/custom-types'
import { findPlatformTypeFor } from '@serge/helpers'
import React, { useEffect, useState } from 'react'
import AssetIcon from '../asset-icon'
import Button from '../atoms/button'
import Groups from '../helper-elements/groups'
import { NodeType } from '../helper-elements/groups/types/props'
import canCombineWith from './helpers/can-combine-with'
import { WorldStatePanels } from './helpers/enums'
/* Import Stylesheet */
import styles from './styles.module.scss'
// import update from 'react-addons-update'
/* Import Types */
import PropTypes from './types/props'

export const WorldState: React.FC<PropTypes> = ({
  name, store, platforms, phase, isUmpire, setSelectedAssetById, setSelectedMarkerById, selectedMarker,
  submitTitle, submitForm, panel, turnNumber,
  groupMoveToRoot, groupCreateNewGroup, groupHostPlatform,
  plansSubmitted, setPlansSubmitted, secondaryButtonLabel, secondaryButtonCallback,
  infoMarkers, playerForce, markerIcons
}: PropTypes) => {
  const [tmpRoutes, setTmpRoutes] = useState<Array<Route>>(store.routes)
  const [markers, setMarkers] = useState<MapAnnotations>([])
  const [modalIsOpen, setIsOpen] = useState(false)
  const [canSubmit, setCanSubmit] = useState<boolean>(false)

  const inLaydown = phase === ADJUDICATION_PHASE && turnNumber === 0

  useEffect(() => {
    setCanSubmit(tmpRoutes.filter((route: Route) => route.underControlByThisRole).length > 0)
  }, [tmpRoutes])

  /** filter the list of cells allowable for this platform
   * depending on requested cell type
   */
  useEffect(() => {
    switch (panel) {
      case WorldStatePanels.Control: {
        if (phase === PLANNING_PHASE) {
          // in planning phase, umpire only gets assets they control
          setTmpRoutes(store.routes.filter(r => r.underControlByThisForce))
        } else {
          // check turn number, in case we're in laydown
          if (turnNumber === 0) {
            // in laydown phase, umpire only gets assets they control
            setTmpRoutes(store.routes.filter(r => r.underControlByThisRole))
          } else {
            // umpire gets all, player only gets theirs
            setTmpRoutes(isUmpire ? store.routes : store.routes.filter(r => r.underControlByThisForce))
          }
        }
        break
      }
      case WorldStatePanels.Visibility: {
        // umpire gets all, player only gets theirs
        setTmpRoutes(isUmpire ? store.routes : store.routes.filter(r => !r.underControlByThisForce))
        break
      }
      case WorldStatePanels.ControlledBy: {
        // umpire gets theirss
        setTmpRoutes(store.routes.filter(r => r.underControlByThisForce))
        break
      }
      case WorldStatePanels.Markers: {
        // see which markers are visible to players of this force
        const visMarkers = isUmpire ? infoMarkers : infoMarkers ? infoMarkers.filter((marker: MapAnnotation) => marker.visibleTo.some((forceId: string) => forceId === playerForce)) : []
        setMarkers(visMarkers)
        break
      }
      default:
        console.warn('unexpected panel name provided:', panel)
    }
  }, [store, phase, panel, infoMarkers])

  // an asset has been clicked on
  const clickEvent = (id: string): void => {
    const handler = isMarkers ? setSelectedMarkerById : setSelectedAssetById
    handler && handler(id)
  }

  const onConfirm = (): void => {
    setIsOpen(true)
  }

  const onYes = (): void => {
    setIsOpen(false)
    submitCallback()
  }

  const onNo = (): void => {
    setIsOpen(false)
  }

  const submitCallback = (): any => {
    if (submitForm) {
      submitForm()
      if (setPlansSubmitted) {
        setPlansSubmitted(true)
      }
    }
  }

  const plannedRoutesPending = (): boolean => {
    if (inLaydown) {
      return tmpRoutes.some((route: Route) => route.laydownPhase === LaydownPhases.Unmoved)
    } else if (phase === Phase.Adjudication && isUmpire) {
      return !!store.routes.find((route: Route) => route.adjudicationState !== PlanningStates.Saved)
    } else {
      return false
    }
  }

  // sort out which title to use on orders panel
  const customTitle = (panel === WorldStatePanels.Visibility) ? 'Other Visible Platforms' : name

  // find out if this is a non-umpire, and we're in the adjudication phase
  const playerInAdjudication: boolean = !isUmpire && phase === ADJUDICATION_PHASE

  const renderMarkers = (item: GroupItem, _depth: Array<GroupItem> = []): React.ReactElement => {
    const canBeSelected = true
    const marker = item as MapAnnotation
    const forceColor = marker.color
    const imageIcon = markerIcons.find((icon: IconOption) => icon.uniqid === marker.iconId)
    const imageURL = imageIcon ? imageIcon.icon : ''
    const isSelected = marker.uniqid === selectedMarker
    return (
      <div className={styles.item} onClick={(): any => canBeSelected && clickEvent(`${item.uniqid}`)}>
        <div className={styles['item-icon']}>
          <AssetIcon color={forceColor} isSelected={isSelected} imageSrc={imageURL} />
        </div>
        <div className={styles['item-content']}>
          <p>{marker.label}</p>
          <p>{marker.description}</p>
        </div>
      </div>
    )
  }

  const renderContent = (item: GroupItem, depth: Array<GroupItem> = []): React.ReactElement => {
    // determine if this asset can be selected. We only allow assets at the top level
    // to be selected, since child elements are "managed" by the parent
    const atTopLevel: boolean = depth && depth.length === 0

    // check if this player can select this item
    const underControl = item.underControlByThisRole

    // const item = routeItem as PlannedRoute

    let forceColor: string = item.perceivedForceColor || ''
    // if we don't know the force name, just use the one from the parent
    if (!forceColor) {
      const itemWithForceColor = depth.find(i => i && i.perceivedForceColor)
      if (itemWithForceColor) {
        forceColor = itemWithForceColor.perceivedForceColor
      }
    }

    const numPlanned = item.plannedTurnsCount
    const descriptionText = (isUmpire || item.underControl) && depth.length === 0
      ? `${numPlanned} turns planned` : ''
    const inAdjudication: boolean = phase === ADJUDICATION_PHASE && isUmpire

    // any player can access element in visibility panel
    const inVisibilityPanel = panel === WorldStatePanels.Visibility

    // so, is it clickable?
    const canBeSelected = (underControl && atTopLevel) || inAdjudication || inVisibilityPanel

    let isDestroyed: boolean | undefined = false
    let imageSrc: string | undefined
    // If we know the platform type, we can determine if the platform is destroyed
    if (item.platformTypeId !== UNKNOWN_TYPE && item.platformTypeId !== undefined) {
      const platformType: PlatformTypeData | undefined = findPlatformTypeFor(platforms, item.platformType, item.platformTypeId)
      imageSrc = platformType.icon
      isDestroyed = platformType.conditions.length > 1 && item.condition === platformType.conditions[platformType.conditions.length - 1]
    } else {
      // player isn't aware of type.  But, we need to access the `real` type data to determine if it is destroyed
      const trueType = findPlatformTypeFor(platforms, item.platformType, item.asset.platformTypeId)
      isDestroyed = trueType.conditions.length > 1 && item.condition === trueType.conditions[trueType.conditions.length - 1]
      imageSrc = 'unknown.svg'
    }

    const isControlPanel = panel === WorldStatePanels.Control
    const turnZero = turnNumber === 0
    const inLaydown = item.laydownPhase !== LaydownPhases.NotInLaydown
    const laydownMessage: string = isControlPanel && canSubmit && turnZero && inLaydown ? ' ' + item.laydownPhase : ''
    const checkStatus: boolean = (item.laydownPhase === LaydownPhases.NotInLaydown || item.laydownPhase === LaydownPhases.Immobile)
      ? inAdjudication ? item.adjudicationState && item.adjudicationState === PlanningStates.Saved : numPlanned > 0
      : item.laydownPhase !== LaydownPhases.Unmoved
    const fullDescription: string = isDestroyed ? 'Destroyed' : descriptionText + laydownMessage
    return (
      <div className={styles.item} onClick={(): any => canBeSelected && clickEvent(`${item.uniqid}`)}>
        <div className={styles['item-icon']}>
          <AssetIcon color={forceColor} isSelected={item.selected} imageSrc={imageSrc} />
        </div>
        <div className={styles['item-content']}>
          <p>{item.name}</p>
          <p>{fullDescription}</p>
        </div>
        {(panel === WorldStatePanels.Control) && depth.length === 0 && (underControl || inAdjudication) && <div className={styles['item-check']}>
          {checkStatus === true && <CheckCircleIcon style={{ color: '#007219' }} />}
          {checkStatus === false && <CheckCircleIcon style={{ color: '#B1B1B1' }} />}
        </div>}
      </div>
    )
  }

  // Note: draggingItem.uniq === -1 when no active dragging item
  const canCombineWithLocal = (draggingItem: GroupItem, item: GroupItem, _parents: Array<GroupItem>, _type: NodeType): boolean => {
    return canCombineWith(store, draggingItem.uniqid, item.uniqid, _parents, _type)
  }

  const isMarkers = panel === WorldStatePanels.Markers

  // player can drag items in planning phase if they can submit orders, or umpire can do it
  // in adjudication or planning phase
  const canDragItems = (!isMarkers) && (isUmpire || (phase === PLANNING_PHASE && canSubmit))

  const itemRenderer = isMarkers ? renderMarkers : renderContent

  const items = isMarkers ? markers : tmpRoutes

  return <>
    <div className={styles['world-state']} data-tour="world-state">
      <h2 className={styles.title}>{customTitle}
        {plansSubmitted &&
          <div className='sub-title'>(Form disabled, {customTitle} submitted)</div>
        }
      </h2>

      <Groups
        items={items}
        renderContent={itemRenderer}
        canOrganise={canDragItems}
        canCombineWith={canCombineWithLocal}
        onSet={(itemsLink: any, type: any, depth: any): void => {
          const items = itemsLink.slice(0)
          const [droppedItem, droppedInTo] = items
          // TODO: remove setTmpRoutes and use api
          switch (type) {
            case 'group': {
              if (groupCreateNewGroup) {
                groupCreateNewGroup(droppedItem.uniqid, droppedInTo.uniqid)
              } else {
                console.warn('No new group handler', depth)
              }
              break
            }
            case 'group-out': {
              if (groupMoveToRoot) {
                groupMoveToRoot(droppedItem.uniqid)
              } else {
                console.warn('No move to root handler found')
              }
              break
            }
            default:
              if (groupHostPlatform) {
                groupHostPlatform(droppedItem.uniqid, droppedInTo.uniqid)
              } else {
                console.warn('No handler for host platform')
              }
              break
          }
        }}
      />
      {submitTitle && (panel === WorldStatePanels.Control) && (!playerInAdjudication || inLaydown) && canSubmit &&
        <div className={styles.submit}>
          {secondaryButtonLabel &&
            <Button disabled={plansSubmitted} onClick={secondaryButtonCallback}>{secondaryButtonLabel}</Button>
          }
          <Button disabled={plansSubmitted || plannedRoutesPending()} onClick={onConfirm}>{submitTitle}</Button>
        </div>
      }
      <Confirm
        isOpen={modalIsOpen}
        message={`Are you sure you wish to ${submitTitle}?`}
        onCancel={onNo}
        onConfirm={onYes}
      />
    </div>
  </>
}

export default WorldState
