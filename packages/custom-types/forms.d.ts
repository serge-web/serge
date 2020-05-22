import ColorOption from './color-option'

interface Status {
  name: string,
  mobile: boolean
}

interface Force {
  name: string,
  colour: string
}

export interface PerceptionFormPopulate {
  perceivedForce: Array<ColorOption>
  perceivedType: Array<string>
}

export interface PerceptionFormValues {
  perceivedNameVal: string
  perceivedForceVal: string
  perceivedTypeVal: string
  assetId: string
}

export interface PerceptionFormData {
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

export interface PlanTurnFormData {
  populate: PlanTurnFormPopulate
  values: PlanTurnFormValues
}


export interface AdjudicateTurnFormPopulate {
  status: Array<Status>
  speed: Array<number>
  visibleTo: Array<ColorOption>
  condition: Array<string>
}

export interface AdjudicateTurnFormValues {
  plannedRouteStatusVal: string
  statusVal: Status
  speedVal: number
  visibleToVal: Array<string>
  conditionVal: string
}

export interface AdjudicateTurnFormData {
  populate: AdjudicateTurnFormPopulate
  values: AdjudicateTurnFormValues
}