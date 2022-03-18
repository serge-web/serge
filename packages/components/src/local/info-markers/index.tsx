import React, { useContext, useEffect, useState } from 'react'
import L from 'leaflet'
import { LayerGroup } from 'react-leaflet'
import AssetIcon from '../asset-icon'
import { findPerceivedAsTypes, platformTypeNameToKey, visibleTo } from '@serge/helpers'
import { UMPIRE_FORCE, ADJUDICATION_PHASE } from '@serge/config'
import { Route } from '../route'

/* Import Context */
import { MapContext } from '../mapping'

/* Import Types */
import AssetInfo, { OrientationData } from './types/asset_info'
import { Route as RouteType, ForceData, PerceivedTypes } from '@serge/custom-types'
import orientationFor from './helpers/orientation-for'
import { OrientationMarker } from '@serge/custom-types/platform-type-data'
import InformationMarker, { InformationMarkers } from '@serge/custom-types/information-markers'

/* Render component */
export const InfoMarkers: React.FC<{}> = () => {
  // pull in some context (with TS definitions)
  const { props } = useContext(MapContext)
  if (typeof props === 'undefined') return null
  const {
    infoMarkers,
    h3gridCells,
    forces,
    playerForce,
    phase,
    platformTypesByKey,
    map
  } = props

  const [umpireInAdjudication, setUmpireInAdjudication] = useState<boolean>(false)
  const [visibleMarkers, setVisibleMarkers] = useState<InformationMarkers>([])


  const playerForceEle = forces.find((force: ForceData) => force.uniqid === playerForce)
  const playerForceName: string = playerForceEle ? playerForceEle.name : 'unknown'

  /**
   * determine if this is the umpire in adjudication mode, so that the
   * planned routes get trimmed
   */
  useEffect(() => {
    setUmpireInAdjudication(playerForce === UMPIRE_FORCE && phase === ADJUDICATION_PHASE)
  }, [playerForce])

  /**
   * filter the set of visible markers
   */
   useEffect(() => {
     if(infoMarkers && playerForceEle) {
      if(playerForceEle.umpire) {
        // include all
        setVisibleMarkers(infoMarkers)
      } else {
        const visibleMarkers = infoMarkers.filter((marker: InformationMarker) => marker.visibleTo.some((value: string) => value === playerForceEle.uniqid) )
        setVisibleMarkers(visibleMarkers)
      }
     } else {
       setVisibleMarkers([])
     }
  }, [infoMarkers])

  return <>
    <LayerGroup key='info-markers' >{ visibleMarkers && visibleMarkers.map((marker: InformationMarker) => {
      return <InfoMarker marker={marker}/>

      // const platformType = platformTypesByKey[asset.type]
      // const imageSrc: string | undefined = typeof platformType !== 'undefined' ? platformType.icon : undefined
      // return <AssetIcon
      //   key={'a_for_' + asset.uniqid}
      //   name={asset.name}
      //   orientationData={asset.orientationData}
      //   contactId={asset.contactId}
      //   uniqid={asset.uniqid}
      //   position={asset.position}
      //   type={asset.type}
      //   selected={asset.selected}
      //   condition={asset.condition}
      //   status={asset.status}
      //   controlledBy={asset.controlledBy}
      //   visibleTo={asset.visibleTo}
      //   force={asset.force}
      //   perceivedForceColor={asset.perceivedForceColor}
      //   perceivedForceClass={asset.perceivedForceClass}
      //   tooltip={asset.name}
      //   imageSrc={imageSrc}
      //   attributes={asset.attributes}
      //   map={map}
      //   locationPending={!!asset.laydownPhase}/>
    })}
    </LayerGroup>
  </>
}
export default InfoMarkers
