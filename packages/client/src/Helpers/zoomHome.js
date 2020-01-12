import L from 'leaflet'

const controllHomeButton = opts => {
  L.Control.HomeButton = L.Control.extend({
    onAdd: function (map) {
      // initalising the input button (must be a button type for fontawesome icon to work)
      var container = L.DomUtil.create('button')
      // the type of button
      container.type = 'submit'
      // hover text
      container.title = 'Show all'
      // testing font awesome classes
      container.className = 'fa fa-expand'


      // Firefox 1.0+
      var isFirefox = typeof InstallTrigger !== 'undefined';
      console.log(isFirefox)
      if(isFirefox == true){
        container.style.width = '34px'
      } else {
        container.style.width = '29.1px'
        container.style.position = 'absolute'
        container.style.top = '50.5px'
        container.style.left = '-1.3px'
      }
      

      // sizes and colours
      container.style.backgroundColor = 'white'
      container.style.backgroundSize = '30px 30px'
      // outline to match the leaflet style
      // maybe the style should be handled by the CSS alone?
      container.style.border = '2px solid rgb(177, 177, 177)'
      container.style.height = '30px'
      container.style.borderRadius = '5px'

      // hover events for mouseover
      container.onmouseover = function () {
        container.style.backgroundColor = 'pink'
      }
      container.onmouseout = function () {
        container.style.backgroundColor = 'white'
      }

      // listen for screen resize events
      window.addEventListener('resize', function(event){
        // get the width/height of the screen after the resize event
        const width  = window.innerWidth || document.documentElement.clientWidth || 
        document.body.clientWidth;
        const height = window.innerHeight|| document.documentElement.clientHeight|| 
        document.body.clientHeight;


        console.log(width, height);

        const bounds = [
          [opts.bounds[0][0], opts.bounds[0][1]],
          [opts.bounds[1][0], opts.bounds[1][1]]
        ]

        map.fitBounds(bounds);
      })

      // click handler to allow the button to do things to the map
      container.onclick = function () {
        // creating a bounds object to hold the bounds of the image
        const bounds = [
          [opts.bounds[0][0], opts.bounds[0][1]],
          [opts.bounds[1][0], opts.bounds[1][1]]
        ]

        // flyToBounds (smoother but slower)
        //map.flyToBounds(bounds, 11)
        // fitBounds (faster but jerky)
        map.fitBounds(bounds);
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
