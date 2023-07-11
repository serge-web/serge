import { PerForcePlanningActivitySet } from 'src/custom-types'
// import P9BMock from "./p9b-wargame.mock"

// const forces = P9BMock.data.forces.forces

export const MockPlanningActivities = [
  // {
  //   uniqid: 'precis-strike',
  //   name: 'Precision Strike',
  //   template: 'k16e-land',
  //   color: '#f0f',
  //   geometries: [
  //     {
  //       aType: GeometryType.polyline,
  //       name: 'Route in',
  //       uniqid: 'aa1'
  //     },
  //     {
  //       aType: GeometryType.point,
  //       name: 'Target Location',
  //       uniqid: 'aa2'
  //     },
  //     {
  //       aType: GeometryType.polyline,
  //       name: 'Route out',
  //       uniqid: 'aa3'
  //     },
  //   ]
  // },
  // {
  //   uniqid: 'ballistic-strike',
  //   name: 'Ballistic Strike',
  //   template: 'k16e-land',
  //   color: '#f0f',
  //   geometries: [
  //     {
  //       aType: GeometryType.polyline,
  //       name: 'Route to target',
  //       uniqid: 'ab1'
  //     }
  //   ]
  // },
  // {
  //   uniqid: 'area-strike',
  //   name: 'Area Strike',
  //   template: 'k16e-land',
  //   color: '#b0f',
  //   geometries: [
  //     {
  //       aType: GeometryType.polyline,
  //       name: 'Route in',
  //       uniqid: 'aa4'
  //     },
  //     {
  //       aType: GeometryType.polygon,
  //       name: 'Target Area',
  //       uniqid: 'aa5'
  //     },
  //     {
  //       aType: GeometryType.polyline,
  //       name: 'Route out',
  //       uniqid: 'aa6'
  //     },
  //   ]
  // },
  // {
  //   uniqid: 'transit',
  //   name: 'Transit',
  //   template: 'k16e-land',
  //   color: '#f33',
  //   geometries: [
  //     {
  //       aType: GeometryType.polyline,
  //       name: 'Route',
  //       uniqid: 'aa7'
  //     }
  //   ]
  // },
  // {
  //   uniqid: 'cyber',
  //   name: 'Non spatial cyber',
  //   template: 'k16e-other',
  // },
  // {
  //   uniqid: 'air-recce',
  //   name: 'Air Reconnaisance',
  //   template: 'Air Activity',
  //   color: '#5b0',
  //   geometries: [
  //     {
  //       aType: GeometryType.polyline,
  //       name: 'Route in',
  //       uniqid: 'aa8'
  //     },
  //     {
  //       aType: GeometryType.polygon,
  //       name: 'Flight box',
  //       uniqid: 'aa9a'
  //     },
  //     {
  //       aType: GeometryType.polygon,
  //       name: 'Target Area',
  //       uniqid: 'aa9b'
  //     },
  //     {
  //       aType: GeometryType.polyline,
  //       name: 'Route out',
  //       uniqid: 'a10'
  //     },
  //   ]
  // },
  // {
  //   uniqid: 'area-recce',
  //   name: 'Area Reconnaisance',
  //   template: 'k16e-air',
  //   color: '#5b0',
  //   geometries: [
  //     {
  //       aType: GeometryType.polyline,
  //       name: 'Route in',
  //       uniqid: 'aa8'
  //     },
  //     {
  //       aType: GeometryType.polygon,
  //       name: 'Flight Box',
  //       uniqid: 'aa9a'
  //     },
  //     {
  //       aType: GeometryType.polygon,
  //       name: 'Target Area',
  //       uniqid: 'aa9b'
  //     },
  //     {
  //       aType: GeometryType.polyline,
  //       name: 'Route out',
  //       uniqid: 'a10'
  //     },
  //   ]
  // },
  // {
  //   uniqid: 'point-recce',
  //   name: 'Point Reconnaisance',
  //   template: 'k16e-air',
  //   geometries: [
  //     {
  //       aType: GeometryType.polyline,
  //       name: 'Route in',
  //       uniqid: 'a11'
  //     },
  //     {
  //       aType: GeometryType.point,
  //       name: 'Target Area',
  //       uniqid: 'a12'
  //     },
  //     {
  //       aType: GeometryType.polyline,
  //       name: 'Route out',
  //       uniqid: 'a13'
  //     },
  //   ]
  // }
]

export const MockPerForceActivities: PerForcePlanningActivitySet[] = [
  // {
  //   force: forces[1].uniqid,
  //   groupedActivities: [{
  //     category: 'Maritime',
  //     activities:
  //       [
  //         'ballistic-strike', 'precis-strike', 'area-strike', 'transit', 'area-recce', 'point-recce', 'cyber'
  //       ]
  //   }, {
  //     category: 'Land',
  //     activities:
  //       [
  //         'ballistic-strike', 'precis-strike', 'area-strike', 'transit', 'area-recce', 'point-recce', 'cyber'
  //       ]
  //   }, {
  //     category: 'Air',
  //     activities:
  //       [
  //         'precis-strike', 'area-strike', 'transit', 'air-recce', 'point-recce', 'cyber'
  //       ]
  //   }, {
  //     category: 'Other',
  //     activities:
  //       [
  //         'precis-strike', 'area-strike', 'area-recce', 'point-recce', 'cyber'
  //       ]
  //   }

  //   ]
  // },
  // {
  //   force: forces[2].uniqid,
  //   groupedActivities: [{
  //     category: 'Maritime',
  //     activities:
  //       [
  //         'precis-strike', 'area-strike', 'transit'
  //       ]
  //   }, {
  //     category: 'Land',
  //     activities:
  //       [
  //         'precis-strike', 'point-recce', 'cyber'
  //       ]
  //   }, {
  //     category: 'Air',
  //     activities:
  //       [
  //         'transit', 'area-recce', 'point-recce', 'cyber'
  //       ]
  //   }, {
  //     category: 'Other',
  //     activities:
  //       [
  //         'precis-strike', 'point-recce', 'cyber'
  //       ]
  //   }]
  // }

]