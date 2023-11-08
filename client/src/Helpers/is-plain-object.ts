export default function isPlainObject (data: any): boolean {
  return typeof data === 'object' && !!data &&
    Object.prototype.toString.call(data) === '[object Object]'
}
