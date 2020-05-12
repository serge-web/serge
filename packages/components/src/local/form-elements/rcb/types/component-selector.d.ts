export default interface ComponentSelector {
  (
    type: string,
    option: string | number,
    value: string | number,
    postBack: any,
    name?: string
  ): any
}
