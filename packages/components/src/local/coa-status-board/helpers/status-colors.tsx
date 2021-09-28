import { CollaborativeMessageStates } from '@serge/config'

interface StatusColors {
  [property: string]: string
}

export const statusColors: StatusColors = {
  [CollaborativeMessageStates.Unallocated]: '#B10303',
  [CollaborativeMessageStates.PendingReview]: '#434343',
  [CollaborativeMessageStates.Finalized]: '#007219',
  [CollaborativeMessageStates.Released]: '#007219',
  [CollaborativeMessageStates.Closed]: '#ff0000',
  [CollaborativeMessageStates.BeingEdited]: '#ffc107',
  [CollaborativeMessageStates.Pending]: '#0366d6',
  [CollaborativeMessageStates.InProgress]: '#E7740A'
}
