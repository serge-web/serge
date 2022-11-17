/* eslint-disable @typescript-eslint/no-this-alias */
import JSONEditor from '@json-editor/json-editor'

export const initLocationEditor = (editCallback: () => void): void => {
  JSONEditor.defaults.editors.location = JSONEditor.AbstractEditor.extend({
    build: function () {
      const self = this

      self.group = document.createElement('div')
      self.group.classList.add('form-group')
      self.container.appendChild(self.group)

      self.label = document.createElement('label')
      self.label.classList.add('control-label')
      self.label.innerText = self.schema.title ? self.schema.title : ''
      self.group.appendChild(self.label)

      self.textArea = document.createElement('textarea')
      self.textArea.name = self.formname
      self.textArea.classList.add('form-control')

      self.groupTextArea = document.createElement('div')
      self.groupTextArea.classList.add('location-editor')
      self.groupTextArea.appendChild(self.textArea)

      if (self.schema.readOnly || self.schema.readonly || self.schema.template) {
        this.disable(true)
        this.textArea.setAttribute('readonly', 'true')
      } else {
        self.editButton = document.createElement('button')
        self.editButton.innerText = 'Edit'
        self.editButton.name = 'editInLocation'
        self.editButton.classList.add('btn', 'btn-secondary', 'json-editor-btn-add', 'json-editor-btntype-add')
        self.editButton.style.height = '40px'
        self.editButton.style.transform = 'translateX(-60px)'
        self.editButton.addEventListener('click', () => editCallback())
        self.groupTextArea.appendChild(self.editButton)
      }
      self.group.appendChild(self.groupTextArea)
    },

    setValue: function (value: string) {
      this.textArea.innerHTML = value
    },

    getValue: function () {
      return this.textArea.value
    }
  })

  JSONEditor.defaults.resolvers.unshift((schema: any) => {
    if (schema.format === 'customLocation' && schema.type === 'location') {
      return 'location'
    }
  })
}
