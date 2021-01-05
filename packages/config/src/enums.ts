/**
 * list the possible phases in a wargame
 * TODO: the concept of phase isn't restricted to the mapping component.  It should be declared higher up the tree
 */
export enum Phase {
  /* players are planning their next turn
   */
  Planning = 'planning',
  /** umpire is resolving planned turns */
  Adjudication = 'adjudication'
}

/**
 * the possible states for a planned route
 */
export enum PlanningStates {
  /** umpire is planning steps */
  Planning = 'planning',
  /** umpire has planned steps, but not saved */
  Planned = 'planned',
  /** accept/reject decision is pending */
  Pending = 'pending',
  /** umpire has rejected planned route */
  Rejected = 'rejected',
  /** umpire has saved route */
  Saved = 'saved'
}

/**
 * the possible actions that can be applied to a route
 */
export enum PlanningCommands {
  /** umpire is happy with player route */
  Accept = 'accept',
  /** umpire wants to replace player route */
  Reject = 'reject',
  /** umpire wants to forget changes, and go back to player route */
  Revert = 'revert',
  /** umpire has chosen state/speed, and wants to plan the route */
  PlanRoute = 'plan-route',
  /** umpire has planned the turn */
  TurnPlanned = 'turn-planned',
  /** umpire is happy with current route */
  Save = 'save',
  /** umpire instead of dragging the pin, umpire wants to go back to choosing state/speed */
  ClearRoute = 'clear-route',
  /** umpire wants to revert to player's route, but still modify it */
  Cancel = 'cancel',
}