import { Wargame, ExportItemMessages } from '@serge/custom-types'

interface Props {
  wargame: Wargame,
  exportItems: ExportItemMessages[],
  loader: boolean,
  exportWargameMessages: (wargame: Wargame) => void
}
export default Props
