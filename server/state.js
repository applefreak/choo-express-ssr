const layout = require('./layout')

module.exports = function(req) {
  return {
    url: req.url,
    title: 'Hello World',
    layout
  }
}
