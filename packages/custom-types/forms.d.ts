import ColorOption from './color-option'
import SergeHex from './serge-hex'
import { PlanningStates } from '@serge/config'

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

/** message for when player has planned new turn of data */
export interface NewTurnValues {
  state: string
  speed: number
  route: Array<SergeHex<{}>>
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

export interface VisibilityFormData {
  assetId: string
  populate: Array<ColorOption>
  values: Array<string>
}

