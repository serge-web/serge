import L from 'leaflet'
import 'leaflet-easybutton'
import blueIcon from './data/blue-icon.png'
import redIcon from './data/red-icon.png'
import greenIcon from './data/green-icon.png'
import Mapping from '../../Mapping/index.jsx'

const controlToolbar = opts => {
  L.Control.ToolBar = L.Control.Zoom.extend({
    options: {
      test: '+',
      test2: 'Zoom in',
      zoomOutText: '-',
      History: {icon: 'history', text: "Show history"},
      Planned: {icon: 'ruler-combined', text: "Show planned routes"},
      Full: {icon: 'calendar-alt', text: "Show full history"},
      PrevCurrent: {icon: 'chess', text: "Show previous/current turn"},
      Markers: {icon: 'layer-group', text: "Toggle Layers"},
      colorMarkers: {red: {icon: '<img src="' + redIcon + '">', text: "Red"}, blue: {icon: '<img src="' + blueIcon + '">', text: "Blue"}, green: {icon: '<img src="' + greenIcon + '">', text: "Green"}}
    },
    onAdd: function (map, platformRef) {
      var controlName = 'leaflet-control-toolbar'
      var container = L.DomUtil.create('div', controlName + ' leaflet-bar')
      var options = this.options;
      // initalising the options
      console.log(Mapping)
      // show historic tracks
      var histBtnIcon = '<i class="fas fa-' + options.History.icon + '" style="line-height:1.65;"></i>';
      this._showHistoryButton = this._createButton(histBtnIcon, options.History.text,
      controlName, container, this._historyFunction.bind(this));

      // the planned tracks button
      var ptBtnIcon = '<i class="fas fa-' + options.Planned.icon + '" style="line-height:1.65;"></i>';
      this._showPlannedTracksButton = this._createButton(ptBtnIcon, options.Planned.text,
      controlName, container, this._plannedTracksFunction.bind(this));

      // the data for the full period  
      var fpBtnIcon = '<i class="fas fa-' + options.Full.icon + '" style="line-height:1.65;"></i>';
      this._showDataFullPeriodButton = this._createButton(fpBtnIcon, options.Full.text,
      controlName, container, this._fullPeriodFunction.bind(this));

      // the data for the current and previous turn 
      var pcBtnIcon = '<i class="fas fa-' + options.PrevCurrent.icon + '" style="line-height:1.65;"></i>'; 
      this._showDataPrevCurrentButton = this._createButton(pcBtnIcon, options.PrevCurrent.text,
      controlName, container, this._showDataPrevCurrentFunction.bind(this));

      // show map as viewed from White / Red / Blue / Green force . (4 buttons)
      // going to make this flick out from the side somehow I reckon  
      var omBtnIcon = '<i class="fas fa-' + options.Markers.icon + '" style="line-height:1.65;"></i>'; 
      this._showOtherMarkersButton = this._createButton(omBtnIcon, options.Markers.text,
        controlName, container, this._showOtherMarkersFunction.bind(this));
      
      // the colour markers
      var redIconBtn = options.colorMarkers.red.icon
      var blueIconBtn = options.colorMarkers.blue.icon
      var greenIconBtn = options.colorMarkers.green.icon

      
      this._showColourButtonSVG = this._createButton(redIconBtn, options.colorMarkers.red.text,
        controlName, container, this._redFunction.bind(this));
      // blue icon import
      this._showColourButtonSVG = this._createButton(blueIconBtn, options.colorMarkers.blue.text,
        controlName, container, this._blueFunction.bind(this));
      // map.on('zoomend zoomlevelschange', this._updateDisabled, this);
      this._showColourButtonSVG = this._createButton(greenIconBtn, options.colorMarkers.green.text,
        controlName, container, this._greenFunction.bind(this));
      return container
    },
    onRemove: function (map) {
      // Nothing to do here
    },
    _historyFunction: function(e){
        console.log("testing if the history function is working")
    },
    _plannedTracksFunction: function(e){
      console.log("testing if the Planned Tracks function is working")
    },
    _fullPeriodFunction: function(e){
      console.log("testing if the Full Period function is working")
    },
    _showDataPrevCurrentFunction: function(e){
      console.log("testing if the previous and current data function is working")
    },
    _showOtherMarkersFunction: function(e){
      console.log("testing if the layer selector function is working")
    },
    _redFunction: function(e){
      console.log("Red function button")
    },
    _blueFunction: function(e){
      console.log("Blue function button")
    },
    _greenFunction: function(e){
      console.log("Green function button")
    },
  })
  return new L.Control.ToolBar(opts)
}

L.control.toolBar = function (opts) {
  return controlToolbar(opts)
}