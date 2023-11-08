import { expiredStorage, INFO_MESSAGE_CLIPPED, INTERACTION_MESSAGE, PLANNING_MESSAGE, PLANNING_PHASE, UNKNOWN_TYPE } from 'src/config'
import {
  AreaCategory, Asset, ForceData, GroupedActivitySet, MessageInfoTypeClipped, MessagePlanning, PerForcePlanningActivitySet,
  PlainInteraction, PlannedActivityGeometry, PlannedProps, PlanningActivity, PlanningActivityGeometry
} from 'src/custom-types'
import { clearUnsentMessage, forceColors as getForceColors, ForceStyle, getUnsentMessage, platformIcons, saveUnsentMessage } from 'src/Helpers'
import cx from 'classnames'
import L, { circleMarker, LatLngBounds, LatLngExpression, Layer, LeafletMouseEvent, PathOptions } from 'leaflet'
import _, { noop } from 'lodash'
import React, { Fragment, useEffect, useMemo, useState, useRef } from 'react'

import { faHistory, faObjectUngroup, faShapes, faTag, faCircle } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { TileLayerDefinition } from 'src/custom-types/mapping-constraints'
import { InteractionDetails, MessageAdjudicationOutcomes, MessageCustom, MessageDetails, MessageDetailsFrom, MessageInteraction, PlanningMessageStructureCore } from 'src/custom-types/'
import { Feature, FeatureCollection, Point } from 'geojson'
import LRU from 'lru-cache'
import moment from 'moment-timezone'
import { LayerGroup, MapContainer, useMapEvents } from 'react-leaflet-v4'
import Item from '../../local/map-control/helpers/item'
import { generateTestData2 } from '../../local/mapping/helpers/gen-test-mapping-data'
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
import { findActivity2, randomOrdersDocs } from '../support-panel/helpers/gen-order-data'
// import ViewAs from '../view-as'
import ViewAs from '../../local/organisms/view-as'
import AreaPlotter from './helpers/AreaPlotter'
import OrderDrawing from './helpers/OrderDrawing'
import OrderEditing from './helpers/OrderEditing'
import PlanningActitivityMenu from './helpers/PlanningActitivityMenu'
import Ruler from './helpers/Ruler'
import { boundsForGeometry } from './helpers/spatial-helpers'
import Timeline from './helpers/Timeline'
import styles from './styles.module.scss'
import PropTypes from './types/props'
import { ReplayFeature } from '../map-planning-orders/types/props'

type PlannedActivityGeometryCallback = (newValue: PlannedActivityGeometry[]) => void
/** helper object, to allow clustering of assets by force */
type PerForceAssets = {
  force: ForceData['uniqid']
  color: string
  rows: AssetRow[]
}

/** the extra labelling we use for timeline replay */
export type ReplayAnnotations = {
  start: number
  end: number
  force: ForceData['name']
  activity: PlanningActivityGeometry['name']
  id: MessageCustom['_id']
}

export const PlanningChannel: React.FC<PropTypes> = ({
  dispatch,
  reduxDispatch,
  getAllWargameMessages,
  markUnread,
  markAllAsRead,
  saveNewActivityTimeMessage,
  saveArchiveMessage,
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
  areas,
  forceTemplateData
}) => {
  const [channelTabClass, setChannelTabClass] = useState<string>('')
  const [position] = useState<LatLngExpression | undefined>(undefined)
  const [zoom] = useState<number>((channel.constraints && channel.constraints.minZoom) || 5)
  const [bounds, setBounds] = useState<LatLngBounds | undefined>(undefined)

  const [myAreas, setMyAreas] = useState<Array<AreaCategory>>([])

  // which force to view the data as
  const [viewAsForce, setViewAsForce] = useState<ForceData['uniqid']>(selectedForce.uniqid)
  const [currentForce, setCurrentForce] = useState<ForceData>(selectedForce)

  // whether to filter the map assets to match the table filter
  const [filterApplied, setFilterApplied] = useState<boolean>(true)

  // all of the assets known to players of this force
  const [allOwnAssets, setAllOwnAssets] = useState<AssetRow[]>([])
  const [allOppAssets, setAllOppAssets] = useState<AssetRow[]>([])

  const ownAssetsFiltered = useRef<AssetRow[]>([])
  const opAssetsFiltered = useRef<AssetRow[]>([])

  // handle selections from asset tables
  const [selectedAssets, setSelectedAssets] = useState<string[]>([])

  // have `local` selected assets handler, since we don't always want to
  // propagate changes to selected assets
  const localSelectedAssets = useRef<string[]>([])
  const [selectedOrders, setSelectedOrders] = useState<string[]>([])

  // we need to break down assets by force, so they can be plotted (clustered) by color
  // will show current assets (if present), then filtered or all, according to show all filter
  const [perForceAssets, setPerForceAssets] = useState<PerForceAssets[]>([])

  // the currently active assets and orders. i.e. if an order or adjudication is expanded,
  // show the child elements, regardless of what is selected
  // NOTE: for current assets there is a separate meaning of a zero length list of current assets,
  // and undefined list that indicates there we shouldn't focus on a specific set of assets
  const [currentAssetIds, setCurrentAssetIds] = useState<string[] | undefined>(undefined)

  const [currentOrders, setCurrentOrders] = useState<string[]>([])

  const [mapWidth, setMapWidth] = useState<string>('calc(100% - 330px)')

  // the planning activiites for the selected force
  const [flattenedPlanningActivities, setFlattenedPlanningActivities] = useState<PlanningActivity[]>([])
  const [thisForcePlanningActivities, setThisForcePlanningActivities] = useState<PerForcePlanningActivitySet | undefined>(undefined)

  const [planningMessages, setPlanningMessages] = useState<MessagePlanning[]>([])
  const [interactionMessages, setInteractionMessages] = useState<MessageInteraction[]>([])

  const [activityBeingPlanned, setActivityBeingPlanned] = useState<PlanningActivity | undefined>(undefined)
  const [activityPlanned, setActivityPlanned] = useState<PlannedActivityGeometry[] | undefined>(undefined)

  const [activityBeingEdited, setActivityBeingEdited] = useState<PlannedActivityGeometry[] | undefined>(undefined)
  const [activityBeingEditedCallback, setActivityBeingEditedCallback] = useState<PlannedActivityGeometryCallback | undefined>(undefined)

  const [showIconName, setShowIconName] = useState<boolean>(false)
  const [showStandardAreas, setShowStandardAreas] = useState<boolean>(false)
  const [clusterIcons, setClusterIcons] = useState<boolean>(true)
  const [showMezRings, setShowMezRings] = useState<boolean>(false)

  const [forceColors, setForceColors] = useState<Array<ForceStyle>>([])

  const [draftMessage, setDraftMessage] = useState<MessagePlanning | undefined>(undefined)

  const [isUmpire, setIsUmpire] = useState<boolean>(false)
  const [playerInPlanning, setPlayerInPlanning] = useState<boolean>(false)

  // TIMELINE related
  const [showTimeControl, setShowTimeControl] = useState<boolean>(false)
  const [timelineLiveEntities, setTimelineLiveEntities] = useState<string[]>([])

  const [timeControlEvents, setTimeControlEvents] = useState<FeatureCollection | undefined>(undefined)
  const [showTimeOutcomes, setShowTimeOutcomes] = useState<boolean>(false)
  const [showTimeOrders, setShowTimeOrders] = useState<boolean>(false)
  const [showTimeInteractions, setShowTimeInteractions] = useState<boolean>(false)
  const [timelineOrders, setTimelineOrders] = useState<string[]>([])
  const [timelineInteractions, setTimelineInteractions] = useState<MessageInteraction[]>([])
  const [timelineFeatures, setTimelineFeatures] = useState<ReplayFeature[]>([])
  const [timelineFeatureCache, setTimelineFeatureCache] = useState<Record<string, ReplayFeature>>({})

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
      // const forces = updateBounds(channel.constraints, allForces)
      const forces = generateTestData2(400, channel.constraints, allForces, platformTypes, attributeTypes || [])
      // const forces = fixPerceivedPositions(allForces)
      console.log('forces', forces)
      const allForceIds = [allForces[1].uniqid, allForces[2].uniqid, allForces[3].uniqid]
      console.log('orders documents')
      if (forcePlanningActivities) {
        console.log(randomOrdersDocs(channelId, 200, allForces, allForceIds, forcePlanningActivities, adjudicationTemplate._id, gameDate))
        console.log(randomOrdersDocs(channelId, 30, allForces, allForceIds, forcePlanningActivities, adjudicationTemplate._id, gameDate))
      } else {
        console.error('Cannot create docs, force activities missing')
      }
    }
  }

  useEffect(() => {
    if (showTimeControl) {
      const features: Feature[] = []

      planningMessages.forEach((plan) => {
        if (plan.message.location) {
          plan.message.location.forEach((planned) => {
            // check we have start/end date, otherwise use it for whole plan
            const props = planned.geometry.properties as PlannedProps
            let startTime: number
            let endTime: number
            if (props.startDate && props.endDate) {
              startTime = moment.utc(props.startDate).valueOf()
              endTime = moment.utc(props.endDate).valueOf()
            } else {
              startTime = moment.utc(plan.message.startDate).valueOf()
              endTime = moment.utc(plan.message.endDate).valueOf()
            }
            const propsReplay: ReplayAnnotations = {
              id: plan._id + '//' + planned.uniqid,
              start: startTime,
              end: endTime,
              force: 'ignored',
              activity: 'ignored'
            }

            const point: Feature<Point> = {
              id: plan._id + '//' + planned.uniqid,
              type: 'Feature',
              properties: propsReplay,
              geometry: {
                type: 'Point',
                coordinates: [60, 36]
              }
            }
            // push this interaction to the stack
            features.push(point)
          })
        }
      })

      interactionMessages.forEach((iMessage) => {
        // find interactions that either relate to my assets, or where my perception of op-for asset changes
        iMessage.message.locationOutcomes.forEach((location) => {
          const id = location.asset
          const asset = allOwnAssets.find((row) => row.id === id)
          if (asset) {
            // see if it is from my force, or I am umpire
          }
        })

        // sort out the orders to show
        const interaction = iMessage.details.interaction
        if (interaction) {
          const propsReplay: ReplayAnnotations = {
            id: iMessage._id,
            start: moment.utc(interaction.startTime).valueOf(),
            end: moment.utc(interaction.endTime).valueOf(),
            force: 'ignored',
            activity: 'ignored'
          }

          const point: Feature<Point> = {
            id: iMessage._id,
            type: 'Feature',
            properties: propsReplay,
            geometry: {
              type: 'Point',
              coordinates: [60, 36]
            }
          }
          // push this interaction to the stack
          features.push(point)
        }
      })

      console.table(features.map((feature) => {
        const props = feature.properties as ReplayAnnotations
        return {
          id: feature.id,
          start: moment.utc(props.start).toISOString(),
          end: moment.utc(props.end).toISOString()
        }
      }))

      const collection: FeatureCollection = {
        type: 'FeatureCollection',
        features: features
      }
      // console.log('my events', collection)
      setTimeControlEvents(collection)
    } else {
      // flush the cache
      setTimelineFeatureCache({})
      setTimeControlEvents(undefined)
    }
  }, [showTimeControl, planningMessages, selectedForce])

  useEffect(() => {
    // game date has changed, get updated periods
    onTurnPeriods && onTurnPeriods(currentWargame)(dispatch)
  }, [gameDate])

  useEffect(() => {
    // collate data
    const features = timelineLiveEntities.filter((item) => item.includes('//'))
    const nonFeatures = timelineLiveEntities.filter((item) => !item.includes('//'))
    const plans = planningMessages.filter((msg) => nonFeatures.includes(msg._id))
    const inters = interactionMessages.filter((msg) => nonFeatures.includes(msg._id))
    const replayFeatures = features.map((item): ReplayFeature => {
      const match = timelineFeatureCache[item]
      if (match) {
        return match
      } else {
        const separ = item.split('//')
        const orderId = separ[0]
        const activityId = separ[1]
        const order = planningMessages.find((msg) => msg._id === orderId)
        const activity = order && order.message.location && order.message.location.find((plan) => plan.uniqid === activityId)
        const res = {
          color: order ? order.details.from.forceColor : '#ccd',
          feature: activity as PlannedActivityGeometry,
          name: activity ? activity.uniqid : 'unknown'
        }
        timelineFeatureCache[item] = res
        return res
      }
    })
    // update state
    setTimelineInteractions(inters)
    setTimelineOrders(plans.map((pln) => pln._id))
    setTimelineFeatures(replayFeatures)
  }, [timelineLiveEntities])

  useEffect(() => {
    if (areas) {
      // produce a list of standard areas for a player of this force
      const filtered = areas.filter((area: AreaCategory) => area.usedBy && area.usedBy.includes(selectedForce.uniqid))
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

  const buildForceAsssets = () => {
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
    res.push({
      force: UNKNOWN_TYPE,
      rows: [],
      color: '#ccc'
    })
    const doRows = (rows: AssetRow[]) => {
      rows.forEach((row) => {
        const force = row.force
        // check selected status
        const selected = selectedAssets.includes(row.id)
        if (row.tableData) {
          row.tableData.checked = selected
        }
        const forceToUse = force || UNKNOWN_TYPE
        const thisA = res.find((force) => force.force === forceToUse)
        if (thisA === undefined) {
          console.warn('Failed to find existing entry for', force, row)
        } else {
          thisA.rows.push(row)
        }
      })
    }
    if (currentAssetIds !== undefined) {
      const currentOwn = allOwnAssets.filter((row) => currentAssetIds && currentAssetIds.includes(row.id))
      const currentOpp = allOppAssets.filter((row) => currentAssetIds && currentAssetIds.includes(row.id))
      const currentAssets = currentOwn.concat(currentOpp)
      doRows(currentAssets)
    } else {
      if (filterApplied) {
        doRows(ownAssetsFiltered.current)
        doRows(opAssetsFiltered.current)
      } else {
        doRows(allOwnAssets)
        doRows(allOppAssets)
      }
    }
    setPerForceAssets(res)
  }

  useEffect(() => {
    buildForceAsssets()
  }, [currentAssetIds, ownAssetsFiltered, opAssetsFiltered, allOppAssets, allOwnAssets, filterApplied, selectedAssets])

  useEffect(() => {
    const isUmpireForce = !!selectedForce.umpire
    setIsUmpire(isUmpireForce)
    const planningPhase = phase === PLANNING_PHASE
    setPlayerInPlanning(!isUmpireForce && planningPhase)
  }, [selectedForce, phase])

  useEffect(() => {
    // don't zoom to fit if we're in timeline replay mode
    if (!showTimeControl) {
      // find bounds of assets & orders
      let workingBounds: L.LatLngBounds | undefined

      const extendBounds = (assetId: string, assetList: AssetRow[], bounds: LatLngBounds | undefined): LatLngBounds | undefined => {
        const asset = assetList.find((row) => row.id === assetId)
        if (asset && asset.position) {
          const pos = asset.position
          return bounds ? bounds.extend(pos) : L.latLngBounds(pos, pos)
        }
        return bounds
      }

      // also see if there are asset locations we should include in viewport
      currentAssetIds && currentAssetIds.forEach((id) => {
        let assetRow = allOwnAssets.find((row) => row.id === id)
        if (!assetRow) {
          assetRow = allOppAssets.find((row) => row.id === id)
        }
        if (!assetRow) {
          console.log('PlanningChannel calc bounds on current data. Failed to find asset with id', id)
        } else {
          if (assetRow && assetRow.position) {
            const pos = assetRow.position
            workingBounds = workingBounds ? workingBounds.extend(pos) : L.latLngBounds(pos, pos)
          }
        }
      })
      const boundsForOrders = (id: string, bounds: LatLngBounds | undefined): LatLngBounds | undefined => {
        const plan = planningMessages.find((msg) => id === msg._id)
        if (plan) {
          const activities = plan.message.location
          if (activities) {
            activities.forEach((act) => {
              bounds = boundsForGeometry(act.geometry.geometry, bounds)
            })
          }

          plan.message.ownAssets && plan.message.ownAssets.forEach(({ asset }) => {
            workingBounds = extendBounds(asset, allOwnAssets, workingBounds)
          })
          plan.message.otherAssets && plan.message.otherAssets.forEach(({ asset }) => {
            workingBounds = extendBounds(asset, allOppAssets, workingBounds)
          })
        }
        return bounds
      }
      currentOrders.forEach((id) => {
        workingBounds = boundsForOrders(id, workingBounds)
      })
      if (currentInteraction) {
        const inter = interactionMessages.find((msg) => msg.message.Reference === currentInteraction)
        if (inter && inter.details.interaction) {
          workingBounds = boundsForOrders(inter.details.interaction.orders1, workingBounds)
          if (inter.details.interaction.orders2) {
            workingBounds = boundsForOrders(inter.details.interaction.orders2, workingBounds)
          }
        }
      }
      // create a bit of a buffer around the bounds
      if (workingBounds) {
        setBounds(workingBounds.pad(0.2))
      } else {
        setBounds(workingBounds)
      }
    }
    // update map bounds
  }, [currentAssetIds, currentOrders, currentInteraction])

  // useEffect(() => {
  //   if (showTimeControl) {
  //     const isUmpire = selectedForce.umpire
  //     const features: Feature[] = []
  //     interactionMessages.forEach((iMessage) => {
  //       // sort out the orders to show
  //       const interaction = iMessage.details.interaction
  //       if (interaction) {
  //         // TODO: switch to generating block of interactions
  //         // TODO: use valid start/end date for interactions,
  //         // TODO: start date plus buffer for events
  //         const orders = [interaction.orders1]
  //         if (interaction.orders2) {
  //           orders.push(interaction.orders2)
  //         }
  //         const populatedOrders = planningMessages.filter((msg) => orders.includes(msg._id))
  //         const myOrders = isUmpire ? populatedOrders : populatedOrders.filter((msg) => msg.details.from.forceId === selectedForce.uniqid)
  //         if (myOrders.length) {
  //           myOrders.forEach((plan) => {
  //             if (plan.message.location) {
  //               // until we have times in features, we get it from the message
  //               const msg = plan.message
  //               const startTime = msg.startDate
  //               const endTime = msg.endDate
  //               // check plan has start & end dates
  //               if (startTime && endTime) {
  //                 const steps: Feature[] = plan.message.location.map((geom: PlannedActivityGeometry): Feature => {
  //                   // note: we aren't generating a feature to plot (or using the feature stored in the location data)
  //                   // that's because we already have renderers for orders, interactions, assets.
  //                   // so, just generate series of time-stamped points for timeline to manage.
  //                   // when timeline updates, it will spit out ids of interactions to display.
  //                   const point: Feature<Point> = {
  //                     type: 'Feature',
  //                     properties: geom.geometry.properties,
  //                     geometry: {
  //                       type: 'Point',
  //                       coordinates: [60, 36]
  //                     }
  //                   }
  //                   // create the new props, if they are missing
  //                   if (point.properties) {
  //                     const propsReplay = point.properties as ReplayAnnotations
  //                     const props = point.properties as PlannedProps
  //                     if (props.startDate && props.endDate) {
  //                       propsReplay.start = moment.utc(props.startDate).valueOf()
  //                       propsReplay.end = moment.utc(props.endDate).valueOf()
  //                     } else {
  //                       propsReplay.start = moment.utc(startTime).valueOf()
  //                       propsReplay.end = moment.utc(endTime).valueOf()
  //                     }
  //                     propsReplay.force = plan.details.from.force
  //                     propsReplay.activity = point.properties.uniqid
  //                     propsReplay.id = plan._id
  //                   }
  //                   return point
  //                 })
  //                 features.push(...steps)
  //               }
  //             }
  //           })
  //         }
  //       }
  //     })
  //     const collection: FeatureCollection = {
  //       type: 'FeatureCollection',
  //       features: features
  //     }
  //     setTimeControlEvents(collection)
  //   } else {
  //     setTimeControlEvents(undefined)
  //   }
  // }, [showTimeControl, planningMessages, selectedForce])

  useEffect(() => {
    const force = allForces.find((force: ForceData) => force.uniqid === viewAsForce)
    if (force) {
      setCurrentForce(force)
    }
  }, [viewAsForce])

  useEffect(() => {
    // produce the own and opp assets for this player force
    const forceCols = getForceColors(allForces)
    const platIcons = platformIcons(platformTypes)
    const own = getOwnAssets(allForces, forceCols, platIcons, currentForce, platformTypes, attributeTypes || [], moment.utc(gameDate).valueOf(), [])
    const opp = getOppAssets(allForces, forceCols, platIcons, currentForce, platformTypes, attributeTypes || [], moment.utc(gameDate).valueOf(), [])

    // no - do not clear the filtered assets arrays.  They get assigned
    // in a round-trip from the `visibleRows` handler from the assets table
    // update the own filtered arrays with the new values
    const ownIds = ownAssetsFiltered.current.map((row) => row.id)
    const filteredOwn = own.filter((row) => ownIds.includes(row.id))
    ownAssetsFiltered.current = filteredOwn
    const opIds = opAssetsFiltered.current.map((row) => row.id)
    const filteredOp = opp.filter((row) => opIds.includes(row.id))
    opAssetsFiltered.current = filteredOp
    // ownAssetsFiltered.current = []
    // opAssetsFiltered.current = []

    setAllOwnAssets(own)
    setAllOppAssets(opp)
    setForceColors(forceCols)
  }, [allForces, currentForce])

  useEffect(() => {
    // comment out - incomplete
    // const updateList = (assets: AssetRow[], selectedAssets: string[]): AssetRow[] | undefined => {
    //   let ownChanged = false
    //   const res = assets.map((asset): AssetRow => {
    //     const toBeSelected = selectedAssets.includes(asset.id)
    //     const isSelected = asset.tableData && asset.tableData.checked
    //     if (toBeSelected === isSelected) {
    //       return asset
    //     } else {
    //       ownChanged = true
    //       if (toBeSelected) {
    //         if (!asset.tableData) {
    //           asset.tableData = {checked: true}
    //         } else {
    //           asset.tableData.checked = true
    //         }
    //       } else {
    //         if (asset.tableData) {
    //           asset.tableData.checked = false
    //         }
    //       }
    //       return asset
    //     }
    //   })
    //   return ownChanged ? res : undefined
    // }
    // const updateOwnAssets = updateList(allOwnAssets, selectedAssets)
    // if (updateOwnAssets !== undefined) {
    //   console.log('updating own selection')
    //   setAllOwnAssets(updateOwnAssets)
    // }
    // const updateOtherAssets = updateList(allOppAssets, selectedAssets)
    // if (updateOtherAssets !== undefined) {
    //   console.log('updating opp selection')
    //   setAllOppAssets(updateOtherAssets)
    // }
  }, [selectedAssets])

  useEffect(() => {
    // no, don't zoom in on the selected asset
    // I just observed some screwy behaviour, where the asset icons
    // if (selectedAssets.length) {
    //   const relevantRows = selectedAssets.map((id): AssetRow | undefined => {
    //     let assetRow = allOwnAssets.find((row) => row.id === id)
    //     if (!assetRow) {
    //       assetRow = allOppAssets.find((row) => row.id === id)
    //     }
    //     return assetRow
    //   })
    //   const assets = relevantRows.filter((row) => row) as AssetRow[]
    //   const assetsWithLocation = assets.filter((asset: AssetRow) => asset.position !== undefined)
    //   const locations: any = assetsWithLocation.map((asset: AssetRow) => asset.position)
    //   if (locations.length > 0) {
    //     let mapBounds: LatLngBounds | undefined
    //     locations.forEach((loc: LatLng) => {
    //       if (!mapBounds) {
    //         mapBounds = latLngBounds(loc, loc)
    //       } else {
    //         mapBounds.extend(loc)
    //       }
    //     })
    //     if (mapBounds) {
    //       // do we actually just have one location?
    //       if (mapBounds.getNorthWest().equals(mapBounds.getSouthEast())) {
    //         // no, don't zoom in on the selected asset
    //         // I just observed some screwy behaviour, where the asset icons
    //         // moved to somewhere else on the globe, but the map didn't update
    //         //        console.log('bounds 1a', mapBounds)

    //         // ok, treat it as new map centre
    //         // setBounds(undefined)
    //         // setPosition(mapBounds.getNorthWest())
    //       } else {
    //         console.log('bounds 1b', mapBounds)
    //         // zoom to
    //         setPosition(undefined)
    //         setBounds(mapBounds.pad(0.2))
    //       }
    //     }
    //   }
    // }
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
    const nonTurnMessagesRemoveDublicate = _.uniqBy(nonTurnMessages, (e) => {
      return e.message && e.message.Reference
    })
    const unArchivedMessages: Array<MessagePlanning | MessageInteraction> = nonTurnMessagesRemoveDublicate.filter((message) => !message.details.archived)
    // TODO: these filters should just use `messageType` to get the correct data, but currently
    // all messages have "CUSTOM_MESSAGE". So the filters fall back on other `tell-tales`.
    const myPlanningMessages = unArchivedMessages.filter((msg: MessagePlanning | MessageInteraction) => msg.messageType === PLANNING_MESSAGE || (!msg.details.interaction)) as MessagePlanning[]
    const myInteractionMessages = unArchivedMessages.filter((msg: MessagePlanning | MessageInteraction) => msg.messageType === INTERACTION_MESSAGE || msg.details.interaction) as MessageInteraction[]

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

  const onSupportPanelLayoutChange = (key: string, value: string) => {
    const refKey = `support.planning.${selectedRoleId}`
    const panelState = JSON.parse(expiredStorage.getItem(refKey) || '{}')
    panelState[key] = value
    expiredStorage.setItem(refKey, JSON.stringify(panelState))
  }

  const getSupportPanelState = () => JSON.parse(expiredStorage.getItem(`support.planning.${selectedRoleId}`) || '{}')

  const supportPanelContext = useMemo(() => (
    { selectedAssets, setCurrentAssets: setCurrentAssetIds, setCurrentOrders, setCurrentInteraction: setCurrentInteraction, assetsCache, onSupportPanelLayoutChange, getSupportPanelState }
  ), [selectedAssets, setCurrentAssetIds, setCurrentOrders, setCurrentInteraction, assetsCache])

  const handleAdjudication = (interDetails: InteractionDetails, outcomes: MessageAdjudicationOutcomes): void => {
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
        timestamp: moment.utc().toISOString(),
        turnNumber: currentTurn
      }
      const timeBounds = activityBounds(activityPlanned)
      const plans: PlanningMessageStructureCore = {
        Reference: '',
        title: '',
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
      const newActivity = findActivity2(activity, group, selectedForce.uniqid, forcePlanningActivities)
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
    // if we're editing an existing set of orders zoom in on them
    console.log('activity being edited')
    if (localBounds && activityBeingEdited && !7) {
      setBounds(localBounds.pad(0.2))
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
    const props = data.properties as ReplayAnnotations
    const label = props.force + ' - ' + props.activity
    layer.bindPopup(label)
  }

  const timelineStyle = (data: Feature): PathOptions => {
    const props = data.properties as ReplayAnnotations
    const forceName = props.force
    const thisForce = allForces.find((force) => force.name === forceName)
    const color = thisForce ? thisForce.color : '#ff0'
    return {
      color: color
    }
  }

  const timelinePointToLayer = (data: Feature<any>, latlng: LatLngExpression): Layer => {
    const props = data.properties as ReplayAnnotations
    const forceName = props.force
    const thisForce = allForces.find((force) => force.name === forceName)
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

  const onSetSelectedAssets = (selected: string[]) => {
    localSelectedAssets.current = selected
    if (!activityBeingPlanned) {
      setSelectedAssets(selected)
    }
  }

  const setOpAssetsFiltered = (assetRows: AssetRow[]) => {
    opAssetsFiltered.current = assetRows
    buildForceAsssets()
  }

  const setOwnAssetsFiltered = (assetRows: AssetRow[]) => {
    ownAssetsFiltered.current = assetRows
    buildForceAsssets()
  }
  const RightClickGenerator = () => {
    useMapEvents({
      contextmenu: (e: LeafletMouseEvent) => {
        const hunK = 100000
        const latVal = Math.floor(e.latlng.lat * hunK) / hunK
        const lonVal = Math.floor(e.latlng.lng * hunK) / hunK
        const copyLocetion = JSON.stringify([latVal, lonVal])
        window.prompt('Copy to clipboard: Ctrl+C, Enter', copyLocetion)
      }
    })
    return null
  }

  const mapChildren = useMemo(() => {
    return (
      <>
        <RightClickGenerator />
        <Ruler showControl={true} />
        { <Timeline pointToLayer={timelinePointToLayer} style={timelineStyle} onEachFeature={timelineOnEachFeature} setCurrentInteractions={setTimelineLiveEntities}
          showControl={showTimeControl} data={timeControlEvents} /> }
        { <PlanningActitivityMenu showControl={playerInPlanning && !activityBeingPlanned && !showTimeControl} handler={planNewActivity} planningActivities={thisForcePlanningActivities} /> }
        {showStandardAreas && <AreaPlotter areas={myAreas} />}
        {showTimeControl ? <Fragment>
          <MapPlanningOrders forceColors={forceColors} features={timelineFeatures} orders={planningMessages} selectedOrders={timelineOrders} activities={flattenedPlanningActivities} interactions={timelineInteractions} setSelectedOrders={noop} />
        </Fragment>
          : <Fragment>
            <Fragment key='selectedObjects'>
              <MapPlanningOrders forceColors={forceColors} orders={planningMessages} selectedOrders={selectedOrders} activities={flattenedPlanningActivities} setSelectedOrders={noop} interactions={interactionMessages} selectedInteraction={currentInteraction} />
              <MapPlanningOrders forceColors={forceColors} orders={planningMessages} selectedOrders={currentOrders} activities={flattenedPlanningActivities} setSelectedOrders={noop} />
              <LayerGroup pmIgnore={true} key={'sel-own-forces'}>
                {perForceAssets.map((force) => {
                  return <PlanningForces showData={!showTimeControl} showMezRings={showMezRings} clusterIcons={clusterIcons} label={force.force} key={force.force} interactive={!activityBeingPlanned} opFor={force.force !== selectedForce.name} forceColor={force.color}
                    assets={force.rows} setSelectedAssets={onSetSelectedAssets} hideName={!showIconName} selectedAssets={selectedAssets} currentAssets={currentAssetIds} />
                })
                }
                {/* <RangeRingPlotter title={'Own range rings'} assets={filterApplied ? ownAssetsFiltered : allOwnAssets} forceCols={forceColors} /> */}
              </LayerGroup>
            </Fragment>
            {activityBeingEdited && <OrderEditing activityBeingEdited={activityBeingEdited} saved={(activity) => saveEditedOrderGeometries(activity)} />}
            {activityBeingPlanned && <OrderDrawing activity={activityBeingPlanned} areas={myAreas} planned={(geoms) => setActivityPlanned(geoms)} cancelled={() => setActivityBeingPlanned(undefined)} />}
          </Fragment>

        }
      </>
    )
  }, [selectedAssets, planningMessages, selectedOrders, activityBeingPlanned, activityBeingEdited, playerInPlanning, timeControlEvents,
    currentAssetIds, currentOrders, perForceAssets, showStandardAreas, myAreas, clusterIcons, showIconName, showMezRings, showTimeControl,
    timelineInteractions, timelineFeatures])

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
          { <SupportPanel
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
            postBackArchive={saveArchiveMessage}
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
            forceColors={forceColors}
            setSelectedAssets={onSetSelectedAssets}
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
            forceTemplateData={forceTemplateData}
          />
          }
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
                { <SupportMapping
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
                          {showTimeControl
                            ? <>
                              <div className={cx('leaflet-control')}>
                                <Item title={showTimeOutcomes ? 'Hide outcomes' : 'Show outcomes'} contentTheme={showTimeOutcomes ? 'light' : 'dark'}
                                  onClick={() => setShowTimeOutcomes(!showTimeOutcomes)}>A</Item>
                              </div>
                              <div className={cx('leaflet-control')}>
                                <Item title={showTimeOrders ? 'Hide orders' : 'Show Orders'} contentTheme={showTimeOrders ? 'light' : 'dark'}
                                  onClick={() => setShowTimeOrders(!showTimeOrders)}>O</Item>
                              </div>
                              <div className={cx('leaflet-control')}>
                                <Item title={showTimeInteractions ? 'Hide interactions' : 'Show Interactions'} contentTheme={showTimeInteractions ? 'light' : 'dark'}
                                  onClick={() => setShowTimeInteractions(!showTimeInteractions)}>I</Item>
                              </div>
                            </>
                            : <>
                              <div className={cx('leaflet-control')}>
                                <Item title={showMezRings ? 'Hide MEZ rings' : 'Show MEZ Rings'} contentTheme={showMezRings ? 'light' : 'dark'}
                                  onClick={() => setShowMezRings(!showMezRings)}><FontAwesomeIcon size={'lg'} icon={faCircle} /></Item>
                              </div>

                              <div className={cx('leaflet-control')}>
                                <Item title={showIconName ? 'Hide asset names' : 'Show asset names'} contentTheme={showIconName ? 'light' : 'dark'}
                                  onClick={() => setShowIconName(!showIconName)}><FontAwesomeIcon size={'lg'} icon={faTag} /></Item>
                              </div>
                              {
                                <div className={cx('leaflet-control')}>
                                  <Item title='Toggle clustering of icons' contentTheme={clusterIcons ? 'light' : 'dark'}
                                    onClick={() => setClusterIcons(!clusterIcons)}><FontAwesomeIcon size={'lg'} icon={faObjectUngroup} /></Item>
                                </div>
                              }
                              <ApplyFilter filterApplied={filterApplied} setFilterApplied={setFilterApplied} />
                              <ViewAs isUmpire={!!selectedForce.umpire} forces={allForces} viewAsCallback={setViewAsForce} viewAsForce={viewAsForce} />
                              {isUmpire && // don't bother with this, but keep it in case we want to gen more data
                                <div className={cx('leaflet-control')}>
                                  <Item title={'Generate dummy data (dev only)'} onClick={genData}>gen data</Item>
                                </div>
                              }</>
                          }
                          {isUmpire && <div className={cx('leaflet-control')}>
                            <Item title='Toggle timeline' contentTheme={showTimeControl ? 'light' : 'dark'}
                              onClick={() => setShowTimeControl(!showTimeControl)}><FontAwesomeIcon size={'lg'} icon={faHistory} /></Item>
                          </div>}
                        </>
                      }
                    </>
                  }>
                  <>
                    { mapChildren}
                  </>
                </SupportMapping>
                }
              </MapContainer>
            </div>
          </div>
        </SupportPanelContext.Provider>
      </div>
    )
  }
}

const areEqual = (prevProps: PropTypes, nextProps: PropTypes): boolean => JSON.stringify(prevProps) === JSON.stringify(nextProps)

export default React.memo(PlanningChannel, areEqual)
