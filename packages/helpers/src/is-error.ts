const isError = (e: any): any => e && e.stack && e.message

export default isError
