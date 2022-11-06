import { PerForcePlanningActivitySet } from '@serge/custom-types'

export const perForceMockActivityData: PerForcePlanningActivitySet[] = [
  {
    force: 'F-Blue',
    groupedActivities: [
      {
        category: 'Maritime',
        activities: [
          {
            uniqid: 'Maritime-precis-strike',
            name: 'Precision Strike',
            template: 'k16e-land',
            color: '#f0f',
            geometries: [
              {
                aType: 1,
                name: 'Route in',
                uniqid: 'aa1'
              },
              {
                aType: 0,
                name: 'Target Location',
                uniqid: 'aa2'
              },
              {
                aType: 1,
                name: 'Route out',
                uniqid: 'aa3'
              }
            ]
          },
          {
            uniqid: 'Maritime-area-strike',
            name: 'Area Strike',
            template: 'k16e-land',
            color: '#b0f',
            geometries: [
              {
                aType: 1,
                name: 'Route in',
                uniqid: 'aa4'
              },
              {
                aType: 2,
                name: 'Target Area',
                uniqid: 'aa5'
              },
              {
                aType: 1,
                name: 'Route out',
                uniqid: 'aa6'
              }
            ]
          },
          {
            uniqid: 'Maritime-transit',
            name: 'Transit',
            template: 'k16e-maritime',
            color: '#f33',
            geometries: [
              {
                aType: 1,
                name: 'Route',
                uniqid: 'aa7'
              }
            ]
          },
          {
            uniqid: 'Maritime-area-recce',
            name: 'Area Reconnaisance',
            template: 'k16e-air',
            color: '#5b0',
            geometries: [
              {
                aType: 1,
                name: 'Route in',
                uniqid: 'aa8'
              },
              {
                aType: 2,
                name: 'Flight Box',
                uniqid: 'aa9a'
              },
              {
                aType: 2,
                name: 'Target Area',
                uniqid: 'aa9b'
              },
              {
                aType: 1,
                name: 'Route out',
                uniqid: 'a10'
              }
            ]
          },
          {
            uniqid: 'Maritime-point-recce',
            name: 'Point Reconnaisance',
            template: 'k16e-air',
            geometries: [
              {
                aType: 1,
                name: 'Route in',
                uniqid: 'a11'
              },
              {
                aType: 0,
                name: 'Target Area',
                uniqid: 'a12'
              },
              {
                aType: 1,
                name: 'Route out',
                uniqid: 'a13'
              }
            ]
          },
          {
            uniqid: 'Maritime-cyber',
            name: 'Non spatial cyber',
            template: 'k16e-other'
          }
        ]
      },
      {
        category: 'Land',
        activities: [
          {
            uniqid: 'Land-precis-strike',
            name: 'Precision Strike',
            template: 'k16e-land',
            color: '#f0f',
            geometries: [
              {
                aType: 1,
                name: 'Route in',
                uniqid: 'aa1'
              },
              {
                aType: 0,
                name: 'Target Location',
                uniqid: 'aa2'
              },
              {
                aType: 1,
                name: 'Route out',
                uniqid: 'aa3'
              }
            ]
          },
          {
            uniqid: 'Land-area-strike',
            name: 'Area Strike',
            template: 'k16e-land',
            color: '#b0f',
            geometries: [
              {
                aType: 1,
                name: 'Route in',
                uniqid: 'aa4'
              },
              {
                aType: 2,
                name: 'Target Area',
                uniqid: 'aa5'
              },
              {
                aType: 1,
                name: 'Route out',
                uniqid: 'aa6'
              }
            ]
          },
          {
            uniqid: 'Land-transit',
            name: 'Transit',
            template: 'k16e-maritime',
            color: '#f33',
            geometries: [
              {
                aType: 1,
                name: 'Route',
                uniqid: 'aa7'
              }
            ]
          },
          {
            uniqid: 'Land-area-recce',
            name: 'Area Reconnaisance',
            template: 'k16e-air',
            color: '#5b0',
            geometries: [
              {
                aType: 1,
                name: 'Route in',
                uniqid: 'aa8'
              },
              {
                aType: 2,
                name: 'Flight Box',
                uniqid: 'aa9a'
              },
              {
                aType: 2,
                name: 'Target Area',
                uniqid: 'aa9b'
              },
              {
                aType: 1,
                name: 'Route out',
                uniqid: 'a10'
              }
            ]
          },
          {
            uniqid: 'Land-point-recce',
            name: 'Point Reconnaisance',
            template: 'k16e-air',
            geometries: [
              {
                aType: 1,
                name: 'Route in',
                uniqid: 'a11'
              },
              {
                aType: 0,
                name: 'Target Area',
                uniqid: 'a12'
              },
              {
                aType: 1,
                name: 'Route out',
                uniqid: 'a13'
              }
            ]
          },
          {
            uniqid: 'Land-cyber',
            name: 'Non spatial cyber',
            template: 'k16e-other'
          }
        ]
      },
      {
        category: 'Air',
        activities: [
          {
            uniqid: 'Air-precis-strike',
            name: 'Precision Strike',
            template: 'k16e-land',
            color: '#f0f',
            geometries: [
              {
                aType: 1,
                name: 'Route in',
                uniqid: 'aa1'
              },
              {
                aType: 0,
                name: 'Target Location',
                uniqid: 'aa2'
              },
              {
                aType: 1,
                name: 'Route out',
                uniqid: 'aa3'
              }
            ]
          },
          {
            uniqid: 'Air-area-strike',
            name: 'Area Strike',
            template: 'k16e-land',
            color: '#b0f',
            geometries: [
              {
                aType: 1,
                name: 'Route in',
                uniqid: 'aa4'
              },
              {
                aType: 2,
                name: 'Target Area',
                uniqid: 'aa5'
              },
              {
                aType: 1,
                name: 'Route out',
                uniqid: 'aa6'
              }
            ]
          },
          {
            uniqid: 'Air-transit',
            name: 'Transit',
            template: 'k16e-maritime',
            color: '#f33',
            geometries: [
              {
                aType: 1,
                name: 'Route',
                uniqid: 'aa7'
              }
            ]
          },
          {
            uniqid: 'Air-air-recce',
            name: 'Air Reconnaisance',
            template: 'Air Activity',
            color: '#5b0',
            geometries: [
              {
                aType: 1,
                name: 'Route in',
                uniqid: 'aa8'
              },
              {
                aType: 2,
                name: 'Flight box',
                uniqid: 'aa9a'
              },
              {
                aType: 2,
                name: 'Target Area',
                uniqid: 'aa9b'
              },
              {
                aType: 1,
                name: 'Route out',
                uniqid: 'a10'
              }
            ]
          },
          {
            uniqid: 'Air-point-recce',
            name: 'Point Reconnaisance',
            template: 'k16e-air',
            geometries: [
              {
                aType: 1,
                name: 'Route in',
                uniqid: 'a11'
              },
              {
                aType: 0,
                name: 'Target Area',
                uniqid: 'a12'
              },
              {
                aType: 1,
                name: 'Route out',
                uniqid: 'a13'
              }
            ]
          },
          {
            uniqid: 'Air-cyber',
            name: 'Non spatial cyber',
            template: 'k16e-other'
          }
        ]
      },
      {
        category: 'Other',
        activities: [
          {
            uniqid: 'Other-precis-strike',
            name: 'Precision Strike',
            template: 'k16e-land',
            color: '#f0f',
            geometries: [
              {
                aType: 1,
                name: 'Route in',
                uniqid: 'aa1'
              },
              {
                aType: 0,
                name: 'Target Location',
                uniqid: 'aa2'
              },
              {
                aType: 1,
                name: 'Route out',
                uniqid: 'aa3'
              }
            ]
          },
          {
            uniqid: 'Other-area-strike',
            name: 'Area Strike',
            template: 'k16e-land',
            color: '#b0f',
            geometries: [
              {
                aType: 1,
                name: 'Route in',
                uniqid: 'aa4'
              },
              {
                aType: 2,
                name: 'Target Area',
                uniqid: 'aa5'
              },
              {
                aType: 1,
                name: 'Route out',
                uniqid: 'aa6'
              }
            ]
          },
          {
            uniqid: 'Other-area-recce',
            name: 'Area Reconnaisance',
            template: 'k16e-air',
            color: '#5b0',
            geometries: [
              {
                aType: 1,
                name: 'Route in',
                uniqid: 'aa8'
              },
              {
                aType: 2,
                name: 'Flight Box',
                uniqid: 'aa9a'
              },
              {
                aType: 2,
                name: 'Target Area',
                uniqid: 'aa9b'
              },
              {
                aType: 1,
                name: 'Route out',
                uniqid: 'a10'
              }
            ]
          },
          {
            uniqid: 'Other-point-recce',
            name: 'Point Reconnaisance',
            template: 'k16e-air',
            geometries: [
              {
                aType: 1,
                name: 'Route in',
                uniqid: 'a11'
              },
              {
                aType: 0,
                name: 'Target Area',
                uniqid: 'a12'
              },
              {
                aType: 1,
                name: 'Route out',
                uniqid: 'a13'
              }
            ]
          },
          {
            uniqid: 'Other-cyber',
            name: 'Non spatial cyber',
            template: 'k16e-other'
          }
        ]
      }
    ]
  },
  {
    force: 'F-Red',
    groupedActivities: [
      {
        category: 'Maritime',
        activities: [
          {
            uniqid: 'Maritime-precis-strike',
            name: 'Precision Strike',
            template: 'k16e-land',
            color: '#f0f',
            geometries: [
              {
                aType: 1,
                name: 'Route in',
                uniqid: 'aa1'
              },
              {
                aType: 0,
                name: 'Target Location',
                uniqid: 'aa2'
              },
              {
                aType: 1,
                name: 'Route out',
                uniqid: 'aa3'
              }
            ]
          },
          {
            uniqid: 'Maritime-area-strike',
            name: 'Area Strike',
            template: 'k16e-land',
            color: '#b0f',
            geometries: [
              {
                aType: 1,
                name: 'Route in',
                uniqid: 'aa4'
              },
              {
                aType: 2,
                name: 'Target Area',
                uniqid: 'aa5'
              },
              {
                aType: 1,
                name: 'Route out',
                uniqid: 'aa6'
              }
            ]
          },
          {
            uniqid: 'Maritime-transit',
            name: 'Transit',
            template: 'k16e-maritime',
            color: '#f33',
            geometries: [
              {
                aType: 1,
                name: 'Route',
                uniqid: 'aa7'
              }
            ]
          }
        ]
      },
      {
        category: 'Land',
        activities: [
          {
            uniqid: 'Land-precis-strike',
            name: 'Precision Strike',
            template: 'k16e-land',
            color: '#f0f',
            geometries: [
              {
                aType: 1,
                name: 'Route in',
                uniqid: 'aa1'
              },
              {
                aType: 0,
                name: 'Target Location',
                uniqid: 'aa2'
              },
              {
                aType: 1,
                name: 'Route out',
                uniqid: 'aa3'
              }
            ]
          },
          {
            uniqid: 'Land-point-recce',
            name: 'Point Reconnaisance',
            template: 'k16e-air',
            geometries: [
              {
                aType: 1,
                name: 'Route in',
                uniqid: 'a11'
              },
              {
                aType: 0,
                name: 'Target Area',
                uniqid: 'a12'
              },
              {
                aType: 1,
                name: 'Route out',
                uniqid: 'a13'
              }
            ]
          },
          {
            uniqid: 'Land-cyber',
            name: 'Non spatial cyber',
            template: 'k16e-other'
          }
        ]
      },
      {
        category: 'Air',
        activities: [
          {
            uniqid: 'Air-transit',
            name: 'Transit',
            template: 'k16e-maritime',
            color: '#f33',
            geometries: [
              {
                aType: 1,
                name: 'Route',
                uniqid: 'aa7'
              }
            ]
          },
          {
            uniqid: 'Air-area-recce',
            name: 'Area Reconnaisance',
            template: 'k16e-air',
            color: '#5b0',
            geometries: [
              {
                aType: 1,
                name: 'Route in',
                uniqid: 'aa8'
              },
              {
                aType: 2,
                name: 'Flight Box',
                uniqid: 'aa9a'
              },
              {
                aType: 2,
                name: 'Target Area',
                uniqid: 'aa9b'
              },
              {
                aType: 1,
                name: 'Route out',
                uniqid: 'a10'
              }
            ]
          },
          {
            uniqid: 'Air-point-recce',
            name: 'Point Reconnaisance',
            template: 'k16e-air',
            geometries: [
              {
                aType: 1,
                name: 'Route in',
                uniqid: 'a11'
              },
              {
                aType: 0,
                name: 'Target Area',
                uniqid: 'a12'
              },
              {
                aType: 1,
                name: 'Route out',
                uniqid: 'a13'
              }
            ]
          },
          {
            uniqid: 'Air-cyber',
            name: 'Non spatial cyber',
            template: 'k16e-other'
          }
        ]
      },
      {
        category: 'Other',
        activities: [
          {
            uniqid: 'Other-precis-strike',
            name: 'Precision Strike',
            template: 'k16e-land',
            color: '#f0f',
            geometries: [
              {
                aType: 1,
                name: 'Route in',
                uniqid: 'aa1'
              },
              {
                aType: 0,
                name: 'Target Location',
                uniqid: 'aa2'
              },
              {
                aType: 1,
                name: 'Route out',
                uniqid: 'aa3'
              }
            ]
          },
          {
            uniqid: 'Other-point-recce',
            name: 'Point Reconnaisance',
            template: 'k16e-air',
            geometries: [
              {
                aType: 1,
                name: 'Route in',
                uniqid: 'a11'
              },
              {
                aType: 0,
                name: 'Target Area',
                uniqid: 'a12'
              },
              {
                aType: 1,
                name: 'Route out',
                uniqid: 'a13'
              }
            ]
          },
          {
            uniqid: 'Other-cyber',
            name: 'Non spatial cyber',
            template: 'k16e-other'
          }
        ]
      }
    ]
  }
]
