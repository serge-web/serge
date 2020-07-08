import React, { useEffect, useState, ReactText } from 'react'

import CheckCircleIcon from '@material-ui/icons/CheckCircle'
import Button from '../form-elements/button'
import cx from 'classnames'
import { getIconClassname } from '../asset-icon'
import Groups from '../helper-elements/groups'
// import update from 'react-addons-update'

/* Import Types */
import PropTypes from './types/props'
import { Item } from '../helper-elements/groups/types/props'

/* Import Stylesheet */
import styles from './styles.module.scss'
import { Route } from '@serge/custom-types'
import { ADJUDICATION_PHASE } from '@serge/config'


export const WorldState: React.FC<PropTypes> = ({
  name, store, phase, isUmpire, setSelectedAsset,
  submitTitle, submitForm, showOtherPlatforms
}: PropTypes) => {
  const [tmpRoutes, setTmpRoutes] = useState<Array<Route>>(store.routes)

  /** filter the list of cells allowable for this platform
   * depending on requested cell type
   */
  useEffect(() => {
    setTmpRoutes(store.routes.filter(r => r.underControl))
  }, [store, phase])

  // an asset has been clicked on
  const clickEvent = (id: string): void => {
    if (setSelectedAsset) {
      setSelectedAsset(id)
    }
  }

  const submitCallback = (): any => {
    if (submitForm) {
      submitForm()
    }
  }

  /**
   *
   * @param {PlannedRoute} pRoute this planned route
   * @param {string} forceName name of the force, it's not available lower down the tree
   * @param {boolean} topLevel if this is at the top level of the tree - used to control the level of detail supplied
   * @returns  JSX for this route, plus children if applicable
   */

  // sort out which title to use on orders panel
  const customTitle = showOtherPlatforms ? 'Other Visible Platforms' : name

  // find out if this is a non-umpire, and we're in the adjudication phase
  const playerInAdjudication: boolean = !isUmpire && phase === ADJUDICATION_PHASE

  const renderContent = (item: Item, depth: Array<Item> = []) => {
    // const item = routeItem as PlannedRoute
    let forceName: string = item.perceivedForceName || ''
    // if we don't know the force name, just use the one from the parent

    if (!forceName) {
      const itemWithForceName = depth.find(i => i && i.perceivedForceName)
      if (itemWithForceName) forceName = itemWithForceName.perceivedForceName
    }

    const icClassName = getIconClassname(forceName.toLowerCase(), item.platformType.toLowerCase(), item.selected)
    const descriptionText = (isUmpire || item.underControl) && depth.length === 0
          ? `${item.numPlanned} turns planned` : ''
    const checkStatus: boolean = item.numPlanned > 0

    return (
      <div className={styles.item} onClick={(): any => clickEvent(`${item.uniqid}`)}>
        <div className={cx(icClassName, styles['item-icon'])}/>
        <div className={styles['item-content']}>
          <div>
            <p>{item.name}</p>
            <p>{descriptionText}</p>
          </div>

        </div>
        {!showOtherPlatforms && depth.length === 0  && <div className={styles['item-check']}>
          {checkStatus === true && <CheckCircleIcon style={{ color: '#007219' }} />}
          {checkStatus === false && <CheckCircleIcon style={{ color: '#B1B1B1' }} />}
        </div>}
      </div>
    )
  }

  const removeItem = (items: Array<Item>, removeKeys: Array<ReactText>): Array<Item> => items.filter(item => {
    if (removeKeys.includes(item.uniqid)) return false
    if (Array.isArray(item.comprising)) { item.comprising = removeItem(item.comprising, removeKeys) }
    if (Array.isArray(item.hosting)) { item.hosting = removeItem(item.hosting, removeKeys) }
    return true
  })

  const createNewGroup = (routes:Array<Item>, items: Array<Item>, depth: Array<Item>, index: number = 0):Array<Item> => {
    if (depth.length > 0 && index < depth.length) {
      return routes.map(item => {
        if (item.uniqid === depth[index].uniqid) {
          item.comprising = createNewGroup(item.comprising || [], items, depth, index + 1)
          if (index < depth.length - 1) item.hosting = createNewGroup(item.hosting || [], items, depth, index + 1)
        }
        return item
      })
    }
    else {
      const newGroup = {
        name: 'new group',
        comprising: items,
        forceName: 'Blue',
        hosting: [],
        numPlanned: 0,
        platformType: 'test',
        selected: false,
        underControl: true,
        uniqid: Math.random().toString(36).replace(/[^a-z]+/g, '').substr(0, 5)
      }

      return [
        ...routes,
        newGroup as Item,
      ]
    }
  }
  const moveToGroup = (routes:Array<Item>, droppedInTo: Item, droppedItem: Item):Array<Item> => {
    return routes.map(item => {
      if (Array.isArray(item.comprising)) {
        if (item.uniqid === droppedInTo.uniqid) {
          item.comprising = [...item.comprising, droppedItem]
        }
        else {
          item.comprising = moveToGroup(item.comprising, droppedInTo, droppedItem)
        }
      }
      return item
    })
  }
  return <>
    <div className={styles['world-state']}>
      <h2 className={styles.title}>{customTitle}</h2>

      <Groups
        items={tmpRoutes}
        renderContent={renderContent}
        onSet={(itemsLink, type, depth) => {
          const items = itemsLink.slice(0)
          const [droppedItem, droppedInTo] = items
          // TODO: remove setTmpRoutes and use api
          let newRoutes
          switch (type) {
            case "group":
              newRoutes = removeItem(tmpRoutes, items.map(i => i.uniqid))
              newRoutes = createNewGroup(newRoutes, items, depth)
              setTmpRoutes(newRoutes as Array<Route>)
              break
            case "group-out":
              newRoutes = removeItem(tmpRoutes, [droppedItem.uniqid])
              newRoutes.push(droppedItem)
              setTmpRoutes(newRoutes as Array<Route>)
              break
            default:
              newRoutes = removeItem(tmpRoutes, [droppedItem.uniqid])
              newRoutes = moveToGroup(newRoutes, droppedInTo, droppedItem)
              setTmpRoutes(newRoutes as Array<Route>)
              break
          }
        }}
      />
      {submitTitle && !showOtherPlatforms && !playerInAdjudication &&
        <div className={styles.submit}>
          <Button size='m' onClick={submitCallback}>{submitTitle}</Button>
        </div>
      }
    </div>
  </>
}

export default WorldState
