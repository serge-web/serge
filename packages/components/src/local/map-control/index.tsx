import React from 'react'
import { DomEvent } from 'leaflet'
import Item from './helpers/item'
import cx from 'classnames'

/* Import icons */
import AddIcon from '@material-ui/icons/Add'
import RemoveIcon from '@material-ui/icons/Remove'
import HomeIcon from '@material-ui/icons/Home'

/* Import proptypes */
import PropTypes from './types/props'

/* Import Styles */
// import styles from './styles.module.scss'

/* Render component */
export const MapControl: React.FC<PropTypes> = ({ map }) => {
  // as map bar now works as MapControll need to disable map scroll and click events to allow to use map bar as usual html and don't touch map while doing scroll
  const disableMapClickAndScrolll = (ref: any) => {
    if (ref) {
      DomEvent.disableClickPropagation(ref).disableScrollPropagation(ref)
    }
  }

  const handeZoomChange = (changeValue: number) => {
    const currentZoom = map.getZoom()
    if (currentZoom) map.setZoom(currentZoom + changeValue)
  }

  const handeHome = () => {
    console.log(map.getCenter())
    map.flyTo(map.getCenter(), 10)
  }

  if (!map) return null

  return (
    <div className='leaflet-control-container' ref={disableMapClickAndScrolll}>
      <div className='leaflet-top leaflet-right'>
        <div className={cx('leaflet-control')}>
          <Item onClick={() => { handeZoomChange(1) }}><AddIcon/></Item>
          <Item onClick={() => { handeHome() }}><HomeIcon/></Item>
          <Item onClick={() => { handeZoomChange(-1) }}><RemoveIcon/></Item>
        </div>
      </div>
    </div>
  )
}

export default MapControl
