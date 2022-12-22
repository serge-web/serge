import { dropDownObject } from "./p9-helpers";

export const maritimeTemplate = {
  rulesOfEngagement: {
    type: 'string',
    title: 'Rules of Engagement',
    format: 'textarea',
    propertyOrder: 200,
    options: {
      grid_columns: 4
    }
  },
  emconState: {
    type: 'string',
    title: 'Emcon State',
    format: 'textarea',
    propertyOrder: 210,
    options: {
      grid_columns: 4
    }
  },
  posture: dropDownObject('Posture', ['ASW focus', 'ASuW focus', 'AAW focus'], 4, 220),
}
