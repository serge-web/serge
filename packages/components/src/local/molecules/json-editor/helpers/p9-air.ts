export const airTemplate = {
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
  posture: {
    type: 'string',
    title: 'Posture',
    format: 'textarea',
    propertyOrder: 220,
    options: {
      grid_columns: 4
    }
  },
  requiresAirToAir: {
    type: 'boolean',
    title: 'Requires A to A',
    format: 'checkbox',
    propertyOrder: 230,
    options: {
      grid_columns: 4
    }
  }
}
