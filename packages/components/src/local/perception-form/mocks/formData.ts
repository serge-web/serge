import { PerceptionFormData } from '@serge/custom-types'

const formData: PerceptionFormData = {
  populate: {
    perceivedForces: [
      {
        name: 'Blue Force',
        colour: '#69c',
        id: 'Blue'
      },
      {
        name: 'Red Force',
        colour: '#f00',
        id: 'Red'
      },
      {
        name: 'White Force',
        colour: '#fff',
        id: 'Umpire'
      }
    ],
    perceivedTypes: [
      { uniqid: 'aa', name: 'Fishing vessel' },
      { uniqid: 'a1', name: 'torpedo' },
      { uniqid: 'a2', name: 'Boghammer' },
      { uniqid: 'a3', name: 'Frigate' }
    ]
  },
  values: {
    perceivedNameVal: 'Test',
    perceivedForceId: 'Blue Force',
    perceivedForceColor: '#69c',
    perceivedTypeId: 'a3',
    assetId: 'c00012',
    iconURL: 'frigate.svg'
  }
}

export default formData
