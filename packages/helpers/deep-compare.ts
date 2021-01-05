import { isEqual } from 'lodash'

const deepCompare = (obj1: any, obj2: any): boolean => {
  return isEqual(obj1, obj2)
}

export default deepCompare
