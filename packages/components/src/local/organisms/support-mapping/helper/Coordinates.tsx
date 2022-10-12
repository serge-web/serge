import { makeStyles } from '@material-ui/styles'
import React, { useEffect, useState } from 'react'
import { useMap } from 'react-leaflet-v4'

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

  useEffect(() => {
    if (map) {
      map.on('mousemove', (event) => {
        setLatlng((event as any).latlng)
      })
    }
  }, [map])

  return (
    <div className={classes.root}>
      Lat: {latlng.lat.toFixed(4)}, Lng: {latlng.lng.toFixed(4)}
    </div>
  )
}

export default MapCoordinates
