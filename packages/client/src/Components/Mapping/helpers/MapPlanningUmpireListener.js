import createButton from '../../../Helpers/createDebugButton'

export default class MapPlanningPlayerListener {
  constructor (map, grid) {
    this.grid = grid

    this.registeredListeners = []


    // don't bother with these if we're only running in TDD
    if (!map) {
      return
    }
    const context = this
    this.btnChangeBlueOn = createButton(false, 'Blue on', function (btn, map) {
      context.changeVisibility(context.dbgForce, context.dbgName, 'Blue', true)
      context.disableButtons()
    }).addTo(map)
    this.btnChangeBlueOff = createButton(false, 'Blue off', function (btn, map) {
      context.changeVisibility(context.dbgForce, context.dbgName, 'Blue', false)
      context.disableButtons()
    }).addTo(map)
    this.btnChangeRedOn = createButton(false, 'Red on', function (btn, map) {
      context.changeVisibility(context.dbgForce, context.dbgName, 'Red', true)
      context.disableButtons()
    }).addTo(map)
    this.btnChangeRedOff = createButton(false, 'Red off', function (btn, map) {
      context.changeVisibility(context.dbgForce, context.dbgName, 'Red', false)
      context.disableButtons()
    }).addTo(map)
  }

  disableButtons () {
    this.dbgForce = null
    this.dbgName = null
    this.btnChangeRedOn.disable()
    this.btnChangeRedOff.disable()
    this.btnChangeBlueOn.disable()
    this.btnChangeBlueOff.disable()
  }

  changeVisibility (/* string */ assetForce, /* string */ assetName, /* string */ forcePerceivedBy, /* boolean */ newVis) {
    console.log('change vis of ' + assetName + ' by:' + forcePerceivedBy + ' to: ' + newVis)
    // ok, send the message
  }

  clearListeners () {
    this.registeredListeners.forEach(pair => {
      // next lines commented out, until we've refactored JS into functions
      pair.marker.off('click', e => pair.callback)
    })

    // and empty the array
    this.registeredListeners = []   
  }

  changeVisPopupFor (asset, assetPerception) {
    // find what the force's perception of this asset
    return '<b>' + asset.name + '</b>'
  }

  registerListener (/* object */ structure) {
    // register the listener
    structure.item.on(structure.event, e => structure.callback)

    // and remember it
    structure.store.push(structure)
  }

  listenToMarker (marker) {
    // we have to trick module by pushing capturing marker - so we know
    // who to advance.
    this.currentMarker = marker
    this.dbgForce = marker.asset.force
    this.dbgName = marker.asset.name

    const force = marker.asset.force
    switch (force) {
      case 'Blue':
        this.btnChangeRedOn.enable()
        this.btnChangeRedOff.enable()
        break
      case 'Red':
        this.btnChangeBlueOn.enable()
        this.btnChangeBlueOff.enable()
        break
      case 'Green':
        this.btnChangeRedOn.enable()
        this.btnChangeRedOff.enable()
        this.btnChangeBlueOn.enable()
        this.btnChangeBlueOff.enable()
        break
      default:
        console.error('encountered unexpected force:' + force)
    }
  }

  /** listen to drag events on the supplied marker */
  listenTo (marker) {
    const popupContent = this.changeVisPopupFor(marker.asset, null)
    marker.bindPopup(popupContent).openPopup()

    // register the click listener
    this.registerListener({
      event: 'click',
      item: marker,
      callback: this.listenToMarker,
      store: this.registeredListeners
    })
  }
}
