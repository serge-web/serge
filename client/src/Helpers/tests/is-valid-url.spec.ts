import isValidUrl from '../is-valid-url'

describe('isValidUrl', () => {
  it('checks is string is a valid URL', () => {
    const http = 'http://'
    const https = 'https://'
    const base = 'google.com'
    const httpStr = `${http}${base}`
    const httpsStr = `${https}${base}`
    const fullDomain = `${http}www.${base}`
    const fullHttpsDomain = `${https}www.${base}`
    const ipAdr = `${http}192.168.1.1`
    const badIpAdr = `${http}192.168`
    const withPort = `${ipAdr}:3000`
    const withQuery = `${fullHttpsDomain}/?q=search`
    const filePath = 'file:///fake-path'
    const misformatted = 'http/www'
    expect(isValidUrl(httpStr)).toBeTruthy()
    expect(isValidUrl(httpsStr)).toBeTruthy()
    expect(isValidUrl(fullDomain)).toBeTruthy()
    expect(isValidUrl(fullHttpsDomain)).toBeTruthy()
    expect(isValidUrl(ipAdr)).toBeTruthy()
    expect(isValidUrl(badIpAdr)).toBeFalsy()
    expect(isValidUrl(withPort)).toBeTruthy()
    expect(isValidUrl(withQuery)).toBeTruthy()
    expect(isValidUrl(filePath)).toBeTruthy()
    expect(isValidUrl(misformatted)).toBeFalsy()
  })
})
