export interface TemplateBody {
  _id: string,
  _rev: string,
  completed: boolean,
  details: object,
  lastUpdated: string,
  title: string    
}

export interface TempletCreatorBody {
  details: object,
  _id: string
}

export default interface Template {
  label: string,
  value: TemplateBody
}

/** top level database object for storing activity definitions */
/** collection of map annotations */
export interface TemplateData {
  templates: TemplateBody[]
}