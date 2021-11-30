import { MessageCustom } from "@serge/custom-types"

export interface CoreFunc {
  (roleId: string, verb: string, _message: MessageCustom): MessageCustom
}

export interface ClaimFunc {
  (assignee: string, roleId: string, verb: string, _message: MessageCustom): MessageCustom
}

export type ActionHandler = CoreFunc | ClaimFunc


export const edit: ClaimFunc = (_assignee: string, _roleId: string, _verb: string, _message: MessageCustom): MessageCustom => {
  // to be implemented
  console.log('handler - edit, assign to', _assignee)
  return _message
}

export const save: CoreFunc = (_roleId: string, _verb: string, _message: MessageCustom): MessageCustom => {
  // to be implemented
  console.log('handler - save')
  return _message
}

export const release: CoreFunc = (_roleId: string, _verb: string, _message: MessageCustom): MessageCustom => {
  // to be implemented
  console.log('handler - release')
  return _message
}

export const submitForReview: CoreFunc = (_roleId: string, _verb: string, _message: MessageCustom): MessageCustom => {
  // to be implemented
  console.log('handler - submit')
  return _message
}

export const unclaim: CoreFunc = (_roleId: string, _verb: string, _message: MessageCustom): MessageCustom => {
  // to be implemented
  console.log('handler - claim')
  return _message
}

export const requestChanges: CoreFunc = (_roleId: string, _verb: string, _message: MessageCustom): MessageCustom => {
  // to be implemented
  console.log('handler - request changes')
  return _message
}

export const approve: CoreFunc = (_roleId: string, _verb: string, _message: MessageCustom): MessageCustom => {
  // to be implemented
  console.log('handler - approve')
  return _message
}

export const discard: CoreFunc = (_roleId: string, _verb: string, _message: MessageCustom): MessageCustom => {
  // to be implemented
  console.log('handler - discard')
  return _message
}

export const reopen: CoreFunc = (_roleId: string, _verb: string, _message: MessageCustom): MessageCustom => {
  // to be implemented
  console.log('handler - reopen')
  return _message
}
