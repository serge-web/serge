/**
 * list the possible phases in a wargame
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

/** the initial state for new messages in a collab edit channel */
export enum InitialStates {
  PENDING_REVIEW = 'PENDING_REVIEW',
  UNALLOCATED = 'UNALLOCATED'
}

/** types of special channel */
export enum SpecialChannelTypes {
  CHANNEL_COLLAB = 'collab',
  CHANNEL_CHAT = 'chat',
  CHANNEL_CORE_MAPPING = 'core mapping'
}

/** types of extra column to be shown in collab editing */
export enum SpecialChannelColumns {
  LOCATION = 'location'
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

export enum AdminTabs {
  Overview = 'overview',
  Forces = 'forces',
  Channels = 'channels',
  Templates = 'templates'
}

export enum TemplateTab {
  Preview = 'Preview Form',
  Visual = 'Visual Form Builder'
}
