const dev = process.env.Node_ENV !== 'production'
const server = dev ? 'http://localhost:3000' : 'https://git.heroku.com/test-aw.git'
module.exports = server