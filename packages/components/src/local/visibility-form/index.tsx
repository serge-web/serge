import React /*, { useState } */ from 'react'

/* Import Types */
import PropTypes from './types/props'
import Form from '../form'
import { Button } from '@material-ui/core'
// import Selector from '../form-elements/selector'
// import RCB from '../form-elements/rcb'
// import TextInput from '../atoms/text-input'
// import { ColorOption, VisibilityFormValues } from '@serge/custom-types'

/* Import Stylesheet */
import styles from './styles.module.scss'
// import cx from 'classnames'

/* Render component */
export const VisibilityForm: React.FC<PropTypes> = ({ formHeader, formData, postBack }) => {
  // const [visibleTo, setVisibleTo] = useState<Array<String>>(formData.values)

  // const forces: Array<ColorOption> = formData.populate

  // const changeHandler = (e: any): void => {
  //   // const { name, value } = e
  //   // setFormState(
  //   //   {
  //   //     ...formState,
  //   //     [`${name}Val`]: value
  //   //   }
  //   // )
  // }

  // const selectHandler = (data: string): void => {
  //   // setFormState(
  //   //   {
  //   //     ...formState,
  //   //     perceivedTypeVal: data
  //   //   }
  //   // )
  // }

  const submitForm = (): void => {
    if (postBack !== undefined) {
      console.log(formData)
      // const payload = {
      //   perception: {
      //     by: playerForce,
      //     force: formState.perceivedForceVal,
      //     type: formState.perceivedTypeVal,
      //     name: formState.perceivedNameVal
      //   },
      //   assetId: formState.assetId
      // }
      // postBack('perception', payload, channelID)
    }
  }

  return <div>
    <Form type="perceived-as" headerText={formHeader || ''} formHeaderClassName={styles['form-header']}>
      {/* <span className={cx(styles['asset-icon'], styles[`platform-type-${type}`], force ? styles[force] : '')} />
      <fieldset className={styles.fieldset}>
        <TextInput label="Perceived Name" name="perceivedName" value={perceivedNameVal} updateState={changeHandler} className={styles['input-container']} placeholder={'Enter name here'} />
        <Selector label="Percieved Type" name='perceivedType' options={perceivedType} selected={perceivedTypeVal} updateState={selectHandler} className={styles['input-container']} selectClassName={styles.select} />
        <RCB type="radio" force={true} label="Perceived Force" name={'perceivedForce'} options={perceivedForce} value={perceivedForceVal} updateState={changeHandler} className={styles['input-container']} />
      </fieldset> */}
      <Button onClick={submitForm} className={styles.button}>Save</Button>
    </Form>
  </div>
}

export default VisibilityForm
