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
  /** umpire has accepted planned route (even if it's umpire's replacement route) */
  Accepted = 'accepted',
  /** umpire has rejected planned route */
  Rejected = 'rejected'
}