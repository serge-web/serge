import { Path, withLeaflet } from 'react-leaflet'
import type { LatLng, PathProps, PolylineProps } from 'react-leaflet'
import { Polygon as LeafletPolygon } from 'leaflet'
import { difference } from 'lodash'

// uodate LeafletPolygon class to be able to covert it to LeafletElementtype
class LeafletPolygonWithPositions extends LeafletPolygon {
  positions = []
}

// define props
type Props = {
  positions: LatLng[] | LatLng[][] | LatLng[][][],
} & PathProps & any

// Leaflet element PathProps & PolylineProps required props for Path class
type LeafletElement = PathProps & PolylineProps

// create custom polygon class
class Polygon extends Path<LeafletElement, Props> {

  // create leaflet element and add it in to html (copied from standard leaflet polygon)
  createLeafletElement(props: Props): LeafletElement {
    return new LeafletPolygonWithPositions(props.positions, this.getOptions(props)) as LeafletElement
  }

  // this function will allow to add logick to update element
  updateLeafletElement(fromProps: Props, toProps: Props) {
    // update the component on positions change (copied from standard leaflet polygon)
    if (toProps.positions !== fromProps.positions) {
      this.leafletElement.setLatLngs(toProps.positions)
    }
    this.setStyleIfChanged(fromProps, toProps)

    // logick wich one will compare classnames and modify the element class attribute instead of re render it
    // this will alow to not touch elements witch ones have no changes in classname
    if (toProps.className !== fromProps.className) {
      const fromClasses: string[] = fromProps.className.split(' ')
      const toClasses: string[] = toProps.className.split(' ')
      this.leafletElement._path.classList.remove(...difference(fromClasses, toClasses))
      this.leafletElement._path.classList.add(...difference(toClasses, fromClasses))
    }
  }
}

export default withLeaflet<Props>(Polygon)
