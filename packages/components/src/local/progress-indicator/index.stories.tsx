import React from 'react'
import { withKnobs, select, object } from '@storybook/addon-knobs'

// Import component files
import ProgressIndicator from './index'
import docs from './README.md'
import { tabs, tabsVariant } from './mocks/tabs'

// Set the knobs to allow for component tweaking in Storybook
const tabsKnobs: Function = (toc?: boolean) => object('Tabs', toc ? tabsVariant : tabs, 'options')
const currentTabKnobs: Function = (selected: string) => select('Current Tab', tabs.map(tk => tk.name), selected, 'options')

export default {
  title: 'local/ProgressIndicator',
  component: ProgressIndicator,
  decorators: [withKnobs],
  parameters: {
    readme: {
      // Show readme before story
      content: docs
    },
    options: {
      // As we have addons enabled in this story, show the addons panel
      showPanel: true
    }
  }
}

export const Default: React.FC = () =>
  <ProgressIndicator tabs={tabsKnobs(false)} currentTab={currentTabKnobs('overview')} />

export const OverviewComplete: React.FC = () =>
  <ProgressIndicator tabs={tabsKnobs(true)} currentTab={currentTabKnobs('forces')} />
