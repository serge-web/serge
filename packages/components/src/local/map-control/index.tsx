import React from 'react'
import { DomEvent } from 'leaflet'
import Item from './helpers/item'
import cx from 'classnames'
import lightOrDark from './helpers/lightOrDark'

/* Import icons */
import AddIcon from '@material-ui/icons/Add'
import RemoveIcon from '@material-ui/icons/Remove'
import HomeIcon from '@material-ui/icons/Home'
import PublicIcon from '@material-ui/icons/Public'

/* Import proptypes */
import PropTypes from './types/props'

/* Import Styles */
// import styles from './styles.module.scss'

/* Render component */
export const MapControl: React.FC<PropTypes> = ({
  /* main */
  map,
  /* home */
  showHome = true,
  home,
  /* zoom */
  showZoom = true,
  zoomStepSize = .5,
  /* view as */
  forces = []
}) => {
  /*
   * disable map scroll and click events to allow
   * to use map control  as usual html
   */
  const disableMapClickAndScrolll = (ref: any) => {
    if (ref) {
      DomEvent.disableClickPropagation(ref).disableScrollPropagation(ref)
    }
  }
  /* change map zoom level */
  const handeZoomChange = (changeValue: number) => {
    const currentZoom = map.getZoom()
    if (currentZoom) map.setZoom(currentZoom + changeValue)
  }

  /* set map to home view */
  const handeHome = () => {
    console.log(home || map.getCenter())
    map.flyTo(home || map.getCenter(), 10)
  }

  /* set view as force */
  const viewAsCallback = (force: string) => {
    console.log("view as clicked, force:", force, forces)
  }

  if (!map) return null

  return (
    <div className='leaflet-control-container' ref={disableMapClickAndScrolll}>
      <div className='leaflet-top leaflet-right'>
        <div className={cx('leaflet-control')}>
          {showZoom && <Item title="Zoom In" onClick={() => { handeZoomChange(zoomStepSize) }}><AddIcon/></Item>}
          {showHome && <Item title="Fit to window" onClick={() => { handeHome() }}><HomeIcon/></Item>}
          {showZoom && <Item title="Zoom Out" onClick={() => { handeZoomChange(-1 * zoomStepSize) }}><RemoveIcon/></Item>}
        </div>
        {forces.length && <div className={cx('leaflet-control')}>
          {forces.map((force: any) => (
            <Item
              contentTheme={lightOrDark(force.color)}
              key={`k_${force.uniqid}`}
              onClick={() => { viewAsCallback(force) }}
              title={`View As ${force.name}`}
            >
              <PublicIcon style={{ color: force.color }}/>
            </Item>
          ))}
        </div>}
      </div>
    </div>
  )
}

export default MapControl
