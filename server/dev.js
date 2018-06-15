const routes = require('./routes')
const pages = require('./routes/pages')
const assets = require('../common/assets')

module.exports = function webpackDevServerBefore(app, devServer) {
  routes(app)

  assets.setMiddleware(devServer.middleware)

  process.nextTick(() => app.use(pages.notFound))
}
