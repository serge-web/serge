import React from 'react'
import SplitButton from './index'
import docs from './README.md'

const wrapper: React.FC = (storyFn: any) => <div style={{ height: '600px' }}>{storyFn()}</div>

export default {
  title: 'local/atoms/SplitButton',
  component: SplitButton,
  decorators: [wrapper],
  parameters: {
    readme: {
      // Show readme before story
      content: docs
    }
  }
}

const clicked = (e: any): void => {
  window.alert('clicked:' + e)
}

export const Default: React.FC = () => {
  return <SplitButton label="Test" options={['Opt one', 'Opt two']} onClick={clicked} />
}

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
