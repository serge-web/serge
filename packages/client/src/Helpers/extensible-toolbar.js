import L from 'leaflet'
import 'leaflet-easybutton'
import blueIcon from './data/blue-icon.png'
import redIcon from './data/red-icon.png'
import greenIcon from './data/red-icon.png'



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
      colorMarkers: {}
    },
    showWhiteOptions: {
      icon: '<i class="fas fa-splotch"></i>',
      text: "White"
    },
    colorMarkerOptions: {
      iconRed: redIcon,
      iconBlue: blueIcon,
      greenIcon: greenIcon,
      varSVGtest: '<svg width="26" height="26"><rect width="26" height="26" style="fill:#E9E612;"/></svg>',
      roundSVG: '<svg width="26" height="26" xmlns="http://www.w3.org/2000/svg"><g><title>background</title><rect fill="#fff" id="canvas_background" height="28" width="28" y="-1" x="-1"/><g display="none" overflow="visible" y="0" x="0" height="100%" width="100%" id="canvasGrid"><rect fill="url(#gridpattern)" stroke-width="0" y="0" x="0" height="100%" width="100%"/></g></g><g><rect rx="3" id="svg_2" height="19.062189" width="19.812178" y="3.468906" x="3.09391" stroke-width="0" stroke="#000" fill="#ff0000"/></g></svg>',
      text: {svgText: "SVG Testing", roundText: "Red SVG"}
    },
    onAdd: function (map) {
      var controlName = 'leaflet-control-toolbar'
      var container = L.DomUtil.create('div', controlName + ' leaflet-bar')
      var options = this.options;
      // initalising the options
      var showColourMarkers = this.colorMarkerOptions    

      var iconTextOne = '<i class="fas fa-' 
      var iconTextTwo = '></i>';

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
      this._showColourButtonSVG = this._createButton(showColourMarkers.varSVGtest, showColourMarkers.text.svgText,
        controlName, container, this._showOtherMarkersFunction.bind(this));
      // red rounded SVG test
      this._showColourButtonSVG = this._createButton(showColourMarkers.roundSVG, showColourMarkers.text.roundText,
        controlName, container, this._showOtherMarkersFunction.bind(this));
      // map.on('zoomend zoomlevelschange', this._updateDisabled, this);
      
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
  })
  return new L.Control.ToolBar(opts)
}

L.control.toolBar = function (opts) {
  return controlToolbar(opts)
}