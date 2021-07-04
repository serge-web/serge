import isPlainObject from './is-plain-object'

export default function isArrayOfObject (data: any): boolean {
  return Array.isArray(data) &&
    data.reduce((acc, val) =>
      Boolean(acc) && isPlainObject(val), true)
}
