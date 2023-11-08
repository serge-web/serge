import ForceData from './force-data'

/** a user-defined area, used for organising activities */
export interface Area {
  // user name for this area
  name: string
  // the bounds of the area. Note that GeoJSON stores them in lng/lat order
  polygon: GeoJSON.Polygon
}

export interface AreaCategory {
  // name for this category
  name: string
  // color for this category
  color: string
  // areas
  areas: Array<Area>
  // which forces use this category
  usedBy: Array<ForceData['uniqid']>
}

/** the parent wrapper for the set of areas */
export default interface AreaData {
  areas: Array<AreaCategory>
}
