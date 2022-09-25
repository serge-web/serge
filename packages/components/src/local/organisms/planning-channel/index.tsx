import { INFO_MESSAGE_CLIPPED } from '@serge/config'
import { Asset, CoreMessage, MessagePlanning, PlainInteraction } from '@serge/custom-types'
import { findAsset, forceColors, platformIcons } from '@serge/helpers'
import cx from 'classnames'
import { LatLngBounds, latLngBounds, LatLngExpression } from 'leaflet'
import React, { useEffect, useState } from 'react'
import { getOppAssets, getOwnAssets } from '../planning-assets/helpers/collate-assets'
import { AssetRow } from '../planning-assets/types/props'
import SupportMapping from '../support-mapping'
import SupportPanel from '../support-panel'
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
  selectedRoleId,
  selectedRoleName,
  currentWargame,
  selectedForce,
  isUmpire,
  allForces,
  platformTypes,
  gameDate,
  currentTurn
}) => {
  const [channelTabClass, setChannelTabClass] = useState<string>('')
  const [position, setPosition] = useState<LatLngExpression | undefined>(undefined)
  const [zoom] = useState<number>(12)
  const [bounds, setBounds] = useState<LatLngBounds | undefined>(latLngBounds([[-1.484, 150.1536], [-21.941, 116.4863]]))

  // all of the assets known to players of this force
  const [allOwnAssets, setAllOwnAssets] = useState<AssetRow[]>([])
  const [allOppAssets, setAllOppAssets] = useState<AssetRow[]>([])

  const [ownAssetsFiltered, setOwnAssetsFiltered] = useState<AssetRow[]>([])
  const [opAssetsFiltered, setOpAssetsFiltered] = useState<AssetRow[]>([])

  const [filterApplied, setFilterApplied] = useState<boolean>(true)

  // handle selections from asset tables
  const [selectedItem, setSelectedItem] = useState<Asset['uniqid'] | undefined>(undefined)

  useEffect(() => {
    // produce the own and opp assets for this player force
    const forceCols = forceColors(allForces)
    const platIcons = platformIcons(platformTypes)
    const own = getOwnAssets(allForces, forceCols, platIcons, selectedForce)
    const opp = getOppAssets(allForces, forceCols, platIcons, selectedForce)
    setAllOwnAssets(own)
    setOwnAssetsFiltered(own)
    setAllOppAssets(opp)
    setOpAssetsFiltered(opp)
  }, [allForces])

  useEffect(() => {
    if (selectedItem) {
      const asset = findAsset(allForces, selectedItem)
      const location = asset.location
      if (location) {
        setBounds(undefined)
        setPosition(location)
      }
    }
  }, [selectedItem])

  useEffect(() => {
    const channelClassName = channel.name.toLowerCase().replace(/ /g, '-')
    if (messages.length === 0) {
      getAllWargameMessages(currentWargame)(dispatch)
    }
    setChannelTabClass(`tab-content-${channelClassName}`)
  }, [])

  useEffect(() => {
    console.log('=> [PlanningChannel] ownForces update: ', ownAssetsFiltered && ownAssetsFiltered.length, 'items')
  }, [ownAssetsFiltered])

  useEffect(() => {
    console.log('=> [PlanningChannel]: opForces update: ', opAssetsFiltered && opAssetsFiltered.length, 'items')
  }, [opAssetsFiltered])

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

  return (
    <div className={cx(channelTabClass, styles.root)} data-channel-id={channel.uniqid}>
      <SupportPanel
        channel={channel}
        platformTypes={platformTypes}
        messages={planningMessages}
        onReadAll={onReadAll}
        onUnread={onUnread}
        onRead={onRead}
        templates={templates}
        activityTimeChanel={newActiveMessage}
        saveMessage={saveMessage}
        saveNewActivityTimeMessage={saveNewActivityTimeMessage}
        dispatch={reduxDispatch}
        currentWargame={currentWargame}
        isUmpire={isUmpire}
        selectedRoleName={selectedRoleName}
        selectedRoleId={selectedRoleId}
        selectedForce={selectedForce}
        allForces={allForces}
        gameDate={gameDate}
        currentTurn={currentTurn}
        setSelectedItem={setSelectedItem}
        selectedItem={selectedItem}
        setOpForcesForParent={setOpAssetsFiltered}
        setOwnForcesForParent={setOwnAssetsFiltered}
      />
      <SupportMapping
        bounds={bounds}
        zoom={zoom}
        position={position}
        opAssets={filterApplied ? opAssetsFiltered : allOppAssets}
        ownAssets={filterApplied ? ownAssetsFiltered : allOwnAssets}
        filterApplied={filterApplied}
        setFilterApplied={setFilterApplied}
      />
    </div>
  )
}

export default PlanningChannel
