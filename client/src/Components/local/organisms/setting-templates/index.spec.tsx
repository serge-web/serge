import React from 'react'
import renderer, { act } from 'react-test-renderer'
import { MessageTemplatesMock } from 'src/mocks'
import { TemplateBody } from 'src/custom-types'
import SettingForces from './index'

const onChange = (updates: { templates: Array<TemplateBody> }): void =>
  console.log({ 'update template data': updates })

const onSave = (templateData: TemplateBody): void => {
  console.log('Your save logic', MessageTemplatesMock)
  console.log('templateData:', templateData)
}

jest.mock('@ginkgo-bioworks/react-json-schema-form-builder', () => ({
  FormBuilder: ({ schema, uischema, onChange }: any) => {
    console.log('schema', schema)
    console.log('uischema', uischema)
    act(() => {
      onChange('{}', '{}') 
    })

    // Return a placeholder component
    return <div data-testid="form-builder-mock" />
  }
}))

describe('SettingForces component:', () => {
  it('renders correctly', () => {
    const tree = renderer
      .create(
        <SettingForces onChange={onChange} onSave={onSave} templates={MessageTemplatesMock} />,
        { createNodeMock: () => document.createElement('textarea') }
      )
      .toJSON()

    // Expectations go here
    expect(tree).toMatchSnapshot()
  })
})
