import React from 'react'
import { WidgetProps } from '@rjsf/utils'

const CustomCheckbox = (props: WidgetProps): React.JSX.Element => {
  const { schema } = props
  return (
    <>
      <div className='form-label'>
        <input type='checkbox' className={props.value ? 'checked' : 'unchecked'} checked={props.value} required={props.required} onClick={() => props.onChange(!props.value)} />
        <label>{props.label}</label>
      </div> 
      <small>{schema.description}</small> 
    </>
  )
}

interface CustomWidgets {
    CheckboxWidget: typeof CustomCheckbox
  }
  
const widgets: CustomWidgets = {
  CheckboxWidget: CustomCheckbox
}

export default widgets
