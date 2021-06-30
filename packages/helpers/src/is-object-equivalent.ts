export default function isObjectEquivalent (a: Object, b: Object) {
  const aProps = Object.getOwnPropertyNames(a)
  const bProps = Object.getOwnPropertyNames(b)

  if (aProps.length !== bProps.length) {
    return false
  }

  for (let i = 0; i < aProps.length; i++) {
    const prop = aProps[i]
    if (a[prop] !== b[prop]) {
      return false
    }
  }

  return true
}
