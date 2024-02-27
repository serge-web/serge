import { ms2525d } from 'milstd'

export type StandardIdentityOneItem = {
  code: string
  index: number
  name: string
  sidc: string
};

type DropdownOption = {
  value: StandardIdentityOne
  index: number
  endindex: number 
  name: string
};

export type StandardIdentityOne = {
  [key: number]: {
    code: string
    index: number
    name: string
    sidc: string
    modifier?: string 
  }
};

const StandardIdentityOne: StandardIdentityOne = { 
  0: { code: '0', index: 0, name: 'Realty', sidc: '0' }, 
  1: { code: '1', index: 1, name: 'Exercise', sidc: '1' }, 
  2: { code: '2', index: 2, name: 'Simulation', sidc: '2' }
}

const StandardIdentityTwo: StandardIdentityOne = {
  0: { code: '0', index: 0, name: 'Pending', sidc: '10001000000000000000' },
  1: { code: '1', index: 1, name: 'Unknown', sidc: '10011000000000000000' },
  2: {
    code: '2',
    index: 2,
    name: 'Assumed Friend',
    sidc: '10021000000000000000'
  },
  3: { code: '3', index: 3, name: 'Friend', sidc: '10031000000000000000' },
  4: { code: '4', index: 4, name: 'Neutral', sidc: '10041000000000000000' },
  5: {
    code: '5',
    index: 5,
    name: 'Suspect/Joker',
    sidc: '10051000000000000000'
  },
  6: {
    code: '6',
    index: 6,
    name: 'Hostile/Faker',
    sidc: '10061000000000000000'
  }
}

const statusDefault: StandardIdentityOne = {
  0: { code: '0', index: 0, name: 'Present', sidc: '10031000000000000000' },
  1: {
    code: '1',
    index: 1,
    name: 'Planned/Anticipated/Suspect',
    sidc: '10031010000000000000'
  },
  2: {
    code: '2',
    index: 2,
    name: 'Present/Fully capable',
    sidc: '10031020000000000000'
  },
  3: {
    code: '3',
    index: 3,
    name: 'Present/Damaged',
    sidc: '10031030000000000000'
  },
  4: {
    code: '4',
    index: 4,
    name: 'Present/Destroyed',
    sidc: '10031040000000000000'
  },
  5: {
    code: '5',
    index: 5,
    name: 'Present/Full to capacity',
    sidc: '10031050000000000000'
  }
}

const HeadquartersTask: StandardIdentityOne = {
  0: {
    code: '0',
    index: 0,
    name: 'Not Applicable',
    sidc: '10031000000000000000'
  },
  1: {
    code: '1',
    index: 1,
    name: 'Feint/Dummy',
    sidc: '10031001000000000000'
  },
  2: {
    code: '2',
    index: 2,
    name: 'Headquarters',
    sidc: '10031002000000000000'
  },
  3: {
    code: '3',
    index: 3,
    name: 'Feint/Dummy Headquarters',
    sidc: '10031003000000000000'
  },
  4: {
    code: '4',
    index: 4,
    name: 'Task Force',
    sidc: '10031004000000000000'
  },
  5: {
    code: '5',
    index: 5,
    name: 'Feint/Dummy Task Force',
    sidc: '10031005000000000000'
  },
  6: {
    code: '6',
    index: 6,
    name: 'Task Force Headquarters',
    sidc: '10031006000000000000'
  },
  7: {
    code: '7',
    index: 7,
    name: 'Feint/Dummy Task Force Headquarters',
    sidc: '10031007000000000000'
  }
}

const echelonMobilityTowedarray = (symbolset: string) => {
  if (symbolset == '10') {
    return [
      { code: '00', name: 'Unspecified', sidc: '10031000000000000000' },
      { code: '11', name: 'Team/Crew', sidc: '10031000110000000000' },
      { code: '12', name: 'Squad', sidc: '10031000120000000000' },
      { code: '13', name: 'Section', sidc: '10031000130000000000' },
      { code: '14', name: 'Platoon/Detachment', sidc: '10031000140000000000' },
      {
        code: '15',
        name: 'Company/Battery/Troop',
        sidc: '10031000150000000000'
      },
      { code: '16', name: 'Battalion/Squadron', sidc: '10031000160000000000' },
      { code: '17', name: 'Regiment/Group', sidc: '10031000170000000000' },
      { code: '18', name: 'Brigade', sidc: '10031000180000000000' },
      { code: '21', name: 'Division', sidc: '10031000210000000000' },
      { code: '22', name: 'Corps/MEF', sidc: '10031000220000000000' },
      { code: '23', name: 'Army', sidc: '10031000230000000000' },
      { code: '24', name: 'Army Group/Front', sidc: '10031000240000000000' },
      { code: '25', name: 'Region/Theater', sidc: '10031000250000000000' },
      {
        code: '26',
        name: 'Command',
        sidc: '10031000260000000000'
      }
    ]
  }
  // add signals intelligence
  if (symbolset == '15') {
    return [
      { code: '00', name: 'Unspecified', sidc: '10031500000000000000' },
      {
        code: '31',
        name: 'Wheeled limited cross country',
        sidc: '10031500310000000000'
      },
      {
        code: '32',
        name: 'Wheeled cross country',
        sidc: '10031500320000000000'
      },
      { code: '33', name: 'Tracked', sidc: '10031500330000000000' },
      {
        code: '34',
        name: 'Wheeled and tracked combination',
        sidc: '10031500340000000000'
      },
      { code: '35', name: 'Towed', sidc: '10031500350000000000' },
      { code: '36', name: 'Railway', sidc: '10031500360000000000' },
      { code: '37', name: 'Pack animals', sidc: '10031500370000000000' },
      {
        code: '41',
        name: 'Over snow (prime mover)',
        sidc: '10031500410000000000'
      },
      { code: '42', name: 'Sled', sidc: '10031500420000000000' },
      { code: '51', name: 'Barge', sidc: '10031500510000000000' },
      { code: '52', name: 'Amphibious', sidc: '10031500520000000000' }
    ]
  }
  if (symbolset == '27') {
    return [
      { code: '00', name: 'Unspecified', sidc: '10032700000000000000' },
      { code: '71', name: 'Leader', sidc: '10032700710000000000' }
    ]
  }
  if (symbolset == '30' || symbolset == '35') {
    return [
      { code: '00', name: 'Unspecified', sidc: '10033000000000000000' },
      { code: '61', name: 'Short towed array', sidc: '10033000610000000000' },
      { code: '62', name: 'Long towed array', sidc: '10033000620000000000' }
    ]
  }

  return []
}

export const dropdownOptions = (code: string): DropdownOption[] => {
  const iconms2525d = code ? ms2525d[code] : null
  const iconSelectOptions = iconms2525d && [
    { value: iconms2525d['main icon'], index: 10, endindex: 16, name: 'main icon' },
    { value: iconms2525d['modifier 1'], index: 16, endindex: 18, name: 'modifier 1' },
    { value: iconms2525d['modifier 2'], index: 18, endindex: 20, name: 'modifier 2' }
  ]
  const EchelonMobility = echelonMobilityTowedarray(code)
  const iconDropdownOptions: DropdownOption[] = iconms2525d ? iconSelectOptions : []

  const options: DropdownOption[] = [
    { value: StandardIdentityOne, index: 2, endindex: 3, name: 'Standard Identity 1' },
    { value: StandardIdentityTwo, index: 3, endindex: 4, name: 'Standard Identity 2' },
    { value: ms2525d, index: 4, endindex: 6, name: 'Symbol set' },
    { value: statusDefault, index: 6, endindex: 7, name: 'Status' },
    { value: EchelonMobility, index: 8, endindex: 10, name: 'Echelon/Mobility/Towed array' },
    { value: HeadquartersTask, index: 7, endindex: 8, name: 'Headquarters/Task force/Dummy' },
    ...iconDropdownOptions
  ]
  
  console.log('data', options)
  
  return options
}
