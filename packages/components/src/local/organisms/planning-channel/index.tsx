import { INFO_MESSAGE_CLIPPED } from '@serge/config'
import { Asset, CoreMessage, ForceData, GroupedActivitySet, MessagePlanning, PerForcePlanningActivitySet, PlainInteraction, PlannedActivityGeometry, PlanningActivity } from '@serge/custom-types'
import { findAsset, forceColors, platformIcons } from '@serge/helpers'
import cx from 'classnames'
import { LatLngBounds, latLngBounds, LatLngExpression } from 'leaflet'
import _, { noop } from 'lodash'
import React, { useEffect, useMemo, useState } from 'react'
import { LayerGroup, MapContainer } from 'react-leaflet-v4'
import ApplyFilter from '../apply-filter'
import MapPlanningOrders from '../map-planning-orders'
import { getOppAssets, getOwnAssets } from '../planning-assets/helpers/collate-assets'
import { AssetRow } from '../planning-assets/types/props'
import PlanningForces from '../planning-force'
import SupportMapping from '../support-mapping'
import { MappingMenuItem } from '../support-mapping/types/props'
import SupportPanel, { SupportPanelContext } from '../support-panel'
import ViewAs from '../view-as'
import styles from './styles.module.scss'
import PropTypes from './types/props'

import Item from '../../map-control/helpers/item'
import MapDrawActivity from '../map-draw-activity'
import NewOrderActions from './helpers/NewOrdersActions'

const collateMappingItems = (items: PerForcePlanningActivitySet[], forceId: ForceData['uniqid']): MappingMenuItem[] => {
  const force = items.find((value: PerForcePlanningActivitySet) => value.force === forceId)
  if (!force) {
    throw Error('force not found')
  }
  return force.groupedActivities.map((grp: GroupedActivitySet): MappingMenuItem => {
    const item: MappingMenuItem = {
      id: grp.category,
      name: grp.category,
      children: grp.activities.map((act: string | PlanningActivity): MappingMenuItem => {
        if (typeof (act) === 'string') {
          throw Error('Should receive real planning activity' + act)
        }
        const item2: MappingMenuItem = {
          id: act.uniqid,
          name: act.name,
          color: act.color
        }
        return item2
      })
    }
    return item
  })
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
  templates,
  messages,
  channel,
  adjudicationTemplate,
  selectedRoleId,
  selectedRoleName,
  currentWargame,
  selectedForce,
  isUmpire,
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
  const [selectedOrders, setSelectedOrders] = useState<string[]>([])

  const [mapWidth, setMapWidth] = useState<string>('calc(100% - 330px)')
  // action items to go on map
  const [mapActionItems, setMapActionItems] = useState<MappingMenuItem[]>([])

  // the planning activiites for the selected force
  const [planningActivities, setPlanningActivities] = useState<PlanningActivity[]>([])

  // the activity currently being planned
  const [currentActivity, setCurrentActivity] = useState<PlanningActivity | undefined>(undefined)

  useEffect(() => {
    if (forcePlanningActivities) {
      const force = forcePlanningActivities.find((val: PerForcePlanningActivitySet) => val.force === viewAsForce)
      if (force) {
        const activities: Array<PlanningActivity[]> = force.groupedActivities.map((val: GroupedActivitySet) => val.activities as PlanningActivity[])
        setPlanningActivities(_.flatten(activities))
      }
    }
  }, [viewAsForce, forcePlanningActivities])

  useEffect(() => {
    const force = allForces.find((force: ForceData) => force.uniqid === viewAsForce)
    if (force) {
      setCurrentForce(force)
    }
  }, [viewAsForce])

  useEffect(() => {
    console.log('selected orders updated')
  }, [selectedOrders])

  useEffect(() => {
    if (forcePlanningActivities) {
      setMapActionItems(collateMappingItems(forcePlanningActivities, selectedForce.uniqid))
    }
  }, [forcePlanningActivities])

  useEffect(() => {
    // produce the own and opp assets for this player force
    const forceCols = forceColors(allForces)
    const platIcons = platformIcons(platformTypes)
    const own = getOwnAssets(allForces, forceCols, platIcons, currentForce)
    const opp = getOppAssets(allForces, forceCols, platIcons, currentForce)
    setAllOwnAssets(own)
    setOwnAssetsFiltered(own.slice())
    setAllOppAssets(opp)
    setOpAssetsFiltered(opp.slice())
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

  // drop the turn markers
  const planningMessages = messages.filter((msg: CoreMessage) => msg.messageType !== INFO_MESSAGE_CLIPPED)

  const onRead = (detail: MessagePlanning): void => {
    dispatch(openMessage(channel.uniqid, detail as any as MessageChannel))
  }

  const onUnread = (message: MessagePlanning): void => {
    if (message._id) {
      message.hasBeenRead = false
    }
    dispatch(markUnread(channel.uniqid, message as any as MessageChannel))
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

  const onDrawingComplete = (geometries: PlannedActivityGeometry[]): void => {
    setCurrentActivity(undefined)
    window.alert('Geometries complete ' + geometries.length)
  }

  const supportPanelContext = useMemo(() => ({ selectedAssets }), [selectedAssets])

  const startDrawing = (): void => {
    if (planningActivities) {
      setCurrentActivity(planningActivities[0])
    }
  }

  const newActionRequest = (planId: string): void => {
    console.log('new orders for', planId)
  }

  const mapChildren = useMemo(() => {
    return (
      <>
        <MapPlanningOrders forceColor={selectedForce.color} orders={messages} activities={planningActivities} setSelectedOrders={noop} />
        <LayerGroup key={'own-forces'}>
          <PlanningForces opFor={false} assets={filterApplied ? ownAssetsFiltered : allOwnAssets} setSelectedAssets={setSelectedAssets} selectedAssets={selectedAssets} />
        </LayerGroup>
        <LayerGroup key={'opp-forces'}>
          <PlanningForces opFor={true} assets={filterApplied ? opAssetsFiltered : allOppAssets} setSelectedAssets={setSelectedAssets} selectedAssets={selectedAssets} />
        </LayerGroup>
        { /* dummy button, to trigger drawing process */}
        <div className={cx('leaflet-control')}>
          <Item title='go' onClick={startDrawing}>Start</Item>
        </div>
        <MapDrawActivity planningActivity={currentActivity} storeFeature={onDrawingComplete} cancelFeature={(): void => setCurrentActivity(undefined)} />
      </>
    )
  }, [selectedAssets, filterApplied, ownAssetsFiltered, allOwnAssets, opAssetsFiltered, allOppAssets])

  return (
    <div className={cx(channelTabClass, styles.root)} data-channel-id={channel.uniqid}>
      <SupportPanelContext.Provider value={supportPanelContext}>
        <SupportPanel
          channel={channel}
          platformTypes={platformTypes}
          messages={planningMessages}
          onReadAll={onReadAll}
          onUnread={onUnread}
          onRead={onRead}
          templates={templates}
          adjudicationTemplate={adjudicationTemplate}
          activityTimeChanel={newActiveMessage}
          saveMessage={saveMessage}
          saveNewActivityTimeMessage={saveNewActivityTimeMessage}
          dispatch={reduxDispatch}
          currentWargame={currentWargame}
          isUmpire={isUmpire}
          selectedRoleName={selectedRoleName}
          selectedRoleId={selectedRoleId}
          selectedForce={currentForce}
          allForces={allForces}
          gameDate={gameDate}
          currentTurn={currentTurn}
          selectedAssets={selectedAssets}
          setSelectedAssets={setSelectedAssets}
          selectedOrders={selectedOrders}
          setSelectedOrders={setSelectedOrders}
          setOpForcesForParent={setOpAssetsFiltered}
          setOwnForcesForParent={setOwnAssetsFiltered}
          allOwnAssets={allOwnAssets}
          allOppAssets={allOppAssets}
          onPanelWidthChange={onPanelWidthChange}
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
              actionItems={mapActionItems}
              actionCallback={mapActionCallback}
              mapWidth={mapWidth}
              toolbarChildren={
                <>
                  <ApplyFilter filterApplied={filterApplied} setFilterApplied={setFilterApplied} />
                  <ViewAs forces={allForces} viewAsCallback={setViewAsForce} viewAsForce={viewAsForce} />
                  <NewOrderActions playerForce={selectedForce.uniqid} actions={forcePlanningActivities || []}
                    newActionHandler={newActionRequest} />
                </>
              }>
              {mapChildren}
            </SupportMapping>
          </MapContainer>
        </div>
      </div>
    </div>
  )
}

export default PlanningChannel
