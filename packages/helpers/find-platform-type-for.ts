import _ from 'lodash'

export default function findPlatformTypeFor (/* array */ typesList: any, /* string */ platformType: string) {
  // NOTE: had to convert platformType to lower case in next line in order to match
  // a one-word capitalised platform type.
  return typesList.find((pType: any) => _.kebabCase(pType.name).toLowerCase() === platformType.toLowerCase())
};
