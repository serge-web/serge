import { makeStyles } from '@material-ui/styles'
import { LeafletMouseEvent } from 'leaflet'
import React, { useEffect, useState } from 'react'
import { useMap } from 'react-leaflet-v3'

const useStyles = makeStyles({
  root: {
    color: '#000',
    fontSize: 14,
    backgroundColor: 'rgba(255, 255, 255, 0.7)',
    position: 'absolute',
    zIndex: 500,
    left: '50%',
    transform: 'translateX(-50%)',
    paddingLeft: 10,
    paddingRight: 10
  }
})

const MapCoordinates: React.FC = () => {
  const classes = useStyles()
  const map = useMap()
  const [latlng, setLatlng] = useState<{ lat: number, lng: number }>({ lat: 0, lng: 0 })
  const [zoom, setZoom] = useState<number>(1)

  useEffect(() => {
    if (map) {
      map.on('mousemove', (event: LeafletMouseEvent) => {
        setLatlng(event.latlng)
      })
      map.on('zoom', () => {
        setZoom(map.getZoom())
      })
      if (map.getZoom) {
        // special case. we may not have a real map in tests
        setZoom(map.getZoom())
      }
    }
  }, [map])

  return (
    <div className={classes.root}>
      Lat: {latlng.lat.toFixed(4)}, Lng: {latlng.lng.toFixed(4)}, Zoom: {zoom}
    </div>
  )
}

export default MapCoordinates
