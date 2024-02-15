import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  FormControl
} from '@material-ui/core'
import React, { useEffect, useState } from 'react'
import { dropdownOptions } from './helpers/SharedData'
import replaceNumber from './helpers/replace-number'
import useStyles from './helpers/SidcGeneratorStyles'
import ms from 'milsymbol'
import 'leaflet/dist/leaflet.css'
import renderDropdown from './helpers/renderDeopdown'
import { CUSTOM_SIDC } from 'src/config'
import PropsTypes from './PropsTypes/types'

const SIDCGenerator: React.FC<PropsTypes> = ({ onClose, onSave, sidcValue }) => {
  const [symbolElement, setSymbolElement] = useState<any | ms.Symbol>(null)
  const [sidcCode, setSidCode] = useState<string>('')
  const [originalNumber, setoriginalNumber] = useState<string>('')
  const classes = useStyles()

  useEffect(() => {
    const options = {
      size: 100
    }

    const symbol = new ms.Symbol(originalNumber, options)
    setSidCode(originalNumber)
    setSymbolElement(symbol.asDOM())
  }, [originalNumber])

  useEffect(() => {
    const isValid = !isNaN(Number(sidcValue))
    if (!isValid) {
      console.log(`${sidcValue} is not a valid number.`)
    }

    setoriginalNumber(isValid ? sidcValue : CUSTOM_SIDC)
  }, [])

  const handleSave = () => {
    onSave(originalNumber)
    onClose && onClose()
  }

  return (
    <div className={classes.root}>
      {onClose && (
        <Dialog open={true} onClose={onClose}>
          <DialogTitle>SIDC Code: {sidcCode}</DialogTitle>
          <DialogTitle>SIDC Generator</DialogTitle>
          <DialogContent>
            <FormControl className={classes.formControl}>
              {dropdownOptions.map(option => (
                renderDropdown(
                  option.value,
                  (e) => { setoriginalNumber(replaceNumber(originalNumber, e.target.value as string, option.index)) },
                  option.title
                )
              ))}
              
            </FormControl>
          </DialogContent>
          <DialogContent>
            {symbolElement && (
              <div
                className={classes.symbolContainer}
                dangerouslySetInnerHTML={{ __html: symbolElement.outerHTML }}
              />
            )}
          </DialogContent>
          <DialogActions>
            <Button
              className={classes.button}
              onClick={handleSave}
              color="primary"
            >
              Done
            </Button>
            <Button
              className={classes.button}
              onClick={onClose}
              color="primary"
            >
              Cancel
            </Button>
          </DialogActions>
        </Dialog>
      )}
    </div>
  )
}

export default SIDCGenerator
