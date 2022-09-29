import { P9Mock } from "."
import { GeometryType, PerForcePlanningActivitySet, PlanningActivity } from '@serge/custom-types'

const forces = P9Mock.data.forces.forces

export const MockPlanningActivities: PlanningActivity[] = [
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

export const MockPerForceActivities: PerForcePlanningActivitySet[] = [
  {
    force: forces[1].uniqid,
    groupedActivities: [{
      category: 'Maritime',
      activities:
        [
          'precis-strike', 'area-strike', 'transit', 'area-recce', 'point-recce', 'cyber'
        ]
    }, {
      category: 'Land',
      activities:
        [
          'precis-strike', 'area-strike', 'transit', 'area-recce', 'point-recce', 'cyber'
        ]
    }, {
      category: 'Air',
      activities:
        [
          'precis-strike', 'area-strike', 'transit', 'area-recce', 'point-recce', 'cyber'
        ]
    }, {
      category: 'Other',
      activities:
        [
          'precis-strike', 'area-strike', 'area-recce', 'point-recce', 'cyber'
        ]
    }

    ]
  },
  {
    force: forces[2].uniqid,
    groupedActivities: [{
      category: 'Maritime',
      activities:
        [
          'precis-strike', 'area-strike', 'transit'
        ]
    }, {
      category: 'Land',
      activities:
        [
          'precis-strike', 'point-recce', 'cyber'
        ]
    }, {
      category: 'Air',
      activities:
        [
          'transit', 'area-recce', 'point-recce', 'cyber'
        ]
    }, {
      category: 'Other',
      activities:
        [
          'precis-strike', 'point-recce', 'cyber'
        ]
    }]
  }

]