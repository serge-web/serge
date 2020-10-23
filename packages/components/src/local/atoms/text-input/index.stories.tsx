import React from 'react'
import { withKnobs, boolean, number, text } from '@storybook/addon-knobs'

// Import component files
import TextInput from './index'
import docs from './README.md'

export default {
  title: 'local/atoms/TextInput',
  component: TextInput,
  decorators: [withKnobs],
  parameters: {
    readme: {
      // Show readme before story
      content: docs
    }
  }
}

export const Default: React.FC = () => <TextInput multiline={boolean('Multi-Line', false)} label="turns" labelColor="common.white" customColor="common.white" value={5}/>
export const Filled: React.FC = () => <TextInput value={text('Initial value', 'Lorem ipsum')} multiline={boolean('Multi-Line', true)} variant="filled" placeholder="Enter some value" />
export const FilledWithLabel: React.FC = () => <TextInput multiline={boolean('Multi-Line', true)} variant="filled" label="Enter a value" labelColor="common.white" labelSize={12} />

const rowValues = {
  range: true,
  min: 1,
  max: 4,
  step: 1
}

export const FilledWithLabelTwoRows: React.FC = () => <TextInput multiline={boolean('Multi-Line', true)} fullWidth rows={number('Rows', 2, rowValues)} variant="filled" label="Enter a value" labelColor="common.white" labelSize={12} />

export const FilledWithLabelTwoRowsMaxFour: React.FC = () => <TextInput fullWidth={boolean('Full-width', false)} multiline={boolean('Multi-Line', true)} rows={number('Rows', 2, rowValues)} rowsMax={number('Max rows', 4, rowValues)} variant="filled" label="Enter a value" labelColor="common.white" labelSize={12} />

// @ts-ignore TS belives the 'story' property doesn't exist but it does.
Default.story = {
  parameters: {
    options: {
      // This story requires addons but other stories in this component do not
      showPanel: true
    }
  }
}
