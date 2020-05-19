export default interface SelectedAsset {
    uniqid: string,
    name: string,
    position: {
      lat: number,
      lng: number
    },
    type: string,
    force: string,
    controlledBy: Array<string>,
    condition: string,
    visibleTo: Array<string>
    status: {
      speedKts: number,
      state: string
    }
  }