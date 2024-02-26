import React from 'react'
import { StandardIdentityOne } from '../helpers/SharedData'

export interface RenderDropdownProps {
    index: number
    endindex: number
    data: StandardIdentityOne
    onChange: (e: React.ChangeEvent<{ value: unknown }>) => void | null
    label: string
    originalNumber: string
}

interface PropsTypes {
    onClose?: () => void
    onSave: (symbolName: string) => void
    sidcValue: string
}

export default PropsTypes
