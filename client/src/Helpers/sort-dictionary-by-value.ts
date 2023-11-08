// sort the platform dictionary, using this algorithm:
// https://stackoverflow.com/a/1069840/92441
const sortDictionaryByValue = (dict: Record<string, string>): Record<string, string> => {
  // convert dictionary to array
  const sortedDict = []
  for (const key in dict) {
    sortedDict.push([key, dict[key]])
  }
  // sort array by second field
  sortedDict.sort(function (a, b) {
    return a[1].localeCompare(b[1])
  })
  // revert to dictionary
  const objSorted = {}
  sortedDict.forEach(function (item) {
    objSorted[item[0]] = item[1]
  })
  return objSorted
}

export default sortDictionaryByValue
