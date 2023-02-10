import ForceData from "./force-data"


/** a user-defined area, used for organising activities */
export interface Area {
  // user name for this area
  name: string,
  // which forces use this area
  usedBy: Array<ForceData['uniqid']>
  // the bounds of the area
  polygon: GeoJSON.Polygon
}

/** the parent wrapper for the set of areas */
export default interface AreaData {
  areas: Array<Area>
}