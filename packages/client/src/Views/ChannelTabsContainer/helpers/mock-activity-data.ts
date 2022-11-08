import { PerForcePlanningActivitySet } from '@serge/custom-types'

export const perForceMockActivityData: PerForcePlanningActivitySet[] = [
  {
    force: 'F-Blue',
    groupedActivities: [
      {
        category: 'Maritime',
        activities: [
          {
            uniqid: 'maritime-ballisatic-strike',
            name: 'Ballistic Strike',
            template: 'k16e-land',
            color: '#f0f',
            geometries: [
              {
                aType: 1,
                name: 'Route to target',
                uniqid: 'ab1'
              }
            ]
          },
          {
            uniqid: 'maritime-precis-strike',
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
            uniqid: 'maritime-area-strike',
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
            uniqid: 'maritime-transit',
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
            uniqid: 'maritime-area-recce',
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
            uniqid: 'maritime-point-recce',
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
            uniqid: 'maritime-cyber',
            name: 'Non spatial cyber',
            template: 'k16e-other'
          }
        ]
      },
      {
        category: 'Land',
        activities: [
          {
            uniqid: 'land-ballisatic-strike',
            name: 'Ballistic Strike',
            template: 'k16e-land',
            color: '#f0f',
            geometries: [
              {
                aType: 1,
                name: 'Route to target',
                uniqid: 'ab1'
              }
            ]
          },
          {
            uniqid: 'land-precis-strike',
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
            uniqid: 'land-area-strike',
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
            uniqid: 'land-transit',
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
            uniqid: 'land-area-recce',
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
            uniqid: 'land-point-recce',
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
            uniqid: 'land-cyber',
            name: 'Non spatial cyber',
            template: 'k16e-other'
          }
        ]
      },
      {
        category: 'Air',
        activities: [
          {
            uniqid: 'air-precis-strike',
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
            uniqid: 'air-area-strike',
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
            uniqid: 'air-transit',
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
            uniqid: 'air-air-recce',
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
            uniqid: 'air-point-recce',
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
            uniqid: 'air-cyber',
            name: 'Non spatial cyber',
            template: 'k16e-other'
          }
        ]
      },
      {
        category: 'Other',
        activities: [
          {
            uniqid: 'other-precis-strike',
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
            uniqid: 'other-area-strike',
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
            uniqid: 'other-area-recce',
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
            uniqid: 'other-point-recce',
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
            uniqid: 'other-cyber',
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
            uniqid: 'maritime-precis-strike',
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
            uniqid: 'maritime-area-strike',
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
            uniqid: 'maritime-transit',
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
            uniqid: 'land-precis-strike',
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
            uniqid: 'land-point-recce',
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
            uniqid: 'land-cyber',
            name: 'Non spatial cyber',
            template: 'k16e-other'
          }
        ]
      },
      {
        category: 'Air',
        activities: [
          {
            uniqid: 'air-transit',
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
            uniqid: 'air-area-recce',
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
            uniqid: 'air-point-recce',
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
            uniqid: 'air-cyber',
            name: 'Non spatial cyber',
            template: 'k16e-other'
          }
        ]
      },
      {
        category: 'Other',
        activities: [
          {
            uniqid: 'other-precis-strike',
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
            uniqid: 'other-point-recce',
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
            uniqid: 'other-cyber',
            name: 'Non spatial cyber',
            template: 'k16e-other'
          }
        ]
      }
    ]
  }
]
