import L from 'leaflet'

const controllHomeButton = opts => {
  L.Control.HomeButton = L.Control.extend({
    onAdd: function (map) {
      var container = L.DomUtil.create('input')
      container.type = 'button'
      container.title = 'Zoom Out'
      container.class = 'fa fa-expand'

      container.style.backgroundColor = 'white'
      container.style.backgroundSize = '30px 30px'
      container.style.width = '30px'
      container.style.height = '30px'

      container.onmouseover = function () {
        container.style.backgroundColor = 'pink'
      }
      container.onmouseout = function () {
        container.style.backgroundColor = 'white'
      }

      container.onclick = function () {
        console.log('WORKS: buttonClicked', opts.bounds, map)
        console.log(opts.bounds[0][0])
        console.log(opts.bounds[1][1])
        // map.setView([13.33751, 43.08151], 9)
        var bounds = [
          [opts.bounds[0][0], opts.bounds[0][1]],
          [opts.bounds[1][0], opts.bounds[1][1]]
        ];
        
        map.flyToBounds(bounds, 10);

        // map.setView([opts.bounds[0][0], opts.bounds[1][1]], 9)
      }

      return container
    },
    onRemove: function (map) {
      // Nothing to do here
    }
  })

  return new L.Control.HomeButton(opts)
}

L.control.homeButton = function (opts) {
  return controllHomeButton(opts)
}
