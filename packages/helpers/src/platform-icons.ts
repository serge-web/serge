import { PlatformTypeData } from '@serge/custom-types'

export interface PlatformStyle {
  name: PlatformTypeData['name']
  uniqid: PlatformTypeData['uniqid']
  icon: PlatformTypeData['icon']
}

/** produce an array of platform ids, names, and icons */
export default function platformIcons (platforms: PlatformTypeData[]): Array<PlatformStyle> {
  return platforms.map((platform: PlatformTypeData): PlatformStyle => {
    return {
      uniqid: platform.uniqid,
      name: platform.name,
      icon: platform.icon
    }
  })
}
