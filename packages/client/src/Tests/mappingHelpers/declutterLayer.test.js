/* global it expect */
import L from 'leaflet'
import declutterLayer from '../../Components/Mapping/helpers/declutterLayer'

function addMarker (/* number */ lat, /* number */ lng, /* string */ hex) {
  const marker = L.marker([lat, lng], { icon: 'icon-name' })
  marker.hex = hex
  return marker
}

it('Declutters markers in Leaflet layer tree', () => {
  const topA = L.layerGroup()
  const topB = L.layerGroup()
  const oneA = L.layerGroup().addTo(topA)
  const oneB = L.layerGroup().addTo(topA)
  const twoA = L.layerGroup().addTo(oneA)
  // expect(forceFor(allForces, 'echo')).toEqual('Green')
  const m1 = addMarker(12, 13, 'aa')
  const m2 = addMarker(13, 14, 'bb')
  const m3 = addMarker(14, 15, 'cc')
  const m4 = addMarker(12, 13, 'aa')
  const m5 = addMarker(14, 15, 'cc')
  const m6 = addMarker(12, 13, 'aa')
  topA.addLayer(m1)
  oneA.addLayer(m2)
  oneB.addLayer(m3)
  twoA.addLayer(m4)
  topB.addLayer(m5)
  topB.addLayer(m6)

  // check the "before"
  expect(m4.getLatLng().lat).toBeCloseTo(12)
  expect(m4.getLatLng().lng).toBeCloseTo(13)

  expect(m1.getLatLng().lat).toBeCloseTo(12)
  expect(m1.getLatLng().lng).toBeCloseTo(13)

  expect(m2.getLatLng().lat).toBeCloseTo(13)
  expect(m2.getLatLng().lng).toBeCloseTo(14)

  const dict = {
    aa: { lat: 12, lng: 13 },
    bb: { lat: 13, lng: 14 },
    cc: { lat: 14, lng: 15 }
  }
  const grid = {
    delta: 0.08333 * 3,
    hexNamed: (name) => {
      return { centrePos: dict[name] }
    }
  }
  declutterLayer([topA, topB], grid)

  // note: the essential part of the following tests is that
  // two of the cells have been re-arranged
  expect(m4.getLatLng().lat).toBeCloseTo(12.0833333)
  expect(m4.getLatLng().lng).toBeCloseTo(13)
  expect(m1.getLatLng().lat).toBeCloseTo(11.958)
  expect(m1.getLatLng().lng).toBeCloseTo(12.927)
  expect(m2.getLatLng().lat).toBeCloseTo(13)
  expect(m2.getLatLng().lng).toBeCloseTo(14)
})