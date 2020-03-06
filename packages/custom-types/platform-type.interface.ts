import PlatformTypeData from './platform-type-data.interface'

export default interface PlatformType {
  complete: boolean,
  dirty: boolean,
  name: string,
  selectedType: string,
  platformTypes: Array<PlatformTypeData>
}