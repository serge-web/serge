/* global it expect */
import L from 'leaflet'
import declutterLayer from '../../Components/Mapping/helpers/declutterLayer'

function addMarker (/* number */ lat, /* number */ lng) {
  return L.marker([lat, lng], { icon: 'icon-name' })
}

it('Declutters markers in Leaflet layer tree', () => {
  const top = L.layerGroup()
  const oneA = L.layerGroup().addTo(top)
  const oneB = L.layerGroup().addTo(top)
  const twoA = L.layerGroup().addTo(oneA)
  // expect(forceFor(allForces, 'echo')).toEqual('Green')
  const m1 = addMarker(12, 13)
  const m2 = addMarker(13, 14)
  const m3 = addMarker(14, 15)
  const m4 = addMarker(12, 13)
  top.addLayer(m1)
  oneA.addLayer(m2)
  oneB.addLayer(m3)
  twoA.addLayer(m4)

  // check the "before"
  expect(m4.getLatLng().lat).toBeCloseTo(12)
  expect(m4.getLatLng().lng).toBeCloseTo(13)
  expect(m1.getLatLng().lat).toBeCloseTo(12)
  expect(m1.getLatLng().lng).toBeCloseTo(13)

  declutterLayer(top, 0.08333)

  // note: the essential part of the following tests is that
  // two of the cells have been re-arranged
  expect(m4.getLatLng().lat).toBeCloseTo(12.0833333)
  expect(m4.getLatLng().lng).toBeCloseTo(13)
  expect(m1.getLatLng().lat).toBeCloseTo(11.9166667)
  expect(m1.getLatLng().lng).toBeCloseTo(13)
})