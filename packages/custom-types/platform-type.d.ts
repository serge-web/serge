import PlatformTypeData from './platform-type-data'

export default interface PlatformType {
  complete: boolean,
  dirty: boolean,
  name: string,
  selectedType: string,
  platformTypes: Array<PlatformTypeData>
}