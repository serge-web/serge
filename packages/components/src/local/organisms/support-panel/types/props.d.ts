
export default interface PropTypes {
}


export type TabPanelProps = {
  children?: React.ReactNode;
  active: boolean;
  value: string;
  className?: string;
}

export type PanelActionTabsProps = {
  onChange: (tab: string) => void
  className?: string
}