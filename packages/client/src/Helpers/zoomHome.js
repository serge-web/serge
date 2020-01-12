import L from 'leaflet'

const controllHomeButton = opts => {
  L.Control.HomeButton = L.Control.extend({
    onAdd: function (map) {
      // initalising the input button (must be a button type for fontawesome icon to work)
      var container = L.DomUtil.create('button')
      // the type of button 
      container.type = 'submit'
      // hover text
      container.title = 'Zoom Out'
      // testing font awesome classes
      container.className = 'fa fa-expand'

      // sizes and colours
      container.style.backgroundColor = 'white'
      container.style.backgroundSize = '30px 30px'
      // outline to match the leaflet style
      container.style.border = '2px solid rgb(177, 177, 177)'
      container.style.width = '34px'
      container.style.height = '30px'
      container.style.borderRadius = '5px'

      console.log(container)

      // hover events for mouseover
      container.onmouseover = function () {
        container.style.backgroundColor = 'pink'
      }
      container.onmouseout = function () {
        container.style.backgroundColor = 'white'
      }

      // click handler to allow the button to do things to the map
      container.onclick = function () {
        // the logging 
        console.log(opts.bounds)
        // creating a bounds object to hold the bounds of the image
        const bounds = [
          [opts.bounds[0][0], opts.bounds[0][1]],
          [opts.bounds[1][0], opts.bounds[1][1]]
        ];
        
        // flyToBounds (smoother but slower)
        map.flyToBounds(bounds, 10);

        // fitBounds (faster but jerky)
        // map.fitBounds(bounds);
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
