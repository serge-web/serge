import React, { useState, useEffect, useContext } from 'react'
import L from 'leaflet'
import cx from 'classnames'
import { ArrowRight } from '@material-ui/icons'
import assetDialogFor from './helpers/asset-dialog-for'
import Popup from './helpers/popup'
import { LayerGroup, Marker } from 'react-leaflet'

import collatePlanFormData from './helpers/collate-plan-form-data'
import collateAdjudicationFormData from './helpers/collate-adjudication-form-data'
import collatePerceptionFormData from './helpers/collate-perception-form-data'

/* Import Stylesheet */
import styles from './styles.module.scss'
import { MapContext } from '../mapping'

/* Import child components */
import WorldState from '../world-state'
import PerceptionForm from '../perception-form'
import AdjudicateTurnForm from '../adjudicate-turn-form'
import PlanTurnForm from '../plan-turn-form'

/* Render component */
export const MapBar: React.FC = () => {
  /* Set our intial states */
  const [currentForm, setCurrentForm] = useState('')
  const [currentAssetName, setCurrentAssetName] = useState('')

  /* Pull in the context from MappingContext */
  const {
    playerForce,
    phase,
    platforms,
    forces,
    showMapBar,
    setShowMapBar,
    selectedAsset,
    postBack,
    mapbarPosition,
    setMapbarPosition,
  } = useContext(MapContext).props

  // Selects the current asset
  useEffect(() => {
    setCurrentForm(assetDialogFor(playerForce, selectedAsset.force, selectedAsset.controlledBy, phase))
    setCurrentAssetName(selectedAsset.name)
  }, [selectedAsset])

  // Toggles the map bar on and off
  const clickEvent = (): void => {
    showMapBar ? setShowMapBar(false) : setShowMapBar(true)
  }

  /* TODO: This should be refactored into a helper */
  const formSelector = (form: string): any => {
    let output = null
    switch (form) {
      case 'PerceivedAs':
        output = <PerceptionForm
          key={selectedAsset.uniqid}
          formData={collatePerceptionFormData(platforms, selectedAsset, forces)}
          postBack={postBack} />
        break
      case 'Adjudication':
        output = <AdjudicateTurnForm
          key={selectedAsset.uniqid}
          formHeader={currentAssetName}
          formData={collateAdjudicationFormData(platforms, selectedAsset, forces)}
          postBack={postBack} />
        break
      case 'Planning':
        output = <PlanTurnForm
          key={selectedAsset.uniqid}
          formHeader={currentAssetName}
          formData={collatePlanFormData(platforms, selectedAsset)}
          postBack={postBack}/>
        break
      default:
        output = null
        break
    }
    return output
  }

  const renderMapBar = () => (
    <>
      <section>
        <WorldState name="World State"></WorldState>
      </section>
      <section>
        {currentForm !== '' && selectedAsset.uniqid !== '' && formSelector(currentForm)}
      </section>
    </>
  )

  const renderFixedMapBar = () => (
    <div className={cx(styles['map-bar'], showMapBar && styles.open)}>
      <div className={styles.toggle} onClick={clickEvent}><ArrowRight /></div>
      <div className={styles.inner}>
        {renderMapBar()}
      </div>
    </div>
  )

  const autoOpenPopup = (ref: any) => {
    if (ref) {
      const { leafletElement } = ref
      if (leafletElement) leafletElement.openPopup()
    }
  }

  const renderMapBarForMarker = () => {
    if (!selectedAsset.uniqid) return null

    return (
      <LayerGroup key={'map_bar'} >
        <Marker
          position={selectedAsset.position}
          ref={autoOpenPopup}
          icon={L.divIcon({
            html: '',
            className: styles['selected-item'],
            iconSize: [50, 50]
          })}
          key={'drag_marker_'}>
          <Popup className={styles.popup}>
            <div className={styles.innerPopup}>
              {renderMapBar()}
            </div>
          </Popup>
        </Marker>
      </LayerGroup>
    )
  }

  // const handleDragStart = 

  const renderFloatingMapBar = () => {
    if (!selectedAsset.uniqid) return null

    return (
      <LayerGroup key={'map_bar'} >
        <Marker
          draggable={true}
          position={selectedAsset.position}
          ref={autoOpenPopup}
          icon={L.divIcon({
            html: '<div>move</div>',
            className: styles['mapbar-draggable'],
            iconSize: [303, 266]
          })}
          key={'drag_marker_'}>
          <Popup className={styles['popup-draggable']}>
            <div className={styles.innerPopup}>
              {renderMapBar()}
            </div>
          </Popup>
        </Marker>
      </LayerGroup>
    )
  }

  console.log(setMapbarPosition, '1');
  console.log(selectedAsset, 'Polygon');

  switch (mapbarPosition) {
    case 1: return renderMapBarForMarker()
    case 2: return renderFloatingMapBar()
    default: return renderFixedMapBar()
  }
}



export default MapBar
