import { PerceptionFormData } from '@serge/custom-types'

const formData: PerceptionFormData = {
  populate: {
    perceivedForces: [
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
    perceivedTypes: [
      { uniqid: 'aa', name:'Fishing vessel'},
      { uniqid: 'a1', name:'torpedo'},
      { uniqid: 'a2', name:'Boghammer'},
      { uniqid: 'a3', name:'Frigate'}
    ]
  },
  values: {
    perceivedNameVal: 'Test',
    perceivedForceVal: 'blue-force',
    perceivedTypeId: 'a3',
    assetId: 'c00012',
    iconURL: 'frigate.svg'
  }
}

export default formData
