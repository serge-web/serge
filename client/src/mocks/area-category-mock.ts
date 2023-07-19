import { AreaCategory } from 'src/custom-types'

export const cAreas: AreaCategory[] = [
  {
    name: 'Category-1',
    color: 'aaf',
    usedBy: [
      'f-blue',
      'f-red'
    ],
    areas: [
      {
        name: 'area-1',
        polygon: {
          type: 'Polygon',
          coordinates: [
            [
              [
                42.3586,
                52.15751
              ],
              [
                42.3586,
                44.88566
              ],
              [
                53.45622,
                44.885665
              ],
              [
                53.45622,
                52.15751
              ],
              [
                42.3586,
                52.15751
              ]
            ]
          ]
        }
      },
      {
        name: 'area-2',
        polygon: {
          type: 'Polygon',
          coordinates: [
            [
              [
                32.3586,
                42.15751
              ],
              [
                32.3586,
                34.88566
              ],
              [
                43.45622,
                34.885665
              ],
              [
                43.45622,
                42.15751
              ],
              [
                32.3586,
                42.15751
              ]
            ]
          ]
        }
      }
    ]
  }, {
    name: 'Category-2',
    color: 'afa',
    usedBy: [
      'f-blue'
    ],
    areas: [
      {
        name: 'area-3',
        polygon: {
          type: 'Polygon',
          coordinates: [
            [
              [
                32.3586,
                52.15751
              ],
              [
                32.3586,
                44.88566
              ],
              [
                43.45622,
                44.885665
              ],
              [
                43.45622,
                52.15751
              ],
              [
                32.3586,
                52.15751
              ]
            ]
          ]
        }
      },
      {
        name: 'area-4',
        polygon: {
          type: 'Polygon',
          coordinates: [
            [
              [
                22.3586,
                52.1575
              ],
              [
                22.3586,
                44.88566
              ],
              [
                33.45622,
                44.885665
              ],
              [
                33.45622,
                52.15751
              ],
              [
                22.3586,
                52.1575
              ]
            ]
          ]
        }
      },
      {
        name: 'area-5',
        polygon: {
          type: 'Polygon',
          coordinates: [
            [
              [
                44.342709,
                41.454939
              ],
              [
                44.342709,
                35.22708
              ],
              [
                52.319515,
                35.22708
              ],
              [
                52.319515,
                41.454939
              ],
              [
                44.342709,
                41.454939
              ]
            ]
          ]
        }
      }
    ]
  }
]
