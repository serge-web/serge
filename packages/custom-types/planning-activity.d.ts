import { GeometryType } from "@serge/config"
import { Asset, PlatformTypeData } from "."
import ForceData from "./force-data"
import { TemplateBody } from "./template"

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
  activities: Array<PlanningActivity>
}


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

/** structure for how we store date in props */
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

/** object that describes the structure of
 * an activity that can be planned in the PlanningChannel
 */
export interface PlanningActivity {
  /**
   * id for this activity (unique to force and domain)
   */
  uniqid: string
  /**
   *  id for this type of activity (used for interaction checking)
   */
  actId: string
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
  /**
   * for interaction, return all OpFor assets contained within Geometries for this activity
   */
  provideSpatialAssets?: boolean
  /** 
   * list of activity types that this activity interacts with
   */
  interactsWith?: Array<PlanningActivity['actId']>
}

export interface CoreOutcome {
  /** asset the outcome relates to */
  asset: Asset['uniqid']

  /** description of outcome */
  narrative?: string

  /** private record of outcome */
  private?: string
}

export interface PerceptionOutcome extends CoreOutcome {
  /** force with new perception */
  force: ForceData['uniqid']
  /** new perceived force or undefined for unknown */
  perceivedForce?: ForceData['uniqid']
  /** new perceived platform type or undefined for unknown */
  perceivedType?: PlatformTypeData['uniqid']
  /** new perceived health type or undefined for unknown */
  perceivedHealth?: Asset['health']
  /** new perceived name or undefined for unknown */
  perceivedName?: ForceData['uniqid']
}

export interface LocationOutcome extends CoreOutcome  {
  /** new location */
  location: [number, number]
}

export interface HealthOutcome extends CoreOutcome  {
  /** new location (zero for destroyed) */
  health: number
}

export type LocationOutcomes = LocationOutcome[]
export type HealthOutcomes = HealthOutcome[]
export type PerceptionOutcomes = PerceptionOutcome[]

/** top level database object for storing activity definitions */
/** collection of map annotations */
export interface ActivityTypeData {
  activities: PerForcePlanningActivitySet[]
}