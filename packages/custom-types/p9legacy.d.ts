import {
  PLANNING_MESSAGE,
  ADJUDICATION_OUTCOMES
  } from '@serge/config'
import { Geometry } from 'geojson'
import { Asset, CoreMessage, PlannedActivityGeometry, ForceData,  CoreOutcome, PlanningActivity, PlatformTypeData, INTERACTION_SHORT_CIRCUIT } from '.'

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
    /** 
     * perceivedLocation: The string will be parsed to JSON.
     * We'll use special values `t` to pull in the current location,
     * `x` to clear the location, and [number, number] to
     * specify a location
     */
    perceivedLocation?: string
  }
  
  export interface LocationOutcome extends CoreOutcome  {
    /** new location (lat, long) */
    location: [number, number]
  }
  
  export interface HealthOutcome extends CoreOutcome  {
    /** new health */
    health: number
    /** c4 ability */
    c4: 'Unchanged' | 'None' | 'Degraded' | 'Operational'
    /** when repair will be complete by */
    repairComplete?: 'I/R' | '1' | '2' | '3'
  }
  
  export type LocationOutcomes = LocationOutcome[]
  export type HealthOutcomes = HealthOutcome[]
  export type PerceptionOutcomes = PerceptionOutcome[]

/** Core elements of planning messages. These are the fields
 * we directly manipulate, or expect to be present. It is
 * defined as a `core` type to avoid the [property: string]
 * undefined elements that allow mis-named objects to fall
 * through TypeScript checking.
 */
export interface PlanningMessageStructureCore {
    /** unique id for this message thread 
     * Note: we use upper case Reference since the send-message logic expects that 
     * Note: in order to auto gen instances
    */
    Reference: string
    /** title for this plan */
    title: string
    /** start-time of this plan */
    startDate: string
    /** end-time of this plan */
    endDate: string
    /** any location-related data */
    location?: PlannedActivityGeometry[]
    /** own assets involved in plan */
    ownAssets?: Array<{ asset: Asset['uniqid'], number: number, missileType?: string }>
    /** other assets involved in plan */
    otherAssets?: Array<{ asset: Asset['uniqid'], number?: number, missileType?: string }>
    /** id of the activity being conducted */
    activity: PlanningActivity['uniqid']
  }

  /** extend planning message to allow template entries
 */
export interface PlanningMessageStructure extends PlanningMessageStructureCore {
    /** allow template properties */
    [property: string]: any
}

/** messages being used in support of planning */
export interface MessagePlanning extends CoreMessage {
    readonly messageType: typeof PLANNING_MESSAGE,
    message: PlanningMessageStructure
}

/** extra details regarding details of interactions 
 * NOTE: we use `From` details to denote who is adjudicating the interactions
*/
export interface InteractionDetails {
    /** unique id for this interaction (includes orders and geometries) */
    readonly id: string
    /** whether adjudication of this interaction is complete */
    complete?: boolean
    /** whether this interaction has been slipped */
    skipped?: boolean
    /** if this is in response to an event, rather than interaction */
    event?: INTERACTION_SHORT_CIRCUIT
    /** first set of orders this relates to */
    readonly orders1: string
    /** id of activity in first set of orders (if known) */
    readonly orders1Geometry?: PlannedActivityGeometry['uniqid']
    /** second (optional) set of orders this relates to */
    readonly orders2?: string
    /** id of activity in first set of orders (if known) */
    readonly orders2Geometry?: PlannedActivityGeometry['uniqid']
    /** other assets associated with this interaction */
    otherAssets?: Array<Asset['uniqid']>
    /** interaction start time */
    readonly startTime: string
    /** interaction end time */
    readonly endTime: string
    /** geometry describing area of interaction */
    readonly geometry?: Geometry
}

/** messages being used in support of planning */
export interface MessagePlanning extends CoreMessage {
    readonly messageType: typeof PLANNING_MESSAGE,
    message: PlanningMessageStructure
}

/** an instance of feedback to a particular force
 */  
export interface PerForceNarrative {
    force: ForceData['uniqid']
    feedback: string
}

/** the outcome-related content of an adjudication */
export interface MessageAdjudicationOutcomes {
    readonly messageType: typeof ADJUDICATION_OUTCOMES,
    /** ref of the adjudication this refers to */
    readonly Reference: string
    readonly healthOutcomes: HealthOutcomes
    readonly locationOutcomes: LocationOutcomes
    readonly perceptionOutcomes: PerceptionOutcomes
    /** whether umpire considers this interaction as important */
    important: boolean
    /** other assets associated with this interaction,
     * stored here temporarily, before being moved
     * to InteractionDetails
     */
    otherAssets?: Array<Asset['uniqid']>
    narrative?: string
    perForceNarratives?: PerForceNarrative[]
}