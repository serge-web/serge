import ReactDOM from 'react-dom'
import React from 'react'

class MapPopupHelper {
  constructor (map, marker) {
    this.map = map
    this.marker = marker
    this.time = 64
    this.store = null
    this.opened = false
    this.uniqKey = 'popupContainer' + Math.random().toString(36).substring(7)
  }

  useComponent (Component) {
    this.marker.bindPopup(`<div id="${this.uniqKey}"></div>`)
    this.component = Component
  }

  openPopup () {
    this.marker.openPopup()
    this.renderComponent()
  }

  closePopup () {
    this.marker.closePopup()
  }

  getPopup () {
    return this.marker.getPopup()
  }

  isOpen () {
    const popup = this.getPopup()
    return popup && popup._isOpen
  }

  renderComponent () {
    const MiniApp = this.component
    const miniAppNode = document.getElementById(this.uniqKey)
    if (miniAppNode) {
      this.opened = true
      ReactDOM.render(
        <MiniApp
          store={this.store}
          onStoreUpdate={store => {
            this.setStore(store)
          }}
          callbackFunction={data => {
            if (typeof this.onUpdateFunc === 'function') this.onUpdateFunc(data)
          }}
        />,
        document.getElementById(this.uniqKey)
      )
    } else {
      this.opened = false
    }
  }

  setStore (store) {
    this.store = store
  }

  onUpdate (onUpdate) {
    this.onUpdateFunc = onUpdate
  }

  onClose (closeFunc) {
    this.onCloseFunc = closeFunc
  }

  renderListener () {
    const _self = this
    this.map.on('popupopen', (e) => {
      // const marker = e.popup._source
      _self.renderComponent()
    })
    this.map.on('popupclose', (e) => {
      if (this.opened) {
        this.opened = false
        if (typeof this.onCloseFunc === 'function') {
          this.onCloseFunc(this.store)
        }
      }
    })
  }
}

export default MapPopupHelper
