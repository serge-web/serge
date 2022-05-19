import { Checkbox, Radio } from '@material-ui/core'
import { makeStyles } from '@material-ui/styles'
import { camelCase } from 'lodash'
import React from 'react'
import ComponentSelector from '../types/component-selector'

const useStyles = makeStyles({
  root: {
    color: (props: any): string => props.color
  },
  checked: {
    '&$checked': {
      color: (props: any): string => props.color
    }
  }
})

const componentSelector: ComponentSelector = (type, option, selected, handleCheckbox, name) => {
  const classes = useStyles({ color: option.colour })

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    handleCheckbox(event.target)
  }

  const inputName = name || camelCase(option.toString())

  let output = null
  switch (type) {
    case 'checkbox':
      output = <Checkbox classes={{ root: classes.root, checked: classes.checked }} name={inputName.toString()} value={option.id} checked={selected} onChange={handleChange} size="small" />
      break
    case 'radio':
      output = <Radio />
      break
  }
  return output
}

export default componentSelector
