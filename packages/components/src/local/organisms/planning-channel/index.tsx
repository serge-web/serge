import { INFO_MESSAGE_CLIPPED, INTERACTION_MESSAGE, PLANNING_MESSAGE, PLANNING_PHASE, UNKNOWN_TYPE } from '@serge/config'
import { Area, Asset, ForceData, GroupedActivitySet, MessageInfoTypeClipped, MessagePlanning, PerForcePlanningActivitySet, PlainInteraction, PlannedActivityGeometry, PlannedProps, PlanningActivity } from '@serge/custom-types'
import { clearUnsentMessage, findAsset, forceColors as getForceColors, ForceStyle, getUnsentMessage, platformIcons, saveUnsentMessage } from '@serge/helpers'
import cx from 'classnames'
import L, { circleMarker, LatLngBounds, latLngBounds, LatLngExpression, Layer, PathOptions } from 'leaflet'
import _, { noop } from 'lodash'
import React, { Fragment, useEffect, useMemo, useState } from 'react'

import { faCalculator, faHistory, faShapes } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { TileLayerDefinition } from '@serge/custom-types/mapping-constraints'
import { InteractionDetails, MessageAdjudicationOutcomes, MessageDetails, MessageDetailsFrom, MessageInteraction, PlanningMessageStructureCore } from '@serge/custom-types/message'
import { Feature, FeatureCollection } from 'geojson'
import LRU from 'lru-cache'
import moment from 'moment-timezone'
import { LayerGroup, MapContainer } from 'react-leaflet-v4'
import Item from '../../map-control/helpers/item'
import { generateTestData2 } from '../../mapping/helpers/gen-test-mapping-data'
import ApplyFilter from '../apply-filter'
import MapPlanningOrders from '../map-planning-orders'
import { getOppAssets, getOwnAssets } from '../planning-assets/helpers/collate-assets'
import { AssetRow } from '../planning-assets/types/props'
import PlanningForces from '../planning-force'
import { collapseLocation } from '../planning-messages-list/helpers/collapse-location'
import { LocationEditCallbackHandler } from '../planning-messages-list/types/props'
import SupportMapping from '../support-mapping'
import SupportPanel, { SupportPanelContext } from '../support-panel'
import { LRU_CACHE_OPTION } from '../support-panel/constants'
import { findActivity, randomOrdersDocs } from '../support-panel/helpers/gen-order-data'
import ViewAs from '../view-as'
import AreaPlotter from './helpers/AreaPlotter'
import OrderDrawing from './helpers/OrderDrawing'
import OrderEditing from './helpers/OrderEditing'
import OrderPlotter from './helpers/OrderPlotter'
import PlanningActitivityMenu from './helpers/PlanningActitivityMenu'
import Ruler from './helpers/Ruler'
import { boundsForGeometry } from './helpers/spatial-helpers'
import Timeline from './helpers/Timeline'
import styles from './styles.module.scss'
import PropTypes from './types/props'

type PlannedActivityGeometryCallback = (newValue: PlannedActivityGeometry[]) => void

/** helper object, to allow clustering of assets by force */
type PerForceAssets = {
  force: ForceData['uniqid']
  color: string
  rows: AssetRow[]
}

export const PlanningChannel: React.FC<PropTypes> = ({
  dispatch,
  reduxDispatch,
  getAllWargameMessages,
  markUnread,
  markAllAsRead,
  saveNewActivityTimeMessage,
  openMessage,
  saveMessage,
  mapPostBack,
  onTurnPeriods,
  allTemplates,
  messages,
  channel,
  channelId,
  adjudicationTemplate,
  selectedRoleId,
  selectedRoleName,
  currentWargame,
  selectedForce,
  phase,
  allForces,
  allPeriods,
  platformTypes,
  gameDate,
  gameTurnLength,
  currentTurn,
  forcePlanningActivities,
  attributeTypes,
  areas
}) => {
  const [channelTabClass, setChannelTabClass] = useState<string>('')
  const [position, setPosition] = useState<LatLngExpression | undefined>(undefined)
  const [zoom] = useState<number>(7)
  const [bounds, setBounds] = useState<LatLngBounds | undefined>(undefined)

  const [myAreas, setMyAreas] = useState<Array<Area>>([])

  // which force to view the data as
  const [viewAsForce, setViewAsForce] = useState<ForceData['uniqid']>(selectedForce.uniqid)
  const [currentForce, setCurrentForce] = useState<ForceData>(selectedForce)

  // whether to filter the map assets to match the table filter
  const [filterApplied, setFilterApplied] = useState<boolean>(true)

  // all of the assets known to players of this force
  const [allOwnAssets, setAllOwnAssets] = useState<AssetRow[]>([])
  const [allOppAssets, setAllOppAssets] = useState<AssetRow[]>([])

  const [ownAssetsFiltered, setOwnAssetsFiltered] = useState<AssetRow[]>([])
  const [opAssetsFiltered, setOpAssetsFiltered] = useState<AssetRow[]>([])

  // handle selections from asset tables
  const [selectedAssets, setSelectedAssets] = useState<string[]>([])

  // have `local` selected assets handler, since we don't always want to
  // propagate changes to selected assets
  const [localSelectedAssets, setLocalSelectedAssets] = useState<string[]>([])
  const [selectedOrders, setSelectedOrders] = useState<string[]>([])

  // we need to break down assets by force, so they can be plotted (clustered) by color
  // will show current assets (if present), then filtered or all, according to show all filter
  const [perForceAssets, setPerForceAssets] = useState<PerForceAssets[]>([])

  // the currently active assets and orders. i.e. if an order or adjudication is expanded,
  // show the child elements, regardless of what is selected
  const [currentAssetIds, setCurrentAssetIds] = useState<string[]>([])
  const [currentAssets, setCurrentAssets] = useState<AssetRow[]>([])
  const [currentOrders, setCurrentOrders] = useState<string[]>([])

  const [mapWidth, setMapWidth] = useState<string>('calc(100% - 330px)')

  // the planning activiites for the selected force
  const [flattenedPlanningActivities, setFlattenedPlanningActivities] = useState<PlanningActivity[]>([])
  const [thisForcePlanningActivities, setThisForcePlanningActivities] = useState<PerForcePlanningActivitySet | undefined>(undefined)

  const [planningMessages, setPlanningMessages] = useState<MessagePlanning[]>([])
  const [interactionMessages, setInteractionMessages] = useState<MessageInteraction[]>([])

  const [debugStep, setDebugStep] = useState<number>(0)

  const [activityBeingPlanned, setActivityBeingPlanned] = useState<PlanningActivity | undefined>(undefined)
  const [activityPlanned, setActivityPlanned] = useState<PlannedActivityGeometry[] | undefined>(undefined)

  const [activityBeingEdited, setActivityBeingEdited] = useState<PlannedActivityGeometry[] | undefined>(undefined)
  const [activityBeingEditedCallback, setActivityBeingEditedCallback] = useState<PlannedActivityGeometryCallback | undefined>(undefined)

  const [showInteractionGenerator, setShowIntegrationGenerator] = useState<boolean>(false)

  const [showStandardAreas, setShowStandardAreas] = useState<boolean>(false)

  const [forceColors, setForceColors] = useState<Array<ForceStyle>>([])

  const [draftMessage, setDraftMessage] = useState<MessagePlanning | undefined>(undefined)

  const [playerInPlanning, setPlayerInPlanning] = useState<boolean>(false)
  const [umpireInAdjudication, setUmpireInAdjudication] = useState<boolean>(false)

  const [showTimeControl, setShowTimeControl] = useState<boolean>(false)
  const [timeControlEvents, setTimeControlEvents] = useState<FeatureCollection | undefined>(undefined)

  /** note we store the interaction reference here, not the id, to allow for the
   * document being updated
   */
  const [currentInteraction, setCurrentInteraction] = useState<string | undefined>(undefined)
  const [assetsCache] = useState<LRU<string, string>>(new LRU(LRU_CACHE_OPTION))

  const genData = (): void => {
    const doGenny = 7
    if (!doGenny) {
      const newPlan = forcePlanningActivities && forcePlanningActivities[0].groupedActivities[0].activities[1] as PlanningActivity
      setActivityBeingPlanned(newPlan)
    } else {
      const createAssets = false
      if (createAssets) {
        // const forces = updateBounds(channel.constraints, allForces)
        const forces = generateTestData2(400, channel.constraints, allForces, platformTypes, attributeTypes || [])
        // const forces = fixPerceivedPositions(allForces)
        console.log('forces', forces)
      } else {
        const allForceIds = [allForces[1].uniqid, allForces[2].uniqid, allForces[3].uniqid]
        console.log(randomOrdersDocs(channelId, 200, allForces, allForceIds, forcePlanningActivities || [], adjudicationTemplate._id, gameDate))
        console.log(randomOrdersDocs(channelId, 30, allForces, allForceIds, forcePlanningActivities || [], adjudicationTemplate._id, gameDate))
      }
    }
  }

  useEffect(() => {
    // game date has changed, get updated periods
    onTurnPeriods && onTurnPeriods(currentWargame)(dispatch)
  }, [gameDate])

  useEffect(() => {
    if (areas) {
      // produce a list of standard areas for a player of this force
      const filtered = areas.filter((area: Area) => area.usedBy.includes(selectedForce.uniqid))
      setMyAreas(filtered)
    }
  }, [areas, selectedForce])

  useEffect(() => {
    if (forcePlanningActivities) {
      // we don't have planning activities for umpire force, but we may want
      // a fake one if we're generating data
      const validForceId = selectedForce.umpire ? allForces[1].uniqid : selectedForce.uniqid
      const force = forcePlanningActivities.find((val: PerForcePlanningActivitySet) => val.force === validForceId)

      setThisForcePlanningActivities(force)

      // produce flattened set of activities, for convenience
      if (selectedForce.umpire) {
        // special case - need a unique set of all activities, to plot orders from all forces
        const activities: Record<string, PlanningActivity> = {}
        forcePlanningActivities.forEach((val: PerForcePlanningActivitySet) => {
          val.groupedActivities.forEach((act: GroupedActivitySet) => {
            act.activities.forEach((activ) => {
              const id = activ.actId
              activities[id] = activ
            })
          })
        })
        const flatActivities = Object.values(activities)
        setFlattenedPlanningActivities(flatActivities)
      } else {
        if (force) {
          const activities: Array<PlanningActivity[]> = force.groupedActivities.map((val: GroupedActivitySet) => val.activities as PlanningActivity[])
          const flatActivities = _.flatten(activities)
          setFlattenedPlanningActivities(flatActivities)
        }
      }
    }
  }, [selectedForce, forcePlanningActivities])

  useEffect(() => {
    const res: PerForceAssets[] = []
    // we need empty arrays (to clear existing icons), so pre-populate arrays
    allForces.forEach((force) => {
      // only forces with assets
      if (force.assets && force.assets.length) {
        const item: PerForceAssets = {
          force: force.name,
          rows: [],
          color: force.color
        }
        res.push(item)
      }
    })
    const doRows = (rows: AssetRow[]) => {
      rows.forEach((row) => {
        const force = row.force
        const forceToUse = force || UNKNOWN_TYPE
        const thisA = res.find((force) => force.force === forceToUse)
        if (thisA === undefined) {
          console.warn('Failed to find existing entry for', force)
        } else {
          thisA.rows.push(row)
        }
      })
    }
    if (currentAssets.length) {
      // just group by force
      doRows(currentAssets)
    } else {
      if (filterApplied) {
        doRows(ownAssetsFiltered)
        doRows(opAssetsFiltered)
      } else {
        doRows(allOwnAssets)
        doRows(allOppAssets)
      }
    }
    setPerForceAssets(res)
  }, [currentAssets, ownAssetsFiltered, opAssetsFiltered, allOppAssets, allOwnAssets, filterApplied])

  /** we get current asset IDs, but having the rows would be more useful */
  useEffect(() => {
    const currentOwn = allOwnAssets.filter((row) => currentAssetIds.includes(row.id))
    const currentOpp = allOppAssets.filter((row) => currentAssetIds.includes(row.id))
    const allCurrent = currentOwn.concat(currentOpp)
    setCurrentAssets(allCurrent)
  }, [currentAssetIds])

  useEffect(() => {
    const isUmpire = !!selectedForce.umpire
    const planningPhase = phase === PLANNING_PHASE
    setPlayerInPlanning(!isUmpire && planningPhase)
    setUmpireInAdjudication(isUmpire && !planningPhase)
  }, [selectedForce, phase])

  useEffect(() => {
    // find bounds of assets & orders
    let workingBounds: L.LatLngBounds | undefined
    currentAssetIds.forEach((id) => {
      const asset = findAsset(allForces, id)
      if (asset) {
        const loc = asset.location
        if (loc) {
          const coords = L.latLng(loc[0], loc[1])
          if (!workingBounds) {
            workingBounds = L.latLngBounds(coords, coords)
          } else {
            workingBounds = workingBounds.extend(coords)
          }
        }
      }
    })
    currentOrders.forEach((id) => {
      const plan = planningMessages.find((msg) => id === msg._id)
      if (plan) {
        const activities = plan.message.location
        if (activities) {
          activities.forEach((act) => {
            workingBounds = boundsForGeometry(act.geometry.geometry, workingBounds)
          })
        }
      }
    })
    if (workingBounds) {
      setBounds(workingBounds)
    } else {
      setBounds(undefined)
    }

    // update map bounds
  }, [currentAssetIds, currentOrders])

  useEffect(() => {
    if (showTimeControl) {
      const isUmpire = selectedForce.umpire
      const myOrders = isUmpire ? planningMessages : planningMessages.filter((msg) => msg.details.from.forceId === selectedForce.uniqid)
      const features: Feature[] = []
      myOrders.forEach((plan) => {
        if (plan.message.location) {
          // until we have times in features, we get it from the message
          const startTime = plan.message.startDate
          const endTime = plan.message.endDate
          const steps: Feature[] = plan.message.location.map((geom: PlannedActivityGeometry): Feature => {
            // create the new props, if they are missing
            if (geom.geometry && geom.geometry.properties) {
              const props = geom.geometry.properties
              props.start = moment(startTime).valueOf()
              props.end = moment(endTime).valueOf()
            }
            return geom.geometry
          })
          features.push(...steps)
        }
      })
      const collection: FeatureCollection = {
        type: 'FeatureCollection',
        features: features
      }
      setTimeControlEvents(collection)
    } else {
      setTimeControlEvents(undefined)
    }
  }, [showTimeControl, planningMessages, selectedForce])

  useEffect(() => {
    const force = allForces.find((force: ForceData) => force.uniqid === viewAsForce)
    if (force) {
      setCurrentForce(force)
    }
  }, [viewAsForce])

  useEffect(() => {
    // only update selected assets if we're not planning an activity
    if (!activityBeingPlanned) {
      setSelectedAssets(localSelectedAssets)
    }
  }, [localSelectedAssets])

  useEffect(() => {
    // produce the own and opp assets for this player force
    const forceCols = getForceColors(allForces)
    const platIcons = platformIcons(platformTypes)
    const own = getOwnAssets(allForces, forceCols, platIcons, currentForce, platformTypes, attributeTypes || [])
    const opp = getOppAssets(allForces, forceCols, platIcons, currentForce, platformTypes, attributeTypes || [])
    setAllOwnAssets(own)
    setOwnAssetsFiltered([])
    setAllOppAssets(opp)
    setOpAssetsFiltered([])
    setForceColors(forceCols)
  }, [allForces, currentForce])

  useEffect(() => {
    if (selectedAssets.length) {
      const assets = selectedAssets.map((id: string): Asset => findAsset(allForces, id))
      const assetsWithLocation = assets.filter((asset: Asset) => asset.location !== undefined)
      const locations: any = assetsWithLocation.map((asset: Asset) => asset.location)
      if (locations.length > 0) {
        let mapBounds: LatLngBounds | undefined
        locations.forEach((loc: [number, number]) => {
          if (!mapBounds) {
            mapBounds = latLngBounds(loc, loc)
          } else {
            mapBounds.extend(loc)
          }
        })
        if (mapBounds) {
          // do we actually just have one location?
          if (mapBounds.getNorthWest().equals(mapBounds.getSouthEast())) {
            // ok, treat it as new map centre
            setBounds(undefined)
            setPosition(mapBounds.getNorthWest())
          } else {
            // zoom to
            setPosition(undefined)
            setBounds(mapBounds)
          }
        }
      }
    }
  }, [selectedAssets])

  useEffect(() => {
    const channelClassName = channel.name.toLowerCase().replace(/ /g, '-')
    if (messages.length === 0) {
      getAllWargameMessages(currentWargame)(dispatch)
    }
    setChannelTabClass(`tab-content-${channelClassName}`)
    // update default marker icon url
    L.Marker.prototype.options.icon = L.icon({
      iconUrl: 'images/marker-icon-2x.png',
      iconSize: [25, 41]
    })
  }, [])

  const onReadAll = (): void => {
    dispatch(markAllAsRead(channel.uniqid))
  }

  useEffect(() => {
    // drop the turn markers
    const nonTurnMessages: Array<MessagePlanning | MessageInteraction> = messages.filter((msg: MessagePlanning | MessageInteraction | MessageInfoTypeClipped) => msg.messageType !== INFO_MESSAGE_CLIPPED) as Array<MessagePlanning | MessageInteraction>

    // TODO: these filters should just use `messageType` to get the correct data, but currently
    // all messages have "CUSTOM_MESSAGE". So the filters fall back on other `tell-tales`.
    const myPlanningMessages = nonTurnMessages.filter((msg: MessagePlanning | MessageInteraction) => msg.messageType === PLANNING_MESSAGE || (!msg.details.interaction)) as MessagePlanning[]
    const myInteractionMessages = nonTurnMessages.filter((msg: MessagePlanning | MessageInteraction) => msg.messageType === INTERACTION_MESSAGE || msg.details.interaction) as MessageInteraction[]

    // log of number of message ids and forces, used to config interactions
    !7 && console.table(myPlanningMessages.map((plan) => { return { id: plan._id, force: plan.details.from.forceId } }))

    // count of new messages
    !7 && console.log('Page loaded', messages, planningMessages, myPlanningMessages, myInteractionMessages.length)

    setPlanningMessages(myPlanningMessages)
    setInteractionMessages(myInteractionMessages)
  }, [messages])

  const onRead = (detail: MessagePlanning): void => {
    dispatch(openMessage(channel.uniqid, detail as any as MessageChannel))
  }

  const onUnread = (message: MessagePlanning): void => {
    if (message._id) {
      message.hasBeenRead = false
    }
    dispatch(markUnread(channel.uniqid, message as any))
  }

  const newActiveMessage = (roleId: string, activityMessage: string): void => {
    // we don't have a message id at this point, player has only opened empty template
    const newMessage: PlainInteraction = {
      aType: activityMessage
    }
    saveNewActivityTimeMessage(roleId, newMessage, currentWargame)(reduxDispatch)
  }

  const onPanelWidthChange = (width: number): void => {
    setMapWidth(`calc(100% - ${width}px)`)
  }

  const mapActionCallback = (force: string, category: string, actionId: string): void => {
    console.log('action clicked', force, category, actionId)
  }

  const supportPanelContext = useMemo(() => (
    { selectedAssets, setCurrentAssets: setCurrentAssetIds, setCurrentOrders, setCurrentInteraction: setCurrentInteraction, assetsCache }
  ), [selectedAssets, setCurrentAssetIds, setCurrentOrders, setCurrentInteraction, assetsCache])

  const incrementDebugStep = (): void => {
    // do something
    // const msgs = dummyMessages.map((plan: MessagePlanning) => {
    //   const force = plan.details.from.forceId
    //   if (!force) {
    //     console.log('force', plan._id)
    //     throw Error('force missing for:' + plan._id)
    //   }
    //   const forceActs = forcePlanningActivities && forcePlanningActivities.find((value) => value.force === force)
    //   if (forceActs) {
    //     const cats = forceActs.groupedActivities
    //     const randType = cats[Math.floor(Math.random() * cats.length)]
    //     const acts = randType.activities[Math.floor(randType.activities.length * Math.random())] as PlanningActivity
    //     plan.message.activity = acts.uniqid
    //   }
    //   return plan
    // })
    // console.log(msgs)

    console.log('debug step', debugStep)
    setDebugStep(1 + debugStep)
  }

  const handleAdjudication = (interDetails: InteractionDetails, outcomes: MessageAdjudicationOutcomes): void => {
    console.log('Apply some adjudication for', outcomes.Reference, outcomes)
    const from: MessageDetailsFrom = {
      force: selectedForce.uniqid,
      forceId: selectedForce.uniqid,
      forceColor: selectedForce.color,
      iconURL: selectedForce.iconURL,
      roleId: selectedRoleId,
      roleName: selectedRoleName
    }
    const details: MessageDetails = {
      channel: channel.uniqid,
      from: from,
      interaction: interDetails,
      messageType: adjudicationTemplate._id,
      timestamp: moment().toISOString(),
      turnNumber: currentTurn
    }
    // store the new adjudication
    saveMessage(currentWargame, details, outcomes)()
  }

  const activityBounds = (plans: PlannedActivityGeometry[]): [string, string] | undefined => {
    if (plans.length) {
      const firstGeom = plans[0].geometry
      const lastGeom = plans[plans.length - 1].geometry
      if (firstGeom.properties && lastGeom.properties) {
        const firstProps: PlannedProps = firstGeom.properties as PlannedProps
        const lastProps: PlannedProps = lastGeom.properties as PlannedProps
        return [firstProps.startDate, lastProps.endDate]
      } else {
        return undefined
      }
    } else {
      return undefined
    }
  }

  useEffect(() => {
    if (activityBeingPlanned && activityPlanned) {
      // collate the new draft message
      const ownAssets: Array<Asset['uniqid']> = selectedAssets.filter((id: string) => allOwnAssets.some((row: AssetRow) => row.id === id))
      const otherAssets: Array<Asset['uniqid']> = selectedAssets.filter((id: string) => allOppAssets.some((row: AssetRow) => row.id === id))
      const from: MessageDetailsFrom = {
        force: selectedForce.uniqid,
        forceId: selectedForce.uniqid,
        forceColor: selectedForce.color,
        iconURL: selectedForce.iconURL,
        roleId: selectedRoleId,
        roleName: selectedRoleName
      }
      const messageDetails: MessageDetails = {
        channel: channel.uniqid,
        from: from,
        messageType: activityBeingPlanned.template,
        timestamp: moment().toISOString(),
        turnNumber: currentTurn
      }
      const timeBounds = activityBounds(activityPlanned)
      const plans: PlanningMessageStructureCore = {
        Reference: '',
        title: 'Pending',
        activity: activityBeingPlanned.uniqid,
        startDate: timeBounds ? timeBounds[0] : '',
        endDate: timeBounds ? timeBounds[1] : ''
      }
      if (activityPlanned.length) {
        plans.location = activityPlanned
      }
      if (ownAssets.length) {
        plans.ownAssets = ownAssets.map((asset: string) => { return { asset: asset, number: 0 } })
      }
      if (otherAssets.length) {
        plans.otherAssets = otherAssets.map((asset: string) => { return { asset: asset } })
      }
      const newPlan: MessagePlanning = {
        messageType: PLANNING_MESSAGE,
        _id: '',
        details: messageDetails,
        message: plans
      }

      // mangle the location, to render it
      const activitiesForThisForce = forcePlanningActivities && forcePlanningActivities.find((act: PerForcePlanningActivitySet) => act.force === selectedForce.uniqid)
      const newDoc = collapseLocation(newPlan, activitiesForThisForce) as MessagePlanning

      // now open this in the editor
      setDraftMessage(newDoc)

      // clean up
      setActivityBeingPlanned(undefined)
      setActivityPlanned(undefined)
    } else {
      if (activityBeingPlanned) {
        // ok, we know an activity was being planned, but we have received an empty
        // activity planned - because the player has cancelled editing.  So,
        // cancel the draft message
        setDraftMessage(undefined)
      }
      if (activityPlanned) {
        console.log('UI Presumes there is an activity being planned', activityPlanned)
      }
    }
  }, [activityPlanned])

  const saveMessageLocal = (dbName: string, details: MessageDetails, message: any): { (): void } => {
    const unmangledMessage = message // note: we no longer rely on hiddenText expandLocation(message)
    // if this is a draft plans, clear the draft plan
    if (!details.interaction) {
      setDraftMessage(undefined)
    }
    return saveMessage(dbName, details, unmangledMessage)
  }

  /** player has used menu to trigger the creation of a new set of orders (activity) */
  const planNewActivity = (group: GroupedActivitySet['category'], activity: PlanningActivity['uniqid']) => {
    if (forcePlanningActivities) {
      const newActivity = findActivity(activity, group, selectedForce.uniqid, forcePlanningActivities)
      if (newActivity.geometries) {
        setActivityBeingPlanned(newActivity)
      } else {
        setActivityBeingPlanned(newActivity)
        setActivityPlanned([])
      }
    }
  }

  const cancelDraftMessage = (): void => {
    if (draftMessage) {
      setDraftMessage(undefined)
    }
  }

  const cacheMessage = (value: string | any, messageType: string): void | string => {
    return value && saveUnsentMessage(value, currentWargame, selectedForce.uniqid, selectedRoleId, channelId, messageType)
  }

  const getCachedMessage = (chatType: string): string => {
    return chatType && getUnsentMessage(currentWargame, selectedForce.uniqid, selectedRoleId, channelId, chatType)
  }

  const clearCachedMessage = (data: string[]): void => {
    data && data.forEach((removeType) => {
      return clearUnsentMessage(currentWargame, selectedForce.uniqid, selectedRoleId, channelId, removeType)
    })
  }

  const editOrderGeometries: LocationEditCallbackHandler = (plans: PlannedActivityGeometry[], callback: { (newValue: PlannedActivityGeometry[]): void }): void => {
    // if we just store `callback` then it will get called.  So we need to indirectly store it
    setActivityBeingEditedCallback(() => callback)

    // get bounds of geometries
    let localBounds: L.LatLngBounds | undefined
    plans.forEach((plan) => {
      const geom = plan.geometry.geometry as any
      const geomType: string = geom.type
      switch (geomType) {
        case 'Point': {
          const val = geom.coordinates as [number, number]
          const pos = L.latLng(val[1], val[0])
          localBounds = localBounds === undefined ? L.latLngBounds(pos, pos) : localBounds.extend(pos)
          break
        }
        case 'LineString': {
          const coords = geom.coordinates as [number, number][]
          coords.forEach((val: [number, number]) => {
            const pos = L.latLng(val[1], val[0])
            localBounds = localBounds === undefined ? L.latLngBounds(pos, pos) : localBounds.extend(pos)
          })
          break
        }
        case 'Polygon': {
          const coords = geom.coordinates[0] as [number, number][]
          coords.forEach((val: [number, number]) => {
            const pos = L.latLng(val[1], val[0])
            localBounds = localBounds === undefined ? L.latLngBounds(pos, pos) : localBounds.extend(pos)
          })
          break
        }
      }
    })
    if (localBounds) {
      setBounds(localBounds)
    }

    setActivityBeingEdited(plans)
  }

  const saveEditedOrderGeometries = (activity: PlannedActivityGeometry[] | undefined): void => {
    if (activity) {
      activityBeingEditedCallback && activityBeingEditedCallback(activity)
      setActivityBeingEditedCallback(undefined)
    } else {
      if (activityBeingEdited) {
        // user has cancelled edit. Push the original values back into the callback
        activityBeingEditedCallback && activityBeingEditedCallback(activityBeingEdited)
        setActivityBeingEditedCallback(undefined)
      } else {
        console.warn('Warning - planning channel expected there to be activity being edited')
      }
    }
    // finally, close
    setActivityBeingEdited(undefined)
  }

  const timelineOnEachFeature = (data: Feature, layer: L.Layer): void => {
    const props = data.properties as PlannedProps
    const forceId = props.force
    const thisForce = allForces.find((force) => force.uniqid === forceId)
    const forceName = thisForce ? thisForce.name : 'Force not found'
    const label = forceName + ' - ' + props.id
    layer.bindPopup(label)
  }

  const timelineStyle = (data: Feature): PathOptions => {
    const props = data.properties as PlannedProps
    const forceId = props.force
    const thisForce = allForces.find((force) => force.uniqid === forceId)
    const color = thisForce ? thisForce.color : '#ff0'
    return {
      color: color
    }
  }

  const timelinePointToLayer = (data: Feature<any>, latlng: LatLngExpression): Layer => {
    const props = data.properties as PlannedProps
    const forceId = props.force
    const thisForce = allForces.find((force) => force.uniqid === forceId)
    const thisCol = thisForce ? thisForce.color : '#f00'
    const geojsonMarkerOptions = {
      radius: 10,
      fillColor: thisCol,
      color: thisCol,
      weight: 2,
      opacity: 1,
      fillOpacity: 0.8
    }
    return circleMarker(latlng, geojsonMarkerOptions)
  }

  const mapChildren = useMemo(() => {
    return (
      <>
        <Ruler showControl={true} />
        <Timeline pointToLayer={timelinePointToLayer} style={timelineStyle} onEachFeature={timelineOnEachFeature} showControl={showTimeControl} data={timeControlEvents} />
        <PlanningActitivityMenu showControl={playerInPlanning && !showInteractionGenerator && !activityBeingPlanned && !showTimeControl} handler={planNewActivity} planningActivities={thisForcePlanningActivities} />
        { showStandardAreas && <AreaPlotter areas={myAreas} /> }
        {showInteractionGenerator
          ? <OrderPlotter forceCols={forceColors} orders={planningMessages} step={debugStep} activities={forcePlanningActivities || []} handleAdjudication={handleAdjudication} />
          : <Fragment>
            <Fragment key='selectedObjects'>
              <MapPlanningOrders forceColors={forceColors} interactions={interactionMessages} selectedInteraction={currentInteraction} forceColor={selectedForce.color} orders={planningMessages} selectedOrders={selectedOrders} activities={flattenedPlanningActivities} setSelectedOrders={noop} />
              <LayerGroup pmIgnore={true} key={'sel-own-forces'}>
                { perForceAssets.map((force) => {
                  return <PlanningForces label={force.force} key={force.force} interactive={!activityBeingPlanned} opFor={force.force !== selectedForce.name} forceColor={force.color}
                    assets={force.rows} setSelectedAssets={setLocalSelectedAssets} selectedAssets={selectedAssets} currentAssets={currentAssetIds} />
                })
                }
                {/* <RangeRingPlotter title={'Own range rings'} assets={filterApplied ? ownAssetsFiltered : allOwnAssets} forceCols={forceColors} /> */}
              </LayerGroup>
              <MapPlanningOrders forceColors={forceColors} forceColor={selectedForce.color} orders={planningMessages} selectedOrders={currentOrders} activities={flattenedPlanningActivities} setSelectedOrders={noop} />
            </Fragment>
            {activityBeingEdited && <OrderEditing activityBeingEdited={activityBeingEdited} areas={myAreas} saved={(activity) => saveEditedOrderGeometries(activity)} />}
            {activityBeingPlanned && <OrderDrawing activity={activityBeingPlanned} areas={myAreas} planned={(geoms) => setActivityPlanned(geoms)} cancelled={() => setActivityBeingPlanned(undefined)} />}
          </Fragment>
        }
      </>
    )
  }, [selectedAssets, debugStep,
    showInteractionGenerator, planningMessages, selectedOrders, activityBeingPlanned, activityBeingEdited, playerInPlanning, timeControlEvents,
    currentAssetIds, currentOrders, perForceAssets, showStandardAreas, myAreas])

  const duffDefinition: TileLayerDefinition = {
    attribution: 'missing',
    url: '//',
    maxNativeZoom: 6
  }

  if (!channel.constraints) {
    return (
      <div>Warning - PlanningChannel must now include mapping constraints</div>
    )
  } else {
    const boundsToUse = channel.constraints.bounds
    const centerToUse = L.latLngBounds(channel.constraints.bounds).getCenter()

    // constraints actually contains the max
    const maxZoom = channel.constraints.maxZoom ? channel.constraints.maxZoom + 4 : 7

    return (
      <div className={cx(channelTabClass, styles.root)} data-channel-id={channel.uniqid}>
        <SupportPanelContext.Provider value={supportPanelContext}>
          <SupportPanel
            channel={channel}
            platformTypes={platformTypes}
            planningMessages={planningMessages}
            interactionMessages={interactionMessages}
            attributeTypes={attributeTypes || []}
            onReadAll={onReadAll}
            onUnread={onUnread}
            onRead={onRead}
            allTemplates={allTemplates}
            adjudicationTemplate={adjudicationTemplate}
            activityTimeChanel={newActiveMessage}
            saveMessage={saveMessageLocal}
            mapPostBack={mapPostBack}
            saveNewActivityTimeMessage={saveNewActivityTimeMessage}
            dispatch={reduxDispatch}
            currentWargame={currentWargame}
            selectedRoleName={selectedRoleName}
            selectedRoleId={selectedRoleId}
            selectedForce={currentForce}
            allForces={allForces}
            allPeriods={allPeriods}
            gameDate={gameDate}
            gameTurnLength={gameTurnLength}
            currentTurn={currentTurn}
            phase={phase}
            selectedAssets={selectedAssets}
            setSelectedAssets={setLocalSelectedAssets}
            selectedOrders={selectedOrders}
            saveCachedNewMessageValue={cacheMessage}
            getCachedNewMessagevalue={getCachedMessage}
            clearCachedNewMessage={clearCachedMessage}
            setSelectedOrders={setSelectedOrders}
            setOpForcesForParent={setOpAssetsFiltered}
            setOwnForcesForParent={setOwnAssetsFiltered}
            allOwnAssets={allOwnAssets}
            allOppAssets={allOppAssets}
            onPanelWidthChange={onPanelWidthChange}
            draftMessage={draftMessage}
            onCancelDraftMessage={cancelDraftMessage}
            forcePlanningActivities={forcePlanningActivities}
            editLocation={editOrderGeometries}
            handleAdjudication={handleAdjudication}
          />
          <div className={styles['map-container']}>
            <div style={{ width: mapWidth }}>
              <MapContainer
                className={styles.map}
                zoomControl={false}
                center={centerToUse}
                bounds={boundsToUse}
                maxBounds={boundsToUse}
                zoom={zoom}
                minZoom={channel.constraints.minZoom}
                maxBoundsViscosity={1.0}
                maxZoom={maxZoom}
                zoomSnap={0.5}
              >
                <SupportMapping
                  bounds={bounds}
                  position={position}
                  actionCallback={mapActionCallback}
                  mapWidth={mapWidth}
                  tileLayer={channel.constraints.tileLayer || duffDefinition}
                  toolbarChildren={
                    <>
                      {!activityBeingPlanned &&
                        <>
                          {
                            myAreas && myAreas.length > 0 &&
                            <div className={cx('leaflet-control')}>
                              <Item title='Toggle display of standard areas' contentTheme={showStandardAreas ? 'light' : 'dark'}
                                onClick={() => setShowStandardAreas(!showStandardAreas)}><FontAwesomeIcon size={'lg'} icon={faShapes} /></Item>
                            </div>
                          }
                          {
                            umpireInAdjudication &&
                            <div className={cx('leaflet-control')}>
                              <Item title='Toggle interaction generator' contentTheme={showInteractionGenerator ? 'light' : 'dark'}
                                onClick={() => setShowIntegrationGenerator(!showInteractionGenerator)}><FontAwesomeIcon size={'lg'} icon={faCalculator} /></Item>
                            </div>
                          }
                          {showInteractionGenerator ? <div className={cx('leaflet-control')}>
                            <Item onClick={incrementDebugStep}>Step</Item>
                          </div>
                            : <>
                              <ApplyFilter filterApplied={filterApplied} setFilterApplied={setFilterApplied} />
                              <ViewAs isUmpire={!!selectedForce.umpire} forces={allForces} viewAsCallback={setViewAsForce} viewAsForce={viewAsForce} />
                              {7 && // don't bother with this, but keep it in case we want to gen more data
                                <div className={cx('leaflet-control')}>
                                  <Item onClick={genData}>gen data</Item>
                                </div>
                              }
                            </>
                          }
                          <div className={cx('leaflet-control')}>
                            <Item title='Toggle timeline' contentTheme={showTimeControl ? 'light' : 'dark'}
                              onClick={() => setShowTimeControl(!showTimeControl)}><FontAwesomeIcon size={'lg'} icon={faHistory} /></Item>
                          </div>
                        </>
                      }
                    </>
                  }>
                  <>
                    {mapChildren}
                  </>
                </SupportMapping>
              </MapContainer>
            </div>
          </div>
        </SupportPanelContext.Provider>
      </div>
    )
  }
}

export default PlanningChannel
