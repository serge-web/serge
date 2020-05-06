const formData = {
  /* All types in this definition are options for a form input */
  status: ['Fishing', 'Moored', 'Transiting'],
  speed: [10, 20, 30],
  visibleTo: [
    {
      name: 'Blue Force',
      colour: '#69c',
      selected: true
    },
    {
      name: 'Red Force',
      colour: '#f00',
      selected: false
    },
    {
      name: 'White Force',
      colour: '#fff',
      selected: false
    }
  ],
  condition: ['Working', 'Disabled', 'Immobile', 'Destroyed']
}

export default formData
