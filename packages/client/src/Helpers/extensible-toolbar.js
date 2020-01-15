import L from 'leaflet'

const controlToolbar = opts => {
  L.Control.ToolBar = L.Control.extend({
    onAdd: function (map) {
      var controlName = 'leaflet-control-toolbar'
      var container = L.DomUtil.create('div', controlName + ' leaflet-bar')
      console.log(container)

      // show historic tracks
      // 
      // show planned tracks
      // show data for full period
      // show data for just previous and current turn
      // show map as viewed from White / Red / Blue / Green force . (4 buttons)



      return container
    },
    onRemove: function (map) {
      // Nothing to do here
    }
  })
  return new L.Control.ToolBar(opts)
}

L.control.toolBar = function (opts) {
  return controlToolbar(opts)
}