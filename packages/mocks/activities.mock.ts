import { P9Mock } from "."
import { GeometryType, PerForcePlanningActivitySet, PlanningActivities } from '@serge/custom-types'

const forces = P9Mock.data.forces.forces

const PlanningActivities: PlanningActivities = [
  {
    uniqid: 'precis-strike',
    name: 'Precision Strike',
    template: 'Air Activity',
    color: '#f0f',
    geometries: [
      {
        aType: GeometryType.polyline,
        name: 'Route in'
      },
      {
        aType: GeometryType.point,
        name: 'Target Location'
      },
      {
        aType: GeometryType.polyline,
        name: 'Route out'
      },
    ]
  },
  {
    uniqid: 'area-strike',
    name: 'Area Strike',
    template: 'Air Activity',
    color: '#30f',
    geometries: [
      {
        aType: GeometryType.polyline,
        name: 'Route in'
      },
      {
        aType: GeometryType.polygon,
        name: 'Target Area'
      },
      {
        aType: GeometryType.polyline,
        name: 'Route out'
      },
    ]
  },
  {
    uniqid: 'transit',
    name: 'Transit',
    template: 'Maritime Activity',
    color: '#f33',
    geometries: [
      {
        aType: GeometryType.polyline,
        name: 'Route'
      }
    ]
  },
  {
    uniqid: 'cyber',
    name: 'Non spatial cyber',
    template: 'Other Activity',
  },
  {
    uniqid: 'area-recce',
    name: 'Area Reconnaisance',
    template: 'Air Activity',
    geometries: [
      {
        aType: GeometryType.polyline,
        name: 'Route in'
      },
      {
        aType: GeometryType.polygon,
        name: 'Target Area'
      },
      {
        aType: GeometryType.polyline,
        name: 'Route out'
      },
    ]
  },
  {
    uniqid: 'point-recce',
    name: 'Point Reconnaisance',
    template: 'Air Activity',
    geometries: [
      {
        aType: GeometryType.polyline,
        name: 'Route in'
      },
      {
        aType: GeometryType.point,
        name: 'Target Area'
      },
      {
        aType: GeometryType.polyline,
        name: 'Route out'
      },
    ]
  }
]

const MockActivities: PerForcePlanningActivitySet[] = [
  {
    force: forces[1].uniqid,
    activities: [
      'precis-strike', 'area-strike', 'transit', 'area-recce', 'point-recce', 'cyber'
    ]
  },
  {
    force: forces[2].uniqid,
    activities: [
      'area-strike', 'transit', 'area-recce', 'point-recce', 'cyber'
    ]
  }

]