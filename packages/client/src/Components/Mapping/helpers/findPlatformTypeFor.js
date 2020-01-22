export default function findPlatformTypeFor (/* array */ typesList, /* string */ platformType) {
  return typesList.find(pType => pType.name === platformType)
};
