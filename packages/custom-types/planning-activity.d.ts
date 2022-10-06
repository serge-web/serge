import ForceData from "./force-data"
import { TemplateBody } from "./template"
import { GeometryType } from "@serge/config"
import { GeoJSON } from 'react-leaflet';

/**
 * collection of activities for a force
 */
export interface PerForcePlanningActivitySet {
  /** the force this set of activityes relates to */
  force: ForceData['uniqid']
  /** the grouped set of activities for this force */
  groupedActivities: GroupedActivitySet[]
}

export interface GroupedActivitySet {
  /** the category of activities (such as maritime, land, air) */
  category: string
  /** the set of activities for this category */
  activities: Array<PlanningActivity | PlanningActivity['uniqid']>
}


/** 
 * a geometry that can be planned (drawn) in the PlanningChannel
 */ 
export interface PlanningActivityGeometry {
  /**
   * the type of geometery that represents part of this activity
   */
  aType: GeometryType
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

/** structure for how we store date in props */
export interface PlannedProps {
  startDate: string
  endDate: string
  // optional unix epoch, for quicker date comparison
  startTime?: number
  // optional unix epoch, for quicker date comparison
  endTime?: number

  /** this order is involved in a contact */
  inContact?: boolean
  /** contact for this order has been identified in the last turn */
  newContact?: boolean
}

/** object that describes the structure of
 * an activity that can be planned in the PlanningChannel
 */
export interface PlanningActivity {
  /**
   * id for this activity
   */
  uniqid: string
  /** 
   * human readable name for this activity
   */
  name: string 
  /**
   * id of template to open on completion
   */
  template: TemplateBody['_id']
  /**
   *  list of geometries for this activity
   */
  geometries?: PlanningActivityGeometry[]
  /**
   * color for the activity
   */
  color?: ForceData['color']
}
