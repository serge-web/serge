import { H3Index } from 'h3-js'

type H3pos = number[]

export interface SergeHex3 {
  centreLatLng: H3pos
  name: string // human-readable index
  index: H3Index // h3 index
  styles: number // logical or of style numbers
  fillColor?: string
  x: number
  y: number
  poly: H3pos[]
}

export type SergeGrid3 = SergeHex3[]