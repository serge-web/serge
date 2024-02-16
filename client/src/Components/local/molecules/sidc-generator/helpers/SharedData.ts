export type StandardIdentityOneItem = {
  code: string
  index: number
  name: string
  sidc: string
};

type DropdownOption = {
  value: StandardIdentityOneItem[]
  index: number
  title: string
};

const StandardIdentityOne: StandardIdentityOneItem[] = [
  { code: '0', index: 0, name: 'Realty', sidc: '' }, 
  { code: '1', index: 1, name: 'Exercise', sidc: '' }, 
  { code: '2', index: 2, name: 'Simulation', sidc: '' }
]

const StandardIdentityTwo: StandardIdentityOneItem[] = [
  { code: '0', index: 0, name: 'Pending', sidc: '10001000000000000000' },
  { code: '1', index: 1, name: 'Unknown', sidc: '10011000000000000000' },
  {
    code: '2',
    index: 2,
    name: 'Assumed Friend',
    sidc: '10021000000000000000'
  },
  { code: '3', index: 3, name: 'Friend', sidc: '10031000000000000000' },
  { code: '4', index: 4, name: 'Neutral', sidc: '10041000000000000000' },
  {
    code: '5',
    index: 5,
    name: 'Suspect/Joker',
    sidc: '10051000000000000000'
  },
  {
    code: '6',
    index: 6,
    name: 'Hostile/Faker',
    sidc: '10061000000000000000'
  }
]

const symbolSet: StandardIdentityOneItem[] = [
  { code: '0', index: 0, name: 'Air', sidc: '10030100000000000000' },
  {
    code: '1',
    index: 1,
    name: 'Air missile',
    sidc: '10030200000000000000'
  },
  {
    code: '05',
    index: 2,
    name: 'Space',
    sidc: '10030500000000000000'
  },
  {
    code: '10',
    index: 3,
    name: 'Land Unit',
    sidc: '10031000000000000000'
  },
  {
    code: '11',
    index: 4,
    name: 'Land civilian unit/Organization',
    sidc: '10031100000000000000'
  },
  {
    code: '15',
    index: 5,
    name: 'Land equipment',
    sidc: '10031500000000000000'
  },
  {
    code: '20',
    index: 6,
    name: 'Land installations',
    sidc: '10032000000000000000'
  },
  {
    code: '27',
    index: 8,
    name: 'Dismounted individual',
    sidc: '10032700000000000000'
  },
  {
    code: '30',
    index: 9,
    name: 'Sea Surface',
    sidc: '10033000000000000000'
  },
  {
    code: '35',
    index: 10,
    name: 'Sea subsurface',
    sidc: '10033500000000000000'
  },
  {
    code: '36',
    index: 11,
    name: 'Mine warfare',
    sidc: '10033600000000000000'
  },
  {
    code: '40',
    index: 12,
    name: 'Activities',
    sidc: '10034000000000000000'
  }
]

const statusDefault: StandardIdentityOneItem[] = [
  { code: '0', index: 0, name: 'Present', sidc: '10031000000000000000' },
  {
    code: '1',
    index: 1,
    name: 'Planned/Anticipated/Suspect',
    sidc: '10031010000000000000'
  },
  {
    code: '2',
    index: 2,
    name: 'Present/Fully capable',
    sidc: '10031020000000000000'
  },
  {
    code: '3',
    index: 3,
    name: 'Present/Damaged',
    sidc: '10031030000000000000'
  },
  {
    code: '4',
    index: 4,
    name: 'Present/Destroyed',
    sidc: '10031040000000000000'
  },
  {
    code: '5',
    index: 5,
    name: 'Present/Full to capacity',
    sidc: '10031050000000000000'
  }
]

const HeadquartersTask: StandardIdentityOneItem[] = [
  {
    code: '0',
    index: 0,
    name: 'Not Applicable',
    sidc: '10031000000000000000'
  },
  {
    code: '1',
    index: 1,
    name: 'Feint/Dummy',
    sidc: '10031001000000000000'
  },
  {
    code: '2',
    index: 2,
    name: 'Headquarters',
    sidc: '10031002000000000000'
  },
  {
    code: '3',
    index: 3,
    name: 'Feint/Dummy Headquarters',
    sidc: '10031003000000000000'
  },
  {
    code: '4',
    index: 4,
    name: 'Task Force',
    sidc: '10031004000000000000'
  },
  {
    code: '5',
    index: 5,
    name: 'Feint/Dummy Task Force',
    sidc: '10031005000000000000'
  },
  {
    code: '6',
    index: 6,
    name: 'Task Force Headquarters',
    sidc: '10031006000000000000'
  },
  {
    code: '7',
    index: 7,
    name: 'Feint/Dummy Task Force Headquarters',
    sidc: '10031007000000000000'
  }
]

export const dropdownOptions: DropdownOption[] = [
  { value: StandardIdentityOne, index: 2, title: 'Standard Identity 1' },
  { value: StandardIdentityTwo, index: 3, title: 'Standard Identity 2' },
  { value: symbolSet, index: 4, title: 'Symbol set' },
  { value: statusDefault, index: 6, title: 'Status' },
  { value: HeadquartersTask, index: 7, title: 'Headquarters/Task force/Dummy' } 
]
