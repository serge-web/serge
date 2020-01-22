import _ from 'lodash'

export default function findPlatformTypeFor (/* array */ typesList, /* string */ platformType) {
  return typesList.find(pType => _.kebabCase(pType.name) === platformType)
};
