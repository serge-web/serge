const formData = {
  populate: {
    status: [{
      name: 'Moored',
      mobile: false
    },
    {
      name: 'Transiting',
      mobile: true
    }],
    speed: [10, 20, 30]
  },
  values: {
    statusVal: {
      name: 'Transiting',
      mobile: true
    },
    speedVal: 10,
    turnsVal: 5
  }
}

export default formData
