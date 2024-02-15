import { Button, Dialog, DialogTitle, DialogContent, DialogActions, FormControl } from '@material-ui/core'
import useStyles from './helpers/SidcGeneratorStyles'
import ms from 'milsymbol'
import 'leaflet/dist/leaflet.css'
import React, { useEffect, useState } from 'react'
import { StandardIdentityOne, StandardIdentityTwo, symbolSet, statusDefault } from './helpers/SharedData'
import replaceNumber from './helpers/replace-number'
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
      size: 50 
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
    onClose()
  }
      
  return (
    <div className={classes.root}>
      <Dialog open={true} onClose={onClose}>
        <DialogTitle>SIDC Code: {sidcCode}</DialogTitle>
        <DialogTitle>SIDC Generator</DialogTitle>
        <DialogContent>
          <FormControl className={classes.formControl}>
            {renderDropdown(
              StandardIdentityOne,
              (e) => { setoriginalNumber(replaceNumber(originalNumber, e.target.value as string, 2)) },
              'Standard Identity 1'
            )}
            {renderDropdown(
              StandardIdentityTwo,
              (e) => { setoriginalNumber(replaceNumber(originalNumber, e.target.value as string, 3)) },
              'Standard Identity 2'
            )}
            {renderDropdown(
              symbolSet,
              (e) => { setoriginalNumber(replaceNumber(originalNumber, e.target.value as string, 4)) },
              'Symbol set'
            )}
            {renderDropdown(
              statusDefault,
              (e) => { setoriginalNumber(replaceNumber(originalNumber, e.target.value as string, 6)) },
              'Status'
            )}
          </FormControl>
        </DialogContent>
        <DialogContent>
          {symbolElement && <div className={classes.symbolContainer} dangerouslySetInnerHTML={{ __html: symbolElement.outerHTML }} />}
        </DialogContent>
        <DialogActions>
          <Button className={classes.button} onClick={handleSave} color="primary">
              Done
          </Button>
          <Button className={classes.button} onClick={onClose} color="primary">
              Cancel
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  )
}

export default SIDCGenerator
