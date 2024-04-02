// import { Component } from 'react'
// import PropTypes from 'prop-types'

// import {
//   Card,
//   CardHeader,
//   CardBody,
//   CardFooter,
//   InputGroup,
//   InputGroupAddon,
//   Input
// } from 'reactstrap'

// import { booleanOptions } from './defaultOptions'

// class EditorPreview extends Component {
//   constructor (props, content) {
//     super(props, content)

//     this.onBooleanOptionsChange = this.onBooleanOptionsChange.bind(this)
//     this.onLayoutChange = this.onLayoutChange.bind(this)
//   }

//   onBooleanOptionsChange (e) {
//     const options = e.target.options
//     const value = {}
//     for (let i = 0, l = options.length; i < l; i++) {
//       value[options[i].value] = options[i].selected
//     }
//     this.props.onChange({
//       ...this.props,
//       booleanOptions: value,
//       counter: (this.props.options.counter || 0) + 1
//     })
//   }

//   onLayoutChange (e) {
//     this.props.onChange({
//       ...this.props.options,
//       layout: e.target.value,
//       counter: (this.props.options.counter || 0) + 1
//     })
//   }

//   render () {
//     return (
//       <Card>
//         <CardHeader>
//           Boolean options
//         </CardHeader>
//         <CardBody>
//           <Input
//             type='select'
//             multiple size='11'
//             defaultValue={[]}
//             onChange={this.onBooleanOptionsChange}
//           >
//             {booleanOptions.map((option, key) => (
//               <option key={key} value={option.value}>{option.label}</option>
//             ))}
//           </Input>
//         </CardBody>
//         <CardFooter>
//           <InputGroup>
//             <InputGroupAddon addonType='prepend'>Object layout:</InputGroupAddon>
//             <Input type='select' value={this.props.options.layout} onChange={this.onLayoutChange}>
//               <option value='normal'>normal</option>
//               <option value='grid'>grid</option>
//             </Input>
//           </InputGroup>
//         </CardFooter>
//       </Card>
//     )
//   }
// }

// EditorPreview.propTypes = {
//   onChange: PropTypes.func.isRequired,
//   options: PropTypes.object.isRequired
// }

// export default EditorPreview
