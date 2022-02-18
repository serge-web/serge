import React from 'react'
import MoreInfo from './index'
import docs from './README.md'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCogs } from '@fortawesome/free-solid-svg-icons'

export default {
  title: 'local/molecules/MoreInfo',
  component: MoreInfo,
  decorators: [],
  parameters: {
    readme: {
      // Show readme before story
      content: docs
    }
  }
}

export const Default: React.FC = () => {
  return <>
    <MoreInfo description='The percentage fuel remaining'>Fuel</MoreInfo>
    <br />
    <MoreInfo description='This is a long description, then we can see how it appear in the More Info panel. This is a long description, then we can see how it appear in the More Info panel.'>
      <FontAwesomeIcon icon={faCogs} />
    </MoreInfo>
    <br />
    <MoreInfo color="#222" description='The percentage fuel remaining'>Dark version</MoreInfo>
    <br />
    <MoreInfo color="#22f" description='The descriptive text on the blue version'>
      <FontAwesomeIcon icon={faCogs} />
    </MoreInfo>
  </>
}
