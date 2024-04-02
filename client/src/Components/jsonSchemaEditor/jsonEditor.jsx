// import React, { Component } from 'react'
// import { Card, CardHeader, CardBody, CardFooter } from 'reactstrap'
// // 
// import { SchemaEditor } from './json-schema-editor/editor'
// import PropTypes from 'prop-types'
// import * as JSONEditor from '@json-editor/json-editor'

// class JsonSchemaEditor extends Component {
//   constructor (props, content) {
//     super(props, content)

//     this.schemaEditor = null
//     this.editorBox = React.createRef()
//     this.onChange = this.onChange.bind(this)
//     this.updateEditor = this.updateEditor.bind(this)
//     this.saved = ''
//     this.value = this.props.defaultValue
//   }

//   onChange (newValue, e) {
//     const errors = this.schemaEditor.validate()
//     console.log(errors)
//     if (errors.length) {
//       alert('Invalid schema')
//     } else {
//       if (this.props.onChange) {
//         this.value = this.schemaEditor.jsonEditor.getValue()
//         this.props.onChange(this.schemaEditor.getJSON())
//       }
//     }
//   }

//   componentDidMount () {
//     this.schemaEditor = new SchemaEditor(this.editorBox)
//     this.updateEditor(this.props.schema, this.props.options)
//   }

//   UNSAFE_componentWillReceiveProps ({ schema, options }) {
//     this.updateEditor(schema, options)
//   }

//   updateEditor (schema, options) {
//     try {
//       const newJson = JSON.stringify(schema)
//       if (newJson !== this.save || options.counter !== this.props.options.counter) {
//         JSONEditor.JSONEditor.defaults.options.object_layout = options.layout
//         JSONEditor.JSONEditor.defaults.options = {
//           ...JSONEditor.JSONEditor.defaults.options,
//           ...options.booleanOptions
//         }

//         this.save = newJson
//         this.schemaEditor.updateSchema(schema)
//         this.schemaEditor.jsonEditor.setValue(this.value)
//         this.schemaEditor.jsonEditor.on('change', this.onChange)
//       }
//     } catch (err) {
//       alert('Invalid json schema')
//       console.log(err)
//     }
//   }

//   render () {
//     return (
//       <Card>
//         <CardHeader>
//           Schema Editor
//         </CardHeader>
//         <CardBody>
//           <div id='schema-editor' ref={this.editorBox} />
//         </CardBody>
//         <CardFooter>
//         </CardFooter>
//       </Card>
//     )
//   }
// }

// JsonSchemaEditor.propTypes = {
//   schema: PropTypes.object.isRequired,
//   onChange: PropTypes.func
// }

// export default JsonSchemaEditor
