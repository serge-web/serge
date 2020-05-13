import Option from "../types/option";

export default interface ComponentSelector {
  (
    type: string,
    option: number | string | Option,
    value: any,
    postBack: any,
    name?: string
  ): any
}
