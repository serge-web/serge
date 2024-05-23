import React from 'react'
import { WidgetProps } from '@rjsf/utils'

const CustomCheckbox = (props: WidgetProps): React.JSX.Element => {
  return (
    <>
      <input type='checkbox' className={props.value ? 'checked' : 'unchecked'} required={props.required} onClick={() => props.onChange(!props.value)} />
      <label>{props.label}</label> 
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
