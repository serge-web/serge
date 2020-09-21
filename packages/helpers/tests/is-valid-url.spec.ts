import isValidURI from '../is-valid-url'

describe('isValidURI', () => {
  it('checks is string is a valid URI', () => {
    const http = 'http://'
    const https = 'https://'
    const base = 'google.com'
    const httpStr = `${http}${base}`
    const httpsStr = `${https}${base}`
    const fullDomain = `${http}www${base}`
    const fullHttpsDomain = `${https}www${base}`
    const ipAdr = `${http}192.168.1.1`
    const withPort = `${ipAdr}:3000`
    const withQuery = `${fullHttpsDomain}/?q=search`
    const filePath = 'file:///fake-path'
    const misformatted = 'http/www'
    expect(isValidURI(httpStr)).toBeTruthy()
    expect(isValidURI(httpsStr)).toBeTruthy()
    expect(isValidURI(fullDomain)).toBeTruthy()
    expect(isValidURI(fullHttpsDomain)).toBeTruthy()
    expect(isValidURI(ipAdr)).toBeTruthy()
    expect(isValidURI(withPort)).toBeTruthy()
    expect(isValidURI(withQuery)).toBeTruthy()
    expect(isValidURI(filePath)).toBeTruthy()
    expect(isValidURI(misformatted)).toBeFalsy()
  })
})
