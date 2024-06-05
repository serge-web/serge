export interface TemplateBody {
  _id: string
  _rev?: string
  completed: boolean
  details: TemplateBodyDetails
  lastUpdated: string
  title: string    
}

interface TemplateBodyDetails {
  schema: Record<string, unknown>
  uischema: Record<string, unknown>
  title: string
}

export interface TempletCreatorBody {
  // eslint-disable-next-line @typescript-eslint/ban-types
  details: object
  _id: string
}

export default interface Template {
  label: string
  value: TemplateBody
}

/** top level database object for storing activity definitions */
/** collection of map annotations */
export interface TemplateData {
  selectedTemplate: string | TemplateBody
  name: string
  dirty: boolean
  templates: TemplateBody[]
}
