// import React, { Component } from 'react'
// import ReactAce from 'react-ace-editor'
// import { Card, CardHeader, CardBody, CardFooter, Button } from 'reactstrap'

// class MetaSchema extends Component {
//   constructor (props, content) {
//     super(props, content)

//     this.editorBox = React.createRef()
//     this.onChange = this.onChange.bind(this)
//     this.setEditorValue = this.setEditorValue.bind(this)
//     this.onUpdateClick = this.onUpdateClick.bind(this)
//     this.saveJson = ''
//     this.state = {}
//   }

//   onChange (newValue, e) {
//     // const editor = this.editorBox.current.editor; // The editor object is from Ace's API
//     // console.log(editor.getValue()); // Outputs the value of the editor
//   }

//   componentDidMount () {
//     this.setEditorValue(JSON.stringify(this.props.value, null, 2))
//   }

//   componentWillReceiveProps ({ value }) {
//     this.setEditorValue(JSON.stringify(value, null, 2))
//   }

//   setEditorValue (json) {
//     if (this.editorBox.current && this.saveJson !== json) {
//       this.saveJson = json
//       this.editorBox.current.editor.setValue(this.saveJson)
//       this.editorBox.current.editor.session.getSelection().clearSelection()
//       this.editorBox.current.editor.resize()
//     }
//   }

//   onUpdateClick () {
//     this.props.onSchemaSubmit(this.editorBox.current.editor.getValue())
//   }

//   render () {
//     return (
//       <Card>
//         <CardHeader>
//           Meta Schema
//         </CardHeader>
//         <CardBody style={{ padding: 0 }}>
//           <ReactAce
//             mode='json'
//             theme='monokai'
//             setReadOnly={false}
//             onChange={this.onChange}
//             style={{ height: '400px' }}
//             ref={this.editorBox}
//           />
//         </CardBody>
//         <CardFooter>
//           <Button onClick={this.onUpdateClick}>Update Schema Editor</Button>
//         </CardFooter>
//       </Card>
//     )
//   }
// }

// export default MetaSchema
