import { Terrain } from '@serge/config'

export interface TerrainType {
  terrain: Terrain
  type: string
  fillColor: string
}

/** lookup for types to styles */
const typeFor = (type: number, v2: boolean): TerrainType => {
  if (v2) {
    const cols = ['#F0E68C','#1E90FF','#87CEFA','#E0FFFF','#fff','#00f']
    switch (type) {
      case 0: return { terrain: Terrain.LAND, type: 'land', fillColor: cols[type] }
      case 1: return { terrain: Terrain.SEA, type: 'shallow', fillColor: cols[type] }
      case 2: return { terrain: Terrain.SEA, type: 'sea', fillColor: cols[type] }
      case 3: return { terrain: Terrain.SEA, type: 'deep', fillColor: cols[type] }
      case 4: return { terrain: Terrain.SEA, type: 'medium', fillColor: cols[type] }
      case 5: return { terrain: Terrain.SEA, type: 'heavyshipping', fillColor: cols[type] }
      default: return { terrain: Terrain.SEA, type: 'sea', fillColor: '#fff' }
    }
  } else {
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
}

export default typeFor
