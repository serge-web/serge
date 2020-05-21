import React, { useState, useEffect, useContext } from 'react'
import L, { DomEvent } from 'leaflet'
import cx from 'classnames'
import { ArrowRight, FirstPage, KeyboardArrowUp, KeyboardCapslock, Close } from '@material-ui/icons'
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
  const [floatingMarkerCoords, setFloatingMarkerCoords] = useState(null)

  /* Pull in the context from MappingContext */
  const {
    playerForce,
    phase,
    platforms,
    forces,
    showMapBar,
    setShowMapBar,
    selectedAsset,
    setSelectedAsset,
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

  // render map bar main content
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

  // as map bar now works as MapControll need to disable map scroll and click events to allow to use map bar as usual html and don't touch map while doing scroll
  const disableMapClickAndScrolll = (ref: any) => {
    if (ref) {
      DomEvent.disableClickPropagation(ref).disableScrollPropagation(ref)
    }
  }

  // render map bar as map Controll (fixed position)
  const renderFixedMapBar = () => (
    <div className='leaflet-control-container' ref={disableMapClickAndScrolll}>
      <div className='leaflet-top leaflet-bottom leaflet-left'>
        <div className={cx('leaflet-control', styles['map-bar-controll'])}>
          <div className={cx(styles['map-bar'], showMapBar && styles.open)}>
            <div className={styles.toggle} onClick={clickEvent}><ArrowRight /></div>
            <div className={styles.inner}>
              {renderPopupActions(true)}
              {renderMapBar()}
            </div>
          </div>
        </div>
      </div>
    </div>
  )

  // auto open popup and disable closing when you are clicking on marker
  // save marker coords for floating version to keep it in single position
  const setMarkerSettings = (ref: any) => {
    if (ref) {
      const marker: any = ref.leafletElement
      if (marker) {
        // open popup after marker render
        setTimeout(() => { marker.openPopup() })
        // little hack to disable popup close on drag
        marker.closePopup = () => ({
          fire: () => ({fire: () => (true)})
        })
        // disable marker click to do not close popup on clicking on dragable area
        marker.off('click')
        // save coords
        if (!floatingMarkerCoords) setFloatingMarkerCoords(selectedAsset.position)
      }
    }
  }

  // render mapBar on top of selected map bar item
  const renderMapBarForMarker = () => {
    // don't show mapbar if we haven't a selected item
    if (!selectedAsset.uniqid) return null
    // render mapBar as popup and marker as navigator for selected item
    return (
      <LayerGroup key={'map_bar'} >
        <Marker
          key={'map_bar_marker'}
          position={selectedAsset.position}
          ref={setMarkerSettings}
          icon={L.divIcon({
            html: '',
            className: styles['selected-item'],
            iconSize: [50, 50]
          })}
        >
          <Popup className={styles.popup} markerPos={mapbarPosition}>
            {renderPopupActions(true)}
            <div className={styles['inner-popup']}>
              {renderMapBar()}
            </div>
          </Popup>
        </Marker>
      </LayerGroup>
    )
  }

  // when we are dragging floating mapBar we need to save coords to keep position on re rendering
  const dropped = (e: any) => {
    // save coords
    const newLatLng: any = e.target.getLatLng()
    if (newLatLng)  setFloatingMarkerCoords(newLatLng)
  }

  // render actions panel to be able to change mapBar position mode
  const renderPopupActions = (holder?: boolean) => (
    <>
      {holder && <div className={styles['actions-holder']} />}
      <div className={styles['popup-actions-container']}>
        <div className={styles['popup-actions']}>
          {mapbarPosition !== 0 && <button onClick={() => {setMapbarPosition(0)}}>
            <FirstPage fontSize='small' />
          </button>}
          {mapbarPosition !== 2 && <button onClick={() => {setMapbarPosition(2)}}>
            <KeyboardArrowUp fontSize='small' />
          </button>}
          {mapbarPosition !== 1 && <button onClick={() => {setMapbarPosition(1)}}>
            <KeyboardCapslock fontSize='small' />
          </button>}
          {mapbarPosition !== 0 && <button
            onClick={() => {setSelectedAsset({...selectedAsset, uniqid: ''})}}
          >
            <Close fontSize='small' />
          </button>}
        </div>
      </div>
    </>
  )

  // render floation map bar (first position will be taken from first activated item)
  const renderFloatingMapBar = () => {
    // don't show mapbar if we haven't a selected item
    if (!selectedAsset.uniqid) return null
    // render mapBar as popup and marker as dragable trigger (in background)
    // Leaflet popup doesn't support dragging that is why used marker wit attached popup for drag
    return (
      <LayerGroup key={'map_bar'} >
        <Marker
          onDragend={dropped}
          draggable={true}
          position={floatingMarkerCoords || selectedAsset.position}
          ref={setMarkerSettings}
          icon={L.divIcon({
            html: '',
            className: styles['mapbar-draggable'],
            iconSize: [303, 266]
          })}
          key={'drag_marker'}>
          <Popup className={styles['popup-draggable']} markerPos={mapbarPosition}>
            {renderPopupActions(false)}
            <div className={styles['inner-popup']}>
              {renderMapBar()}
            </div>
          </Popup>
        </Marker>
      </LayerGroup>
    )
  }

  switch (mapbarPosition) {
    case 1: return renderMapBarForMarker()
    case 2: return renderFloatingMapBar()
    default: return renderFixedMapBar()
  }
}



export default MapBar
