const routes = require('../../app/routes')
const state = require('../state')

function stripEvents(str) {
  // For CSP we need to remove all the event handler placeholders.
  // It's ok, app.js will add them when it attaches to the DOM.
  return str.replace(/\son\w+=""/g, '');
}

module.exports = {
  home(req, res) {
    res.send(stripEvents(routes.toString('/', state(req))))
  },
  about(req, res) {
    res.send(stripEvents(routes.toString('/about', state(req))))
  },
  notFound(req, res) {
    res.status(404).send('Not Found')
  }
}
