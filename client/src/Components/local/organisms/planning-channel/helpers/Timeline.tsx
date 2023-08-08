import { Feature, FeatureCollection, GeoJsonProperties, Geometry } from 'geojson'
import L from 'leaflet'
import moment from 'moment-timezone'
import React, { useEffect, useState } from 'react'
import { useMap } from 'react-leaflet-v4'
import { ReplayAnnotations } from '..'
import { Timeline as TimelineType, TimelineData } from '../typings'

type TimelineProps = {
  showControl: boolean
  data?: FeatureCollection<Geometry, GeoJsonProperties>
  /** function to style features in GeoJSON layer */
  style?: (data: Feature) => L.PathOptions
  /** function that gets called on creation of each feature */
  onEachFeature?: (data: Feature, layer: L.Layer) => void
  /** provide a feature to use for point locations */
  pointToLayer?: (data: Feature, latlng: L.LatLngExpression) => L.Layer
  setCurrentInteractions?: (ids: string[]) => void
}

const DATE_FORMAT = 'YY MMM DD HH:MM'

// leaflet.timeline is currently experiencing a compatibility issue with Node 18,
// resulting in the inability to locate functions obtained from the leaflet.timeline.js file
// note: it only works in storybook
const Timeline: React.FC<TimelineProps> = ({ showControl, data, style, onEachFeature, pointToLayer, setCurrentInteractions }) => {
  const map = useMap()

  const [timelineControl, setTimelineControl] = useState<TimelineType>()
  const [timelineData, setTimelineData] = useState<TimelineData>()

  const updated = (e: any): void => {
    const layers = e.getLayers()
    const currentOrders = layers.map((layer: any) => {
      const props = layer.feature.properties || {} as ReplayAnnotations
      return props.id
    })
    setCurrentInteractions && setCurrentInteractions(currentOrders)
  }

  useEffect(() => {
    if (!timelineControl) {
      // Note: TypeError - l.timelineSliderControl is not a function
      // Create a timelineSliderControl instance
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
      timeline.on('change', function (e) {
        updated(e.target)
      })
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