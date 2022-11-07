import { deepCopy } from '@serge/helpers'

export const collapseLocation = (document: Record<string, any>): Record<string, any> => {
  const res = deepCopy(document)
  if (res.message && res.message.location) {
    res.message.location = JSON.stringify(res.message.location)
  }
  return res
}

export const expandLocation = (document: Record<string, any>): Record<string, any> => {
  const res = deepCopy(document)
  if (res.message && res.message.location && typeof res.message.location === 'string') {
    res.message.location = JSON.parse(res.message.location)
  }
  // hmm, in storybook we receive message not message plus details
  if (res.location && typeof res.location === 'string') {
    res.location = JSON.parse(res.location)
  }
  return res
}
