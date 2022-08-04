import { Asset, AttributeValues, ForceData, RouteStatus } from ".";
import PlatformTypeData from "./platform-type-data";

/**
 * note: for some of the fields in this structure, it's the perceived name/type/force,
 * not the actual one
 */
export default interface SelectedAsset {
    readonly uniqid: Asset['uniqid'],
    contactId: string,
    /**
     * perceived name of selected asset 
     */
    name: string,
    /**
     * perceived type of asset, or undefined if type unknown
     */
    typeId: PlatformTypeData['uniqid'] | undefined
    /**
     * perceived force for selected asset
     * @TODO: sort out if it's force or name
     */
    forceId: ForceData['uniqid'],
    condition: string,
    visibleTo: Array<ForceData['uniqid']>
    status?: RouteStatus,
    attributes: AttributeValues
    /** flag for if player is free to relocate this asset to a suitable cell in turn zero */
    locationPending?: boolean
  }