import ForceData from "./force-data"

export interface ForceTemplateData {
  // the force 
  force: ForceData['uniqid']
  // list of missile types
  missiles?: string[]
  // list of cyber cards
  cards?: string[]
}

/** the parent wrapper for the force specific metadata */
export default interface ForceTemplateWrapper {
  forceMetadata: Array<ForceTemplateData>
}