interface Editor {
  [property: string]: any,
  destroy: Function,
  getValue: ()=> {
    [property: string]: any,
    content: string
  }
}

export default Editor
