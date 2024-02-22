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
  name: string
};

export type StandardIdentityOne = {
  [key: number]: {
    code: string
    index: number
    name: string
    sidc: string
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

const EchelonMobility = {
  '00': { code: '00', index: 0, name: 'Unspecified', sidc: '10031000000000000000' },
  11: { code: '11', index: 1, name: 'Team/Crew', sidc: '10031000110000000000' },
  12: { code: '12', index: 2, name: 'Squad', sidc: '10031000120000000000' },
  13: { code: '13', index: 3, name: 'Section', sidc: '10031000130000000000' },
  14: { code: '14', index: 4, name: 'Platoon/Detachment', sidc: '10031000140000000000' },
  15: { code: '15', index: 5, name: 'Company/Battery/Troop', sidc: '10031000150000000000' },
  16: { code: '16', index: 6, name: 'Battalion/Squadron', sidc: '10031000160000000000' },
  17: { code: '17', index: 7, name: 'Regiment/Group', sidc: '10031000170000000000' },
  18: { code: '18', index: 8, name: 'Brigade', sidc: '10031000180000000000' },
  21: { code: '21', index: 9, name: 'Division', sidc: '10031000210000000000' },
  22: { code: '22', index: 10, name: 'Corps/Mef', sidc: '10031000220000000000' },
  23: { code: '23', index: 11, name: 'Army', sidc: '10031000230000000000' },
  24: { code: '24', index: 12, name: 'Army Group/Front', sidc: '10031000240000000000' },
  25: { code: '25', index: 13, name: 'Region', sidc: '10031000250000000000' },
  26: { code: '26', index: 14, name: 'Command', sidc: '10031000260000000000' }
}

export const dropdownOptions = (code: string): DropdownOption[] => {
  const iconms2525d = code ? ms2525d[code] : null

  const iconSelectOptions = iconms2525d && [
    { value: iconms2525d['main icon'], index: 10, name: 'main icon' },
    { value: iconms2525d['modifier 1'], index: 16, name: 'modifier 1' },
    { value: iconms2525d['modifier 2'], index: 18, name: 'modifier 2' }
  ]
  const iconDropdownOptions: DropdownOption[] = iconms2525d ? iconSelectOptions : []

  const options: DropdownOption[] = [
    { value: StandardIdentityOne, index: 2, name: 'Standard Identity 1' },
    { value: StandardIdentityTwo, index: 3, name: 'Standard Identity 2' },
    { value: ms2525d, index: 4, name: 'Symbol set' },
    ...iconDropdownOptions,
    { value: statusDefault, index: 6, name: 'Status' },
    { value: HeadquartersTask, index: 7, name: 'Headquarters/Task force/Dummy' },
    { value: EchelonMobility, index: 8, name: 'Echelon/Mobility/Towed array' }
  ]
  
  return options
}
