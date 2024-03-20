// import { JSONEditor } from '@json-editor/json-editor'
// import { Editor } from 'src/custom-types'
// import { RefObject } from 'react'
// import { configDateTimeCustomValidation } from './jsonValidation'

// export type OnLocationEditorLoaded = (editorElm: HTMLDivElement) => void

// // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
// const setupEditor = (editor: Editor | null, schema: any, ref: RefObject<HTMLDivElement>,
//   jsonEditorConfig: Record<string, any>, 
//   showErrorsMode?: string): Editor | null => {
//   if (editor !== null) {
//     editor.destroy()
//     editor = null
//   }

//   configDateTimeCustomValidation()

//   const disableCollapse = 'disable_collapse'
//   const disableEditJson = 'disable_edit_json'
//   const disableProperties = 'disable_properties'
//   const disableArrayReOrder = 'disable_array_reorder'
//   const disableArrayAdd = 'disable_array_add'
//   const disableArrayDelete = 'disable_array_delete'
//   const disableArrayDeleteLastRow = 'disable_array_delete_last_row'
//   const promptBeforeDelete = 'prompt_before_delete'
//   const removeButtonLabel = 'remove_button_labels'
//   const showErrors = 'show_errors'

//   if (schema && schema.type && ref.current) {
//     if (schema.properties.location) {
//       // setTimeout(() => {
//       //   const hiddenStores = document.querySelectorAll('div[data-schemapath$="hiddenStore"]') as NodeListOf<HTMLDivElement>
//       //   Array.from(hiddenStores).forEach(hiddenStores => {
//       //     hiddenStores.style.display = 'none'
//       //   })

//       //   const locationSections = document.querySelectorAll('div[data-schemaid="locationArea"]') as NodeListOf<HTMLDivElement>
//       //   Array.from(locationSections).forEach(locationSection => {
//       //     // do not manipuate processed textarea
//       //     if (locationSection.childNodes.length === 3) {
//       //       return
//       //     }

//       //     locationSection.style.display = 'flex'
//       //     locationSection.style.alignItems = 'center'

//       //     const textArea = locationSection.firstChild as HTMLDivElement
//       //     textArea.style.width = '30%'

//       //     const editButton = document.createElement('button')
//       //     editButton.innerText = 'Edit'
//       //     editButton.name = 'editInLocation'
//       //     editButton.classList.add('btn', 'btn-secondary', 'json-editor-btn-add', 'json-editor-btntype-add')
//       //     editButton.style.height = '40px'
//       //     editButton.style.transform = 'translateX(-60px)'
//       //     editButton.addEventListener('click', () => editCallback())
//       //     locationSection.appendChild(editButton)
//       //   })
//       // })
//       schema.properties.location.format = 'location'
//     }

//     const newEditor = new JSONEditor(ref.current, {
//       schema: schema,
//       theme: 'bootstrap4',
//       iconlib: 'fontawesome5',
//       [showErrors]: showErrorsMode,
//       [removeButtonLabel]: true,
//       [disableCollapse]: true,
//       [disableEditJson]: true,
//       [disableProperties]: true,
//       [disableArrayDeleteLastRow]: true,
//       [promptBeforeDelete]: false,
//       [disableArrayReOrder]: !!jsonEditorConfig.disableArrayReOrder,
//       [disableArrayAdd]: !!jsonEditorConfig.disableArrayAdd,
//       [disableArrayDelete]: !!jsonEditorConfig.disableArrayDelete
//     }) as Editor
//     return newEditor
//   }

//   return null
// }

// export default setupEditor
