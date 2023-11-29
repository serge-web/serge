import L, { LatLngBounds } from 'leaflet'
import { Feature, FeatureCollection, Geometry } from 'geojson'
import { RENDERER_CORE, RENDERER_MILSYM } from 'src/custom-types'
import { Phase } from 'src/config'

const genGeometry = (bounds: LatLngBounds): Geometry => {
  const lat1 = bounds.getSouth()
  const lat2 = bounds.getNorth()
  const lng1 = bounds.getWest()
  const lng2 = bounds.getEast()
  if (Math.random() > 0.3) {
    return {
      type: 'Polygon',
      coordinates: [[[lng1, lat1], [lng1, lat2], [lng2, lat2], [lng2, lat1], [lng1, lat1]]]
    }  
  } else {
    return {
      type: 'LineString',
      coordinates: [[lng1, lat1], [lng1, lat2], [lng2, lat1], [lng2, lat2]]
    }
  }
}

export const generateFeatures = (bounds: L.LatLngBounds, numPoints: number, numShapes: number): FeatureCollection => {
  const features: Feature[] = []
  const x_min = bounds.getEast()
  const x_max = bounds.getWest()
  const y_min = bounds.getSouth()
  const y_max = bounds.getNorth()
  const randString = (items: string[]): string => {
    return items[Math.floor(Math.random() * items.length)]
  }
  const forces = ['f-red', 'f-blue', 'f-green']
  const sizes = ['S', 'M', 'L']
  const sidcValues = ['SUP*------*****', 'SFP*------*****', 'SNP*------*****', 'SHP*------*****', 'SUP*S-----*****', 'SFP*S-----*****', 'SNP*S-----*****', 'SHP*S-----*****', 'SUP*V-----*****', 'SFP*V-----*****', 'SNP*V-----*****', 'SHP*V-----*****', 'SUP*T-----*****', 'SFP*T-----*****', 'SNP*T-----*****', 'SHP*T-----*****', 'SUP*L-----*****', 'SFP*L-----*****', 'SNP*L-----*****', 'SHP*L-----*****', 'SUA*------*****', 'SFA*------*****', 'SNA*------*****', 'SHA*------*****', 'SUA*M-----*****', 'SFA*M-----*****', 'SNA*M-----*****', 'SHA*M-----*****', 'SUA*MF----*****', 'SFA*MF----*****', 'SNA*MF----*****', 'SHA*MF----*****', 'SUA*MFB---*****', 'SFA*MFB---*****', 'SHA*MFP---*****', 'SUA*MFPN--*****', 'SFA*MFPN--*****', 'SNA*MFPN--*****', 'SHA*MFPN--*****', 'SUA*MFPM--*****', 'SFA*MFPM--*****', 'SNA*MFPM--*****', 'SHA*MFPM--*****', 'SUA*MFU---*****', 'SFA*MFU---*****', 'SNA*MFU---*****', 'SHA*MFU---*****', 'SUA*MFUL--*****', 'SFA*MFUL--*****', 'SNA*MFUL--*****', 'SHA*MFUL--*****', 'SUA*MFUM--*****', 'SFA*MFUM--*****', 'SNA*MFUM--*****', 'SHA*MFUM--*****', 'SUA*MFUH--*****', 'SFA*MFUH--*****', 'SNA*MFUH--*****', 'SHA*MFUH--*****', 'SUA*MFY---*****', 'SFA*MFY---*****', 'SNA*MFY---*****', 'SHA*MFY---*****', 'SUA*MFH---*****', 'SFA*MFH---*****', 'SNA*MFH---*****', 'SHA*MFH---*****', 'SUA*MFD---*****', 'SFA*MFD---*****', 'SNA*MFD---*****', 'SHA*MFD---*****', 'SUA*MFQ---*****', 'SFA*MFQ---*****', 'SNA*MFQ---*****', 'SHA*MFQ---*****', 'SUA*MFQA--*****', 'SNA*MFQP--*****', 'SHA*MFQP--*****', 'SUA*MFQR--*****', 'SFA*MFQR--*****', 'SNA*MFQR--*****', 'SHA*MFQR--*****', 'SUA*MFQRW-*****', 'SFA*MFQRW-*****', 'SNA*MFQRW-*****', 'SHA*MFQRW-*****', 'SUA*MFQRZ-*****', 'SFA*MFQRZ-*****', 'SNA*MFQRZ-*****', 'SHA*MFQRZ-*****', 'SUA*MFQRX-*****', 'SFA*MFQRX-*****', 'SNA*MFQRX-*****', 'SHA*MFQRX-*****', 'SUA*MFQS--*****', 'SFA*MFQS--*****', 'SNA*MFQS--*****', 'SHA*MFQS--*****', 'SUA*MFQT--*****', 'SFA*MFQT--*****', 'SNA*MFQT--*****', 'SHA*MFQT--*****', 'SUA*MFQU--*****', 'SFA*MFQU--*****', 'SUA*MHUH--*****', 'SFA*MHUH--*****', 'SNA*MHUH--*****', 'SHA*MHUH--*****', 'SUA*MHI---*****', 'SFA*MHI---*****', 'SNA*MHI---*****', 'SHA*MHI---*****', 'SUA*MHH---*****', 'SFA*MHH---*****', 'SNA*MHH---*****', 'SHA*MHH---*****', 'SUA*MHR---*****', 'SFA*MHR---*****', 'SNA*MHR---*****', 'SHA*MHR---*****', 'SUA*MHQ---*****', 'SFA*MHQ---*****', 'SNA*MHQ---*****', 'SHA*MHQ---*****', 'SUA*MHC---*****', 'SFG*UCAWR-*****', 'SNG*UCAWR-*****', 'SHG*UCAWR-*****', 'SUG*UCAA--*****', 'SFG*UCAA--*****', 'SNG*UCAA--*****', 'SHG*UCAA--*****', 'SUG*UCAAD-*****', 'SFG*UCAAD-*****', 'SNG*UCAAD-*****', 'SHG*UCAAD-*****', 'SUG*UCAAL-*****', 'SFG*UCAAL-*****', 'SNG*UCAAL-*****', 'SFG*UCVRS-*****', 'SNG*UCVRS-*****', 'SHG*UCVRS-*****', 'SUG*UCVRW-*****', 'SFG*UCVRW-*****', 'SNG*UCVRW-*****', 'SHG*UCVRW-*****', 'SUG*UCVRU-*****', 'SFG*UCVRU-*****', 'SNG*UCVRU-*****', 'SHG*UCVRU-*****', 'SUG*UCVRUL*****', 'SFG*UCVRUL*****', 'SNG*UCVRUL*****', 'SHG*UCVRUL*****', 'SUG*UCVRUM*****', 'SFG*UCVRUM*****', 'SNG*UCVRUM*****', 'SHG*UCVRUM*****', 'SUG*UCVRUH*****', 'SFG*UCVRUH*****', 'SNG*UCVRUH*****', 'SHG*UCVRUH*****', 'SUG*UCVRUC*****', 'SFG*UCVRUC*****', 'SNG*UCVRUC*****', 'SHG*UCVRUC*****', 'SUG*UCVRUE*****', 'SFG*UCVRUE*****', 'SNG*UCVRUE*****', 'SHG*UCVRUE*****', 'SUG*UCVRM-*****', 'SFG*UCVRM-*****', 'SNG*UCVRM-*****', 'SHG*UCVRM-*****', 'SUG*UCVS--*****', 'SFG*UCVS--*****', 'SNG*UCVS--*****', 'SHG*UCVS--*****', 'SUG*UCVC--*****', 'SFG*UCVC--*****', 'SNG*UCVC--*****', 'SHG*UCVC--*****', 'SUG*UCVV--*****', 'SFG*UCVV--*****', 'SNG*UCVV--*****', 'SHG*UCVV--*****', 'SUG*UCVU--*****', 'SFG*UCVU--*****', 'SNG*UCVU--*****', 'SHG*UCVU--*****', 'SUG*UCVUF-*****', 'SFG*UCVUF-*****', 'SNG*UCVUF-*****', 'SHG*UCVUF-*****', 'SUG*UCVUR-*****', 'SFG*UCVUR-*****', 'SNG*UCVUR-*****', 'SHG*UCVUR-*****', 'SUG*UCI---*****', 'SFG*UCI---*****', 'SNG*UCI---*****', 'SHG*UCI---*****', 'SUG*UCIL--*****', 'SFG*UCIL--*****', 'SNG*UCIL--*****', 'SHG*UCIL--*****', 'SUG*UCIM--*****', 'SFG*UCIM--*****', 'SNG*UCIM--*****', 'SFG*UCECA-*****', 'SNG*UCECA-*****', 'SHG*UCECA-*****', 'SUG*UCECC-*****', 'SFG*UCECC-*****', 'SNG*UCECC-*****', 'SHG*UCECC-*****', 'SUG*UCECL-*****', 'SFG*UCECL-*****', 'SNG*UCECL-*****', 'SHG*UCECL-*****', 'SUG*UCECM-*****', 'SFG*UCECM-*****', 'SNG*UCECM-*****', 'SHG*UCECM-*****', 'SUG*UCECH-*****', 'SFG*UCECH-*****', 'SNG*UCECH-*****', 'SHG*UCECH-*****', 'SUG*UCECT-*****', 'SFG*UCECT-*****', 'SNG*UCECT-*****', 'SHG*UCECT-*****', 'SUG*UCECW-*****', 'SFG*UCECW-*****', 'SNG*UCECW-*****', 'SHG*UCECW-*****', 'SUG*UCECO-*****', 'SUG*UCFMTS*****', 'SFG*UCFMTS*****', 'SNG*UCFMTS*****', 'SHG*UCFMTS*****', 'SUG*UCFMTC*****', 'SFG*UCFMTC*****', 'SNG*UCFMTC*****', 'SHG*UCFMTC*****', 'SUG*UCFMTO*****', 'SFG*UCFMTO*****', 'SNG*UCFMTO*****', 'SHG*UCFMTO*****', 'SUG*UCFML-*****', 'SFG*UCFML-*****', 'SNG*UCFML-*****', 'SHG*UCFML-*****', 'SUG*UCFS--*****', 'SFG*UCFS--*****', 'SNG*UCFS--*****', 'SHG*UCFS--*****', 'SUG*UCFSS-*****', 'SFG*UCFSS-*****', 'SNG*UCFSS-*****', 'SHG*UCFSS-*****', 'SUG*UCFSA-*****', 'SFG*UCFSA-*****', 'SNG*UCFSA-*****', 'SHG*UCFSA-*****', 'SUG*UCFSL-*****', 'SFG*UCFSL-*****', 'SNG*UCFSL-*****', 'SHG*UCFSL-*****', 'SUG*UCFSO-*****', 'SFG*UCFSO-*****', 'SNG*UCFSO-*****', 'SHG*UCFSO-*****', 'SUG*UCFO--*****', 'SFG*UCFO--*****', 'SNG*UCFO--*****', 'SHG*UCFO--*****', 'SUG*UCFOS-*****', 'SFG*UCFOS-*****', 'SNG*UCFOS-*****', 'SHG*UCFOS-*****', 'SUG*UCFOA-*****', 'SFG*UCFOA-*****', 'SNG*UCFOA-*****', 'SHG*UCFOA-*****', 'SUG*UCFOL-*****', 'SFG*UCFOL-*****', 'SNG*UCFOL-*****', 'SHG*UCFOL-*****', 'SUG*UCFOO-*****', 'SFG*UCFOO-*****', 'SNG*UCFOO-*****', 'SHG*UCFOO-*****', 'SUG*UCR---*****', 'SFG*UCR---*****', 'SNG*UCR---*****', 'SHG*UCR---*****', 'SUG*UCRH--*****', 'SFG*UCRH--*****', 'SNG*UCRH--*****', 'SHG*UCRH--*****', 'SUG*UCRV--*****', 'SFG*UCRV--*****', 'SNG*UCRV--*****', 'SHG*UCRV--*****', 'SUG*UCRVA-*****', 'SFG*UCRVA-*****', 'SUF*NS----*****', 'SFF*NS----*****', 'SNF*NS----*****', 'SHF*NS----*****', 'SUF*NU----*****', 'SFF*NU----*****', 'SNF*NU----*****', 'SHF*NU----*****', 'SUF*NB----*****', 'SFF*NB----*****', 'SNF*NB----*****', 'SHF*NB----*****', 'SUF*NN----*****', 'SFF*NN----*****', 'SNF*NN----*****', 'SHF*NN----*****', 'SUF*G-----*****', 'SFF*G-----*****', 'SNF*G-----*****', 'SHF*G-----*****', 'SUF*GS----*****', 'SFF*GS----*****', 'SNF*GS----*****', 'SHF*GS----*****', 'SUF*GR----*****', 'SFF*GR----*****', 'SNF*GR----*****', 'SHF*GR----*****', 'SUF*GP----*****', 'SFF*GP----*****', 'SNF*GP----*****', 'SHF*GP----*****', 'SUF*GPA---*****', 'SFF*GPA---*****', 'SNF*GPA---*****', 'SHF*GPA---*****', 'SUF*GC----*****', 'SFF*GC----*****', 'SNF*GC----*****', 'SHF*GC----*****', 'SUF*B-----*****', 'SFF*B-----*****', 'SNF*B-----*****', 'SHF*B-----*****']

  for (let i = 0; i < numPoints; i++) {
    const lat = y_min + (Math.random() * (y_max - y_min))
    const lng = x_min + (Math.random() * (x_max - x_min))
    const newF: Feature = {
      type: 'Feature',
      properties: {
        id: 'pt_' + i,
        force: randString(forces),
        phase: randString([Phase.Adjudication, Phase.Planning]),
        turn: Math.floor(Math.random() * 5),
        _type: RENDERER_MILSYM,
        sidc: randString(sidcValues), // 'SFG-UCI----D',
        category: 'Civilian',
        size: randString(sizes)
      },
      geometry: {
        type: 'Point',
        coordinates: [lng, lat]
      }
    }
    features.push(newF)
  }
  for (let i = 0; i < numShapes; i++) {
    const size = Math.random() * 2.6
    const lat1 = y_min + (Math.random() * (y_max - y_min))
    // note: 1.6 scaling factor in next line is to reflect latitude of sample data, 
    // so boxes are still roughly square
    const lng1 = x_min + (Math.random() * (x_max - x_min)) * 1.6
    const lat2 = lat1 + Math.random() * size
    const lng2 = lng1 + Math.random() * size
    const bounds = L.latLngBounds(L.latLng(lat1, lng1), L.latLng(lat2, lng2))
    const geometry = genGeometry(bounds)
    const newF: Feature = {
      type: 'Feature',
      properties: {
        id: 'pt_' + i,
        force: randString(forces),
        phase: randString([Phase.Adjudication, Phase.Planning]),
        turn: Math.floor(Math.random() * 5),
        _type: RENDERER_CORE,
        important: 'Yes'
      },
      geometry
    }
    features.push(newF)
  }
  const collection: FeatureCollection = {
    type: 'FeatureCollection',
    features: features
  }
  return collection
}
