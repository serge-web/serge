import { PerForcePlanningActivitySet } from '@serge/custom-types'

export const perForceMockActivityData: PerForcePlanningActivitySet[] = [
  {
    force: 'F-Blue',
    groupedActivities: [
      {
        category: 'Maritime',
        activities: [
          {
            uniqid: 'precis-strike',
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
            uniqid: 'area-strike',
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
            uniqid: 'transit',
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
            uniqid: 'area-recce',
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
                uniqid: 'aa9'
              },
              {
                aType: 2,
                name: 'Target Area',
                uniqid: 'aa9'
              },
              {
                aType: 1,
                name: 'Route out',
                uniqid: 'a10'
              }
            ]
          },
          {
            uniqid: 'point-recce',
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
            uniqid: 'cyber',
            name: 'Non spatial cyber',
            template: 'k16e-other'
          }
        ]
      },
      {
        category: 'Land',
        activities: [
          {
            uniqid: 'precis-strike',
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
            uniqid: 'area-strike',
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
            uniqid: 'transit',
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
            uniqid: 'area-recce',
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
                uniqid: 'aa9'
              },
              {
                aType: 2,
                name: 'Target Area',
                uniqid: 'aa9'
              },
              {
                aType: 1,
                name: 'Route out',
                uniqid: 'a10'
              }
            ]
          },
          {
            uniqid: 'point-recce',
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
            uniqid: 'cyber',
            name: 'Non spatial cyber',
            template: 'k16e-other'
          }
        ]
      },
      {
        category: 'Air',
        activities: [
          {
            uniqid: 'precis-strike',
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
            uniqid: 'area-strike',
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
            uniqid: 'transit',
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
            uniqid: 'air-recce',
            name: 'Air Reconnaisance',
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
            uniqid: 'point-recce',
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
            uniqid: 'cyber',
            name: 'Non spatial cyber',
            template: 'k16e-other'
          }
        ]
      },
      {
        category: 'Other',
        activities: [
          {
            uniqid: 'precis-strike',
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
            uniqid: 'area-strike',
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
            uniqid: 'area-recce',
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
                uniqid: 'aa9'
              },
              {
                aType: 2,
                name: 'Target Area',
                uniqid: 'aa9'
              },
              {
                aType: 1,
                name: 'Route out',
                uniqid: 'a10'
              }
            ]
          },
          {
            uniqid: 'point-recce',
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
            uniqid: 'cyber',
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
            uniqid: 'precis-strike',
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
            uniqid: 'area-strike',
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
            uniqid: 'transit',
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
            uniqid: 'precis-strike',
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
            uniqid: 'point-recce',
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
            uniqid: 'cyber',
            name: 'Non spatial cyber',
            template: 'k16e-other'
          }
        ]
      },
      {
        category: 'Air',
        activities: [
          {
            uniqid: 'transit',
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
            uniqid: 'area-recce',
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
                uniqid: 'aa9'
              },
              {
                aType: 2,
                name: 'Target Area',
                uniqid: 'aa9'
              },
              {
                aType: 1,
                name: 'Route out',
                uniqid: 'a10'
              }
            ]
          },
          {
            uniqid: 'point-recce',
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
            uniqid: 'cyber',
            name: 'Non spatial cyber',
            template: 'k16e-other'
          }
        ]
      },
      {
        category: 'Other',
        activities: [
          {
            uniqid: 'precis-strike',
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
            uniqid: 'point-recce',
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
            uniqid: 'cyber',
            name: 'Non spatial cyber',
            template: 'k16e-other'
          }
        ]
      }
    ]
  }
]
