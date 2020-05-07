export default interface ComponentSelector {
  (type: string, option: string | number, value: string | number): any
}
