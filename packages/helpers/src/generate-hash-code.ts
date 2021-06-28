const generateHashCode = (str: string): string => {
  let hash = 0
  if (str.length === 0) return '0'
  for (let i = 0; i < str.length; i++) {
    const chr = str.charCodeAt(i)
    hash = ((hash << 5) - hash) + chr
    hash |= 0 // Convert to 32bit integer
  }
  const res = `${hash}`
  return res.substr(res.length - 3)
}

export default generateHashCode
