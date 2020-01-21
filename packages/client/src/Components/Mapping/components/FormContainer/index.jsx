import React from 'react'

import Perception from '../FormChildPerception'

import './styles.scss'

const MappingForm = ({ position, type }) => {
  return (
    <section className="mapping-form-container">
      {type === 'perception'} <Perception></Perception>
    </section>
  )
}
export default MappingForm
