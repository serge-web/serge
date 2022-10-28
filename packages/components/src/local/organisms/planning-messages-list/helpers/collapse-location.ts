import { deepCopy } from '@serge/helpers'

export const collapseLocation = (document: Record<string, any>): Record<string, any> => {
  const res = deepCopy(document)
  if (res.location) {
    res.location = JSON.stringify(res.location)
  }
  return res
}

export const expandLocation = (document: Record<string, any>): Record<string, any> => {
  const res = deepCopy(document)
  if (res.location) {
    res.location = JSON.parse(res.location)
  }
  return res
}