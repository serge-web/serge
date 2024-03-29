import React, { useEffect, useState, useMemo } from 'react'
import { Dialog, DialogTitle, DialogContent, DialogActions, Button, FormControl, Typography } from '@material-ui/core'
import { isValidSymbol } from 'src/Helpers'
import ms from 'milsymbol'
import 'leaflet/dist/leaflet.css'
import renderDropdown from './helpers/renderDeopdown'
import useStyles from './helpers/SidcGeneratorStyles'
import PropsTypes from './PropsTypes/types'
import replaceNumber from './helpers/replace-number'
import { dropdownOptions } from './helpers/SharedData'

const SIDCGenerator: React.FC<PropsTypes> = (props) => {
  const { onClose, onSave, sidcValue } = props

  const [symbolElement, setSymbolElement] = useState<any | ms.Symbol>(null)
  const [sidcCode, setSidCode] = useState<string>('')
  const [originalNumber, setOriginalNumber] = useState<string>('')
  const [symbolCode, setSymbolCode] = useState<string>('')
  const [info, setInfo] = useState<string>('')
  const [success, setSucess] = useState<boolean>(false)
  const classes = useStyles()
  const memoizedDropdownOptions = useMemo(() => dropdownOptions(symbolCode), [symbolCode])

  useEffect(() => {
    const options = { size: 70 }
    const symbol = new ms.Symbol(originalNumber, options)
    setSidCode(originalNumber)
    setSucess(isValidSymbol(originalNumber))
    setInfo('')
    setSymbolElement(symbol.asDOM())
  }, [originalNumber])

  useEffect(() => {
    setSymbolCode(sidcValue[4] + sidcValue[5])
    setOriginalNumber(sidcValue)
  }, [sidcValue])

  const handleSave = () => {
    onSave(originalNumber)
    onClose && onClose()
  }

  const handleDropdownChange = (e: React.ChangeEvent<{ value: unknown }>, key: number) => {
    const replesNumber = replaceNumber(originalNumber, e.target.value as string, key)
    const vaildSymbol = isValidSymbol(replesNumber)
    if (vaildSymbol) {
      const newSymbolCode = replesNumber[4] + replesNumber[5]
      setSymbolCode(newSymbolCode)
      setOriginalNumber(replesNumber)
    } else {
      setInfo('The symbol you have chosen is not compatible with the current sidc code . Please select a different symbol or leave it unchanged to maintain validity.')
      setTimeout(() => {
        setInfo('')
      }, 20000)
    }
  }

  const renderDropdownOptions = useMemo(() => {
    return memoizedDropdownOptions.map(option =>
      renderDropdown({
        index: option.index,
        endindex: option.endindex,
        data: option.value,
        onChange: (e: React.ChangeEvent<{ value: unknown }>) => handleDropdownChange(e, option.index),
        label: option.name,
        originalNumber
      })
    )
  }, [memoizedDropdownOptions, originalNumber])

  return (
    <>
      {onClose && (
        <Dialog className={classes.root} open={true} onClose={onClose}>
          <DialogTitle>SIDC Code: {sidcCode} <span className={success ? classes.success : ''}>{success && 'Success!'} </span>
          </DialogTitle>
          <DialogContent>
            {symbolElement && (
              <div className={classes.symbolContainer} dangerouslySetInnerHTML={{ __html: symbolElement.outerHTML }} />
            )}
          </DialogContent>
          <DialogTitle>SIDC Generator</DialogTitle>
          {info && <Typography className={classes.info}>
            <h4>Info!</h4>   
            {info}
          </Typography>} 

          <DialogContent className={classes.content}>
            <FormControl className={classes.formControl}>
              {renderDropdownOptions}
            </FormControl>
          </DialogContent>
          <DialogActions>
            <Button className={classes.button} onClick={handleSave} color="primary">Done</Button>
            <Button className={classes.button} onClick={onClose} color="primary">Cancel</Button>
          </DialogActions>
        </Dialog>
      )}
    </>
  )
}

export default SIDCGenerator
