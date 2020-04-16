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
    }
  ]


export default forces
