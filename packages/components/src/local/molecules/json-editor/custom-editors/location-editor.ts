import { JSONEditor } from '@json-editor/json-editor'
import { PlannedActivityGeometry, PlannedProps, PlanningActivityGeometry } from '@serge/custom-types'
import moment from 'moment-timezone'
import { EditCallback, OnLocationEditorLoaded } from '../helpers/setupEditor'

export const initLocationEditor = (editCallback: EditCallback, onLocationEditorLoaded: OnLocationEditorLoaded): void => {
  class LocationEditor extends JSONEditor.AbstractEditor {
    build () {
      this.locations = []
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
        this.textArea.addEventListener('input', () => {
          this.onChange(this.textArea.innerText)
          if (this.textArea.innerText) {
            const allNames = this.textArea.innerText.split('\n')
            this.locations.forEach((_: any, idx: number) => {
              this.locations[idx].uniqid = allNames[idx]
              this.locations[idx].geometry.properties.uniqid = allNames[idx]
            })
            this.onChange(this.textArea.innerText)
          }
        }, false)
        this.addEditButton()
        super.enable()
      }
    }

    disable (alwaysDisabled: boolean) {
      if (alwaysDisabled) {
        this.always_disabled = true
      }
      this.textArea.setAttribute('contenteditable', 'false')
      this.removeEditButton()
      super.disable()
    }

    addEditButton () {
      if (this.groupTextArea.childNodes.length < 2) {
        this.editButton = document.createElement('button')
        this.editButton.innerText = 'Edit'
        this.editButton.classList.add('btn', 'btn-secondary', 'json-editor-btn-add', 'json-editor-btntype-add')
        this.editButton.addEventListener('click', () => editCallback(this.locations))
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
      this.locations = locations
      this.textArea.innerText = ''
      const flatGeoms: PlanningActivityGeometry[] = []
      if (locations instanceof Array) {
        locations.forEach((geom) => {
          const props = geom.geometry.properties as PlannedProps
          const formatStr = 'DDHHmm[Z]'
          const dateStr = props.startDate ? moment.utc(props.startDate).format(formatStr) + '-' + moment.utc(props.endDate).format(formatStr) : ' ...'
          let name = geom.uniqid
          if (flatGeoms.length) {
            const theAct = flatGeoms.find((act) => act.uniqid === geom.uniqid)
            if (theAct) {
              name = theAct.name
            } else {
              console.warn('failed to find activity for', name)
            }
          }
          this.textArea.innerHTML += `<li>${name} ${dateStr}</li>` + '\n'
        })
      } else {
        this.textArea.innerHTML += locations + '\n'
      }
      onLocationEditorLoaded(this.group)
    }

    getValue () {
      // note: the text area may not have been initialised yet.
      if (this.textArea) {
        return this.locations
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
