import { emconState, rulesOfEngagement } from './p9-core'

export const airTemplate = {
  rulesOfEngagement: rulesOfEngagement,
  emconState: emconState,
  requiresAirToAir: {
    type: 'boolean',
    title: 'Requires Air to Air refuelling',
    format: 'checkbox',
    propertyOrder: 230,
    options: {
      grid_columns: 4
    }
  }
}
