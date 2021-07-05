const isNumber = (n: any): boolean => { return /^-?[\d.]+(?:e-?\d+)?$/.test(n) }

export default isNumber
