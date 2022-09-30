import ForceData from "./force-data"
import { TemplateBody } from "./template"
import { GeometryType } from "@serge/config"

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
