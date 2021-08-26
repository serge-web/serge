interface Editor {
  [property: string]: any,
  destroy: Function,
  /** used to put a document into the editor */
  setValue: Function,
  /** function called when focus leaves the editor. Contains the form elements */
  getValue: ()=> {
    [property: string]: any,
    content: string
  },
  on: (event: 'change', cb: (val: string) => void) => void
  off: (event: 'change', cb: (val: string) => void) => void
  /** whether the editor is disabled or not */
  disabled: boolean
}

export default Editor
