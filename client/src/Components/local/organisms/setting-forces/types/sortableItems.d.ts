import { PlatformTypeData, Asset } from '@serge/custom-types'
import { PLATFORM_ITEM, ASSET_ITEM } from '../constants'

export interface PlatformItemType extends PlatformTypeData {
  type: typeof PLATFORM_ITEM
  id: string
}

export interface ForceItemType extends Asset {
  type: typeof ASSET_ITEM
  id: string
}

export type ListItemType = PlatformItemType | ForceItemType
