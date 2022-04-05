import ForceData from "./force-data"

export default interface ColorOption {
  forceName: ForceData['name']
  // use null for force-id to ensure something is put in there,
  // and it's not just undefined because it's forgotten
  forceId: ForceData['uniqid'] | null
  colour: string
}