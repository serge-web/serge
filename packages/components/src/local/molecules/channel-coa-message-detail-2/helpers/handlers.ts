export interface CoreFunc {
  (verb: string): void
}

export interface ClaimFunc {
  (role: string, verb: string): void
}

export const edit: CoreFunc = (_verb: string): void => {
  // to be implemented
}

export const save: CoreFunc = (_verb: string): void => {
  // to be implemented
}

export const release: CoreFunc = (_verb: string): void => {
  // to be implemented
}

export const submitForReview: ClaimFunc = (_verb: string): void => {
  // to be implemented
}

export const unclaim: ClaimFunc = (_verb: string): void => {
  // to be implemented
}

export const requestChanges: CoreFunc = (_verb: string): void => {
  // to be implemented
}

export const approve: CoreFunc = (_verb: string): void => {
  // to be implemented
}

export const discard: CoreFunc = (_verb: string): void => {
  // to be implemented
}

export const reopen: CoreFunc = (_verb: string): void => {
  // to be implemented
}
