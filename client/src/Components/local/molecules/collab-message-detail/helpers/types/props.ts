import { CollaborativeMessageStates } from 'src/config'
import { ForceRole } from 'src/custom-types'

interface Props {
    isResponse: boolean
    canSeeResponse: boolean
    message: any 
    collaboration: any 
    template: any 
    role: ForceRole
    state: CollaborativeMessageStates
    notHappeningHandler: (val: { [property: string]: any }) => void
    responseHandler: (val: { [property: string]: any }) => void
    newMessageHandler: (val: { [property: string]: any }) => void
    // formIsEditable: boolean | undefined
    gameDate: string
}

export default Props
