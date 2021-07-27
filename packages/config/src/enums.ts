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

/** TODO: remove this
 * Temporary classifier for which dataset is in use
 */
 export enum Domain {
  ATLANTIC = 'Atlantic',
  GULF = 'Gulf'
}

/** types of special channel */
export enum SpecialChannelTypes {
  CHANNEL_MAPPING = 'mapping',
  CHANNEL_COLLAB_EDIT = 'collab-edit',
  CHANNEL_COLLAB_RESPONSE = 'collab-response'
}

/** General terrain type. More relaxed than
 * cell.terrain.  Used for determining 
 * achievable cells
 */
export enum Terrain {
  LAND = 'land',
  SEA = 'sea'
}

/** states for a Request for Information */
export enum RFI_States {
  // request sent, no owner
  Pending = 'Pending',
  // someone has taken ownership
  InProgress = 'In Progress',
  // response submitted for review
  PendingReview = 'Pending Review',
  // response accepted by RFI manager 
  Released = 'Released'
}

/** who is required to give asset an initial location */
export enum LaydownTypes {
  /** the umpire (game designer) can position asset */
  UmpireLaydown = 'Umpire laydown',
  /** the player controlling the asset can position it */
  ForceLaydown = 'Force laydown',
  Fixed = 'Fixed'
}

/** the phases a collaborative message goes through before
 * being approved to send
 */
export enum CollaborativeMessageStates {
  /**
   * message is waiting to be allocated to owner
   */
  Unallocated = 'Unallocated',
  /**
   * message with owner
   */
  InProgress = 'In progress',
  /**
   * owner finished editing, waiting for review
   */
  PendingReview = 'Pending review',
  /**
   * approved and released
   */
  Released = 'Released',
  /**
   * approved and released
   */
  Rejected = 'Rejected'
}

/** the phases of an asset that is
 * available for movement by a player during
 * force laydown
 *
 */
export enum LaydownPhases {
  // we're not in laydown phase
  NotInLaydown = 'not-in-laydown',
  // can't be moved
  Immobile = 'Immobile',
  // can be moved, but hasn'd
  Unmoved = 'Unmoved',
  // has moved
  Moved = 'Moved'
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
