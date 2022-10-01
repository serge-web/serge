import P9Mock from "./p9-wargame.mock"
import { PerForcePlanningActivitySet, PlanningActivity } from '@serge/custom-types'
import { GeometryType } from "@serge/config"

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
        name: 'Route in',
        uniqid: 'aa1'
      },
      {
        aType: GeometryType.point,
        name: 'Target Location',
        uniqid: 'aa2'
      },
      {
        aType: GeometryType.polyline,
        name: 'Route out',
        uniqid: 'aa3'
      },
    ]
  },
  {
    uniqid: 'area-strike',
    name: 'Area Strike',
    template: 'Air Activity',
    color: '#b0f',
    geometries: [
      {
        aType: GeometryType.polyline,
        name: 'Route in',
        uniqid: 'aa4'
      },
      {
        aType: GeometryType.polygon,
        name: 'Target Area',
        uniqid: 'aa5'
      },
      {
        aType: GeometryType.polyline,
        name: 'Route out',
        uniqid: 'aa6'
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
        name: 'Route',
        uniqid: 'aa7'
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
    color: '#5b0',
    geometries: [
      {
        aType: GeometryType.polyline,
        name: 'Route in',
        uniqid: 'aa8'
      },
      {
        aType: GeometryType.polygon,
        name: 'Target Area',
        uniqid: 'aa9'
      },
      {
        aType: GeometryType.polyline,
        name: 'Route out',
        uniqid: 'a10'
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
        name: 'Route in',
        uniqid: 'a11'
      },
      {
        aType: GeometryType.point,
        name: 'Target Area',
        uniqid: 'a12'
      },
      {
        aType: GeometryType.polyline,
        name: 'Route out',
        uniqid: 'a13'
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