import { JSONEditor } from '@json-editor/json-editor'
import { PlannedActivityGeometry, PlanningActivityGeometry } from '@serge/custom-types'

export const initLocationEditor = (editCallback: () => void, onLocationEditorLoaded: (editorElm: HTMLDivElement) => void): void => {
  class LocationEditor extends JSONEditor.AbstractEditor {
    build () {
      this.group = document.createElement('div')
      this.group.classList.add('form-group')
      this.container.appendChild(this.group)

      this.label = document.createElement('label')
      this.label.classList.add('control-label')
      this.label.innerText = this.schema.title ? this.schema.title : ''
      this.group.appendChild(this.label)

      this.textArea = document.createElement('div')
      this.textArea.name = this.formname

      this.groupTextArea = document.createElement('div')
      this.groupTextArea.classList.add('location-editor')
      this.groupTextArea.appendChild(this.textArea)

      this.group.appendChild(this.groupTextArea)
      onLocationEditorLoaded(this.group)
    }

    enable () {
      if (!this.always_disabled) {
        this.textArea.setAttribute('contenteditable', 'true')
        super.enable()
      }
    }

    disable (alwaysDisabled: boolean) {
      if (alwaysDisabled) {
        this.always_disabled = true
      }
      this.textArea.setAttribute('contenteditable', 'false')
      super.disable()
    }

    addEditButton () {
      if (this.groupTextArea.childNodes.length < 2) {
        this.editButton = document.createElement('button')
        this.editButton.innerText = 'Edit'
        this.editButton.classList.add('btn', 'btn-secondary', 'json-editor-btn-add', 'json-editor-btntype-add')
        this.editButton.addEventListener('click', editCallback)
        this.groupTextArea.appendChild(this.editButton)
      }
    }

    removeEditButton () {
      if (this.groupTextArea.childNodes.length >= 2) {
        this.groupTextArea.removeChild(this.editButton)
      }
    }

    setValue (locations: PlannedActivityGeometry[] | string) {
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
    }

    getValue () {
      // note: the text area may not have been initialised yet.
      if (this.textArea) {
        return this.textArea.innerText
      } else {
        return ''
      }
    }
  }

  JSONEditor.defaults.editors.location = LocationEditor

  JSONEditor.defaults.resolvers.unshift((schema: any) => {
    if (schema.format === 'location' && schema.type === 'string') {
      return 'location'
    }
    return schema
  })
}
