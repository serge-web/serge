import _ from 'lodash'

const calcComplete = (data: any): any => {
  // pagination completion bar at top of gameDesigner page
  const flatten: any = (n: any) => {
    if (_.isBoolean(n)) return true
    if (_.isNumber(n) && n > 0) return true
    if (_.isEmpty(n)) return null // force show empty array
    return (_.isArray(n) || _.isObject(n)) ? _.flatMapDeep(n, flatten) : n
  }

  const omittedData = _.omit(data, ['complete', 'selectedForce', 'selectedChannel', 'dirty'])

  const inputResults = _.flatMapDeep(omittedData, flatten)

  return inputResults.every((item: any) => (item !== null && item.length > 0) || item)
}

export default calcComplete
