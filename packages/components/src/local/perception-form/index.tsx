import React, { useState, useContext } from 'react'

/* Import Types */
import PropTypes from './types/props'

/* Import Stylesheet */
import styles from './styles.module.scss'

import RCB from '../form-elements/rcb'
import { PerceptionFormValues } from '@serge/custom-types'
import Button from '../form-elements/button'
import { FormGroup, clSelect, clInput } from '../form-elements/form-group'
import TitleWithIcon from '../form-elements/title-with-icon'
import { Input, Select } from '@material-ui/core'
import { renderOptions } from '../form-elements/selector'

/* Import Context */
import { MapContext } from '../mapping'

/* Render component */
export const PerceptionForm: React.FC<PropTypes> = ({ formHeader, formData, channelID, postBack, icon }) => {
  const [formState, setFormState] = useState<PerceptionFormValues>(formData.values)

  const { playerForce } = useContext(MapContext).props

  const { perceivedForce, perceivedType } = formData.populate
  const { perceivedNameVal, perceivedForceVal, perceivedTypeVal } = formState

  // TODO: Refactor this into a reusable helper and remove other instances
  const changeHandler = (e: any): void => {
    const { name, value } = e
    setFormState(
      {
        ...formState,
        [`${name}Val`]: value
      }
    )
  }

  const selectHandler = (event: any): void => {
    const data: string = event.target.value
    setFormState(
      {
        ...formState,
        perceivedTypeVal: data
      }
    )
  }

  const submitForm = (): void => {
    if (postBack !== undefined) {
      const payload = {
        perception: {
          by: playerForce,
          force: formState.perceivedForceVal,
          type: formState.perceivedTypeVal,
          name: formState.perceivedNameVal
        },
        assetId: formState.assetId
      }
      postBack('perception', payload, channelID)
    }
  }

  return <div className={styles.main}>
    <TitleWithIcon
      forceColor={icon.forceColor}
      platformType={icon.platformType}
    >
      {perceivedNameVal || formHeader || ''}
    </TitleWithIcon>
    <FormGroup title="Perceived Name">
      <Input className={clInput} name="perceivedName" value={perceivedNameVal} onChange={changeHandler}/>
    </FormGroup>

    <FormGroup title="Perceived Force" disableOffsets={true}>
      <RCB
        disableOffset={true}
        type="radio"
        force={true}
        name={'perceivedForce'}
        options={perceivedForce}
        value={perceivedForceVal}
        updateState={changeHandler}
      />
    </FormGroup>
    <FormGroup title="Perceived Type">
      <Select
        name='perceivedType'
        className={clSelect}
        value={perceivedTypeVal}
        onChange={selectHandler}
      >{renderOptions(perceivedType)}</Select>
    </FormGroup>
    <Button onClick={submitForm}>Save</Button>
  </div>
  /*
  return <Form type="perceived-as" headerText={perceivedNameVal || formHeader || ''}>
    <fieldset>
      <TextInput label="Perceived Name" name="perceivedName" value={perceivedNameVal} updateState={changeHandler}/>
      <RCB type="radio" force={true} label="Perceived Force" name={'perceivedForce'} options={perceivedForce} value={perceivedForceVal} updateState={changeHandler}/>
      <Selector label="Percieved Type" name='perceivedType' options={perceivedType} selected={perceivedTypeVal} updateState={selectHandler}/>
    </fieldset>
    <Button onClick={submitForm}>Save</Button>
  </Form>
  */
}

export default PerceptionForm
