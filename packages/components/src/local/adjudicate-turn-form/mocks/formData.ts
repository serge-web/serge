const formData = {
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
      colour: '#69c'
    },
    {
      name: 'Red Force',
      colour: '#f00'
    },
    {
      name: 'White Force',
      colour: '#fff'
    }
  ],
  condition: ['Working', 'Disabled', 'Immobile', 'Destroyed']
}

export default formData
