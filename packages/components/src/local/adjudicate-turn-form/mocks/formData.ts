const formData = {
  /* All types in this definition are options for a form input */
  status: ['Fishing', 'Moored', 'Transiting'],
  speed: [10, 20, 30],
  visible_to: [
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