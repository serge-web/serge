import { PerceptionFormData } from "@serge/custom-types"

const formData: PerceptionFormData = {
  populate: {
    perceivedForce: [
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
    perceivedType: [
      'Fishing vessel',
      'Frigate',
      'Boghammer',
      'torpedo',
      'Fast attack craft',
      'MCMV',
      'Helicopter',
      'Fixed wing aircraft',
      'Coastal radar site',
      'Merchant vessel'
    ]
  },
  values: {
    perceivedNameVal: 'Test',
    perceivedForceVal: 'blue-force',
    perceivedTypeVal: 'frigate',
    perceivedTypeId: 'a3',
    assetId: 'c00012',
    iconURL: 'frigate.svg'
  }
}

export default formData
