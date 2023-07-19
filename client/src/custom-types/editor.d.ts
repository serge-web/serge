interface EditorOptions {
  disable_array_add: boolean
  disable_array_delete: boolean
  disable_array_reorder: boolean
  disable_collapse: boolean
  disable_edit_json: boolean
  disable_properties: boolean
  prompt_before_delete: boolean
  schema: { [property: string]: string }
  theme: string
}

interface Editor {
  [property: string]: any
  // eslint-disable-next-line @typescript-eslint/ban-types
  destroy: Function
  /** used to put a document into the editor */
  // eslint-disable-next-line @typescript-eslint/ban-types
  setValue: Function
  /** function called when focus leaves the editor. Contains the form elements */
  getValue: ()=> {
    [property: string]: any
    content: string
  }
  on: (event: 'change', cb: (val: string) => void) => void
  off: (event: 'change', cb: (val: string) => void) => void
  /** whether the editor is disabled or not */
  disabled: boolean
  options: EditorOptions
}

export default Editor
