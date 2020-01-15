import createButton from '../../../Helpers/createDebugButton'

export default class MapPlanningPlayerListener {
  constructor (map, grid, changesCallback) {
    this.grid = grid
    this.changesCallback = changesCallback

    this.registeredListeners = []

    this.visibilityChanges = []

    // don't bother with these if we're only running in TDD
    if (!map) {
      return
    }
    const context = this
    this.btnChangeBlueOn = createButton(false, 'Blue on', function () {
      context.changeVisibility(context.dbgForce, context.dbgName, 'Blue', true, context.visibilityChanges)
      context.btnSendChanges.enable()
    }).addTo(map)
    console.log('btn blue on:', this.btnChangeBlueOn)
    this.btnChangeBlueOff = createButton(false, 'Blue off', function () {
      context.changeVisibility(context.dbgForce, context.dbgName, 'Blue', false, context.visibilityChanges)
      context.btnSendChanges.enable()
    }).addTo(map)
    this.btnChangeRedOn = createButton(false, 'Red on', function () {
      context.changeVisibility(context.dbgForce, context.dbgName, 'Red', true, context.visibilityChanges)
      context.btnSendChanges.enable()
    }).addTo(map)
    this.btnChangeRedOff = createButton(false, 'Red off', function () {
      context.changeVisibility(context.dbgForce, context.dbgName, 'Red', false, context.visibilityChanges)
      context.btnSendChanges.enable()
    }).addTo(map)
    this.btnSendChanges = createButton(false, 'Submit changes', function () {
      context.sendAllChanges(context.visibilityChanges)
      context.visibilityChanges = []
      context.btnSendChanges.disable()
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

  changeVisibility (/* string */ assetForce, /* string */ assetName, /* string */ forcePerceivedBy, /* boolean */ newVis, /* array vis changes */ visibilityChanges) {
    visibilityChanges.push({ force: assetForce, asset: assetName, by: forcePerceivedBy, newVis: newVis })
  }

  sendAllChanges (/* list of changes */visibilityChanges) {
    this.changesCallback({ payload: visibilityChanges })
  }

  clearListeners () {
    this.registeredListeners.forEach(pair => {
      // next lines commented out, until we've refactored JS into functions
      pair.marker.off('click', e => pair.callback)
    })

    // and empty the array
    this.registeredListeners = []   
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

  registerListener (/* object */ structure) {
    console.log('in register for:' + structure.event)
    // register the listener
    structure.item.on(structure.event, e => structure.callback)

    // and remember it
    structure.store.push(structure)
  }

  listenToMarker (e) {
    console.log('handling marker callback')
    const marker = e.target
    const context = marker.context

    // we have to trick module by pushing capturing marker - so we know
    // who to advance.
    context.currentMarker = marker
    context.dbgForce = marker.asset.force
    context.dbgName = marker.asset.name

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
    marker.context = this

    marker.on('click', this.listenToMarker)

    // // register the click listener
    // this.registerListener({
    //   event: 'click',
    //   item: marker,
    //   callback: this.listenToMarker,
    //   store: this.registeredListeners
    // })
  }
}
