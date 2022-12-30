import React, { Component } from 'react'
import jsonMetaSchema from './data.json'
import * as JSONEditor from '@json-editor/json-editor'
import Editor from './jsonEditor'
import Preview from './editorPreview'
import '@fortawesome/fontawesome-free/css/all.css'
import { setPreviewSchema } from '../../ActionsAndReducers/UmpireMenu/umpireMenu_ActionCreators'
import { connect } from 'react-redux'

class SchemaEditor extends Component {
  constructor(props, content) {
    super(props, content)

    JSONEditor.JSONEditor.defaults.options.iconlib = 'fontawesome5'
    JSONEditor.JSONEditor.defaults.options.theme = 'bootstrap4'
    this.updateMetaSchema = this.updateMetaSchema.bind(this)
    this.updatePreviewSchema = this.updatePreviewSchema.bind(this)
    this.updateOptions = this.updateOptions.bind(this)

    this.schemaEditor = null
    this.editorPreview = null

    this.defaultValue = {
      type: 'object',
      properties: {
        title: {
          type: 'string'
        },
        Date: {
          type: 'string',
          format: 'datetime-local'
        },
        Status: {
          type: 'string',
          enum: [
            'Minor',
            'Major',
            'Critical'
          ]
        },
        Description: {
          type: 'string',
          format: 'textarea'
        }
      },
      title: 'Machinery Failure',
      format: 'grid'
    }

    if (this.props.schemaId) {
      this.defaultValue = this.props.messageTypes.messages.find((mes) => mes._id === this.props.schemaId).details
    }

    this.state = {
      metaSchema: jsonMetaSchema,
      previewSchema: null,
      options: {
        layout: JSONEditor.JSONEditor.defaults.options.object_layout,
        booleanOptions: {}
      }
    }
  }

  updatePreviewSchema(schema) {
    this.setState({ previewSchema: schema })

    this.props.dispatch(setPreviewSchema(schema))
  }

  updateOptions(options) {
    this.setState({ options: options })
  }

  updateMetaSchema(schema) {
    this.setState({ metaschema: schema })
  }

  render() {
    return (
      <>
        <div className='flex-content flex-content--left50'>
          <Editor
            schema={this.state.metaSchema}
            onChange={this.updatePreviewSchema}
            options={this.state.options}
            defaultValue={this.defaultValue}
          />
        </div>
        <div className='flex-content flex-content--right50'>
          <Preview schema={this.state.previewSchema} />
        </div>
      </>
    )
  }
}

const mapStateToProps = ({ umpireMenu }) => ({
  umpireMenu
})

export default connect(mapStateToProps)(SchemaEditor)
