import React from 'react'

// Import component files
import AdminPanelFooter from './index'
import docs from './README.md'

export default {
  title: 'local/molecules/AdminPanelFooter',
  component: AdminPanelFooter,
  decorators: [],
  parameters: {
    readme: {
      // Show readme before story
      content: docs
    }
  }
}

export const Default: React.FC = () => (
  <AdminPanelFooter
    force={{ color: '#3dd0ff', name: 'Blue', iconURL: 'http://localhost:8080/default_img/forceDefault.png' }}
    selectedRoleName="Comms"
    onIconClick={(): any => window.alert('Icon clicked')}
  />
)

export const ColorVariation: React.FC = () => (
  <AdminPanelFooter
    force={{ color: '#a426f1', name: 'Purple', iconURL: 'http://localhost:8080/default_img/forceDefault.png' }}
    selectedRoleName="Comms"
    onIconClick={(): any => window.alert('Icon clicked')}
  />
)
