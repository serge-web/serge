import { RefObject } from 'react'
import { JSONEditor } from '@json-editor/json-editor';
import { Editor } from '@serge/custom-types'
import { configDateTimeCustomValidation } from './jsonValidation'

const setupEditor = (editor: Editor | null, schema: any, ref: RefObject<HTMLDivElement>, jsonEditorConfig?: any): Editor | null => {
  if (editor !== null) {
    editor.destroy()
    editor = null
  }

  configDateTimeCustomValidation()

  const disableCollapse = 'disable_collapse'
  const disableEditJson = 'disable_edit_json'
  const disableProperties = 'disable_properties'
  const disableArrayReOrder = 'disable_array_reorder'
  const disableArrayAdd = 'disable_array_add'
  const disableArrayDelete = 'disable_array_delete'
  const disableArrayDeleteLastRow = 'disable_array_delete_last_row'
  const promptBeforeDelete = 'prompt_before_delete'

  if (schema && schema.type && ref.current) {
    const newEditor = new JSONEditor(ref.current, {
      schema: schema,
      theme: 'bootstrap4',
      [disableCollapse]: true,
      [disableEditJson]: true,
      [disableProperties]: true,
      [disableArrayDeleteLastRow]: true,
      [promptBeforeDelete]: false,
      [disableArrayReOrder]: !!jsonEditorConfig.disableArrayReOrder,
      [disableArrayAdd]: !!jsonEditorConfig.disableArrayAdd,
      [disableArrayDelete]: !!jsonEditorConfig.disableArrayDelete
    }) as Editor
    return newEditor
  }

  return null
}

export default setupEditor
