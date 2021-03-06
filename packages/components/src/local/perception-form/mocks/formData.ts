const formData = {
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
    assetId: 'c00012'
  }
}

export default formData
