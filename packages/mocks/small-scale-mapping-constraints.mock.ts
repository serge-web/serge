import { CellLabelStyle, Domain } from "@serge/config"
import { MappingConstraints } from "@serge/custom-types"

export const mappingConstraints: MappingConstraints = {
    bounds: [[50.6, -20.2], [50.1, -19.1]],
    cellLabelsStyle: CellLabelStyle.H3_LABELS,
    h3res: 7,
    maxNativeZoom: 7,
    maxZoom: 12,
    minZoom: 5,
    minZoomHexes: 6,
    targetDataset: Domain.ATLANTIC,
    tileDiameterMins: 64//,
  }


export default mappingConstraints
