import { Terrain } from 'src/config'
import { H3Index } from 'h3-js'
import L from 'leaflet'

type H3pos = number[]

/** temporary structure used to cache the assorted label styles, while we develop
 * cell labelling
 */
export interface LabelStore {
  xy: string
  xyVals: number[]
  ctr: string
  latLon: string
}

/** definition of cell using h3 coords */
export interface SergeHex3 {
  centreLatLng: L.LatLng
  labelStore: LabelStore // collection of labels to display
  index: H3Index // h3 index
  terrain?: Terrain // 'land' or 'sea' (initially undefined)
  styles: number // logical or of style numbers
  fillColor?: string
  poly: H3pos[]
}

export type SergeGrid3 = SergeHex3[]
