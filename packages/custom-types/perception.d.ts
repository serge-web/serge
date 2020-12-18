export default interface Perception {
  /**
   *  the force this force thiks the asset belongs to
   */
  force?: string,
  /** 
   * the platform-type this force thinks the asset is 
  */
  type?: string,
  /** 
   * what this force thinks the asset is called 
   */
  name?: string,
  /**
   * the force that can perceive this asset
   */
  by: string
}
