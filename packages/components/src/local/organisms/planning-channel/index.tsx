import { INFO_MESSAGE_CLIPPED, INTERACTION_MESSAGE, PLANNING_MESSAGE, PLANNING_PHASE } from '@serge/config'
import { Asset, ForceData, GroupedActivitySet, MessageInfoTypeClipped, MessagePlanning, PerForcePlanningActivitySet, PlainInteraction, PlannedActivityGeometry, PlannedProps, PlanningActivity } from '@serge/custom-types'
import { clearUnsentMessage, findAsset, forceColors as getForceColors, ForceStyle, getUnsentMessage, platformIcons, saveUnsentMessage } from '@serge/helpers'
import cx from 'classnames'
import L, { circleMarker, LatLngBounds, latLngBounds, LatLngExpression, Layer, PathOptions } from 'leaflet'
import _, { noop } from 'lodash'
import React, { Fragment, useEffect, useMemo, useState } from 'react'

import { faCalculator, faHistory } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { TileLayerDefinition } from '@serge/custom-types/mapping-constraints'
import { InteractionDetails, MessageAdjudicationOutcomes, MessageDetails, MessageDetailsFrom, MessageInteraction, PlanningMessageStructureCore } from '@serge/custom-types/message'
import { Feature, FeatureCollection } from 'geojson'
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
import { findActivity, randomOrdersDocs } from '../support-panel/helpers/gen-order-data'
import ViewAs from '../view-as'
import OrderDrawing from './helpers/OrderDrawing'
import OrderEditing from './helpers/OrderEditing'
import OrderPlotter from './helpers/OrderPlotter'
import PlanningActitivityMenu from './helpers/PlanningActitivityMenu'
import RangeRingPlotter from './helpers/RangeRingPlotter'
import Ruler from './helpers/Ruler'
import { boundsForGeometry } from './helpers/spatial-helpers'
import Timeline from './helpers/Timeline'
import styles from './styles.module.scss'
import PropTypes from './types/props'

type PlannedActivityGeometryCallback = (newValue: PlannedActivityGeometry[]) => void

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
  platformTypes,
  gameDate,
  gameTurnLength,
  currentTurn,
  forcePlanningActivities,
  attributeTypes
}) => {
  const [channelTabClass, setChannelTabClass] = useState<string>('')
  const [position, setPosition] = useState<LatLngExpression | undefined>(undefined)
  const [zoom] = useState<number>(7)
  const [bounds, setBounds] = useState<LatLngBounds | undefined>(undefined)

  // which force to view the data as
  const [viewAsForce, setViewAsForce] = useState<ForceData['uniqid']>(selectedForce.uniqid)
  const [currentForce, setCurrentForce] = useState<ForceData>(selectedForce)

  // all of the assets known to players of this force
  const [allOwnAssets, setAllOwnAssets] = useState<AssetRow[]>([])
  const [allOppAssets, setAllOppAssets] = useState<AssetRow[]>([])

  const [ownAssetsFiltered, setOwnAssetsFiltered] = useState<AssetRow[]>([])
  const [opAssetsFiltered, setOpAssetsFiltered] = useState<AssetRow[]>([])

  const [filterApplied, setFilterApplied] = useState<boolean>(true)

  // handle selections from asset tables
  const [selectedAssets, setSelectedAssets] = useState<string[]>([])
  // have `local` selected assets handler, since we don't always want to
  // propagate changes to selected assets
  const [localSelectedAssets, setLocalSelectedAssets] = useState<string[]>([])
  const [selectedOrders, setSelectedOrders] = useState<string[]>([])

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

  const [forceColors, setForceColors] = useState<Array<ForceStyle>>([])

  const [draftMessage, setDraftMessage] = useState<MessagePlanning | undefined>(undefined)

  const [playerInPlanning, setPlayerInPlanning] = useState<boolean>(false)
  const [umpireInAdjudication, setUmpireInAdjudication] = useState<boolean>(false)

  const [showTimeControl, setShowTimeControl] = useState<boolean>(false)
  const [timeControlEvents, setTimeControlEvents] = useState<FeatureCollection | undefined>(undefined)

  // the currently active assets and orders. i.e. if an order or adjudication is expanded,
  // show the child elements, regardless of what is selected
  const [currentAssetIds, setCurrentAssetIds] = useState<string[]>([])
  const [currentOrders, setCurrentOrders] = useState<string[]>([])

  const genData = (): void => {
    const doGenny = 7
    if (!doGenny) {
      const newPlan = forcePlanningActivities && forcePlanningActivities[0].groupedActivities[0].activities[1] as PlanningActivity
      setActivityBeingPlanned(newPlan)
    } else {
      const createAssets = true
      if (createAssets) {
        const forces = generateTestData2(channel.constraints, allForces, platformTypes, attributeTypes || [])
        console.log('forces', forces)
      } else {
        const newOrders = randomOrdersDocs(channelId, 200, allForces, [allForces[1].uniqid, allForces[2].uniqid], forcePlanningActivities || [], adjudicationTemplate._id)
        console.log(newOrders)
      }
    }
  }

  useEffect(() => {
    if (forcePlanningActivities) {
      // we don't have planning activities for umpire force, but we may want
      // a fake one if we're generating data
      const validForceId = selectedForce.umpire ? allForces[1].uniqid : selectedForce.uniqid
      const force = forcePlanningActivities.find((val: PerForcePlanningActivitySet) => val.force === validForceId)

      setThisForcePlanningActivities(force)

      // produce flattened set of activities, for convenience
      if (force) {
        const activities: Array<PlanningActivity[]> = force.groupedActivities.map((val: GroupedActivitySet) => val.activities as PlanningActivity[])
        setFlattenedPlanningActivities(_.flatten(activities))
      }
    }
  }, [selectedForce, forcePlanningActivities])

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
    setOwnAssetsFiltered(own.slice())
    setAllOppAssets(opp)
    setOpAssetsFiltered(opp.slice())
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
    { selectedAssets, setCurrentAssets: setCurrentAssetIds, setCurrentOrders }
  ), [selectedAssets, setCurrentAssetIds, setCurrentOrders])

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
        setDraftMessage(undefined)
      }
      console.log('UI Presumes there is an activity being planned.')
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
        {showInteractionGenerator
          ? <OrderPlotter forceCols={forceColors} orders={planningMessages} step={debugStep} activities={forcePlanningActivities || []} handleAdjudication={handleAdjudication} />
          : <Fragment>
            <Fragment key='selectedObjects'>
              <MapPlanningOrders forceColors={forceColors} forceColor={selectedForce.color} orders={planningMessages} selectedOrders={selectedOrders} activities={flattenedPlanningActivities} setSelectedOrders={noop} />
              <RangeRingPlotter title={'Own range rings'} assets={ownAssetsFiltered} forceCols={forceColors} />
              <LayerGroup pmIgnore={true} key={'sel-own-forces'}>
                {allOwnAssets.length !== ownAssetsFiltered.length &&
                  <PlanningForces interactive={!activityBeingPlanned} opFor={false} assets={filterApplied ? ownAssetsFiltered : allOwnAssets} setSelectedAssets={setLocalSelectedAssets} selectedAssets={selectedAssets} />
                }
                {allOwnAssets.length === ownAssetsFiltered.length &&
                  <PlanningForces interactive={!activityBeingPlanned} opFor={false} assets={allOwnAssets.filter((asset: AssetRow) => selectedAssets.includes(asset.id))} setSelectedAssets={setLocalSelectedAssets} selectedAssets={selectedAssets} />
                }
              </LayerGroup>
              <RangeRingPlotter title={'Opp range rings'} assets={opAssetsFiltered} forceCols={forceColors} />
              <LayerGroup key={'sel-opp-forces'}>
                {allOppAssets.length !== opAssetsFiltered.length &&
                  <PlanningForces interactive={!activityBeingPlanned} opFor={true} assets={filterApplied ? opAssetsFiltered : allOppAssets} setSelectedAssets={setLocalSelectedAssets} selectedAssets={selectedAssets} />
                }
                {allOppAssets.length === opAssetsFiltered.length &&
                  <PlanningForces interactive={!activityBeingPlanned} opFor={true} assets={allOppAssets.filter((asset: AssetRow) => selectedAssets.includes(asset.id))} setSelectedAssets={setLocalSelectedAssets} selectedAssets={selectedAssets} />
                }
              </LayerGroup>
            </Fragment>
            <Fragment key='currentObjects'>
              <MapPlanningOrders forceColors={forceColors} forceColor={selectedForce.color} orders={planningMessages} selectedOrders={currentOrders} activities={flattenedPlanningActivities} setSelectedOrders={noop} />
              <LayerGroup pmIgnore={true} key={'cur-own-forces'}>
                <PlanningForces interactive={!activityBeingPlanned} opFor={false} assets={allOwnAssets.filter((row) => currentAssetIds.includes(row.id))} setSelectedAssets={noop} selectedAssets={currentAssetIds} />
              </LayerGroup>
              <LayerGroup key={'cur-opp-forces'}>
                <PlanningForces interactive={!activityBeingPlanned} opFor={true} assets={allOppAssets.filter((row) => currentAssetIds.includes(row.id))} setSelectedAssets={noop} selectedAssets={currentAssetIds} />
              </LayerGroup>
            </Fragment>
            {activityBeingEdited && <OrderEditing activityBeingEdited={activityBeingEdited} saved={(activity) => saveEditedOrderGeometries(activity)} />}
            {activityBeingPlanned && <OrderDrawing activity={activityBeingPlanned} planned={(geoms) => setActivityPlanned(geoms)} cancelled={() => setActivityBeingPlanned(undefined)} />}
          </Fragment>
        }
      </>
    )
  }, [selectedAssets, filterApplied, ownAssetsFiltered, allOwnAssets, opAssetsFiltered, allOppAssets, debugStep,
    showInteractionGenerator, planningMessages, selectedOrders, activityBeingPlanned, activityBeingEdited, playerInPlanning, timeControlEvents,
    currentAssetIds, currentOrders])

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
        </SupportPanelContext.Provider>
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
              maxZoom={maxZoom}
              zoomSnap={0.5}
            >
              <SupportMapping
                bounds={bounds}
                position={position}
                actionCallback={mapActionCallback}
                mapWidth={mapWidth}
                tileLayer={channel.constraints.tileLayer || duffDefinition}
                maxZoom={maxZoom}
                toolbarChildren={
                  <>
                    {!activityBeingPlanned &&
                      <>
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
      </div>
    )
  }
}

export default PlanningChannel
