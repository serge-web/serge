import L from 'leaflet'

L.Control.Watermark = L.Control.extend({
  onAdd: function (map) {
    var container = L.DomUtil.create('input')
    container.type = 'button'
    container.title = 'Zoom Out'
    container.class = 'fa fa-expand'

    container.style.backgroundColor = 'white'
    // container.style.backgroundImage = 'url(https://t1.gstatic.com/images?q=tbn:ANd9GcR6FCUMW5bPn8C4PbKak2BJQQsmC-K9-mbYBeFZm1ZM2w2GRy40Ew)';
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
    //   const imageTop = 14.194809302;
    //   const imageLeft = 42.3558566271;
    //   const imageRight = 43.7417816271;
    //   const imageBottom = 12.401259302;

      console.log('WORKS: buttonClicked')
    }

    return container
  },
  onRemove: function (map) {
    // Nothing to do here
  }
})

L.control.watermark = function (opts) {
  return new L.Control.Watermark(opts)
}