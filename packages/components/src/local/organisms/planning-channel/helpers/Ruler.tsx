import L from 'leaflet'
import React, { useEffect, useState } from 'react'
import { useMap } from 'react-leaflet-v3'
import { Ruler as RulerType, RulerOption } from '../typings'

type RulerProps = {
  showControl: boolean
}

const Ruler: React.FC<RulerProps> = ({ showControl }) => {
  const map = useMap()

  const [rulerControl, setRulerControl] = useState<RulerType>()

  useEffect(() => {
    if (!rulerControl) {
      const options: RulerOption = {
        position: 'bottomright'
      }
      const rulerControl = L.control.ruler(options)
      setRulerControl(rulerControl)
    }
  }, [])

  useEffect(() => {
    if (rulerControl) {
      if (showControl) {
        rulerControl.addTo(map)
      } else {
        rulerControl.remove()
      }
    }
  }, [showControl, rulerControl])

  return <></>
}

export default Ruler
