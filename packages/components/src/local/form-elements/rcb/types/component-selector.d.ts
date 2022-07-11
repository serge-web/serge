export default interface ComponentSelector {
  (
    type: string,
    option: number | string | FormOption,
    value: any,
    postBack: any,
    name?: string,
    classes?: any,
  ): any
}
