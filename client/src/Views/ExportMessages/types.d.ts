import { Wargame, ExportItemMessages } from 'src/custom-types'

interface Props {
  wargame: Wargame
  exportItems: ExportItemMessages[]
  loader: boolean
  exportWargameMessages: (wargame: Wargame) => void
}
export default Props
