// setup file
const configure = require('enzyme').configure
const Adapter = require('@wojtekmaj/enzyme-adapter-react-17')

configure({ adapter: new Adapter() })

const createElementNSOrig = global.document.createElementNS
global.document.createElementNS = function(namespaceURI, qualifiedName) {
  if (namespaceURI==='http://www.w3.org/2000/svg' && qualifiedName==='svg'){
    const element = createElementNSOrig.apply(this,arguments)
    element.createSVGRect = function(){};
    return element;
  }
  return createElementNSOrig.apply(this,arguments)
}

Object.defineProperty(window, 'getComputedStyle', {
  value: () => ({
    getPropertyValue: (prop) => {
      return '';
    }
  })
});
