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
  Planning = 'planning',
  Pending = 'pending',
  Accepted = 'accepted',
  Rejected = 'rejected'
}