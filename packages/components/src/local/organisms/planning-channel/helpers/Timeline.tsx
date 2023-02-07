import { Feature, FeatureCollection, GeoJsonProperties, Geometry } from 'geojson'
import L, { Layer, PathOptions } from 'leaflet'
import moment from 'moment-timezone'
import React, { useEffect, useState } from 'react'
import { useMap } from 'react-leaflet-v4'
import { Timeline as TimelineType, TimelineData } from '../typings'

type TimelineProps = {
  showControl: boolean
  data?: FeatureCollection<Geometry, GeoJsonProperties>
  /** function to style features in GeoJSON layer */
  style?: (data: Feature) => PathOptions
  /** function that gets called on creation of each feature */
  onEachFeature?: (data: Feature, layer: L.Layer) => void
  /** provide a feature to use for point locations */
  pointToLayer?: (data: Feature, latlng: L.LatLngExpression) => Layer
}

const DATE_FORMAT = 'YY MMM DD HH:MM'

const Timeline: React.FC<TimelineProps> = ({ showControl, data, style, onEachFeature, pointToLayer }) => {
  const map = useMap()

  const [timelineControl, setTimelineControl] = useState<TimelineType>()
  const [timelineData, setTimelineData] = useState<TimelineData>()

  useEffect(() => {
    if (!timelineControl) {
      const timelineControl = L.timelineSliderControl({
        formatOutput: function (date: string | number | Date) {
          return moment.utc(date).format(DATE_FORMAT)
        }
      })
      setTimelineControl(timelineControl)
    }
    if (!timelineData && data) {
      const timeline = L.timeline(data, {
        style: style,
        onEachFeature: onEachFeature,
        pointToLayer: pointToLayer
      })
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
