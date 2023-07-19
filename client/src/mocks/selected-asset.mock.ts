import SelectedAsset from 'src/custom-types/selected-asset'

import forces from './forces.mock'

const selected: SelectedAsset = {
  uniqid: 'id001',
  name: 'asset-name',
  contactId: 'C345',
  typeId: 'a3',
  forceId: forces[1].uniqid,
  condition: 'Full capability',
  visibleTo: [forces[2].uniqid, forces[3].uniqid],
  status: {
    speedKts: 10,
    state: 'Transiting'
  },
  attributes: []
}

export default selected
