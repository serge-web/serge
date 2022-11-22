import { FeatureCollection, GeoJsonProperties, Geometry } from 'geojson'
import L from 'leaflet'
import moment from 'moment-timezone'
import React, { useEffect, useState } from 'react'
import { useMap } from 'react-leaflet-v4'
import { Timeline as TimelineType, TimelineData } from '../typings'

type TimelineProps = {
  showControl: boolean
  data?: FeatureCollection<Geometry, GeoJsonProperties>
}

const DateFormat = 'YYYY MMM DD HHmm[Z]'

const Timeline: React.FC<TimelineProps> = ({ showControl, data }) => {
  const map = useMap()

  const [timelineControl, setTimelineControl] = useState<TimelineType>()
  const [timelineData, setTimelineData] = useState<TimelineData>()

  useEffect(() => {
    if (!timelineControl) {
      const timelineControl = L.timelineSliderControl({
        formatOutput: function (date: string | number | Date) {
          return new Date(date).toString()
        }
      })
      setTimelineControl(timelineControl)
    }
    if (!timelineData && data) {
      const timeline = L.timeline(data)
      setTimelineData(timeline)
    }
  }, [data])

  useEffect(() => {
    if (timelineControl && timelineData) {
      if (showControl) {
        timelineControl.addTo(map)
        timelineControl.addTimelines(timelineData)
        timelineData.addTo(map)
      } else {
        timelineControl.remove()
        timelineData.remove()
      }
    }
  }, [showControl, timelineControl, timelineData])

  return <></>
}

export default Timeline
