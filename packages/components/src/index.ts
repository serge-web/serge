// require all modules on the path and with the pattern defined
const req = require.context('./local', true, /index.tsx$/)

const modules = req.keys().map(req)

// export all modules
module.exports = modules
