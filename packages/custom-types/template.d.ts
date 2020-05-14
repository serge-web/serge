export default interface Template {
  label: string,
  value: {
    _id: string,
    _rev: string,
    completed: boolean,
    details: object,
    lastUpdated: string,
    title: string    
  }
}