
export interface PerceptionForm {
    populate: {
      perceivedForce: Array<string>
      perceivedType: Array<string>
    }
    values: {
      perceivedForceVal: string
      perceivedTypeVal: string
    }
  }

export interface PlanTurnForm {
    populate: {
      status: Array<string>
      speed: Array<number>
    }
    values: {
      statusVal: string
      speedVal: number
      turnsVal: number
    }
  }

export interface AdjudicateTurnForm {
    populate: {
      status: Array<string>
      speed: Array<number>
      visibleTo: Array<string>
      condition: Array<string>
    }
    values: {
      plannedRouteStatusVal: string
      statusVal: string
      speedVal: number
      visibleToVal: string
      conditionVal: string
    }
  }
