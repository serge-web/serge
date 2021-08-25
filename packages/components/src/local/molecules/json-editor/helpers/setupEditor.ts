import { RefObject } from 'react'

// @ts-ignore
import JSONEditor from '@json-editor/json-editor'
import { Editor } from '@serge/custom-types'

const setupEditor = (editor: Editor | null, schema: any, ref: RefObject<HTMLDivElement>, disabled: boolean): Editor | null => {
  if (editor !== null) {
    editor.destroy()
    editor = null
  }

  if (schema && schema.type) {
    const newEditor = new JSONEditor(ref.current, {
      schema: schema,
      theme: 'bootstrap4',
      disable_collapse: true,
      disable_edit_json: true,
      disable_properties: true,
    }) as Editor
    !disabled ? newEditor.disable() : newEditor.enable()
    return newEditor
  }

  return null
}

export default setupEditor
