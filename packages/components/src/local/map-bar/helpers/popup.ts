import { Popup as LeafletPopup } from 'leaflet'
import { withLeaflet, DivOverlay, DivOverlayProps, DivOverlayTypes, LatLng } from 'react-leaflet'

type LeafletElement = LeafletPopup
type OptionProps = {
  position?: LatLng,
  autoPan?: boolean
}
type Props = OptionProps & DivOverlayProps & any

class Popup extends DivOverlay<LeafletElement & DivOverlayProps & OptionProps, Props & DivOverlayTypes> {
  static defaultProps = {
    pane: 'popupPane',
  }

  getOptions(props: Props): Props {
    return {
      ...super.getOptions(props),
      autoPan: false,
      closeOnClick: null,
      autoClose: false
    }
  }

  createLeafletElement(props: Props): LeafletElement {
    const options = this.getOptions(props)

    options.autoPan = props.autoPan !== false
    const { popupContainer } = props.leaflet!
    return new LeafletPopup(options, popupContainer)
  }

  updateLeafletElement(fromProps: Props, toProps: Props) {
    if (toProps.position !== fromProps.position) {
      this.leafletElement.setLatLng(toProps.position)
    }
  }

  componentDidMount() {
    const { position } = this.props
    const { map, popupContainer } = this.props.leaflet!
    const el = this.leafletElement

    if (map != null) {
      map.on({
        popupopen: this.onPopupOpen,
        popupclose: this.onPopupClose,
      })
    }

    if (popupContainer) {
      // Attach to container component
      popupContainer.bindPopup(el)
    } else {
      // Attach to a Map
      if (position) {
        el.setLatLng(position)
      }
      el.openOn(map)
    }
  }

  componentWillUnmount() {
    const { map } = this.props.leaflet!

    if (map != null) {
      map.off({
        popupopen: this.onPopupOpen,
        popupclose: this.onPopupClose,
      })
      map.removeLayer(this.leafletElement)
    }
    if (super.componentWillUnmount) {
      super.componentWillUnmount()
    }
  }

  onPopupOpen = ({ popup }: { popup: LeafletElement }) => {
    if (popup === this.leafletElement) {
      this.onOpen()
    }
  }

  onPopupClose = ({ popup }: { popup: LeafletElement }) => {
    if (popup === this.leafletElement) {
      this.onClose()
    }
  }

  onRender = () => {
    if (this.props.autoPan !== false && this.leafletElement.isOpen()) {
      if (this.leafletElement._map && this.leafletElement._map._panAnim) {
        this.leafletElement._map._panAnim = undefined
      }
      this.leafletElement._adjustPan()
    }
  }
}

export default withLeaflet<Props>(Popup)
