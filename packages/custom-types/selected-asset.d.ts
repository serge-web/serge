/**
 * note: for some of the fields in this structure, it's the perceived name/type/force,
 * not the actual one
 */
export default interface SelectedAsset {
    uniqid: string,
    name: string,
    type: string,
    force: string,
    perceivedForce: string,
    controlledBy: Array<string>,
    condition: string,
    visibleTo: Array<string>
    status: {
      speedKts: number,
      state: string
    }
  }