const formData = {
  populate: {
    status: ['Moored', 'Transiting'],
    speed: [10, 20, 30]
  },
  values: {
    statusVal: 'Transiting',
    speedVal: 10,
    turnsVal: 5
  }
}

export default formData
