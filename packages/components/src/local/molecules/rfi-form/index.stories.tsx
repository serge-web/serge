import React from 'react'
import gameMessagesWithRFI from '@serge/mocks/game-messages-rfi.mock'
import { MessageCustom } from '@serge/custom-types/message'

// Import component files
import RfiForm from './index'
import RfiFormTypes from './types/props'
import docs from './README.md'
import { Story } from '@storybook/react/types-6-0'

export default {
  title: 'local/molecules/RfiForm',
  component: RfiForm,
  decorators: [],
  parameters: {
    readme: {
      // Show readme before story
      content: docs
    },
    backgrounds: {
      default: 'message'
    }
  }
}

const Template: Story<RfiFormTypes> = (args) => <RfiForm {...args} />

// deepscan-disable-next-line USELESS_ARROW_FUNC_BIND
export const Unallocated = Template.bind({})
Unallocated.args = {
  message: (gameMessagesWithRFI[9] as MessageCustom),
  onSubmit: console.log
}

// deepscan-disable-next-line USELESS_ARROW_FUNC_BIND
export const InProgress = Template.bind({})
InProgress.args = {
  message: (gameMessagesWithRFI[10] as MessageCustom),
  onSubmit: console.log
}

// deepscan-disable-next-line USELESS_ARROW_FUNC_BIND
export const PendingReview = Template.bind({})
PendingReview.args = {
  message: (gameMessagesWithRFI[11] as MessageCustom),
  onSubmit: console.log,
  onReject: console.log
}

// deepscan-disable-next-line USELESS_ARROW_FUNC_BIND
export const Released = Template.bind({})
Released.args = {
  message: (gameMessagesWithRFI[12] as MessageCustom),
  onSubmit: console.log
}
