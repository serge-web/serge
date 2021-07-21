import platformTypes from "./platform-types.mock"
import { PlatformTypeData } from "@serge/custom-types"
import { kebabCase } from 'lodash'

const platformTypesByKey: {[property: string]: PlatformTypeData} = {}

for (const platformType of platformTypes) {
  platformTypesByKey[kebabCase(platformType.name).toLowerCase()] = platformType
}

export default platformTypesByKey
