import { forces } from '@serge/mocks'
import { ForceData } from '@serge/custom-types'
import { isUniquePasscode } from '../'

const allForces: ForceData[] = forces
const selectedForce: ForceData = {
  ...forces[0],
  roles: [
    {
      name: 'CO',
      roleId: 'pkszmzgl4ac',
      isGameControl: false,
      isObserver: false,
      isInsightViewer: false,
      canSubmitPlans: true
    },
    {
      roleId: 'pkszmzgl4ad',
      name: 'Game Control',
      canSubmitPlans: false,
      isGameControl: false,
      isInsightViewer: false,
      isRFIManager: false,
      isObserver: false
    }
  ]
}
const selectedForceRevised: ForceData = {
  ...forces[0],
  roles: [
    {
      name: 'CO',
      roleId: 'pkszmzgl4',
      isGameControl: false,
      isObserver: false,
      isInsightViewer: false,
      canSubmitPlans: true
    },
    {
      roleId: 'pkszmzgl4a',
      name: 'Game Control',
      canSubmitPlans: false,
      isGameControl: false,
      isInsightViewer: false,
      isRFIManager: false,
      isObserver: false
    },
    {
      roleId: 'rkr666f5e',
      name: 'CO',
      canSubmitPlans: false,
      isGameControl: false,
      isInsightViewer: false,
      isRFIManager: false,
      isObserver: false
    }
  ]
}
const selectedForceRevisedNew: ForceData = {
  ...forces[0],
  roles: [
    {
      name: 'CO',
      roleId: 'rkrl55f5ec',
      isGameControl: false,
      isObserver: false,
      isInsightViewer: false,
      canSubmitPlans: true
    },
    {
      roleId: 'rkrl55f5ed',
      name: 'Game Control',
      canSubmitPlans: false,
      isGameControl: false,
      isInsightViewer: false,
      isRFIManager: false,
      isObserver: false
    },
    {
      roleId: 'rkr666f5e',
      name: 'CO',
      canSubmitPlans: false,
      isGameControl: false,
      isInsightViewer: false,
      isRFIManager: false,
      isObserver: false
    }
  ]
}

it('Check non-duplicate force role passcode', () => {
  const res = isUniquePasscode(selectedForceRevisedNew, [selectedForceRevised])
  expect(res).toHaveLength(0)
})

it('Check duplicate force role passcode', () => {
  const res = isUniquePasscode(selectedForceRevised, allForces)
  expect(res).toHaveLength(4)
})

it('Check duplicate force role passcode legacy wargame', () => {
  const res = isUniquePasscode(selectedForce, allForces)
  expect(res).toHaveLength(2)
})

it('Check duplicate force role passcode legacy wargame duplicate roleId not matched', () => {
  const res = isUniquePasscode(selectedForce, allForces)
  expect(res[0].roleId === 'rkrlss55f5e').toBeTruthy()
})