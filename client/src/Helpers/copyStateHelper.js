export default function deepCopy (objectpassed) {
  // arrays return 'object' in js so any object or array will be looped to copy deeply.
  // strings, numbers and booleans are deep copied naturally, while any objects within arrays or objects
  // or objects within arrays are only copied shallowly.
  if (objectpassed === null || typeof objectpassed !== 'object') {
    return objectpassed
  }

  const temporaryStorage = objectpassed.constructor()

  for (const key in objectpassed) {
    temporaryStorage[key] = deepCopy((objectpassed[key]))
  }
  return temporaryStorage
}
