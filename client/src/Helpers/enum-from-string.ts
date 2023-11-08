
// method from here: https://stackoverflow.com/questions/17380845/how-do-i-convert-a-string-to-enum-in-typescript
const enumFromString = <T> (enm: { [s: string]: T}, value: string): T | undefined => {
  return (Object.values(enm) as unknown as string[]).includes(value)
    ? value as unknown as T
    : undefined
}
export default enumFromString
