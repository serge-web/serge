import ForceData from './force-data'

/** 
 * a geometry that can be planned (drawn) in the PlanningChannel
 */
export interface PlanningActivityGeometry {
  /**
   * the type of geometery that represents part of this activity
   */
  aType: GeometryType | string
  /** 
   * whether provision of this geometry is optional for the activity
   */
  optional?: boolean
  /** 
   * name for this geometry type, in domain language
   */
  name: string
  /** 
   * id for this activity geometry, 
   * so actual geometries can refer back to it
   */
  uniqid: string
}

/** 
 * instance of geometry for planning activity
 */
export interface PlannedActivityGeometry {
  /** 
   * id of the planning activity geometry that this shape relates to 
   */
  uniqid: PlanningActivityGeometry['uniqid']
  /**
   * the set of geometries that 
   */
  geometry: GeoJSON.Feature
}

/** structure for how we store data in props */
export interface PlannedProps {
  // combination of activity name & geometry name
  id: string
  startDate: string
  endDate: string
  // id of the Planning Activity Geometry that this element refers to
  geomId: string
  // human-readable summary of metadata, for popup 
  name: string
  // unix epoch, for quicker date comparison
  startTime: number
  // unix epoch, for quicker date comparison
  endTime: number
  /** force for this set of orders */
  force: ForceData['uniqid']

  /** this order is involved in a contact */
  inContact?: boolean
  /** contact for this order has been identified in the last turn */
  newContact?: boolean
  /** this geometry is to be considered in this turn */
  toBeConsidered?: boolean
}
