import ReactDOM from 'react-dom'
import React from 'react'

class MapPopupHelper {
  constructor (map, marker) {
    this.map = map
    this.marker = marker
    this.time = 64
    this.store = null
    this.uniqKey =
      'popupContainer' +
      Math.random()
        .toString(36)
        .substring(7)
  }

  useComponent (Component) {
    this.marker.bindPopup(`<div id="${this.uniqKey}"></div>`, {
      maxWidth: 'auto'
    })
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
    return null // marker.getPopup();
  }

  isOpen () {
    const popup = this.getPopup()
    return popup && popup._isOpen
  }

  renderComponent () {
    const MiniApp = this.component
    const miniAppNode = document.getElementById(this.uniqKey)
    if (miniAppNode) {
      ReactDOM.render(
        <MiniApp
          store={this.store}
          onStoreUpdate={store => {
            this.setStore(store)
          }}
          callback={data => {
            if (this.onUpdateFunc) this.onUpdateFunc(data)
          }}
        />,
        document.getElementById(this.uniqKey)
      )
    }
  }

  setStore (store) {
    this.store = store
  }

  onUpdate (onUpdate) {
    this.onUpdateFunc = onUpdate
  }

  renderListener () {
    const _self = this
    this.map.on('popupopen', function (e) {
      // const marker = e.popup._source
      _self.renderComponent()
    })
  }
}

export default MapPopupHelper
