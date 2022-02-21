import { COMMODITY_TYPE_NUMBER, COMMODITY_VALUE_NUMBER } from '@serge/config'
import { PlanTurnFormData } from '@serge/custom-types'

const formData: PlanTurnFormData = {
  populate: {
    status: [{
      name: 'Moored',
      mobile: false
    },
    {
      name: 'Transiting',
      mobile: true
    }],
    speed: [10, 20, 30],
    attributes: [{ commId: 'comm_a', commType: COMMODITY_TYPE_NUMBER, name: 'Fuel', editableByPlayer: false },
      { commId: 'comm_b', commType: COMMODITY_TYPE_NUMBER, name: 'People', editableByPlayer: false },
      { commId: 'comm_c', commType: COMMODITY_TYPE_NUMBER, name: 'Water', units: 'litres', editableByPlayer: false }]
  },
  values: {
    statusVal: {
      name: 'Transiting',
      mobile: true
    },
    speedVal: 10,
    turnsVal: 5,
    condition: 'Working',
    attributes: [{ commId: 'comm_a', commType: COMMODITY_VALUE_NUMBER, value: 12 },
      { commId: 'comm_b', commType: COMMODITY_VALUE_NUMBER, value: 213 },
      { commId: 'comm_c', commType: COMMODITY_VALUE_NUMBER, value: 12450 }]
  }
}

export default formData
