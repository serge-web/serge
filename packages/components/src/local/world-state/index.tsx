import React, { useEffect, useState } from 'react'

import CheckCircleIcon from '@material-ui/icons/CheckCircle'
import Button from '../atoms/button'
import { GetIcon } from '../asset-icon'
import Groups from '../helper-elements/groups'
// import update from 'react-addons-update'

/* Import Types */
import PropTypes from './types/props'
import { NodeType } from '../helper-elements/groups/types/props'
import { GroupItem, PlatformTypeData, Route } from '@serge/custom-types'
/* Import Stylesheet */
import styles from './styles.module.scss'

import { ADJUDICATION_PHASE, PlanningStates, PLANNING_PHASE, LaydownPhases, Phase } from '@serge/config'
import { Confirm } from '@serge/components'
import canCombineWith from './helpers/can-combine-with'
import { WorldStatePanels } from './helpers/enums'
import { platformTypeNameToKey } from '@serge/helpers'

export const WorldState: React.FC<PropTypes> = ({
  name, store, /* platforms, */ platformTypesByKey, phase, isUmpire, canSubmitOrders, setSelectedAssetById,
  submitTitle, submitForm, panel, turnNumber,
  groupMoveToRoot, groupCreateNewGroup, groupHostPlatform,
  plansSubmitted, setPlansSubmitted, secondaryButtonLabel, secondaryButtonCallback
}: PropTypes) => {
  const [tmpRoutes, setTmpRoutes] = useState<Array<Route>>(store.routes)
  const [modalIsOpen, setIsOpen] = useState(false)

  const inLaydown = phase === ADJUDICATION_PHASE && turnNumber === 0

  /** filter the list of cells allowable for this platform
   * depending on requested cell type
   */

  useEffect(() => {
    switch (panel) {
      case WorldStatePanels.Control: {
        if (phase === PLANNING_PHASE) {
          // in planning phase, umpire only gets assets they control
          setTmpRoutes(store.routes.filter(r => r.underControl))
        } else {
          // check turn number, in case we're in laydown
          if (turnNumber === 0) {
            // in laydown phase, umpire only gets assets they control
            setTmpRoutes(store.routes.filter(r => r.underControl))
          } else {
            // umpire gets all, player only gets theirs
            setTmpRoutes(isUmpire ? store.routes : store.routes.filter(r => r.underControl))
          }
        }
        break
      }
      case WorldStatePanels.Visibility: {
        // umpire gets all, player only gets theirs
        setTmpRoutes(isUmpire ? store.routes : store.routes.filter(r => !r.underControl))
        break
      }
      case WorldStatePanels.ControlledBy: {
        // umpire gets theirs
        setTmpRoutes(store.routes.filter(r => r.underControl))
        break
      }
    }
  }, [store, phase, panel])

  // an asset has been clicked on
  const clickEvent = (id: string): void => {
    if (setSelectedAssetById) {
      setSelectedAssetById(id)
    }
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
    if (phase === Phase.Adjudication && isUmpire) {
      return !!store.routes.find((route: Route) => route.adjudicationState !== PlanningStates.Saved)
    } else {
      return false
    }
  }

  // sort out which title to use on orders panel
  const customTitle = (panel === WorldStatePanels.Visibility) ? 'Other Visible Platforms' : name

  // find out if this is a non-umpire, and we're in the adjudication phase
  const playerInAdjudication: boolean = !isUmpire && phase === ADJUDICATION_PHASE

  const renderContent = (item: GroupItem, depth: Array<GroupItem> = []): JSX.Element => {
    // determine if this asset can be selected. We only allow assets at the top level
    // to be selected, since child elements are "managed" by the parent
    const canBeSelected: boolean = depth && depth.length === 0

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

    let isDestroyed: boolean | undefined = false
    let imageSrc: string | undefined
    // If we know the platform type, we can determine if the platform is destroyed
    if (item.platformType !== 'unknown') {
      const platformType: PlatformTypeData | undefined = platformTypesByKey && platformTypesByKey[platformTypeNameToKey(item.platformType)]
      if (typeof platformType !== 'undefined') {
        imageSrc = platformType.icon
        isDestroyed = platformType.conditions.length > 1 && item.condition === platformType.conditions[platformType.conditions.length - 1]
      }
    }

    const laydownMessage: string = panel === WorldStatePanels.Control && canSubmitOrders && item.laydownPhase !== LaydownPhases.NotInLaydown ? ' ' + item.laydownPhase : ''
    const checkStatus: boolean = (item.laydownPhase === LaydownPhases.NotInLaydown || item.laydownPhase === LaydownPhases.Immobile)
      ? inAdjudication ? item.adjudicationState && item.adjudicationState === PlanningStates.Saved : numPlanned > 0
      : item.laydownPhase !== LaydownPhases.Unmoved
    const fullDescription: string = isDestroyed ? 'Destroyed' : descriptionText + laydownMessage

    return (
      <div className={styles.item} onClick={(): any => canBeSelected && clickEvent(`${item.uniqid}`)}>
        <div className={styles['item-icon']}>
          <GetIcon icType={item.platformType} color={forceColor} isSelected={item.selected} imageSrc={imageSrc} />
        </div>
        <div className={styles['item-content']}>
          <div>
            <p>{item.name}</p>
            <p>{fullDescription}</p>
          </div>

        </div>
        {(panel === WorldStatePanels.Control) && depth.length === 0 && <div className={styles['item-check']}>
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

  // player can drag items in planning phase if they can submit orders, or umpire can do it
  // in adjudication or planning phase
  const canDragItems = isUmpire || (phase === PLANNING_PHASE && canSubmitOrders)

  return <>
    <div className={styles['world-state']}>
      <h2 className={styles.title}>{customTitle}
        {plansSubmitted &&
          <div className='sub-title'>(Form disabled, {customTitle} submitted)</div>
        }
      </h2>

      <Groups
        items={tmpRoutes}
        renderContent={renderContent}
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
      {submitTitle && (panel === WorldStatePanels.Control) && (!playerInAdjudication || inLaydown) && canSubmitOrders &&
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
