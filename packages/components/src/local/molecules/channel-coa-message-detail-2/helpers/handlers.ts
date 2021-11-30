export interface CoreFunc {
  (roleId: string, verb: string): void
}

export interface ClaimFunc {
  (assignee: string, roleId: string, verb: string): void
}

export type ActionHandler = CoreFunc | ClaimFunc


export const edit: ClaimFunc = (_assignee: string, _roleId: string, _verb: string): void => {
  // to be implemented
  console.log('handler - edit')
}

export const save: CoreFunc = (_roleId: string, _verb: string): void => {
  // to be implemented
  console.log('handler - save')
}

export const release: CoreFunc = (_roleId: string, _verb: string): void => {
  // to be implemented
  console.log('handler - release')
}

export const submitForReview: CoreFunc = (_verb: string): void => {
  // to be implemented
  console.log('handler - submit')
}

export const unclaim: CoreFunc = (_verb: string): void => {
  // to be implemented
  console.log('handler - claim')
}

export const requestChanges: CoreFunc = (_roleId: string, _verb: string): void => {
  // to be implemented
  console.log('handler - request changes')
}

export const approve: CoreFunc = (_roleId: string, _verb: string): void => {
  // to be implemented
  console.log('handler - approve')
}

export const discard: CoreFunc = (_roleId: string, _verb: string): void => {
  // to be implemented
  console.log('handler - discard')
}

export const reopen: CoreFunc = (_roleId: string, _verb: string): void => {
  // to be implemented
  console.log('handler - reopen')
}
