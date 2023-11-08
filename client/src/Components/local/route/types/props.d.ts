import { Route as RouteType } from 'src/custom-types'

export default interface PropTypes {
  /**
   * name of this platform
   */
  name: string
  /**
   *  the collated route data for hthis asset
   */
  route: RouteType
  /**
   * whether to show trimmed or full routes
   */
  trimmed: boolean
  /**
   * color for this route
   */
  color: string
  /**
   * if this is for the selected track
   */
  selected: boolean
  /**
   *  handler for clear route from selected turn
   */
  clearRouteHandler: {(turn: number): void}
}
