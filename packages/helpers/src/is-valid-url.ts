const isValidUrl = (str: string): boolean => {
  const httpPattern = new RegExp('^(https?:\\/\\/)?' + // protocol
    '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|' + // domain name
    '((\\d{1,3}\\.){3}\\d{1,3}))' + // OR ip (v4) address
    '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*' + // port and path
    '(\\?[;&a-z\\d%_.~+=-]*)?' + // query string
    '(\\#[-a-z\\d_]*)?$', 'i') // fragment locator
  const windowsFilePath = new RegExp('^[\\w\\\\.:\\s]+?\\.\\w{2,4}')

  return httpPattern.test(str) || (typeof str === 'string' && str.startsWith('file:///')) || windowsFilePath.test(str)
}

export default isValidUrl
