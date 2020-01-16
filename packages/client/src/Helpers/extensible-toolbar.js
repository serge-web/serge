import L from 'leaflet'
import 'leaflet-easybutton'

const controlToolbar = opts => {
  L.Control.ToolBar = L.Control.Zoom.extend({
    options: {
      test: '+',
      test2: 'Zoom in',
      zoomOutText: '-',
      zoomOutTitle: 'Zoom out',
      zoomHomeIcon: 'home',
      zoomHomeTitle: 'Home',
      homeCoordinates: null,
      homeZoom: null
    },
    showHistoryButtonOptions: {
      icon: '<i class="fas fa-history"></i>', // using font awesome 
      text: "Show History"
    },
    showPlannedTracksOptions: {
      icon: '<i class="fas fa-ruler-combined"></i>',
      text: "Planned Tracks"
    },
    showDataFullPeriodOptions: {
      icon: '<i class="far fa-calendar-alt"></i>',
      text: "Show data for the full period"
    },
    showDataPrevCurrentOptions: {
      icon: '<i class="fas fa-chess"></i>',
      text: "Show data for the previous and current turn"
    },
    showOtherMarkersOptions: {
      icon: '<i class="fas fa-layer-group"></i>',
      text: "Show other force"
    },
    showWhiteOptions: {
      icon: '<i class="fas fa-splotch"></i>',
      text: "White"
    },
    onAdd: function (map) {
      var controlName = 'leaflet-control-toolbar'
      var container = L.DomUtil.create('div', controlName + ' leaflet-bar')
      var options = this.options;

      // initalising the options
      var showHistoryButton = this.showHistoryButtonOptions
      var showPlannedTracks = this.showPlannedTracksOptions
      var showDataFullPeriod = this.showDataFullPeriodOptions
      var showDataPrevCurrent = this.showDataPrevCurrentOptions  
      var showOtherMarkers = this.showOtherMarkersOptions    

      // show historic tracks
      this._showHistoryButton = this._createButton(showHistoryButton.icon, showHistoryButton.text,
      controlName, container, this._historyFunction.bind(this));
      // the planned tracks button
      this._showPlannedTracksButton = this._createButton(showPlannedTracks.icon, showPlannedTracks.text,
      controlName, container, this._plannedTracksFunction.bind(this));
      // the data for the full period  
      this._showDataFullPeriodButton = this._createButton(showDataFullPeriod.icon, showDataFullPeriod.text,
      controlName, container, this._fullPeriodFunction.bind(this));
      // the data for the current and previous turn  
      this._showDataPrevCurrentButton = this._createButton(showDataPrevCurrent.icon, showDataPrevCurrent.text,
      controlName, container, this._showDataPrevCurrentFunction.bind(this));
      // show map as viewed from White / Red / Blue / Green force . (4 buttons)
      // going to make this flick out from the side somehow I reckon  
      this._showOtherMarkersButton = this._createButton(showOtherMarkers.icon, showOtherMarkers.text,
        controlName, container, this._showOtherMarkersFunction.bind(this));
      // this._updateDisabled();
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
      var controlName = 'leaflet-control-toolbar-colors'
      var container = L.DomUtil.create('div', controlName + ' leaflet-bar')

      var showWhite = this.showWhiteOptions

      this._newBtn = createBtn(showWhite.icon, showWhite.text,
      controlName, container, function(){});
      console.log(this._newBtn)

      function createBtn(html, title, className, container, fn){
        var link = L.DomUtil.create('a', className, container);
        link.innerHTML = html;
        link.href = '#';
        link.title = title;
        console.log("Creating a button")
        return link;
      }
    },
  })
  return new L.Control.ToolBar(opts)
}

L.control.toolBar = function (opts) {
  return controlToolbar(opts)
}