const pages = require('./pages')

module.exports = function registerRoutes(app) {
  app.get('/', pages.home)
  app.get('/about', pages.about)
}
