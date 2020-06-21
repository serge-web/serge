import React from 'react'
import { DomEvent } from 'leaflet'
import Item from './helpers/item'
import cx from 'classnames'

/* Import icons */
import AddIcon from '@material-ui/icons/Add';
import FullscreenIcon from '@material-ui/icons/Fullscreen';
import RemoveIcon from '@material-ui/icons/Remove';

/* Import proptypes */
import PropTypes from './types/props'

/* Import Styles */
import styles from './styles.module.scss'

/* Render component */
export const MapControl: React.FC<PropTypes> = ({ map }) => {

  // as map bar now works as MapControll need to disable map scroll and click events to allow to use map bar as usual html and don't touch map while doing scroll
  const disableMapClickAndScrolll = (ref: any) => {
    if (ref) {
      DomEvent.disableClickPropagation(ref).disableScrollPropagation(ref)
    }
  }

  const handeZoomChange = (changeValue: number) => {
    console.log(map, 'map2');
    if (map) {
      const currentZoom = map.getZoom()
      if (currentZoom) map.setZoom(currentZoom + changeValue)
      console.log(currentZoom, map, 'map2');
    }
  }

  return (
    <div className='leaflet-control-container' ref={disableMapClickAndScrolll}>
      <div className='leaflet-top leaflet-right'>
        <div className={cx('leaflet-control', styles['map-controll'])}>
          <Item onClick={handeZoomChange(1)}><AddIcon/></Item>
          <Item><FullscreenIcon/></Item>
          <Item onClick={handeZoomChange(-1)}><RemoveIcon/></Item>
        </div>
      </div>
    </div>
  )
}

export default MapControl
