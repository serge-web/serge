import React from 'react'
import InputAdornment from '@material-ui/core/InputAdornment'
import { Visibility } from '@material-ui/icons'
import { StoryFC } from 'src/custom-types'

// Import component files
import TextInput from './index'
import docs from './README.md'

export default {
  title: 'local/atoms/TextInput',
  component: TextInput,
  parameters: {
    readme: {
      // Show readme before story
      content: docs
    }
  }
}

export const Default: StoryFC = () => <TextInput multiline={false} label="turns" labelColor="common.white" customColor="common.white" value={5} />
export const Filled: StoryFC = () => <TextInput value={'Lorem ipsum'} multiline={true} variant="filled" placeholder="Enter some value" />
export const FilledWithLabel: StoryFC = () => <TextInput multiline={true} variant="filled" label="Enter a value" labelColor="common.white" labelSize={12} />
export const TitleInput: StoryFC = () => <TextInput titleInput={true} customColor="transparent" value="transparent" />
export const InputWithIcon: StoryFC = () => <TextInput variant="filled" fullWidth endAdornment={<InputAdornment position="end"><Visibility /></InputAdornment>} />

export const FilledWithLabelTwoRows: StoryFC = () => <TextInput multiline={true} fullWidth rows={2} variant="filled" label="Enter a value" labelColor="common.white" labelSize={12} />

export const FilledWithLabelTwoRowsMaxFour: StoryFC = () => <TextInput fullWidth={false} multiline={true} rows={2} maxRows={4} variant="filled" label="Enter a value" labelColor="common.white" labelSize={12} />

Default.story = {
  parameters: {
    options: {
      // This story requires addons but other stories in this component do not
      showPanel: true
    }
  }
}
