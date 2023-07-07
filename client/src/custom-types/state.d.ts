export default interface State {
  name: string,
  mobile: boolean,
  /** special mode, where asset can be dragged to any location */
  deploying?: boolean
}