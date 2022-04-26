import { AdjudicateTurnFormPopulate, AttributeTypes } from '@serge/custom-types'

const attributes: AttributeTypes = []

const formData: AdjudicateTurnFormPopulate = {
  contactId: 'C234',
  status: [
    {
      name: 'Fishing',
      mobile: false
    },
    {
      name: 'Moored',
      mobile: false
    },
    {
      name: 'Transiting',
      mobile: true
    }
  ],
  speed: [10, 20, 30],
  visibleTo: [
    {
      name: 'Blue Force',
      colour: '#69c',
      id: 'Blue'
    },
    {
      name: 'Red Force',
      colour: '#f00',
      id: 'Red'
    },
    {
      name: 'White Force',
      colour: '#fff',
      id: 'umpire'
    }
  ],
  condition: ['Working', 'Disabled', 'Immobile', 'Destroyed'],
  attributes: attributes
}

export default formData
