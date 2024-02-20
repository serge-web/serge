export type StandardIdentityOneItem = {
  code: string
  index: number
  name: string
  sidc: string
  setCode?: string[]
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
  { code: '01', index: 0, name: 'Air', sidc: '10030100000000000000' },
  {
    code: '02',
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

const Icon: StandardIdentityOneItem[] = [
  {
    code: '110100',
    setCode: ['01'],
    index: 1,
    name: 'Aircraft Production/Assembly',
    sidc: '10030100001101000000'
  },
  {
    code: '120500',
    setCode: ['01'],
    index: 2,
    name: 'Airship',
    sidc: '10030100001205000000'
  },
  {
    code: '110300',
    setCode: ['01'],
    index: 3,
    name: 'Unmanned Aircraft (UA) / Unmanned Aerial Vehicle (UAV)',
    sidc: '10030100001103000000'
  },

  {
    code: '000000',
    setCode: ['02'],
    index: 4,
    name: 'Unspecified',
    sidc: '10030200000000000000'
  },
  {
    code: '110000',
    setCode: ['02'],
    index: 5,
    name: 'Missile',
    sidc: '10030200001100000000'
  },
  
  {
    code: '000000',
    setCode: ['05'],
    index: 6,
    name: 'Unspecified',
    sidc: '10030500000000000000'
  },
  {
    code: '110000',
    setCode: ['05'],
    index: 7,
    name: 'Military',
    sidc: '10030500001100000000'
  },
  {
    code: '111000',
    setCode: ['05'],
    index: 8,
    name: 'Biosatellite',
    sidc: '10030500001110000000'
  },
  {
    code: '110000',
    setCode: ['10'],
    index: 9,
    name: 'Command and Control',
    sidc: '10031000001100000000'
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

const EchelonMobility = [
  { code: '00', index: 0, name: 'Unspecified', sidc: '10031000000000000000' },
  { code: '11', index: 1, name: 'Team/Crew', sidc: '10031000110000000000' },
  { code: '12', index: 2, name: 'Squad', sidc: '10031000120000000000' },
  { code: '13', index: 3, name: 'Section', sidc: '10031000130000000000' },
  { code: '14', index: 4, name: 'Platoon/Detachment', sidc: '10031000140000000000' },
  { code: '15', index: 5, name: 'Company/Battery/Troop', sidc: '10031000150000000000' },
  { code: '16', index: 6, name: 'Battalion/Squadron', sidc: '10031000160000000000' },
  { code: '17', index: 7, name: 'Regiment/Group', sidc: '10031000170000000000' },
  { code: '18', index: 8, name: 'Brigade', sidc: '10031000180000000000' },
  { code: '21', index: 9, name: 'Division', sidc: '10031000210000000000' },
  { code: '22', index: 10, name: 'Corps/Mef', sidc: '10031000220000000000' },
  { code: '23', index: 11, name: 'Army', sidc: '10031000230000000000' },
  { code: '24', index: 12, name: 'Army Group/Front', sidc: '10031000240000000000' },
  { code: '25', index: 13, name: 'Region', sidc: '10031000250000000000' },
  { code: '26', index: 14, name: 'Command', sidc: '10031000260000000000' }
]

export const dropdownOptions = (code: string): DropdownOption[] => {
  const filetrIcon: StandardIdentityOneItem[] = Icon.filter(data => data.setCode && data.setCode.includes(code))
  
  return [
    { value: StandardIdentityOne, index: 2, title: 'Standard Identity 1' },
    { value: StandardIdentityTwo, index: 3, title: 'Standard Identity 2' },
    { value: symbolSet, index: 4, title: 'Symbol set' },
    { value: filetrIcon, index: 10, title: 'Main Icon' }, 
    { value: statusDefault, index: 6, title: 'Status' },
    { value: HeadquartersTask, index: 7, title: 'Headquarters/Task force/Dummy' },
    { value: EchelonMobility, index: 8, title: 'Echelon/Mobility/Towed array' } 
  ]
}
