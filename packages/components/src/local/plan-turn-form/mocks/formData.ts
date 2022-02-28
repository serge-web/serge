import { ATTRIBUTE_TYPE_NUMBER, ATTRIBUTE_VALUE_NUMBER } from '@serge/config'
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
    attributes: [{ attrId: 'comm_a', attrType: ATTRIBUTE_TYPE_NUMBER, name: 'Fuel', editableByPlayer: false },
      { attrId: 'comm_b', attrType: ATTRIBUTE_TYPE_NUMBER, name: 'People', editableByPlayer: false },
      { attrId: 'comm_c', attrType: ATTRIBUTE_TYPE_NUMBER, name: 'Water', units: 'litres', editableByPlayer: false }]
  },
  values: {
    statusVal: {
      name: 'Transiting',
      mobile: true
    },
    speedVal: 10,
    turnsVal: 5,
    condition: 'Working',
    attributes: [{ attrId: 'comm_a', attrType: ATTRIBUTE_VALUE_NUMBER, value: 12 },
      { attrId: 'comm_b', attrType: ATTRIBUTE_VALUE_NUMBER, value: 213 },
      { attrId: 'comm_c', attrType: ATTRIBUTE_VALUE_NUMBER, value: 12450 }]
  }
}

export default formData
