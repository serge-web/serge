export default function (str) {
  var httpPattern = new RegExp('^(https?:\\/\\/)?' + // protocol
    '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|' + // domain name
    '((\\d{1,3}\\.){3}\\d{1,3}))' + // OR ip (v4) address
    '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*' + // port and path
    '(\\?[;&a-z\\d%_.~+=-]*)?' + // query string
    '(\\#[-a-z\\d_]*)?$', 'i') // fragment locator
  var windowsFilePath = new RegExp('^[\\w\\\\.:\\s]+?\\.\\w{2,4}')

  return typeof str === 'string' && (!!httpPattern.test(str) || str.startsWith('file:///') || !!windowsFilePath.test(str))
}
