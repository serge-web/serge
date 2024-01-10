export type SelectedProps = {
  [key: string]: any
}

export type ProppertiesPanelProps = {
  selectedProp: SelectedProps
  onPropertiesChange: (key: string, value: string) => void
  onRemoveFilter?: (filter: string) => void
}