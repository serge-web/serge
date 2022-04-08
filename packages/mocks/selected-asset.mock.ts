import SelectedAsset from '@serge/custom-types/selected-asset'

const selected: SelectedAsset = {
  uniqid: 'id001',
  name: 'asset-name',
  contactId: 'C345',
//  type: 'Frigate',
  typeId: 'a3',
  forceId: 'Blue',
  controlledBy: [],
  condition: 'Full capability',
  visibleTo: ['red', 'blue'],
  status: {
    speedKts: 10,
    state: 'Transiting'
  },
  attributes: []
}

export default selected