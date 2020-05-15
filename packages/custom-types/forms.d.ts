interface Status {
  name: string,
  mobile: boolean
}

interface Force {
  name: string,
  colour: string
}

export interface PerceptionFormPopulate {
  perceivedForce: Array<Force>
  perceivedType: Array<string>
}

export interface PerceptionFormValues {
  perceivedForceVal: string
  perceivedTypeVal: string
}

export interface PerceptionForm {
  populate: PerceptionFormPopulate
  values: PerceptionFormValues
}


export interface PlanTurnFormPopulate {
  status: Array<Status>
  speed: Array<number>
}

export interface PlanTurnFormValues {
  statusVal: Status
  speedVal: number
  turnsVal: number
}

export interface PlanTurnForm {
  populate: PlanTurnFormPopulate
  values: PlanTurnFormValues
}


export interface AdjudicateTurnFormPopulate {
  status: Array<Status>
  speed: Array<number>
  visibleTo: Array<Force>
  condition: Array<string>
}

export interface AdjudicateTurnFormValues {
  plannedRouteStatusVal: string
  statusVal: Status
  speedVal: number
  visibleToVal: Array<string>
  conditionVal: string
}

export interface AdjudicateTurnForm {
  populate: AdjudicateTurnFormPopulate
  values: AdjudicateTurnFormValues
}