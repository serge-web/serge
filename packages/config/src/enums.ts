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

/** increasing permissions in a collaborative editing channel
 */
export enum CollaborativePermission {
  /** can */
  CannotCollaborate,
  CanEdit,
  CanSubmitForReview,
  CanApprove,
  CanRelease,
  CanUnClaim
}

/** 
 * the type of geometry that can represent planning activities
 */
 export enum GeometryType {
  point = 'Point',
  polyline = 'Polyline',
  polygon = 'Polygon'
}

/** the initial state for new messages in a collab edit channel */
export enum InitialStates {
  PENDING_REVIEW = 'PENDING_REVIEW',
  UNALLOCATED = 'UNALLOCATED'
}

/** types of special channel */
export enum SpecialChannelTypes {
  CHANNEL_MAPPING = 'mapping',
  CHANNEL_COLLAB = 'collab',
  CHANNEL_CHAT = 'chat'
}

/** types of extra column to be shown in collab editing */
export enum SpecialChannelColumns {
  LOCATION = 'location'
}

/** General terrain type. More relaxed than
 * cell.terrain.  Used for determining 
 * achievable cells
 */
export enum Terrain {
  LAND = 'land',
  SEA = 'sea'
}

/** style of label for hexes
 */
export enum CellLabelStyle {
  // 12.3N 32.3W
  LAT_LON_LABELS = 'lat_lon_labels',
  // A12
  X_Y_LABELS = 'x_y_labels',
  // 432
  CTR_LABELS = 'ctr_labels',
  // 35234fe5effffff
  H3_LABELS = 'h3_labels',
  // don't show labels
  BLANK = 'blank'
}

/** who is required to give asset an initial location */
export enum LaydownTypes {
  /** the umpire (game designer) can position asset */
  UmpireLaydown = 'Umpire laydown',
  /** the player controlling the asset can position it */
  ForceLaydown = 'Force laydown',
  Fixed = 'Fixed'
}

/** the phases a v3 collaborative message goes through before
 * being approved to send
 */
export enum CollaborativeMessageStates {
  /**
   * message is waiting to be allocated to owner
   */
  Unallocated = 'Unallocated',
  /**
   * non collab-editing (e.g. RFI) document being edited
   * //TODO: remove this when we retire RFI status board.
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
   * document cancelled 
   */
  Closed = 'Closed',
}

/** the commands that can be appled to a collaborative message
 */
export enum CollaborativeMessageCommands {
  SendForReview = 'Send for review',
  TakeOwnership = 'Take ownership',
  ReOpen = 'Re-open',
  Close = 'Close',
  Release = 'Release',
  RequestChanges = 'Request changes'
}

/** the ways in which turn numbers may be displayed */
export enum TurnFormats {
  // 0, 1, 2, 3
  Natural = 'Natural',
  // 0.1, 0.2, 1.1, 1.2
  TurnPairNumbers = 'Turn-Pair-Numbers',
  // 0.a, 0.b, 1.a, 1.b
  TurnPairLetters = 'Turn-Pair-Letters'
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

export enum AdminTabs {
  Overview = 'overview',
  PlatformTypes = 'platformTypes',
  Forces = 'forces',
  Channels = 'channels',
  Annotations = 'annotationIcons'
};
