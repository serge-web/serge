import { Button, Dialog, DialogTitle, DialogContent, DialogActions, FormControl } from '@material-ui/core'
import useStyles from './helpers/SidcGeneratorStyles'
import ms from 'milsymbol'
import 'leaflet/dist/leaflet.css'
import React, { useEffect, useState } from 'react'
import { affiliationDefault, BattleDimensionIcon } from './helpers/SharedData'
import renderDropdown from './helpers/renderDeopdown'
import PropsTypes from './PropsTypes/types'

const SIDCGenerator: React.FC<PropsTypes> = ({ onClose, onSave }) => {
  const [codingScheme] = useState('S')
  const [selectedSymbolSet, setSelectedSymbolSet] = useState<string>('F')
  const [BattleDimension, setBattleDimension] = useState<string>('GPU')
  const [symbolElement, setSymbolElement] = useState<any | ms.Symbol>(null)
  const [sidcCode, setSidCode] = useState<string>('')
  const classes = useStyles()
  
  useEffect(() => {
    const sidcCode = `${codingScheme}${selectedSymbolSet}${BattleDimension}-------`
    const options = {
      size: 50 
    }
    const symbol = new ms.Symbol(sidcCode, options)
    setSidCode(sidcCode)
    setSymbolElement(symbol.asDOM())
  }, [selectedSymbolSet, BattleDimension])
  
  const handleSave = () => {
    onSave(sidcCode)
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
              affiliationDefault,
              selectedSymbolSet,
              (e) => setSelectedSymbolSet(e.target.value as string),
              'Affiliation'
            )}
            {renderDropdown(
              BattleDimensionIcon,
              BattleDimension,
              (e) => setBattleDimension(e.target.value as string),
              'Battle Dimension'
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
