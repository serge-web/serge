import L from 'leaflet'
/** create a button that can be used to trigger UI interactions, such as when a
 * change in state is triggered from elsewhere in the application
 */
export default function createButton (/* boolean */enabled, /* string */ title, /* function */ callback) {
  const CustomControl = L.Control.extend({

    options: {
      position: 'topleft'
    },

    enable: function () {
      if (this.varContainer) {
        this.varContainer.disabled = false
      }
    },

    disable: function () {
      if (this.varContainer) {
        this.varContainer.disabled = true
      }
    },

    setText: function (value) {
      if (this.varContainer) {
        this.varContainer.value = value
      }
    },

    onAdd: function () {
      var container = L.DomUtil.create('input')

      // store a copy, so we can call it from utility functions
      this.varContainer = container

      container.type = 'button'
      container.title = 'No cat'
      container.value = title

      container.style.backgroundColor = 'white'
      container.style.backgroundSize = '30px 30px'
      container.style.width = '150px'
      container.style.height = '30px'

      if (enabled) {
        this.enable()
      } else {
        this.disable()
      }

      container.onclick = function () {
        callback()
      }

      return container
    }
  })

  return new CustomControl()
}
