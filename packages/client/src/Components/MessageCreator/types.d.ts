interface Props {
  schema: any,
  curChannel: string,
  privateMessage: string
  /** 
   * helper function, to generate a new reference for the indicated force
   */
  generateNextReference?: {(force:string): number}
}
export default Props
