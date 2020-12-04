import React from 'react'

// Import component files
import SearchListRow from './index'
import docs from './README.md'

export default {
  title: 'local/atoms/SearchListRow',
  component: SearchListRow,
  decorators: [],
  parameters: {
    readme: {
      // Show readme before story
      content: docs
    }
  }
}

export const Default: React.FC = () => (
  <SearchListRow
    active={false}
    onClick={(): void => window.alert('Row clicked')}
  >
    List item title
  </SearchListRow>
)

export const Active: React.FC = () => (
  <SearchListRow
    active={true}
    onClick={(): void => window.alert('Row clicked')}
  >
    List item title
  </SearchListRow>
)

export const WithMenu: React.FC = () => (
  <SearchListRow
    active={false}
    onClick={(): void => window.alert('Row clicked')}
    onDuplicate={(): void => window.alert('Row duplicated')}
    onDelete={(): void => window.alert('Row deleted')}
  >
    List item title
  </SearchListRow>
)
