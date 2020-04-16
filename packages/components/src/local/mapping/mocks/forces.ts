export const forces = [
    {
      color: '#FCFBEE',
      dirty: false,
      icon: 'default_img/umpireDefault.png',
      name: 'White',
      overview: 'Umpire force.',
      roles: [
        {
          control: true,
          isInsightViewer: true,
          isObserver: true,
          name: 'Game Control',
          password: 'p2311'
        }
      ],
      umpire: true,
      uniqid: 'umpire'
    },
    {
      assets: [
        {
          name: 'HMS DEVONSHIRE',
          contactId: 'C043',
          condition: 'Full capability',
          perceptions: {},
          platformType: 'frigate',
          position: 'S23',
          status: {
            state: 'Transiting',
            speedKts: 20
          },
          uniqid: 'a0pra00001'
        },
        {
          name: 'STING',
          contactId: 'C072',
          condition: 'Full capability',
          perceptions: {},
          platformType: 'helicopter',
          position: 'P01',
          status: {
            state: 'Landed'
          },
          uniqid: 'a0pra00002'
        },
        {
          name: 'P8',
          contactId: 'C076',
          condition: 'Full capability',
          perceptions: {},
          platformType: 'fixed-wing-aircraft',
          position: 'P03',
          status: {
            state: 'Landed'
          },
          uniqid: 'a0pra00012'
        },
        {
          name: 'EDDYSTONE PT',
          contactId: 'C012',
          condition: 'Full capability',
          perceptions: {
            Red: {
              force: 'Blue',
              type: ''
            }
          },
          platformType: 'merchant-vessel',
          position: 'S23',
          status: {
            state: 'Transiting',
            speedKts: 20
          },
          uniqid: 'a0pra00003'
        }
      ],
      color: '#00F',
      dirty: false,
      icon: 'default_img/umpireDefault.png',
      name: 'Blue',
      overview: 'Blue force.',
      roles: [
        {
          control: false,
          isInsightViewer: false,
          isObserver: false,
          name: 'CO',
          password: 'p5543'
        }
      ],
      umpire: false,
      uniqid: 'Blue'
    },
    {
      assets: [
        {
          name: 'TARRADA',
          contactId: 'C065',
          condition: 'Full capability',
          locationPending: true,
          perceptions: {},
          platformType: 'fishing-vessel',
          position: 'N07',
          status: {
            state: 'Transiting',
            speedKts: 10
          },
          uniqid: 'a0pra000100'
        },
        {
          name: 'WBIED-1',
          contactId: 'C108',
          condition: 'Full capability',
          locationPending: true,
          perceptions: {},
          platformType: 'torpedo',
          position: 'T01',
          status: {
            state: 'Onboard'
          },
          uniqid: 'a0pra020102'
        },
        {
          name: 'WBIED-2',
          contactId: 'C118',
          condition: 'Full capability',
          locationPending: true,
          perceptions: {},
          platformType: 'torpedo',
          position: 'T03',
          status: {
            state: 'Onboard'
          },
          uniqid: 'a0pra130102'
        },
        {
          name: 'Osa',
          contactId: 'C003',
          condition: 'Full capability',
          locationPending: true,
          perceptions: {
            Blue: {
              force: 'Red',
              type: ''
            }
          },
          platformType: 'fast-attack-craft',
          position: 'M05',
          status: {
            state: 'Moored'
          },
          uniqid: 'a0pra160102'
        },
        {
          name: 'Yevgenya',
          contactId: 'C313',
          condition: 'Full capability',
          locationPending: true,
          perceptions: {
            Blue: {
              force: 'Red',
              type: 'fast-attack-craft'
            }
          },
          platformType: 'mcmv',
          position: 'M04',
          status: {
            state: 'Moored'
          },
          uniqid: 'a0pra170102'
        },
        {
          name: 'Coastal Radar C',
          contactId: 'C476',
          condition: 'Full capability',
          locationPending: true,
          perceptions: {},
          platformType: 'coastal-radar-site',
          position: 'Q12',
          status: {
            state: 'Inactive'
          },
          uniqid: 'a0prc000103'
        }
      ],
      color: '#F00',
      dirty: false,
      icon: 'default_img/umpireDefault.png',
      name: 'Red',
      overview: 'Red force.',
      roles: [
        {
          control: false,
          isInsightViewer: false,
          isObserver: false,
          name: 'CO',
          password: 'p3244'
        }
      ],
      umpire: false,
      uniqid: 'Red'
    }
  ]


export default forces
