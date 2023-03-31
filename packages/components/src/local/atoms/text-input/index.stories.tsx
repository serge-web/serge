import React from 'react'
import InputAdornment from '@material-ui/core/InputAdornment'
import { withKnobs, boolean, number, text } from '@storybook/addon-knobs'
import { Visibility } from '@material-ui/icons'

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

export const Default: React.FC = () => <TextInput multiline={boolean('Multi-Line', false)} label="turns" labelColor="common.white" customColor="common.white" value={5} />
export const Filled: React.FC = () => <TextInput value={text('Initial value', 'Lorem ipsum')} multiline={boolean('Multi-Line', true)} variant="filled" placeholder="Enter some value" />
export const FilledWithLabel: React.FC = () => <TextInput multiline={boolean('Multi-Line', true)} variant="filled" label="Enter a value" labelColor="common.white" labelSize={12} />
export const TitleInput: React.FC = () => <TextInput titleInput={true} customColor="transparent" value="transparent" />
export const InputWithIcon: React.FC = () => <TextInput variant="filled" fullWidth endAdornment={<InputAdornment position="end"><Visibility /></InputAdornment>} />

const rowValues = {
  range: true,
  min: 1,
  max: 4,
  step: 1
}

export const FilledWithLabelTwoRows: React.FC = () => <TextInput multiline={boolean('Multi-Line', true)} fullWidth rows={number('Rows', 2, rowValues)} variant="filled" label="Enter a value" labelColor="common.white" labelSize={12} />

export const FilledWithLabelTwoRowsMaxFour: React.FC = () => <TextInput fullWidth={boolean('Full-width', false)} multiline={boolean('Multi-Line', true)} rows={number('Rows', 2, rowValues)} maxRows={number('Max rows', 4, rowValues)} variant="filled" label="Enter a value" labelColor="common.white" labelSize={12} />

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore TS believes the 'story' property doesn't exist but it does.
Default.story = {
  parameters: {
    options: {
      // This story requires addons but other stories in this component do not
      showPanel: true
    }
  }
}
