import { RouteStatus } from ".";

/**
 * note: for some of the fields in this structure, it's the perceived name/type/force,
 * not the actual one
 */
export default interface SelectedAsset {
    uniqid: string,
    name: string,
    type: string,
    force: string,
    controlledBy?: Array<string>,
    condition: string,
    visibleTo: Array<string>
    status?: RouteStatus,
    /** flag for if player is free to relocate this asset to a suitable cell in turn zero */
    locationPending?: boolean
  }