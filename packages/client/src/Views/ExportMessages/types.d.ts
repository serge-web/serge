import { Wargame, ExportItemMessages } from '@serge/custom-types'

interface Props {
  wargame: Wargame,
  exportItems: ExportItemMessages[],
  exportWargameMessages: (wargame: Wargame) => void
}
export default Props
