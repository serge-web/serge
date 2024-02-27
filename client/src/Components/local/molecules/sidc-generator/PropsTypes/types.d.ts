import React from 'react'

export interface RenderDropdownProps {
    index: number
    endindex: number
    data: StandardIdentityOne
    onChange: (e: React.ChangeEvent<{ value: unknown }>) => void | null
    label: string
    originalNumber: string
}

export type StandardIdentityOneItem = {
    code: string
    index: number
    name: string
    sidc: string
  }
  
export type DropdownOption = {
    value: StandardIdentityOne
    index: number
    endindex: number 
    name: string
  }
  
export type StandardIdentityOne = {
    [key: number]: {
      code: string
      index: number
      name: string
      sidc: string
      modifier?: string 
    }
  }

interface PropsTypes {
    onClose?: () => void
    onSave: (symbolName: string) => void
    sidcValue: string
}

export default PropsTypes
