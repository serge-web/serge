const formData = {
  populate: {
    /* All types in this definition are options for a form input */
    status: ['Fishing', 'Moored', 'Transiting'],
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
  },
  values: {
    statusVal: 'Transiting',
    speedVal: 10,
    visibleToVal: 'Blue Force',
    conditionVal: 'Working'
  }
}

export default formData
