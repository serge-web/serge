/* global it expect */
import React from 'react'
import renderer from 'react-test-renderer'
import RoleAction from './index'

describe('RoleAction component:', () => {
  it('renders correctly', () => {
    const editRole = (): void => window.alert('Edit role clicked')
    const removeRole = (): void => window.alert('Delete role clicked')
    const tree = renderer
      .create(
        <RoleAction role="CO" onEditRole={editRole} onRemoveRole={removeRole} />
      )
      .toJSON()
    expect(tree).toMatchSnapshot()
  })
})
