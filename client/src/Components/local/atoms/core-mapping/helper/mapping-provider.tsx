import { noop } from 'lodash'
import { createContext, useContext } from 'react'

type MappingStateValue = {
  filterFeatureIds: string[]
  setFilterFeatureIds: (id:string[]) => void
}

const initialState: MappingStateValue = {
  filterFeatureIds: [],
  setFilterFeatureIds: noop
}
const MappingState = createContext<MappingStateValue>(initialState)

export const MappingProvider = MappingState.Provider
export function useMappingState (): MappingStateValue {
  return useContext(MappingState)
}
