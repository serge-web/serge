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
   * Header border color
   */
  borderColor?: string;

  isSent?: boolean
}
