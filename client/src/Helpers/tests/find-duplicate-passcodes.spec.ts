import { forces } from '@serge/mocks'
import { ForceData } from 'src/custom-types'
import { findDuplicatePasscodes } from '..'

const allForces: ForceData[] = forces
const selectedForce: ForceData = {
  ...forces[0],
  roles: [
    {
      name: 'CO',
      roleId: 'pkszmzgl4ac',
      isGameControl: false,
      isObserver: false,
      isInsightViewer: false
    },
    {
      roleId: 'pkszmzgl4ad',
      name: 'Game Control',
      isGameControl: false,
      isInsightViewer: false,
      isRFIManager: false,
      isObserver: false
    }
  ]
}
const selectedForceRevised: ForceData = {
  ...forces[1],
  roles: [
    {
      name: 'CO',
      roleId: 'pkszmzgl4',
      isGameControl: false,
      isObserver: false,
      isInsightViewer: false
    },
    {
      roleId: 'pkszmzgl4a',
      name: 'Game Control',
      isGameControl: false,
      isInsightViewer: false,
      isRFIManager: false,
      isObserver: false
    },
    {
      roleId: 'rkr666f5e',
      name: 'CO',
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
      name: 'CO',
      roleId: 'rkrl55f5ec',
      isGameControl: false,
      isObserver: false,
      isInsightViewer: false
    },
    {
      roleId: 'rkrl55f5ed',
      name: 'Game Control',
      isGameControl: false,
      isInsightViewer: false,
      isRFIManager: false,
      isObserver: false
    },
    {
      roleId: 'rkr666f5e',
      name: 'CO',
      isGameControl: false,
      isInsightViewer: false,
      isRFIManager: false,
      isObserver: false
    }
  ]
}

it('Check non-duplicate force role passcode', () => {
  const res = findDuplicatePasscodes(selectedForceRevisedNew, [selectedForceRevised])
  expect(res).toHaveLength(0)
})

it('Check multiple duplicate passcodes', () => {
  const res = findDuplicatePasscodes(selectedForceRevised, allForces)
  expect(res).toHaveLength(4)
  expect(res[0].roleId).toEqual(res[1].roleId)
  expect(res[2].roleId).toEqual(res[3].roleId)
})

it('Check duplicate passcode between new force and rest of forces', () => {
  const res = findDuplicatePasscodes(selectedForce, allForces)
  expect(res).toHaveLength(2)
  expect(res[0].roleId).toEqual('rkrlss55f5e')
  expect(res[1].roleId).toEqual('rkrlss55f5e')
  expect(res[0].roleName).toEqual('Logs')
  expect(res[1].roleName).toEqual('Game Control')
})
