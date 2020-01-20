import createButton from './createDebugButton'

export default class MapPlanningUmpireListener {
  constructor (map, grid, changesCallback) {
    this.grid = grid
    this.changesCallback = changesCallback

    this.registeredListeners = []

    this.visibilityChanges = []

    // don't bother with these if we're only running in TDD
    if (!map) {
      return
    }
    this.btnChangeBlueOn = createButton(false, 'Blue on', () => {
      this.changeVisibility(this.dbgAssetID, 'Blue', true, this.visibilityChanges)
      this.btnSendChanges.enable()
    }).addTo(map)
    this.btnChangeBlueOff = createButton(false, 'Blue off', () => {
      this.changeVisibility(this.dbgAssetID, 'Blue', false, this.visibilityChanges)
      this.btnSendChanges.enable()
    }).addTo(map)
    this.btnChangeRedOn = createButton(false, 'Red on', () => {
      this.changeVisibility(this.dbgAssetID, 'Red', true, this.visibilityChanges)
      this.btnSendChanges.enable()
    }).addTo(map)
    this.btnChangeRedOff = createButton(false, 'Red off', () => {
      this.changeVisibility(this.dbgAssetID, 'Red', false, this.visibilityChanges)
      this.btnSendChanges.enable()
    }).addTo(map)
    this.btnSendChanges = createButton(false, 'Submit changes', () => {
      this.sendAllChanges(this.visibilityChanges)
      this.visibilityChanges = []
      this.btnSendChanges.disable()
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

  changeVisibility (/* string */ assetId, /* string */ forcePerceivedBy, /* boolean */ newVis, /* array vis changes */ visibilityChanges) {
    visibilityChanges.push({ assetId: assetId, by: forcePerceivedBy, newVis: newVis })
  }

  sendAllChanges (/* list of changes */visibilityChanges) {
    this.changesCallback({ payload: visibilityChanges })
  }

  clearListeners () {
    this.registeredListeners.forEach(pair => {
      pair.marker.off(pair.event)
    })

    // and empty the array
    this.registeredListeners = []

    // ditch our buttons
    this.btnChangeRedOn.remove()
    this.btnChangeRedOff.remove()
    this.btnChangeBlueOn.remove()
    this.btnChangeBlueOff.remove()
    this.btnSendChanges.remove()
  }

  changeVisPopupFor (/* object */asset, /* object */ perceptions) {
    var res = ''
    for (var key in perceptions) {
      var perception = perceptions[key]
      res += '<li>' + key + ' perceived as force:' + perception.force + ',type:' + perception.type + '</li>'
    }

    // find what the force's perception of this asset
    return '<b>' + asset.name + '</b><ul>' + res + '</ul>'
  }

  listenToMarker (e) {
    const marker = e.target

    // we need to access this class's data, get
    // it out of the special attribute
    const context = marker.context

    // and delete that context object
    // delete marker.context

    // we have to trick module by pushing capturing marker - so we know
    // who to advance.
    context.currentMarker = marker
    context.dbgAssetID = marker.asset.uniqid

    // disable all the markers, to start with
    context.btnChangeRedOn.disable()
    context.btnChangeRedOff.disable()
    context.btnChangeBlueOn.disable()
    context.btnChangeBlueOff.disable()

    const perceptions = marker.asset.perceptions
    // enable the correct buttons for this asset
    if (marker.asset.force !== 'Red') {
      if (perceptions.Red) {
        context.btnChangeRedOff.enable()
      } else {
        context.btnChangeRedOn.enable()
      }
    }

    if (marker.asset.force !== 'Blue') {
      if (perceptions.Blue) {
        context.btnChangeBlueOff.enable()
      } else {
        context.btnChangeBlueOn.enable()
      }
    }
  }

  /** listen to drag events on the supplied marker */
  listenTo (marker) {
    const popupContent = this.changeVisPopupFor(marker.asset, marker.asset.perceptions)
    marker.bindPopup(popupContent).openPopup()

    // store this class in a special attribute, so it's available in the callback
    marker.context = this

    marker.on('click', this.listenToMarker)

    // remember we have to de-register this listener, for the next phase
    this.registeredListeners.push({ marker: marker, event: 'click' })
  }
}
