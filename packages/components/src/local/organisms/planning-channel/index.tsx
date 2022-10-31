import { INFO_MESSAGE_CLIPPED, INTERACTION_MESSAGE, Phase, PLANNING_MESSAGE } from '@serge/config'
import { Asset, ForceData, GroupedActivitySet, MessageInfoTypeClipped, MessagePlanning, PerForcePlanningActivitySet, PlainInteraction, PlannedActivityGeometry, PlanningActivity } from '@serge/custom-types'
import { findAsset, forceColors as getForceColors, ForceStyle, platformIcons } from '@serge/helpers'
import cx from 'classnames'
import { LatLngBounds, latLngBounds, LatLngExpression } from 'leaflet'
import _, { noop } from 'lodash'
import React, { useEffect, useMemo, useState } from 'react'

import { faCalculator } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { InteractionDetails, InteractionMessageStructure, MessageDetails, MessageDetailsFrom, MessageInteraction, PlanningMessageStructure } from '@serge/custom-types/message'
import moment from 'moment-timezone'
import { LayerGroup, MapContainer } from 'react-leaflet-v4'
import Item from '../../map-control/helpers/item'
import ApplyFilter from '../apply-filter'
import MapPlanningOrders from '../map-planning-orders'
import { getOppAssets, getOwnAssets } from '../planning-assets/helpers/collate-assets'
import { AssetRow } from '../planning-assets/types/props'
import PlanningForces from '../planning-force'
import { collapseLocation, expandLocation } from '../planning-messages-list/helpers/collapse-location'
import SupportMapping from '../support-mapping'
import SupportPanel, { SupportPanelContext } from '../support-panel'
import { findActivity, PlanningContact, randomOrdersDocs } from '../support-panel/helpers/gen-order-data'
import ViewAs from '../view-as'
import OrderDrawing from './helpers/OrderDrawing'
import OrderPlotter from './helpers/OrderPlotter'
import PlanningActitivityMenu from './helpers/PlanningActitivityMenu'
import styles from './styles.module.scss'
import PropTypes from './types/props'

export const PlanningChannel: React.FC<PropTypes> = ({
  dispatch,
  reduxDispatch,
  getAllWargameMessages,
  markUnread,
  markAllAsRead,
  saveNewActivityTimeMessage,
  openMessage,
  saveMessage,
  templates,
  messages,
  channel,
  adjudicationTemplate,
  selectedRoleId,
  selectedRoleName,
  currentWargame,
  selectedForce,
  phase,
  turnNumber,
  allForces,
  platformTypes,
  gameDate,
  currentTurn,
  forcePlanningActivities
}) => {
  const [channelTabClass, setChannelTabClass] = useState<string>('')
  const [position, setPosition] = useState<LatLngExpression | undefined>(undefined)
  const [zoom] = useState<number>(12)
  const [bounds, setBounds] = useState<LatLngBounds | undefined>(latLngBounds([[-1.484, 150.1536], [-21.941, 116.4863]]))

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

  const [showInteractionGenerator, setShowIntegrationGenerator] = useState<boolean>(false)

  const [forceColors, setForceColors] = useState<Array<ForceStyle>>([])

  const [draftMessage, setDraftMessage] = useState<MessagePlanning | undefined>(undefined)

  const adjudicationTemplateId = 'k16-adjud'

  useEffect(() => {
    if (forcePlanningActivities) {
      const force = forcePlanningActivities.find((val: PerForcePlanningActivitySet) => val.force === selectedForce.uniqid)
      setThisForcePlanningActivities(force)

      // produce flattened set of activities, for convenience
      if (force) {
        const activities: Array<PlanningActivity[]> = force.groupedActivities.map((val: GroupedActivitySet) => val.activities as PlanningActivity[])
        setFlattenedPlanningActivities(_.flatten(activities))
      }
    }
  }, [selectedForce, forcePlanningActivities])

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
    const own = getOwnAssets(allForces, forceCols, platIcons, currentForce)
    const opp = getOppAssets(allForces, forceCols, platIcons, currentForce)
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
  }, [])

  const onReadAll = (): void => {
    dispatch(markAllAsRead(channel.uniqid))
  }

  useEffect(() => {
    // drop the turn markers
    const nonTurnMessages: Array<MessagePlanning | MessageInteraction> = messages.filter((msg: MessagePlanning | MessageInteraction | MessageInfoTypeClipped) => msg.messageType !== INFO_MESSAGE_CLIPPED) as Array<MessagePlanning | MessageInteraction>

    const myPlanningMessages = nonTurnMessages.filter((msg: MessagePlanning | MessageInteraction | MessageInfoTypeClipped) => msg.messageType === PLANNING_MESSAGE) as MessagePlanning[]
    const myInteractionMessages = nonTurnMessages.filter((msg: MessagePlanning | MessageInteraction | MessageInfoTypeClipped) => msg.messageType === INTERACTION_MESSAGE) as MessageInteraction[]

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

  const onPanelWidthChange = (width: number): void => setMapWidth(`calc(100% - ${width}px)`)

  const mapActionCallback = (force: string, category: string, actionId: string): void => {
    console.log('action clicked', force, category, actionId)
  }

  const supportPanelContext = useMemo(() => ({ selectedAssets }), [selectedAssets])

  const genData = (): void => {
    const newPlan = forcePlanningActivities && forcePlanningActivities[0].groupedActivities[0].activities[1] as PlanningActivity
    setActivityBeingPlanned(newPlan)

    const newOrders = randomOrdersDocs(10, allForces, [allForces[1].uniqid, allForces[2].uniqid], flattenedPlanningActivities)
    !7 && console.log(newOrders)
  }

  const incrementDebugStep = (): void => {
    console.log('debug step', debugStep)
    setDebugStep(1 + debugStep)
  }

  const handleAdjudication = (contact: PlanningContact): void => {
    console.log('Apply some adjudication for', contact.id, contact)
    const interDetails: InteractionDetails = {}
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
      messageType: adjudicationTemplateId,
      timestamp: moment().toISOString(),
      turnNumber: turnNumber
    }
    const message: InteractionMessageStructure = {
      orders1: contact.first.activity._id,
      orders2: contact.second.activity._id,
      reference: 'unset',
      startTime: moment(contact.timeStart).toISOString(),
      endTime: moment(contact.timeEnd).toISOString(),
      perceptionOutcomes: [],
      locationOutcomes: [],
      healthOutcomes: [],
      geometry: contact.intersection
    }
    // store the new adjudication
    saveMessage(currentWargame, details, message)()
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
        turnNumber: turnNumber
      }
      const plans: PlanningMessageStructure = {
        reference: 'unset',
        title: 'Pending',
        activity: activityBeingPlanned.uniqid
      }
      if (activityPlanned.length) {
        plans.location = activityPlanned
      }
      if (ownAssets.length) {
        plans.ownAssets = ownAssets
      }
      if (otherAssets.length) {
        plans.otherAssets = otherAssets
      }
      const newPlan: MessagePlanning = {
        messageType: PLANNING_MESSAGE,
        _id: '',
        details: messageDetails,
        message: plans
      }

      // mangle the location, to render it
      const newDoc = collapseLocation(newPlan) as MessagePlanning

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
    const unmangledMessage = expandLocation(message)
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

  const mapChildren = useMemo(() => {
    return (
      <>
        <PlanningActitivityMenu showControl={!showInteractionGenerator} handler={planNewActivity} planningActivities={thisForcePlanningActivities} />
        {showInteractionGenerator
          ? <OrderPlotter forceCols={forceColors} orders={planningMessages} step={debugStep} activities={forcePlanningActivities || []} handleAdjudication={handleAdjudication} />
          : <>
            <MapPlanningOrders forceColor={selectedForce.color} orders={planningMessages} selectedOrders={selectedOrders} activities={flattenedPlanningActivities} setSelectedOrders={noop} />
            <LayerGroup key={'own-forces'}>
              <PlanningForces interactive={!activityBeingPlanned} opFor={false} assets={filterApplied ? ownAssetsFiltered : allOwnAssets} setSelectedAssets={setLocalSelectedAssets} selectedAssets={selectedAssets} />
            </LayerGroup>
            <LayerGroup key={'opp-forces'}>
              <PlanningForces interactive={!activityBeingPlanned} opFor={true} assets={filterApplied ? opAssetsFiltered : allOppAssets} setSelectedAssets={setLocalSelectedAssets} selectedAssets={selectedAssets} />
            </LayerGroup>
            {/* <PolylineDecorator latlngs={polylineLatlgn} layer={geomanLayer} /> */}
          </>
        }
      </>
    )
  }, [selectedAssets, filterApplied, ownAssetsFiltered, allOwnAssets, opAssetsFiltered, allOppAssets, debugStep, showInteractionGenerator, planningMessages, selectedOrders, activityBeingPlanned])

  return (
    <div className={cx(channelTabClass, styles.root)} data-channel-id={channel.uniqid}>
      <SupportPanelContext.Provider value={supportPanelContext}>
        <SupportPanel
          channel={channel}
          platformTypes={platformTypes}
          planningMessages={planningMessages}
          interactionMessages={interactionMessages}
          onReadAll={onReadAll}
          onUnread={onUnread}
          onRead={onRead}
          templates={templates}
          adjudicationTemplate={adjudicationTemplate}
          activityTimeChanel={newActiveMessage}
          saveMessage={saveMessageLocal}
          saveNewActivityTimeMessage={saveNewActivityTimeMessage}
          dispatch={reduxDispatch}
          currentWargame={currentWargame}
          isUmpire={!!selectedForce.umpire}
          selectedRoleName={selectedRoleName}
          selectedRoleId={selectedRoleId}
          selectedForce={currentForce}
          allForces={allForces}
          gameDate={gameDate}
          currentTurn={currentTurn}
          selectedAssets={selectedAssets}
          setSelectedAssets={setLocalSelectedAssets}
          selectedOrders={selectedOrders}
          setSelectedOrders={setSelectedOrders}
          setOpForcesForParent={setOpAssetsFiltered}
          setOwnForcesForParent={setOwnAssetsFiltered}
          allOwnAssets={allOwnAssets}
          allOppAssets={allOppAssets}
          onPanelWidthChange={onPanelWidthChange}
          draftMessage={draftMessage}
          onCancelDraftMessage={cancelDraftMessage}
        />
      </SupportPanelContext.Provider>
      <div className={styles['map-container']}>
        <div style={{ width: mapWidth }}>
          <MapContainer
            className={styles.map}
            zoomControl={false}
            center={bounds?.getCenter()}
            zoom={zoom}
          >
            <SupportMapping
              bounds={bounds}
              position={position}
              actionCallback={mapActionCallback}
              mapWidth={mapWidth}
              toolbarChildren={
                <>
                  {!activityBeingPlanned &&
                    <>
                      <div className={cx('leaflet-control')}>
                        <Item title='Toggle interaction generator' contentTheme={showInteractionGenerator ? 'light' : 'dark'}
                          onClick={() => setShowIntegrationGenerator(!showInteractionGenerator)}><FontAwesomeIcon size={'lg'} icon={faCalculator} /></Item>
                      </div>
                      {showInteractionGenerator ? <div className={cx('leaflet-control')}>
                        <Item onClick={incrementDebugStep}>Step</Item>
                      </div>
                        : <>
                          <ApplyFilter filterApplied={filterApplied} setFilterApplied={setFilterApplied} />
                          <ViewAs isUmpire={!!selectedForce.umpire} forces={allForces} viewAsCallback={setViewAsForce} viewAsForce={viewAsForce} />
                          {phase === Phase.Planning && !selectedForce.umpire && !7 && // don't bother with this, but keep it in case we want to gen more data
                            <div className={cx('leaflet-control')}>
                              <Item onClick={genData}>Plan</Item>
                            </div>
                          }
                        </>
                      }
                    </>
                  }
                  <OrderDrawing activity={activityBeingPlanned} planned={(geoms) => setActivityPlanned(geoms)} cancelled={() => setActivityBeingPlanned(undefined)} />
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

export default PlanningChannel
