import React, { useState } from 'react'
import { Story } from '@storybook/react/types-6-0'
// Import component files
import AssetsAccordion from './index'
import docs from './README.md'
import { withKnobs } from '@storybook/addon-knobs'
import { smallScaleForces as forcesMock, platformTypes as platformTypesMock } from '@serge/mocks'
import { ForceData } from '@serge/custom-types'
import { deepCopy } from '@serge/helpers'
import { LaydownTypes } from '@serge/config'

const wrapper: React.FC = (storyFn: any) => <div style={{ height: '600px' }}>{storyFn()}</div>

export default {
  title: 'local/organisms/SettingForces/AssetsAccordion',
  component: AssetsAccordion,
  decorators: [withKnobs, wrapper],
  parameters: {
    readme: {
      // Show readme before story
      content: docs
    },
    options: {
      // This story requires addons but other stories in this component do not
      showPanel: true
    }
  }
}
interface StoryPropTypes {
  forcesParam: ForceData[]
}

const Template: Story<StoryPropTypes> = (args) => {
  const { forcesParam } = args
  const [force, setForce] = useState(forcesParam[1])
  const updateForce = (nextForce: ForceData): void => {
    if (nextForce.uniqid !== force.uniqid) {
      setForce(nextForce)
    }
  }
  return <AssetsAccordion
    selectedForce={force}
    forcesData={forcesParam}
    platformTypes={platformTypesMock}
    onChangeHandler={(nextForce): void => { updateForce(nextForce) }}
  />
}

const setAsset2Laydown = (forces: ForceData[], lType: LaydownTypes): ForceData[] => {
  const newForces = deepCopy(forces)
  // make one item umpire laydown
  const blueForce = newForces[1]
  const secondAsset = blueForce.assets[1]
  delete secondAsset.position
  secondAsset.locationPending = lType
  return newForces
}

export const UmpireLaydown = Template.bind({})
UmpireLaydown.args = {
  forcesParam: setAsset2Laydown(forcesMock, LaydownTypes.UmpireLaydown)
}

export const ForceLaydown = Template.bind({})
ForceLaydown.args = {
  forcesParam: setAsset2Laydown(forcesMock, LaydownTypes.ForceLaydown)
}
