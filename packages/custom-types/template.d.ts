export interface TemplateBody {
  _id: string,
  _rev: string,
  completed: boolean,
  details: object,
  lastUpdated: string,
  title: string    
}

export default interface Template {
  label: string,
  value: TemplateBody
}