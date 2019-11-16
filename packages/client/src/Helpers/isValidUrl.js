export default function (str) {
  var httpPattern = new RegExp('^(https?:\\/\\/)?' + // protocol
    '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|' + // domain name
    '((\\d{1,3}\\.){3}\\d{1,3}))' + // OR ip (v4) address
    '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*' + // port and path
    '(\\?[;&a-z\\d%_.~+=-]*)?' + // query string
    '(\\#[-a-z\\d_]*)?$', 'i') // fragment locator
  var filePattern = new RegExp('^(file:\\/\\/)?' + // protocol
    '(\\?[;&a-z\\d%_.~+=-]*)?') // query string

  return !!httpPattern.test(str) || !!filePattern.test(str)
}
