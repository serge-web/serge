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
  posture: {
    type: 'string',
    title: 'Posture',
    format: 'textarea',
    propertyOrder: 220,
    options: {
      grid_columns: 4,
      grid_break: true
    }
  }
}
