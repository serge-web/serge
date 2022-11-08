import { PlannedActivityGeometry } from '@serge/custom-types'
import { deepCopy } from '@serge/helpers'

export const collapseLocation = (document: Record<string, any>): Record<string, any> => {
  const res = deepCopy(document)
  const parent = res.message || res
  if (parent && parent.location) {
    const loc = parent.location as PlannedActivityGeometry[]
    let str = ''
    loc.forEach((geom) => {
      str = str + '* ' + geom.uniqid + '\n'
    })
    parent.location = str
    parent.hiddenStore = JSON.stringify(loc)
  }
  return res
}

export const expandLocation = (document: Record<string, any>): Record<string, any> => {
  const res = deepCopy(document)
  const parent = res.message || res
  if (parent && parent.hiddenStore && typeof parent.location === 'string') {
    // re-inject the location data
    parent.location = JSON.parse(parent.hiddenStore)
    // and delete temporary object
    delete parent.hiddenStore
  }
  return res
}
