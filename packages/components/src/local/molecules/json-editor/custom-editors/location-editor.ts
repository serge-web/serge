import JSONEditor from '@json-editor/json-editor'
import { PlannedActivityGeometry, PlanningActivityGeometry } from '@serge/custom-types'

export const initLocationEditor = (editCallback: () => void, onLocationEditorLoaded: (editorElm: HTMLDivElement) => void): void => {
  JSONEditor.defaults.editors.location = JSONEditor.AbstractEditor.extend({
    build: function () {
      this.group = document.createElement('div')
      this.group.classList.add('form-group')
      this.container.appendChild(this.group)

      this.label = document.createElement('label')
      this.label.classList.add('control-label')
      this.label.innerText = this.schema.title ? this.schema.title : ''
      this.group.appendChild(this.label)

      this.textArea = document.createElement('div')
      this.textArea.name = this.formname
      // this.textArea.addEventListener('change', (e: any) => {
      //   e.preventDefault()
      //   e.stopPropagation()
      //   this.onChange(e.currentTarget.value)
      //   if (e.currentTarget.value) {
      //     this.addEditButton()
      //   } else {
      //     this.removeEditButton()
      //   }
      // })

      this.groupTextArea = document.createElement('div')
      this.groupTextArea.classList.add('location-editor')
      this.groupTextArea.appendChild(this.textArea)

      if (this.schema.readOnly || this.schema.readonly || this.schema.template) {
        this.disable(true)
        this.textArea.setAttribute('readonly', 'true')
      }
      this.group.appendChild(this.groupTextArea)
      onLocationEditorLoaded(this.group)
    },

    addEditButton: function () {
      if (this.groupTextArea.childNodes.length < 2) {
        this.editButton = document.createElement('button')
        this.editButton.innerText = 'Edit'
        this.editButton.classList.add('btn', 'btn-secondary', 'json-editor-btn-add', 'json-editor-btntype-add')
        this.editButton.addEventListener('click', editCallback)
        this.groupTextArea.appendChild(this.editButton)
      }
    },

    removeEditButton: function () {
      if (this.groupTextArea.childNodes.length >= 2) {
        this.groupTextArea.removeChild(this.editButton)
      }
    },

    setValue: function (locations: PlannedActivityGeometry[] | string) {
      if (!locations) {
        return
      }
      this.textArea.innerText = ''
      const flatGeoms: PlanningActivityGeometry[] = []
      if (locations instanceof Array) {
        locations.forEach((geom) => {
          let name = geom.uniqid
          if (flatGeoms.length) {
            const theAct = flatGeoms.find((act) => act.uniqid === geom.uniqid)
            if (theAct) {
              name = theAct.name
            } else {
              console.warn('failed to find activity for', name)
            }
          }
          this.textArea.innerText += '* ' + name + '\n'
        })
      } else {
        this.textArea.innerText += '* ' + locations + '\n'
      }
      if (this.textArea.innerText) {
        this.addEditButton()
      }
      onLocationEditorLoaded(this.group)
    },

    getValue: function () {
      // note: the text area may not have been initialised yet.
      if (this.textArea) {
        return this.textArea.innerText
      } else {
        return ''
      }
    }
  })

  JSONEditor.defaults.resolvers.unshift((schema: any) => {
    if (schema.format === 'location' && schema.type === 'string') {
      return 'location'
    }
    return schema
  })
}
