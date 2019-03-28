const dev = process.env.Node_ENV !== 'production'
const server = dev ? 'http://localhost:3000' : 'HerokuLink'
module.exports = server