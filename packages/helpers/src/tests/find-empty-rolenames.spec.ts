import { forces } from '@serge/mocks'
import { ForceData } from '@serge/custom-types'
import { findEmptyRolenames } from '..'
import { NEW_ROLE } from '@serge/config'

const selectedForceRevised: ForceData = {
  ...forces[1],
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
    }
  ]
}
const selectedForceRevisedNew: ForceData = {
  ...forces[2],
  roles: [
    {
      name: '',
      roleId: 'rkrl55f5ecd',
      isGameControl: false,
      isObserver: false,
      isInsightViewer: false,
      canSubmitPlans: true
    },
    {
      roleId: 'rkrl55f5edb',
      name: NEW_ROLE,
      canSubmitPlans: false,
      isGameControl: false,
      isInsightViewer: false,
      isRFIManager: false,
      isObserver: false
    },
    {
      roleId: 'rkr666f5ea',
      name: 'CO',
      canSubmitPlans: false,
      isGameControl: false,
      isInsightViewer: false,
      isRFIManager: false,
      isObserver: false
    }
  ]
}

it('Check non-empty force role name', () => {
  const res = findEmptyRolenames(selectedForceRevised, [selectedForceRevised])
  expect(res).toHaveLength(0)
})

it('Check empty force role name', () => {
  const res = findEmptyRolenames(selectedForceRevised, [selectedForceRevisedNew])
  expect(res).toHaveLength(2)
  expect(res[0].roleName).toEqual(selectedForceRevisedNew.roles[0].name)
  expect(res[1].roleName).toEqual(selectedForceRevisedNew.roles[1].name)
})
