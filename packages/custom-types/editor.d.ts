interface Editor {
  [property: string]: any,
  destroy: Function,
  getValue: ()=> {
    [property: string]: any,
    content: string
  },
  on: (event: 'change', cb: (val: string) => void) => void
  off: (event: 'change', cb: (val: string) => void) => void
  disabled: boolean
}

export default Editor
