export default interface Props {
  /**
   * Header item title
   */
  title?: string;
  /**
   * Message timestamp
   */
  timestamp?: string;
  /**
   * Message sender role
   */
  role?: string;
  /**
   * Message type
   */
  messageType?: string;
  /**
   * Message read state
   */
  hasBeenRead?: boolean;
  /**
   * force that sent message
   */
  authorForceId: string;
  /**
   * force of logged in player
   */
  playerForceId: string
  /** list of forces 
   * // TODO: Ian thinks this should eventually be replaced by ForceColors object
   */
  forces?: Array<any>;
}
