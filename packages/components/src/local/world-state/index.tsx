import React, { useEffect, useState } from 'react'

import CheckCircleIcon from '@material-ui/icons/CheckCircle'
import Button from '../atoms/button'
import cx from 'classnames'
import { getIconClassname } from '../asset-icon'
import Groups from '../helper-elements/groups'
// import update from 'react-addons-update'

/* Import Types */
import PropTypes from './types/props'
import { NodeType } from '../helper-elements/groups/types/props'
import { GroupItem, PlatformTypeData, Route } from '@serge/custom-types'
/* Import Stylesheet */
import styles from './styles.module.scss'

import { ADJUDICATION_PHASE, PlanningStates, PLANNING_PHASE, LaydownPhases } from '@serge/config'
import canCombineWith from './helpers/can-combine-with'
import { WorldStatePanels } from './helpers/enums'
import { findPlatformTypeFor } from '@serge/helpers'
import Modal from 'react-modal'

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    width: '30%',
    height: '20%',
    minHeight: '140px',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)'
  }
}

export const WorldState: React.FC<PropTypes> = ({
  name, store, platforms, phase, isUmpire, canSubmitOrders, setSelectedAssetById,
  submitTitle, submitForm, panel, gridCells, turnNumber,
  groupMoveToRoot, groupCreateNewGroup, groupHostPlatform,
  plansSubmitted, setPlansSubmitted
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

  const onConfirm = () => {
    setIsOpen(true)
  }

  const onYes = () => {
    setIsOpen(false)
    submitCallback()
  }

  const onNo = () => {
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

  // sort out which title to use on orders panel
  const customTitle = (panel === WorldStatePanels.Visibility) ? 'Other Visible Platforms' : name

  // find out if this is a non-umpire, and we're in the adjudication phase
  const playerInAdjudication: boolean = !isUmpire && phase === ADJUDICATION_PHASE

  const renderContent = (item: GroupItem, depth: Array<GroupItem> = []): JSX.Element => {
    // determine if this asset can be selected. We only allow assets at the top level
    // to be selected, since child elements are "managed" by the parent
    const canBeSelected: boolean = depth && depth.length === 0

    // const item = routeItem as PlannedRoute
    let forceName: string = item.perceivedForceName || ''
    // if we don't know the force name, just use the one from the parent

    if (!forceName) {
      const itemWithForceName = depth.find(i => i && i.perceivedForceName)
      if (itemWithForceName) forceName = itemWithForceName.perceivedForceName
    }

    const icClassName = getIconClassname(forceName.toLowerCase(), item.platformType.toLowerCase(), item.selected)
    const numPlanned = item.plannedTurnsCount
    const descriptionText = (isUmpire || item.underControl) && depth.length === 0
      ? `${numPlanned} turns planned` : ''
    const inAdjudication: boolean = phase === ADJUDICATION_PHASE && isUmpire

    let isDestroyed: boolean | undefined = false
    // If we know the platform type, we can determine if the platform is destroyed
    if (item.platformType !== 'unknown') {
      const platformType: PlatformTypeData | undefined = platforms && findPlatformTypeFor(platforms, item.platformType)
      isDestroyed = platformType && item.condition === platformType.conditions[platformType.conditions.length - 1]
    }

    const laydownMessage: string = panel === WorldStatePanels.Control && canSubmitOrders && item.laydownPhase !== LaydownPhases.NotInLaydown ? ' ' + item.laydownPhase : ''
    const checkStatus: boolean = item.laydownPhase === LaydownPhases.NotInLaydown
      ? inAdjudication ? item.adjudicationState && item.adjudicationState === PlanningStates.Saved : numPlanned > 0
      : item.laydownPhase !== LaydownPhases.Unmoved
    const fullDescription: string = isDestroyed ? 'Destroyed' : descriptionText + laydownMessage

    return (
      <div className={styles.item} onClick={(): any => canBeSelected && clickEvent(`${item.uniqid}`)}>
        <div style={{ backgroundColor: item.perceivedForceColor }} className={cx(icClassName, styles['item-icon'])}/>
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
    return canCombineWith(store, draggingItem.uniqid, item.uniqid, _parents, _type, gridCells)
  }

  return <>
    <div className={styles['world-state']}>
      <h2 className={styles.title}>{customTitle}
        {plansSubmitted &&
          <h5 className='sub-title'>(Form disabled, {customTitle} submitted)</h5>
        }
      </h2>

      <Groups
        items={tmpRoutes}
        renderContent={renderContent}
        canOrganise={canSubmitOrders}
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
          <Button disabled={plansSubmitted} onClick={onConfirm}>{submitTitle}</Button>
        </div>
      }

      <Modal
        isOpen={modalIsOpen}
        onRequestClose={onNo}
        style={customStyles}
      >
        <div>Are you sure you wish to <strong>{submitTitle}</strong>?</div>
        <div className={styles.action}>
          <Button onClick={onYes}>Yes</Button>
          <Button onClick={onNo}>No</Button>
        </div>
      </Modal>
    </div>
  </>
}

export default WorldState
