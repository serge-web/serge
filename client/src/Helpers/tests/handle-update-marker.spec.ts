import handleUpdateMarker from '../handle-update-marker'
import { watuWargame } from '@serge/mocks'
import deepCopy from '../deep-copy'
import { MapAnnotation, MapAnnotations, MessageUpdateMarker } from 'src/custom-types'
import { UPDATE_MARKER } from '@serge/config'

const wMarkers = (watuWargame.data.annotations && watuWargame.data.annotations.annotations) || []

describe('handle update marker', () => {
  it('new marker', () => {
    // check previous length
    expect(wMarkers.length).toEqual(3)
    const markers = deepCopy(wMarkers)
    const newMarker: MapAnnotation = {
      uniqid: 'aaaa',
      label: 'label text',
      description: 'the description',
      location: 'A12',
      visibleTo: [watuWargame.data.forces.forces[1].uniqid],
      iconId: 'unk',
      color: '#f33'
    }
    const message: MessageUpdateMarker = {
      messageType: UPDATE_MARKER,
      marker: newMarker
    }
    const res = handleUpdateMarker(message, markers)
    expect(res).toBeTruthy()
    expect(res.length).toEqual(4)
    expect(res[3].uniqid).toEqual('aaaa')
  })

  it('moved marker', () => {
    // check previous length
    expect(wMarkers.length).toEqual(3)
    const markers: MapAnnotations = deepCopy(wMarkers)
    // check id
    expect(markers[1].uniqid).toEqual('marker-two')
    // check previous label
    expect(markers[1].label).toEqual('second marker')
    const newMarker: MapAnnotation = {
      ...markers[1],
      label: 'new label text',
      location: 'A13'
    }
    const message: MessageUpdateMarker = {
      messageType: UPDATE_MARKER,
      marker: newMarker
    }
    const res = handleUpdateMarker(message, markers)
    expect(res).toBeTruthy()
    expect(res.length).toEqual(3)
    expect(res[1].uniqid).toEqual('marker-two')
    expect(res[1].label).toEqual('new label text')
    expect(res[1].location).toEqual('A13')
  })
})
