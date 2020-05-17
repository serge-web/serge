import SelectedAsset from '@serge/custom-types/selected-asset'

const selected: SelectedAsset = {
  uniqid: 'id001',
  name: 'asset-name',
  position: {
    lat: 12,
    lng: 21
  },
  type: 'Frigate',
  force: 'force-name',
  controlledBy: [],
  condition: 'my-condition',
  visibleTo: [],
  status: {
    speedKts: 10,
    state: 'Transiting'
  }
}

export default selected