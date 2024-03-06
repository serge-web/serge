import React from 'react'
import renderer from 'react-test-renderer'
import { MessageTemplatesMock } from 'src/mocks'
import { TemplateBody } from 'src/custom-types'
import SettingForces from './index'

const onChange = (updates: { templates: Array<TemplateBody> }): void => console.log({ 'update template data': updates })

const onSave = (): void => {
  console.log('Your save logic', MessageTemplatesMock)
}

describe('SettingForces component:', () => {
  it('renders correctly', () => {
    const tree = renderer
      .create(
        <SettingForces onChange={onChange} onSave={onSave} templates={MessageTemplatesMock} />,
        { createNodeMock: () => document.createElement('textarea') }
      )
      .toJSON()
    expect(tree).toMatchSnapshot()
  })
})
