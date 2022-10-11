import { makeStyles } from '@material-ui/styles'
import cx from 'classnames'
import { LeafletMouseEvent } from 'leaflet'
import React, { useEffect, useState } from 'react'
import { useMap } from 'react-leaflet-v4'

const useStyles = makeStyles({
  root: {
    color: '#000',
    marginBottom: 25,
    marginRight: 2,
    fontSize: 14,
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
    paddingLeft: 10,
    paddingRight: 10
  }
})

const MapCoordinates: React.FC = () => {
  const classes = useStyles()
  const map = useMap()
  const [latlng, setLatlng] = useState<{ lat: number, lng: number }>({ lat: 0, lng: 0 })

  useEffect(() => {
    if (map) {
      map.on('mousemove', (event: LeafletMouseEvent ) => {
        setLatlng(event.latlng)
      })
    }
  }, [map])

  return (
    <div className={cx('leaflet-bottom', 'leaflet-right', classes.root)}>
      Lat: {latlng.lat.toFixed(5)}, Lng: {latlng.lng.toFixed(5)}
    </div>
  )
}

export default MapCoordinates
