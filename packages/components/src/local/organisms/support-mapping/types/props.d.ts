import { LatLngExpression, LatLngBounds } from 'leaflet'
import { AssetRow } from '../../planning-assets/types/props'

export default interface PropTypes {
  bounds?: LatLngBounds
  position?: LatLngExpression
  zoom: number
  ownAssets: AssetRow[]
  opAssets: AssetRow[]
  filterApplied: boolean
  setFilterApplied
  setSelectedAssets: React.Dispatch<React.SetStateAction<string[]>>
  /** id of selected asset */
  selectedAssets: string[]
  /** list of forces. User for `viewAs` feature */
  forces: ForceData[]
  /** callback for umpire clicking on view-as button */
  viewAsCallback?: { (force: ForceData['uniqid']): void }
  /** current value of `view as` */
  viewAsForce?: string
  /** tree of menu items */
  actionItems?: MappingMenuItem[]
  /** callback, for if a map action is clicked */
  actionCallback?: {(force: string, category: string, actionId: string): void}
  /**
    * Optional mapping structure with children component
    */
  children?: JSX.Element
}

export interface MappingMenuItem {
  name: string
  id: string
  color?: string
  children?: MappingMenuItem[]
}
