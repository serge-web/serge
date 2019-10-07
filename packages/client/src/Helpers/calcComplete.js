import _ from "lodash";

export default function calcComplete(data) {
  // pagination completion bar at top of gameDesigner page
  let flatten = (n) => {
    if (_.isBoolean(n)) return true;
    if (_.isNumber(n) && n > 0) return true;
    if (_.isEmpty(n)) return null; // force show empty array
    return (_.isArray(n) || _.isObject(n)) ? _.flatMapDeep(n, flatten) : n;
  };

  let omittedData = _.omit(data, ['complete', 'selectedForce', 'selectedChannel', 'dirty']);

  let inputResults = _.flatMapDeep(omittedData, flatten);

  return inputResults.every((item) => (item !== null && item.length > 0) || item);
}
