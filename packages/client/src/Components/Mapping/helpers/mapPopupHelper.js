import ReactDOM from 'react-dom'
import React from 'react'

class MapPopupHelper {
  constructor (map, marker) {
    // save map
    this.map = map
    // save marker
    this.marker = marker
    // init store for popup component as it removes every time when popup closes
    this.store = null
    // popup status
    this.opened = false
    // unique key for div to find it and bind a component when popup opens
    this.uniqKey = 'popupContainer' + Math.random().toString(36).substring(7)
  }

  // every component for full use this helper should have defined input parameters
  // store - helper level store for Component (default = null)
  // onStoreUpdate - for update helper level store (if not you can lose data on modal close)
  // callbackFunction - for return some data one some events, use it where you want
  useComponent (Component) {
    // clear any previous popup
    this.marker.unbindPopup()

    // bind a static div to popup with unique id
    this.marker.bindPopup(`<div id="${this.uniqKey}"></div>`, {
      maxWidth: 'auto'
    })
    // save component to use it
    this.component = Component
  }

  openPopup () {
    // open popup manually
    this.marker.openPopup()
    // and render react component
    this.renderComponent()
  }

  closePopup () {
    // close popup manually
    this.marker.closePopup()
  }

  getPopup () {
    // get popup object
    return this.marker.getPopup()
  }

  isOpen () {
    return this.opened
  }

  renderComponent () {
    // chech if component defined
    if (this.component) {
      const MiniApp = this.component
      // try to get the div with unique key
      const miniAppNode = document.getElementById(this.uniqKey)
      // if div with unique key found that means modal is opened
      if (miniAppNode) {
        // set helper modal status
        this.opened = true
        // create new (important it's encapsulated react app inside main react app) react app inside of div with unique id
        ReactDOM.render(
          <MiniApp
            store={this.store}
            onStoreUpdate={store => {
              // update store to not lose data on popup close (removal)
              this.setStore(store)
            }}
            callbackFunction={data => {
              // if onUpdateFunc defined then we need to call it
              if (typeof this.onUpdateFunc === 'function') this.onUpdateFunc(data)
            }}
          />,
          document.getElementById(this.uniqKey)
        )
      } else {
        this.opened = false
      }
    }
  }

  setStore (store) {
    // it will allow as to pre define store before component will be rendered
    this.store = store
  }

  onUpdate (onUpdate) {
    // define function which one will be called manually inside of component (callbackFunction).
    this.onUpdateFunc = onUpdate
  }

  onClose (closeFunc) {
    // This will return the helper store when component will be destroyed (it happens because popup removes all html content on close)
    this.onCloseFunc = closeFunc
  }

  // add listeners for map
  renderListener () {
    // save this to use it inside event functions
    const _self = this
    this.map.on('popupopen', e => {
      const marker = e.popup._source
      marker._icon.classList.add('selected')
      // try to render component
      _self.renderComponent()
    })
    this.map.on('popupclose', e => {
      const marker = e.popup._source
      // rare instance when icon has been dropped
      if (marker._icon) {
        marker._icon.classList.remove('selected')
      }
      if (this.opened) {
        this.opened = false
        // if onCloseFunc defined then we need to call it
        if (typeof this.onCloseFunc === 'function') {
          this.onCloseFunc(this.store)
        }
      }
    })
  }
}

export default MapPopupHelper
