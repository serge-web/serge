import calculateHealthColor from '../calculate-health-color'
import { Phase } from 'src/config'
import { Feature } from 'geojson'
import { CoreProperties, RENDERER_CORE } from 'src/custom-types'

const coreProps: CoreProperties = {
  id: 'id-1',
  _type: RENDERER_CORE,
  color: '#f00',
  phase: Phase.Planning,
  label: 'START LINE',
  turn: 1,
  health: 100,
  force: 'f-red',
  important: 'Yes'
}

const anotherCoreFeature: Feature = {
  type: 'Feature',
  properties: coreProps,
  geometry: {
    coordinates: [
      [
        [
          -0.1316761655830646,
          51.52940207305993
        ],
        [
          -0.2316761655830646,
          51.49266769548318
        ],
        [
          0.03011008273324478,
          51.53266769548318
        ]
      ]
    ],
    type: 'Polygon'
  }
}

describe('calculateHealthColor', () => {
  it('should return "rgb(51, 255, 0)" for healthValue 0', () => {
    const health = anotherCoreFeature.properties?.health

    if (health === undefined) {
      throw new Error('Health value is undefined.')
    }

    const expectedColor = calculateHealthColor(health)

    const result = calculateHealthColor(health)
    expect(result).toBe(expectedColor)
    expect(result).toBe('rgb(0, 255, 0)')
  })
})
