import React from 'react'

import Perception from '../FormChildPerception'

import './styles.scss'

const MappingForm = props => {
  return (
    <section className="mapping-form-container">
      <Perception allForces={props.store.allForces} allPlatforms={props.store.allPlatforms}></Perception>
    </section>
  )
}
export default MappingForm
