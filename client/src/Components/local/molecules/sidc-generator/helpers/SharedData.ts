export const affiliationDefault = {
  P: { index: 0, name: 'Pending', sidc: 'SPGP-------' },
  U: { index: 1, name: 'Unknown', sidc: 'SUGP-------' },
  A: { index: 2, name: 'Assumed Friend', sidc: 'SAGP-------' },
  F: { index: 3, name: 'Friend', sidc: 'SFGP-------' },
  N: { index: 4, name: 'Neutral', sidc: 'SNGP-------' },
  S: { index: 5, name: 'Suspect', sidc: 'SSGP-------' },
  H: { index: 6, name: 'Hostile', sidc: 'SHGP-------' },
  G: { index: 7, name: 'Exercise Pending', sidc: 'SGGP-------' },
  W: { index: 8, name: 'Exercise Unknown', sidc: 'SWGP-------' },
  D: { index: 9, name: 'Exercise Friend', sidc: 'SDGP-------' },
  L: { index: 10, name: 'Exercise Neutral', sidc: 'SLGP-------' },
  M: { index: 11, name: 'Exercise Assumed Friend', sidc: 'SMGP-------' },
  J: { index: 12, name: 'Joker', sidc: 'SJGP-------' },
  K: { index: 13, name: 'Faker', sidc: 'SKGP-------' },
  O: { index: 14, name: 'None Specified', sidc: 'SOGP-------' }
}
  
export const BattleDimensionIcon = {
  PP: { index: 0, name: 'Space', sidc: 'SFPP--------' }, 
  AP: { index: 1, name: 'Air', sidc: 'SFAP--------' }, 
  GPU: { index: 2, name: 'Ground Unit', sidc: 'SFGPU-------' }, 
  GPE: { index: 3, name: 'Ground Equipment', sidc: 'SFGPE-------' }, 
  SP: { index: 4, name: 'Sea Surface', sidc: 'SFSP--------' }, 
  UP: { index: 5, name: 'Subsurface', sidc: 'SFUP--------' }, 
  FP: { index: 6, name: 'Special Operations Forces (SOF)', sidc: 'SFFP--------' }
}

export const StandardIdentityOne = {
  0: { index: 0, name: 'Realty', sidc: '' }, 
  1: { index: 1, name: 'Exercise', sidc: '' }, 
  2: { index: 2, name: 'Simulation', sidc: '' }
}

export const StandardIdentityTwo = {
  0: { code: 0, index: 0, name: 'Pending', sidc: '10001000000000000000' },
  1: { code: 1, index: 1, name: 'Unknown', sidc: '10011000000000000000' },
  2: {
    code: 2,
    index: 2,
    name: 'Assumed Friend',
    sidc: '10021000000000000000'
  },
  3: { code: 3, index: 3, name: 'Friend', sidc: '10031000000000000000' },
  4: { code: 4, index: 4, name: 'Neutral', sidc: '10041000000000000000' },
  5: {
    code: 5,
    index: 5,
    name: 'Suspect/Joker',
    sidc: '10051000000000000000'
  },
  6: {
    code: 6,
    index: 6,
    name: 'Hostile/Faker',
    sidc: '10061000000000000000'
  }
}

export const symbolSet = {
  '01': { code: 0, index: 0, name: 'Air', sidc: '10030100000000000000' },
  '02': {
    code: 1,
    index: 1,
    name: 'Air missile',
    sidc: '10030200000000000000'
  },
  '05': {
    code: '05',
    index: 2,
    name: 'Space',
    sidc: '10030500000000000000'
  },
  10: {
    code: 10,
    index: 3,
    name: 'Land Unit',
    sidc: '10031000000000000000'
  },
  11: {
    code: 11,
    index: 4,
    name: 'Land civilian unit/Organization',
    sidc: '10031100000000000000'
  },
  15: {
    code: 15,
    index: 5,
    name: 'Land equipment',
    sidc: '10031500000000000000'
  }
  // 20: {
  //   code: 20,
  //   index: 2,
  //   name: 'Space',
  //   sidc: '10030500000000000000'
  // },
  // 25: {
  //   code: 25,
  //   index: 3,
  //   name: 'Present/Damaged',
  //   sidc: '10031030000000000000'
  // },
  // 27: {
  //   code: 27,
  //   index: 4,
  //   name: 'Present/Destroyed',
  //   sidc: '10031040000000000000'
  // },
  // 30: {
  //   code: 30,
  //   index: 5,
  //   name: 'Present/Full to capacity',
  //   sidc: '10031050000000000000'
  // },
  // 35: {
  //   code: 35,
  //   index: 5,
  //   name: 'Present/Full to capacity',
  //   sidc: '10031050000000000000'
  // },
  // 36: {
  //   code: 36,
  //   index: 5,
  //   name: 'Present/Full to capacity',
  //   sidc: '10031050000000000000'
  // },
  // 40: {
  //   code: 40,
  //   index: 5,
  //   name: 'Present/Full to capacity',
  //   sidc: '10031050000000000000'
  // }
}

export const statusDefault = {
  0: { code: 0, index: 0, name: 'Present', sidc: '10031000000000000000' },
  1: {
    code: 1,
    index: 1,
    name: 'Planned/Anticipated/Suspect',
    sidc: '10031010000000000000'
  },
  2: {
    code: 2,
    index: 2,
    name: 'Present/Fully capable',
    sidc: '10031020000000000000'
  },
  3: {
    code: 3,
    index: 3,
    name: 'Present/Damaged',
    sidc: '10031030000000000000'
  },
  4: {
    code: 4,
    index: 4,
    name: 'Present/Destroyed',
    sidc: '10031040000000000000'
  },
  5: {
    code: 5,
    index: 5,
    name: 'Present/Full to capacity',
    sidc: '10031050000000000000'
  }
}

export const dropdownOptions = [
  { value: StandardIdentityOne, index: 2, title: 'Standard Identity 1' },
  { value: StandardIdentityTwo, index: 3, title: 'Standard Identity 2' },
  { value: symbolSet, index: 4, title: 'Symbol set' },
  { value: statusDefault, index: 6, title: 'Status' }
]
