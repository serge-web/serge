import { Terrain } from '@serge/config'

export interface TerrainType {
  terrain: Terrain
  type: string
  fillColor: string
}

/** lookup for types to styles */
const typeFor = (type: number): TerrainType => {
  switch (type) {
    case 0: return { terrain: Terrain.LAND, type: 'land', fillColor: '#0f0' }
    case 1: return { terrain: Terrain.SEA, type: 'shallow', fillColor: '#9dd' }
    case 2: return { terrain: Terrain.SEA, type: 'sea', fillColor: '#0ff' }
    case 3: return { terrain: Terrain.SEA, type: 'deep', fillColor: '#0078c7' }
    case 4: return { terrain: Terrain.SEA, type: 'medium', fillColor: '#0a0' }
    case 5: return { terrain: Terrain.SEA, type: 'heavyshipping', fillColor: '#ED820E' }
    default: return { terrain: Terrain.SEA, type: 'sea', fillColor: '#fff' }
  }
}

export default typeFor
