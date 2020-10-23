import { PlanningStates } from '@serge/config'

const formData = {
  populate: {
    /* All types in this definition are options for a form input */
    status: [
      {
        name: 'Fishing',
        mobile: false
      },
      {
        name: 'Moored',
        mobile: false
      },
      {
        name: 'Transiting',
        mobile: true
      }
    ],
    speed: [10, 20, 30],
    visibleTo: [
      {
        name: 'Blue Force',
        colour: '#69c'
      },
      {
        name: 'Red Force',
        colour: '#f00'
      },
      {
        name: 'White Force',
        colour: '#fff'
      }
    ],
    condition: ['Working', 'Disabled', 'Immobile', 'Destroyed']
  },
  values: {
    plannedRouteStatusVal: PlanningStates.Pending,
    statusVal: {
      name: 'Transiting',
      mobile: true
    },
    speedVal: 10,
    visibleToVal: ['Blue Force'],
    conditionVal: 'Working'
  }
}

export default formData
